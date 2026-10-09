import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Comment, Course, Lesson } from "../types/Course";
import { courses } from "../data/Courses";
interface CourseState {
  courses: Course[];
  currentCourse: Course | null;
  currentCourseId: string | null;
  commentNumber: number;
  filteredCourses: Course[] | null;
  selectCourse: (courseId: string) => void;
  selectLesson: (lesson: Lesson) => void;
  addComment: (newComment: Comment) => void;
  endLesson: (lessonId: string) => void;
  endQuiz: (timeLeft: number) => void;
  selectAnswer: (mcqId: string, userAnswer: string) => void;
  addFilter: (filter: string) => void;
  removeFilter: () => void;
}

export const useCourseStore = create<CourseState>()(
  persist(
    (set, get) => ({
      courses: courses,
      currentCourse: null,
      currentCourseId: null,
      commentNumber: 4,
      filteredCourses: null,
      selectCourse: (courseId: string) => {
        const course = get().courses.find((c) => c.id === courseId);
        set({ currentCourse: course, currentCourseId: courseId });
      },
      selectLesson: (lesson) => {
        set((state) => {
          const updatedCourses = state.courses.map((course) =>
            course.id === state.currentCourseId
              ? { ...course, lastVisitedLesson: lesson }
              : course,
          );
          return {
            courses: updatedCourses,
            currentCourse: updatedCourses.find(
              (c) => c.id === state.currentCourseId,
            ),
          };
        });
      },
      addComment: (newComment) => {
        set((state) => {
          const updatedCourses = state.courses.map((course) =>
            course.id === state.currentCourseId
              ? { ...course, comments: [...course.comments, newComment] }
              : course,
          );
          return {
            courses: updatedCourses,
            currentCourse: updatedCourses.find(
              (c) => c.id === state.currentCourseId,
            ),
            commentNumber: state.commentNumber + 1,
          };
        });
      },
      endLesson: (lessonId) => {
        set((state) => {
          const updatedCourses = state.courses.map((course) => {
            if (
              course.id !== state.currentCourseId ||
              course.completedLessonsIds.includes(lessonId)
            )
              return course;
            const newCompletedIds = [...course.completedLessonsIds, lessonId];
            const indexOfLesson = course.lessons.findIndex(
              (lesson) => lesson.id === lessonId,
            );
            const lastIndexOfLessons = course.lessons.length-1

            return {
              ...course,
              completedLessonsIds: newCompletedIds,
              lastVisitedLesson:
                course.lessons[indexOfLesson]?.id !==
                course.lessons[lastIndexOfLessons].id
                  ? course.lessons[indexOfLesson + 1]
                  : course.lastVisitedLesson,
              lessons: course.lessons.map((lesson) =>
                lesson.id === lessonId
                  ? { ...lesson, status: "completed" as const }
                  : lesson,
              ),
              status:
                newCompletedIds.length === course.lessons.length
                  ? ("completed" as const)
                  : ("in_progress" as const),
            };
          });
          return {
            courses: updatedCourses,
            currentCourse: updatedCourses.find(
              (c) => c.id === state.currentCourseId,
            ),
          };
        });
      },
      endQuiz: (timeLeft) => {
        set((state) => {
          const updatedCourses = state.courses.map((course) =>
            course.id === state.currentCourseId
              ? {
                  ...course,
                  quiz: { ...course.quiz, timer: timeLeft },
                }
              : course,
          );
          return {
            courses: updatedCourses,
            currentCourse: updatedCourses.find(
              (c) => c?.id === state.currentCourseId,
            ),
          };
        });
      },
      selectAnswer: (mcqId, userAnswer) => {
        set((state) => {
          const updatedCourses = state.courses.map((course) =>
            course.id === state.currentCourseId
              ? {
                  ...course,
                  quiz: {
                    ...course.quiz,
                    MCQS: course.quiz.MCQS.map((mcq) =>
                      mcq.id === mcqId ? { ...mcq, selected: true } : mcq,
                    ),

                    userAnswers: [...course.quiz.userAnswers, userAnswer],
                  },
                }
              : course,
          );
          return {
            courses: updatedCourses,
            currentCourse: updatedCourses.find(
              (c) => c?.id === state.currentCourseId,
            ),
          };
        });
      },
      addFilter: (filter: string) => {
        const filteredCourses = get().courses.filter(
          (course) => course.status === filter,
        );
        set({ filteredCourses });
      },
      removeFilter: () => {
        console.log("removeFilter");
        set({ filteredCourses: null });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

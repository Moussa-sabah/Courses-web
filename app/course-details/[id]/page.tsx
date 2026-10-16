'use client'
import Comments from "@/app/components/courseDetails/comments/Comments"
import CourseMaterials from "@/app/components/courseDetails/CourseMaterials"
import CurrentVideo from "@/app/components/courseDetails/CurrentVideo"
import Progress from "@/app/components/courseDetails/Progress"
import PageBreadcrumb from "@/app/components/courseDetails/PageBreadcrumb"
import { useCourseStore } from "@/store/useCourseStore"
import { useEffect, useRef } from "react"
import LessonsList from "@/app/components/courseDetails/lessonsList/LessonList"



interface Props {
    params: Promise<{ id: string }>;
}


export default function CourseDetails({ params }: Props) {

    const selectCourse = useCourseStore(state => state.selectCourse)
    const currentCourse = useCourseStore(state => state.currentCourse)

    useEffect(() => {
        async function handleSelectCourse() {
            const { id } = await params
            selectCourse(id)
        }
        handleSelectCourse()
    }, [params, selectCourse])

    const desktopCommentsRef = useRef<HTMLDivElement>(null);
    const mobileCommentsRef = useRef<HTMLDivElement>(null);


    const scrollToComments = () => {
        const isDesktop = window.innerWidth >= 1024;
        const targetRef = isDesktop ? desktopCommentsRef : mobileCommentsRef;

        targetRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const lessonsRef = useRef<HTMLDivElement>(null);



    const scrollToLessons = () => {

        const targetRef = lessonsRef;

        targetRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };


    return (
        <div className="px-5 md:px-10 lg:px-20 pt-4 pb-7 md:pb-10 lg:pb-15 flex flex-col gap-5 2xs:gap-8 ">
            <PageBreadcrumb />
            <p className="text-xl 2xs:text-2xl sm:text-3xl font-bold lg:w-5/10  "> {currentCourse?.lessons.findIndex(lesson => lesson.id === currentCourse?.lastVisitedLesson.id) as number + 1}- {currentCourse?.lastVisitedLesson.title}</p>
            {currentCourse && <div className="flex flex-col gap-14 lg:flex-row lg:gap-10 _2lgCourseDetails xl:gap-25">
                <div className="flex flex-col gap-8 lg:gap-15  flex-7">

                    <CurrentVideo scrollToLessons={scrollToLessons} scrollToComments={scrollToComments} />
                    <CourseMaterials />
                    <div ref={desktopCommentsRef} className="hidden lg:block">
                        <Comments />
                    </div>
                </div>
                <div className="flex flex-col gap-17  flex-5">
                    <h1 className="text-2xl font-semibold ">Topics for This Course</h1>
                    <Progress />
                    <LessonsList lessonsRef={lessonsRef} />
                    <div ref={mobileCommentsRef} className="lg:hidden">
                        <Comments />
                    </div>
                </div>

            </div>}
        </div>
    )
}

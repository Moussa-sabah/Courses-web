'use client'
import { useCourseStore } from "@/store/useCourseStore";
import { Course } from "@/types/Course";
import Image from "next/image";
import Link from "next/link";

interface Props {
    course: Course
}
export default function CourseElement({ course }: Props) {
    const selectCourse = useCourseStore(state => state.selectCourse)

    const alllessons = course?.lessons.length as number
    const completedlessons = course?.completedLessonsIds.length as number
    const isAlllessonsCompleted = course?.lessons.length === course?.completedLessonsIds.length
    const progress = isAlllessonsCompleted ? 100 : Math.ceil(completedlessons * (100 / alllessons))

    return (
        <Link onClick={() => selectCourse(course.id)} href={`./course-details/${course.id}`} className="border border-line rounded-md   flex flex-col gap-1 hover:border-primary transition-all">
            <Image src={course.thumbnailImage} alt="course" width={200} height={200} className="w-full  object-cover rounded-t-md h-50" />
            <div className="p-3 lg:p-4 flex flex-col gap-4  justify-between flex-1">
                <div className="flex flex-col gap-1">
                    <p className="text-[11px] font-semibold">{course.instructor}</p>
                    <p className="font-bold lg:text-lg">{course.title}</p>
                    <p className="text-xs  text-secondary font-semibold line-clamp-2">{course.description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs  font-semibold">
                        <p>Progress:</p>
                        <div
                            style={{ background: `conic-gradient(var(--color-green-500) ${progress}% , var(--color-gray-300) ${progress}%)` }}
                            className={`h-5 w-5 rounded-full  flex items-center justify-center p-1`}>
                            <div className="h-full w-full bg-white rounded-full"></div>
                        </div>
                        <p>{progress}%</p>
                    </div>
                    <button className="text-sm border-2 border-line font-semibold px-3 py-0.5 rounded-md capitalize hover:opacity-60 cursor-pointer transition-all">{course.status === 'completed' ? 'view' : course.status === 'not_started' ? 'start' : 'continue'}</button>
                </div>
            </div>
        </Link>
    )
}

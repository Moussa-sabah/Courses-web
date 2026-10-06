import CourseDetailsMain from "@/app/components/courseDetails/courseDetailsMain/CourseDetailsMain"
import CourseDetailsSecondary from "@/app/components/courseDetails/courseDetailsSecondary/CourseDetailsSecondary"
import PageBreadcrumb from "@/app/components/courseDetails/PageBreadcrumb"
import { courses } from "@/data/courses"
import { notFound } from "next/navigation"

interface Props {
    params: Promise<{ id: string }>
}

export default async function CourseDetails({ params }: Props) {
    const { id } = await params
    const course = courses.find((c) => c.id === id)
    if (!course) notFound()
    return (
        <div className="px-15 pt-4 pb-20 flex flex-col gap-8 ">
            <PageBreadcrumb />
            <p className="text-3xl font-bold w-6/10">{course?.lectures[0].title}</p>
            <div className="w-full flex gap-25">
                <CourseDetailsMain course={course} />
                <CourseDetailsSecondary />
            </div>
        </div>
    )
}

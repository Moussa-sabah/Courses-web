'use client'
import CourseDetailsMain from "@/app/components/courseDetails/courseDetailsMain/CourseDetailsMain"
import CourseDetailsSecondary from "@/app/components/courseDetails/courseDetailsSecondary/CourseDetailsSecondary"
import PageBreadcrumb from "@/app/components/courseDetails/PageBreadcrumb"
import { useCourseStore } from "@/store/useCourseStore"
import { useEffect } from "react"


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

    return (
        <div className="px-15 pt-4 pb-20 flex flex-col gap-8 ">
            <PageBreadcrumb />
            <p className="text-3xl font-bold w-6/10">{currentCourse?.lastVisitedLesson.title}</p>
            {currentCourse && <div className="w-full flex gap-25">
                <CourseDetailsMain />
                <CourseDetailsSecondary />
            </div>}
        </div>
    )
}

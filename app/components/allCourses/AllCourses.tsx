'use client'

import CourseFilter from "./CourseFilter";
import CourseList from "./courseList/CourseList";
import { useCourseStore } from "@/store/useCourseStore";


export default function AllCourses() {

    const addFilter = useCourseStore(state => state.addFilter)
    function handleAddFilter(filter: string) {
        addFilter(filter)
    }


    return (
        <div className=' px-5 md:px-7 lg:px-12 xl:px-20 pt-8 pb-15   flex-col flex gap-5 2xs:gap- md:gap-7 '>
            <p className="3xs:text-lg md:text-2xl font-semibold">All Materials</p>
            <CourseFilter handleAddFilter={handleAddFilter} />
            <CourseList />
        </div>
    )
}

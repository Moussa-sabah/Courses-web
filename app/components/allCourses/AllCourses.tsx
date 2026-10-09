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
        <div className='min-h-10/12 px-10 lg:px-20 py-10  flex-col flex gap-8 lg:gap-7'>
            <p className="text-2xl font-semibold">All Materials</p>
            <CourseFilter handleAddFilter={handleAddFilter}/>
            <CourseList />
        </div>
    )
}

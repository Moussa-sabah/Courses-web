'use client'
import { useCourseStore } from "@/store/useCourseStore";
import CourseElement from "./CourseElement";


export default function CourseList() {

  const courses = useCourseStore(state => state.courses)
  const filteredCourses = useCourseStore(state => state.filteredCourses)
  return (

    <div className="grid grid-cols-1  sm:grid-cols-2 gap-7 sm:gap-x-5 md:gap-x-7 lg:gap-x-9 lg:gap-y-12 md:gap-y-10  lg:grid-cols-3   ">
      {filteredCourses ? filteredCourses.map((course) => <CourseElement key={course?.id} course={course} />) : courses.map((course) => <CourseElement key={course?.id} course={course} />)}

    </div>


  )
}

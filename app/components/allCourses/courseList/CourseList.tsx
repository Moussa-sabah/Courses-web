'use client'
import { useCourseStore } from "@/store/useCourseStore";
import CourseElement from "./CourseElement";


export default function CourseList() {

  const courses = useCourseStore(state => state.courses)
  const filteredCourses = useCourseStore(state => state.filteredCourses)
  return (

    <div className="grid grid-cols-4 gap-7">
      {filteredCourses ? filteredCourses.map((course) => <CourseElement key={course?.id} course={course} />) : courses.map((course) => <CourseElement key={course?.id} course={course} />)}

    </div>


  )
}

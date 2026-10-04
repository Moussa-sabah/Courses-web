import CourseElement from "./CourseElement";
import { courses } from '../../../src/data/courses'

export default function CourseList() {
  return (

    <div className="grid grid-cols-4 gap-7">
      {courses.map((course) => <CourseElement key={course.id} course={course}/>)}
    </div>


  )
}

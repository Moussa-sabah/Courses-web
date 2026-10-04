import CourseFilter from "./CourseFilter";
import CourseList from "./courseList/CourseList";


export default function AllCourses() {
    return (
        <div className='min-h-10/12 px-20 py-10  flex-col flex gap-5'>
            <p className="text-2xl font-semibold">All Materials</p>
            <CourseFilter />
            <CourseList />
        </div>
    )
}



import CurrentVideo from './CurrentVideo'
import CourseActions from './courseActions/CourseActions'
import CourseMaterials from './CourseMaterials'
import Comments from './comments/Comments'



export default function CourseDetailsMain() {
    return (
        <div className="w-6/10">
            <CurrentVideo  />
            <CourseActions />
            <CourseMaterials />
            <Comments />
        </div>
    )
}

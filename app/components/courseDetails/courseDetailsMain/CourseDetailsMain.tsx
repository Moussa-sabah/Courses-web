

import CurrentVideo from './CurrentVideo'
import CourseActions from './courseActions/CourseActions'
import CourseMaterials from './CourseMaterials'
import Comments from './comments/Comments'
import { useRef } from 'react';



export default function CourseDetailsMain() {

    const commentsSectionRef = useRef<HTMLDivElement>(null);

    const scrollToComments = () => {
        commentsSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="w-6/10">
            <CurrentVideo />
            <CourseActions scrollToComments={scrollToComments}/>
            <CourseMaterials />
            <Comments commentsSectionRef={commentsSectionRef}/>
        </div>
    )
}

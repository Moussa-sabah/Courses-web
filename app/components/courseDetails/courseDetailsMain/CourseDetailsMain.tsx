
import { Course } from '@/types/course'
import React from 'react'
import CurrentVideo from './CurrentVideo'
import CourseActions from './courseActions/CourseActions'
import CourseMaterials from './CourseMaterials'
import Comments from './comments/Comments'


interface Props {
    course: Course
}

export default function CourseDetailsMain({ course }: Props) {
    return (
        <div className="w-6/10">
            <CurrentVideo course={course} />
            <CourseActions />
            <CourseMaterials />
            <Comments />
        </div>
    )
}

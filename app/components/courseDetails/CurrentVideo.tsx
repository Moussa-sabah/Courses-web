'use client'

import { useCourseStore } from "@/store/useCourseStore"
import YouTube from "react-youtube"
import CourseActions from "./courseActions/CourseActions"


interface Props {
    scrollToLessons: () => void
    scrollToComments: () => void
}


export default function CurrentVideo({ scrollToLessons, scrollToComments }: Props) {

    const currentCourse = useCourseStore(state => state.currentCourse)
    const endLesson = useCourseStore(state => state.endLesson)
    function handleEndlesson(lessonId: string) {
        endLesson(lessonId)
        console.log(currentCourse?.completedLessonsIds)
    }

    return (
        <div className="flex flex-col gap-5 ">
            <div className="w-full relative aspect-video  ">
                <YouTube onEnd={() => handleEndlesson(currentCourse?.lastVisitedLesson.id as string)} videoId={currentCourse?.lastVisitedLesson?.videoId} iframeClassName="absolute w-full h-full rounded-md top-0 left-0" />
            </div>
            <CourseActions scrollToComments={scrollToComments} scrollToLessons={scrollToLessons} />
        </div>

    )
}

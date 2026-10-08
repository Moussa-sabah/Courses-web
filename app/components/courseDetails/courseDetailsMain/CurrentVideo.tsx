'use client'

import { useCourseStore } from "@/store/useCourseStore"
import YouTube from "react-youtube"



export default function CurrentVideo() {

    const currentCourse = useCourseStore(state => state.currentCourse)
    const endLesson = useCourseStore(state => state.endLesson)
    function handleEndlesson(lessonId: string) {
        endLesson(lessonId)
        console.log(currentCourse?.completedLessonsIds)
    }

    return (
        <div className="w-full relative aspect-video mb-8 ">
            <YouTube onEnd={() => handleEndlesson(currentCourse?.lastVisitedLesson.id as string)} videoId={currentCourse?.lastVisitedLesson?.videoId} iframeClassName="absolute w-full h-full rounded-md top-0 left-0" />
        </div>
    )
}

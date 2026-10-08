'use client'

import { useCourseStore } from "@/store/useCourseStore"
import YouTube from "react-youtube"



export default function CurrentVideo() {

    const currentCourse = useCourseStore(state => state.currentCourse)
    const endLecture = useCourseStore(state => state.endLecture)
    function handleEndLecture( lectureId: string) {
        endLecture( lectureId)
        console.log(currentCourse?.completedLecturesIds)
    }

    return (
        <div className="w-full relative aspect-video mb-8 ">
            <YouTube onEnd={() => handleEndLecture( currentCourse?.lastLecture.id as string)} videoId={currentCourse?.lastLecture?.videoId} iframeClassName="absolute w-full h-full rounded-md top-0 left-0" />
        </div>
    )
}

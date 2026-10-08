
import { useCourseStore } from "@/store/useCourseStore";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Progress() {

    const currentCourse = useCourseStore(state => state.currentCourse)
    const allLectures = currentCourse?.lectures.length as number
    const completedLectures = currentCourse?.completedLecturesIds.length as number
    const isAllLecturesCompleted = currentCourse?.lectures.length === currentCourse?.completedLecturesIds.length
    const progress = isAllLecturesCompleted ? 100 : Math.ceil(completedLectures * (100 / allLectures))

    return (

        <div
            style={{ background: `linear-gradient(to right,#6ABD8A ${progress}%, #E6E6E6 ${progress}%)` }}
            className={`relative w-full  h-1  rounded-full`}>
            <div
                style={{ left: `calc(${progress}% - 16px)` }}
                className="absolute bottom-3 flex flex-col items-center gap-px bg  ">
                <p className="border-2 border-[#C8C8C8]  rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold text-[#485293] ">You</p>
                <BiSolidDownArrow className="text-[8px] text-[#C8C8C8]" />
            </div>
            <p
                style={{ left: `calc(${progress}% - 20px)` }}
                className={`absolute text-xs top-3 font-semibold text-[#485293]   w-10 text-center`}>{progress}%</p>
        </div>

    )
}

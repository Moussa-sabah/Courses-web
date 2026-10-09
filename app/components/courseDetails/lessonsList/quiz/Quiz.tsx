'use client'
import { LuAlarmClock } from "react-icons/lu";

import Question from './Question';
import { useEffect, useState } from "react";

import { useCourseStore } from "@/store/useCourseStore";
import { IoChevronBackOutline } from "react-icons/io5";


interface Props {

    showQuiz: boolean
    timer: number
    handleEndQuiz: () => void
}


export default function Quiz({ showQuiz, timer, handleEndQuiz }: Props) {

    const currentCourse = useCourseStore(state => state.currentCourse)
    const [questionNumber, setQuestionNumber] = useState<number>(1)


    useEffect(() => {
        if (showQuiz) {

            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    })


    const translateValue =
        questionNumber === 1
            ? 'translate-x-[calc(200%+24px)]'
            : questionNumber === 2
                ? 'translate-x-[calc(100%+12px)]'
                : questionNumber === 3
                    ? '' : questionNumber === 4
                        ? 'translate-x-[calc(-100%-12px)]' : questionNumber === 5
                            ? 'translate-x-[calc(-200%-24px)]' : ''


    const formatTime = (seconds: number) => {
        const minutesPart = Math.floor(seconds / 60);
        const secondsPart = seconds % 60;
        return `${String(minutesPart).padStart(2, '0')}:${String(secondsPart).padStart(2, '0')}`;
    };




    return (
        <div className={`${showQuiz ? 'scale-100 opacity-100 z-20' : 'opacity-0 scale-50 -z-10'}   transition-all duration-250 fixed flex flex-col items-center md:justify-center gap-8  bg-[linear-gradient(to_bottom,#3E53B3,#5A78FD)] w-full left-0 top-0 md:w-7/10 lg:w-3/10   md:left-[15%] h-full md:h-6/10 lg:h-8/10 py-7  md:top-[20%] lg:top-[10%] lg:left-[35%]  md:rounded-md `}>

            <div className="flex  justify-center relative w-full">
                <button onClick={handleEndQuiz} className=" absolute left-4 md:hidden ">
                    <IoChevronBackOutline className="text-white text-3xl " />
                </button>
                <div className='text-white bg-[#fbd500] shadow-[0px_0px_10px_0px_#fbd500] flex items-center gap-2 py-2 md:py-3 px-8  lg:py-1.25 lg:px-6  rounded-md'>
                    <LuAlarmClock className='text-2xl md:text-4xl lg:text-2xl' />
                    <p className="text-xl md:text-3xl lg:text-xl font-semibold">{formatTime(timer)}</p>

                </div>
            </div>

            <div className='flex items-center gap-3'>
                {currentCourse?.quiz?.MCQS.map((q, index) => {
                    return (
                        <button onClick={() => setQuestionNumber(index + 1)} disabled={questionNumber === index + 1} key={index} className={`${questionNumber === index + 1 ? 'bg-white text-[#3E53B3]' : 'text-white'} font-semibold w-14 h-14 md:w-17 md:h-17 lg:h-11 lg:w-11 rounded-full border hover:border-3 cursor-pointer border-white flex items-center justify-center text-lg md:text-3xl lg:text-xl  `}>
                            {index + 1}
                        </button>
                    )
                })}

            </div>
            <div className={`flex overflow-hidden max-w-full flex-1   gap-3 justify-center`}>
                {currentCourse?.quiz.MCQS?.map((m, index) => {
                    return (
                        <Question key={index} translateValue={translateValue} mcq={m} mcqIndex={index} />
                    )
                })}
            </div>
        </div>
    )
}

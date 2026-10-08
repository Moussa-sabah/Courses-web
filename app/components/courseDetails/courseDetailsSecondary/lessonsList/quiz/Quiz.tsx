'use client'
import { LuAlarmClock } from "react-icons/lu";

import Question from './Question';
import {useState } from "react";

import { useCourseStore } from "@/store/useCourseStore";



interface Props {

    showQuiz: boolean
    timer: number
}


export default function Quiz({ showQuiz, timer }: Props) {

    const currentCourse = useCourseStore(state => state.currentCourse)
    const [questionNumber, setQuestionNumber] = useState<number>(1)

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
        <div className={`${showQuiz ? 'scale-100 opacity-100 z-20' : 'opacity-0 scale-50 -z-10'}  transition-all duration-250 fixed flex flex-col items-center gap-8  bg-[linear-gradient(to_bottom,#3E53B3,#5A78FD)] w-3/10 h-8/10 py-7 rounded-md top-[10%] left-[35%] `}>
            <div className='text-white bg-[#fbd500] shadow-[0px_0px_10px_0px_#fbd500] flex items-center gap-2 py-1.25 px-6 text-xl rounded-md'>
                <LuAlarmClock className='text-2xl' />
                <p className="">{formatTime(timer)}</p>

            </div>

            <div className='flex items-center gap-3'>
                {currentCourse?.quiz?.MCQS.map((q, index) => {
                    return (
                        <button onClick={() => setQuestionNumber(index + 1)} disabled={questionNumber === index + 1} key={index} className={`${questionNumber === index + 1 ? 'bg-white text-[#3E53B3]' : 'text-white'} font-semibold h-11 w-11 rounded-full border hover:border-3 cursor-pointer border-white flex items-center justify-center text-xl  `}>
                            {index + 1}
                        </button>
                    )
                })}

            </div>
            <div className={`flex overflow-hidden max-w-full flex-1 gap-3 justify-center`}>
                {currentCourse?.quiz.MCQS?.map((m, index) => {
                    return (
                        <Question key={index} translateValue={translateValue} mcq={m} mcqIndex={index} />
                    )
                })}
            </div>
        </div>
    )
}

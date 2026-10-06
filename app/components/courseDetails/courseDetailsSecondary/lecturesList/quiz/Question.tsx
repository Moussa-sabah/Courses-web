
'use client'

import { Quiz } from '@/types/course'
import { useState } from 'react'

interface Props {
    translateValue: string,
    quiz: Quiz

}




export default function Question({ translateValue, quiz }: Props) {

    const [selected, setSelected] = useState<boolean>(false)
    const [answerStatus, setAnswerStatus] = useState<boolean | null>(null)
    const [answerIndex, setAnswerIndex] = useState<number | null>(null)




    function checkAnswers(answer: number, correctAnswer: number) {
        setSelected(true)
        setAnswerIndex(answer)
        if (answer === correctAnswer) {
            setAnswerStatus(true)
        }
        else {
            setAnswerStatus(false)
        }

    }

    return (
        <div className={`bg-white   max-w-9/10 min-w-9/10 transition-all duration-400 ${translateValue}    rounded-md p-5 font-semibold flex flex-col gap-5`}>
            <p className=''>{quiz.question}</p>
            {quiz.options.map((option, index) => {
                return (
                    <button onClick={() => (checkAnswers(index, quiz.correctAnswerIndex))} disabled={selected} key={option} className={`${answerIndex === index ? answerStatus ? 'bg-[#3E53B3] text-white' : 'bg-[#a9a9a9] text-white' : ''} ${answerStatus === false && index === quiz.correctAnswerIndex ? 'bg-[#3E53B3] text-white' : ''} shadow-[0px_3px_10px_3px_#DCDCDE] px-3 h-1/4 rounded-md flex items-center  gap-4`}>
                        <div className={`border w-3.5 h-3.5 ${answerIndex === index ? "border-white" : "border-[#3E53B3]"} ${answerStatus === false && index === quiz.correctAnswerIndex ? 'border-white' : ''}  rounded-xs flex items-center justify-center`}>
                            {answerIndex === index  && <p className='w-1.25 h-1.25 bg-white rounded-full'></p>}
                        </div>
                        <p className={`${answerIndex === index ? "bg-white" : "bg-line"} ${answerStatus === false && index === quiz.correctAnswerIndex ? 'bg-white' : ''}  w-px  h-full`}></p>
                        {option}
                    </button>
                )
            })}

        </div>
    )
}

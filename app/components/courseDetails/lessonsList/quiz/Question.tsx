
'use client'

import { useCourseStore } from '@/store/useCourseStore'
import { MCQ } from '@/types/Course'


interface Props {
    translateValue: string,
    mcq: MCQ,
    mcqIndex: number

}




export default function Question({ translateValue, mcq, mcqIndex }: Props) {


    const currentCourse = useCourseStore(state => state.currentCourse)
    const selectAnswer = useCourseStore(state => state.selectAnswer)


    function checkAnswers(userAnswer: string, mcqId: string) {
        selectAnswer(mcqId, userAnswer)
        console.log(currentCourse?.quiz.userAnswers)
    }

    return (
        <div className={`bg-white   max-w-9/10 min-w-9/10 transition-all duration-400 ${translateValue}    rounded-3xl  px-6 py-12 2xs:py-8 md:p-8 font-semibold flex flex-col gap-6 `}>
            <p className='text-xl 2xs:text-[17px]'>{mcq?.question}</p>
            {mcq?.options.map((option, index) => {
                return (
                    <button onClick={() => (checkAnswers(option, mcq.id))} disabled={mcq.selected} key={index} className={`${currentCourse?.quiz.userAnswers[mcqIndex] === option && index === mcq.correctAnswerIndex ? 'bg-[#4f66cc] text-white' : currentCourse?.quiz.userAnswers[mcqIndex] === option ? 'border-2 border-[#4f66cc] text-[#4f66cc]' : ''} ${mcq.selected && index === mcq.correctAnswerIndex ? 'bg-[#4f66cc] text-white' : ''} shadow-[0px_3px_10px_3px_#DCDCDE] px-3 h-15   rounded-md flex items-center  gap-4 cursor-pointer`}>
                        <div className={`${currentCourse?.quiz.userAnswers[mcqIndex] === option && index === mcq.correctAnswerIndex ? 'border-white' : 'border-[#4f66cc]'} ${mcq.selected && index === mcq.correctAnswerIndex ? 'border-white' : ''} border-2 w-3.5 h-3.5   rounded-xs flex items-center justify-center`}>
                            {currentCourse?.quiz.userAnswers[mcqIndex] === option && <p className={`${index === mcq.correctAnswerIndex ? 'bg-white ' : currentCourse?.quiz.userAnswers[mcqIndex] === option ? 'bg-[#4f66cc]' : ''} ${mcq.selected && index === mcq.correctAnswerIndex ? 'bg-[#4f66cc] text-white' : ''} w-1 h-1 rounded-full`}></p>}
                        </div>
                        <p className={`${currentCourse?.quiz.userAnswers[mcqIndex] === option && index === mcq.correctAnswerIndex ? 'bg-white' : 'bg-[#c9c9ca]'} ${mcq.selected && index === mcq.correctAnswerIndex ? 'bg-white' : ''}  w-px  h-full`}></p>
                        {option}
                    </button>
                )
            })}

        </div>
    )
}

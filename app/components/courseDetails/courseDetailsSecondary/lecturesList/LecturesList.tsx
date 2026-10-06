'use client'
import LectureElement from './LectureElement'
import { MdOutlineQuiz } from "react-icons/md";
import Quiz from './quiz/Quiz';
import { useState } from 'react';

export default function LecturesList() {

  const [showQuiz, setShowQuiz] = useState<boolean>(false)

  return (
    <div className='border border-line px-6 rounded-md py-8'>
      <div className='border-b border-line pb-8 flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-semibold'>Playlist</p>
          <button onClick={() => setShowQuiz(true)} className='bg-[#eceaea] text-sm  w-fit px-4 py-1 rounded-md flex items-center gap-2 font-semibold'>
            <MdOutlineQuiz className='' />
            <p>Start Quiz</p>
          </button>
        </div>
        <p className='text-sm text-secondary font-semibold '>In this Next 13 tutorial series, you will learn how to use Next.js to make a simple project, using the new app router & server components.</p>
      </div>
      <div onClick={() => setShowQuiz(false)} className={`${!showQuiz ? 'hidden' : ''} fixed z-10 bg-black/50 backdrop-blur-sm left-0 top-0 w-full h-full }`} />
      {showQuiz && <Quiz endQuiz={() => setShowQuiz(false)} />}
      <LectureElement />
      <LectureElement />
      <LectureElement />
      <LectureElement />
      <LectureElement />
    </div>
  )
}

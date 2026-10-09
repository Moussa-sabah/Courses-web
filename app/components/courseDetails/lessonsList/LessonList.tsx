'use client'

import { MdOutlineQuiz } from "react-icons/md";
import Quiz from './quiz/Quiz';
import { useEffect, useState } from 'react';
import { useCourseStore } from '@/store/useCourseStore';

import { Lesson } from "@/types/Course";
import { PiVideoLight } from "react-icons/pi";
import { PiCheckLight } from "react-icons/pi";
import PopupBg from "../PopupBg";


interface Props{
  lessonsRef: React.Ref<HTMLDivElement>
}

export default function LessonsList({lessonsRef}:Props) {

  const [showQuiz, setShowQuiz] = useState<boolean>(false)
  const selectLesson = useCourseStore(state => state.selectLesson)
  const currentCourse = useCourseStore(state => state.currentCourse)

  const endQuiz = useCourseStore(state => state.endQuiz)
  function handleSelectLesson(lessonId: string) {
    const lesson: Lesson | undefined = currentCourse?.lessons.find(l => l.id === lessonId)
    selectLesson(lesson as Lesson)
  }



  const [timeLeft, setTimeLeft] = useState(currentCourse?.quiz.timer);


  useEffect(() => {


    if (showQuiz) {
      if (timeLeft === 0) {
        return
      }
      const timerId = setTimeout(() => {
        setTimeLeft((prev) => prev as number - 1);
      }, 1000);


      return () => clearTimeout(timerId);
    }


  }, [timeLeft, showQuiz, currentCourse, endQuiz]);


  function handleEndQuiz() {
    endQuiz(timeLeft as number)
    setShowQuiz(false)
    console.log(currentCourse)
  }

  return (
    <div ref={lessonsRef} className='border border-line px-6 rounded-md  py-8 '>
      <div className='border-b border-line pb-8 flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-semibold'>Playlist</p>
          <button onClick={() => setShowQuiz(true)} className='bg-primary text-white text-sm  w-fit px-4 py-1.25 rounded-md flex items-center gap-2 font-semibold'>
            <MdOutlineQuiz />
            <p> Quiz</p>
          </button>
        </div>
        <p className='text-sm text-secondary font-semibold '>In this Next 13 tutorial series, you will learn how to use Next.js to make a simple project, using the new app router & server components.</p>
      </div>
      <PopupBg show={showQuiz} handleEnd={handleEndQuiz} />
      <Quiz showQuiz={showQuiz} timer={timeLeft as number} />
      {currentCourse?.lessons.map((lesson, index) => {
        return (
          <div onClick={() => handleSelectLesson(lesson.id)} key={index} className='py-5 border-b border-line flex items-center gap-4 text-sm font-semibold cursor-pointer hover:bg-[#eceaea] hover:px-2 transition-all'>
            {lesson.status === 'completed' ? <PiCheckLight className="text-lg min-w-fit" /> : <PiVideoLight className="text-lg min-w-fit" />}


            <p >{index+1}. {lesson.title}</p>
          </div>
        )
      })}


    </div>
  )
}

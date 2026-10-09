'use client'
import { useCourseStore } from "@/store/useCourseStore";
import { Comment } from "@/types/Course";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";



export default function AddComment() {
  const addComment = useCourseStore((state) => state.addComment)
  const [text, setText] = useState<string>('')
  const commentNumber = useCourseStore(state => state.commentNumber)
  const currentCourse = useCourseStore(state => state.currentCourse)


  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const comment: Comment = {
      id: `c${commentNumber}`,
      text,
      username: 'Moussa Sabah',
      userImage: '/usersImages/user5.jpg',
      createdAt: new Date().toISOString()
    }
    addComment(comment)
    setText('')
    console.log(currentCourse?.comments)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-7 items-start'>
      <textarea value={text} onChange={(e) => setText(e.target.value)} required placeholder='Write a comment' className='shadow-[0px_0px_40px_0px_#DCDCDE] w-full h-50 rounded-md p-5 outline-none min-h-40 max-h-70' />
      <button className='bg-[#41B69D] text-white py-4 px-8 rounded-md font-semibold flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all'>Submit Review <HiArrowNarrowRight className="text-lg" /></button>
    </form>
  )
}

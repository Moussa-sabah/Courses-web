'use client'
import CommentElement from './CommentElement'
import '../../courseDetails.css'
import { useCourseStore } from '@/store/useCourseStore'
import { useEffect } from 'react'

export default function CommentsList() {

  const currentCourse = useCourseStore((state) => state.currentCourse)

  useEffect(() => {

  })
  return (

    <div className='commentsList mb-13 '>
      {currentCourse?.comments.map((comment) => {
        return (
          <CommentElement key={comment.id} comment={comment} />
        )
      })}
    </div>

  )
}

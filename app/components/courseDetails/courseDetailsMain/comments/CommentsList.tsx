

import React from 'react'
import CommentElement from './CommentElement'
import '../../style.css'

export default function CommentsList() {
  return (

    <div className='commentsList mb-7'>
      <CommentElement />
      <CommentElement />
      <CommentElement />
    </div>

  )
}

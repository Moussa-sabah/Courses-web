


import React from 'react'
import LectureElement from './LectureElement'

export default function LecturesList() {
  return (
    <div className='border border-line px-6 rounded-md py-8'>
      <div className='text-xl  border-b border-line pb-8 flex flex-col gap-2'>
        <p className='text-xl font-semibold'>Playlist</p>
        <p className='text-sm text-secondary font-semibold '>In this Next 13 tutorial series, you will learn how to use Next.js to make a simple project, using the new app router & server components.</p>
      </div>
      <LectureElement />
      <LectureElement />
      <LectureElement />
      <LectureElement />
      <LectureElement />
    </div>
  )
}

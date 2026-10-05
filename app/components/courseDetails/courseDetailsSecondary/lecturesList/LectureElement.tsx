

import Image from 'next/image'
import React from 'react'

export default function LectureElement() {
  return (
    <div className='py-5 border-b border-line flex items-center gap-4'>
      <Image src='/icons/video-lecture-svgrepo-com.svg' width={20} height={20} alt=''/>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

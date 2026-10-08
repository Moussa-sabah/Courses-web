


import Image from 'next/image'
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

interface Props {
    showAddQuestion: boolean
}

export default function AddQuestion({ showAddQuestion }: Props) {
    return (
        <div className={`${showAddQuestion ? 'scale-100 opacity-100 z-20' : 'opacity-0 scale-50 -z-10'} transition-all duration-250 fixed flex flex-col items-center justify-center   bg-white w-5/10 h-5/10 p-5 rounded-md top-[30%] left-[25%] `}>
            <div className=' flex gap-7  text-[15px] w-full  '>
                <Image src='/usersImages/user5.jpg' width={100} height={100} alt='' className='rounded-full object-cover h-18 w-18' />
                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex flex-col gap-1 font-semibold'>
                        <p className='text-[#6C6C6C] capitalize'>Moussa Sabah</p>

                    </div>
                    <textarea placeholder='Write your question' className='font-semibold shadow-[0px_0px_40px_10px_#DCDCDE] w-full h-50 rounded-md p-5 outline-none  resize-none'></textarea>
                    <div className='flex justify-end'>
                        <button className='bg-[#41B69D] text-white py-2 px-4 rounded-md font-semibold flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all'>Submit Question <HiArrowNarrowRight className="text-lg" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

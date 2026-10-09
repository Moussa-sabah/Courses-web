


import Image from 'next/image'
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

interface Props {
    showAddQuestion: boolean
}

export default function AddQuestion({ showAddQuestion }: Props) {
    return (
        <div className={`${showAddQuestion ? 'scale-100 opacity-100 z-20' : 'opacity-0 scale-50 -z-10'} transition-all duration-250 fixed flex flex-col items-center justify-center   bg-white w-9/10 md:w-8/10 lg:w-5/10 h-3/10 lg:h-5/10 p-5 rounded-md top-[35%] lg:top-[25%] left-[5%] md:left-[10%] lg:left-[25%]`}>
            <div className=' flex gap-3 md:gap-7  text-[15px] w-full  h-full  '>
                <Image src='/usersImages/user5.jpg' width={100} height={100} alt='' className='rounded-full object-cover w-12 h-12 md:h-18 md:w-18' />
                <div className='flex flex-col justify-between  w-full gap-4 text-sm md:text-[16px]'>
                    <div className='flex flex-col gap-2 md:gap-4 h-full'>
                        <p className='text-[#6C6C6C] capitalize font-semibold '>Moussa Sabah</p>
                        <textarea required placeholder='Write your question' className='font-semibold shadow-[0px_0px_40px_10px_#DCDCDE] w-full flex-1 rounded-md p-3 md:p-5 outline-none  resize-none placeholder:font-normal'></textarea>
                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-[#41B69D] text-white py-2 px-2 md:px-4 rounded-md font-semibold flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-all'>Submit Question <HiArrowNarrowRight className="text-lg" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

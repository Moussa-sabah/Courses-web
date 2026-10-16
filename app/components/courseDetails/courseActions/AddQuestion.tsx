
import Image from 'next/image'
import { useEffect } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

interface Props {
    showAddQuestion: boolean
}


export default function AddQuestion({ showAddQuestion }: Props) {

    useEffect(() => {
        if (showAddQuestion) {

            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [showAddQuestion])

    return (
        <div className={`${showAddQuestion ? 'scale-100 opacity-100 z-20' : 'opacity-0 scale-50 -z-10'}  w-90 h-60 top-1/2 -translate-y-30  left-1/2 -translate-x-45 2xs:w-100 2xs:-translate-x-50 sm:w-120 sm:-translate-x-60 md:w-140 md:-translate-x-70  md:h-70 md:-translate-y-35 lg:w-160 lg:-translate-x-80  lg:h-80 lg:-translate-y-40  transition-all duration-250 fixed flex flex-col items-center justify-center   bg-white    p-5 rounded-md  `}>
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

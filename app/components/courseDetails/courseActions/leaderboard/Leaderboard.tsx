'use client'
import { useCourseStore } from '@/store/useCourseStore'
import AccountsList from './AccountsList'
import { useEffect } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'


interface Props {
    showLeaderboard: boolean
    handleEnd: () => void
}


export default function Leaderboard({ showLeaderboard, handleEnd }: Props) {
    const currentCourse = useCourseStore(state => state.currentCourse)


    useEffect(() => {
        if (showLeaderboard) {

            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [showLeaderboard])

    return (

        <div className={`${showLeaderboard ? 'scale-100 opacity-100 z-20' : 'opacity-0 scale-50 -z-10'} left-0 top-0 h-full w-full  2xs:w-120 2xs:h-150 2xs:left-1/2 2xs:-translate-x-60 2xs:top-1/2 2xs:-translate-y-75   transition-all duration-250 fixed flex flex-col items-center md:justify-center gap-8 md:gap-6  bg-white    px-5    py-7     2xs:rounded-md  `}>
            <button onClick={handleEnd} className=" absolute md:hidden top-7 left-4 ">
                <IoChevronBackOutline className="text-[#080264] text-3xl cursor-pointer 2xs:hidden" />
                <IoMdClose className="text-[#080264] text-2xl cursor-pointer hidden 2xs:block" />
            </button>
            <div className='text-[#080264] flex flex-col gap-3 lg:gap-2 items-center '>
                <h1 className='text-3xl 2xs:text-2xl '>{currentCourse?.title}</h1>
                <h1 className='font-semibold text-xl 2xs:text-lg'>Leaderboard</h1>
            </div>
            <div className=' bg-[#F5F9FA] w-full flex items-center justify-between gap-4 p-6 lg:p-5 rounded-md '>
                <p className='md:text-lg  text-[#182578] '>Every expert was once a beginner. Complete your next lesson and rise up the board! </p>
                <p className='text-6xl '>🏆</p>
            </div>
            <AccountsList />
        </div>
    )
}

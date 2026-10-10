'use client'
import { useCourseStore } from '@/store/useCourseStore'
import AccountsList from './AccountsList'
import { useEffect } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'


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

        <div className={` ${showLeaderboard ? 'scale-100 opacity-100 z-20' : 'opacity-0 scale-50 -z-10'}  transition-all duration-250 fixed flex flex-col items-center justify-center gap-4 lg:gap-4  bg-white w-full  md:w-7/10 h-full md:h-6/10 left-0 md:left-[15%] top-0 md:top-[20%] lg:w-3/10 lg:h-9/10 p-5 md:p-8 lg:p-6  rounded-md lg:top-[5%] lg:left-[35%]`}>
            <button onClick={handleEnd} className=" absolute md:hidden top-7 left-4 ">
                <IoChevronBackOutline className="text-[#080264] text-3xl " />
            </button>
            <div className='text-[#080264] flex flex-col gap-3 lg:gap-2 items-center '>
                <h1 className='text-3xl lg:text-2xl '>{currentCourse?.title}</h1>
                <h1 className='font-semibold text-xl lg:text-lg'>Leaderboard</h1>
            </div>
            <div className=' bg-[#F5F9FA] w-full flex items-center justify-between gap-4 p-6 lg:p-5 rounded-md '>
                <p className='md:text-lg lg:text-[16px] text-[#182578] '>Every expert was once a beginner. Complete your next lesson and rise up the board! </p>
                <p className='text-6xl '>🏆</p>
            </div>
            <AccountsList />
        </div>
    )
}

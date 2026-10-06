

import AccountsList from './AccountsList'




export default function Leaderboard() {
    return (

        <div className={` fixed flex flex-col items-center  bg-white w-3/10 h-8/10 p-5 rounded-md top-[10%] left-[35%] z-10`}>
            <div className='text-[#080264] flex flex-col gap-2 items-center mb-7'>
                <h1 className='text-xl '>Next.js 13 Crash Course Tutorial</h1>
                <h1 className='font-semibold text-lg'>Leaderboard</h1>
            </div>
            <div className=' bg-[#F5F9FA] flex items-center py-3 px-6 rounded-md mb-6'>
                <p className=' text-[16px] text-[#182578] '>Every expert was once a beginner. Complete your next lesson and rise up the board!</p>
                <p className='text-6xl'>🏆</p>
            </div>
            <AccountsList />
        </div>
    )
}

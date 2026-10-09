

import { useCourseStore } from '@/store/useCourseStore';
import Image from 'next/image';

import { IoTimeOutline } from "react-icons/io5";

export default function CourseMaterials() {

    const currentCourse = useCourseStore(state => state.currentCourse)

    return (
        <div className='flex flex-col gap-7 '>
            <h1 className='text-2xl font-semibold hidden lg:block'>Cousre Materials</h1>
            <div className='bg-white shadow-[0px_0px_40px_0px_#DCDCDE] flex flex-col gap-10 p-7 lg:p-10 rounded-lg'>
                <h1 className=' text-lg md:text-xl font-semibold  lg:hidden'>Cousre Materials</h1>
                <div className=' flex flex-col gap-4 md:gap-0 md:flex-row justify-between  w-full '>

                    <div className='flex flex-col gap-4 md:w-3/7'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IoTimeOutline className='text-2xl' />
                                <p>Duration:</p>
                            </div>
                            <p className='font-semibold'>3 Weeks</p>
                        </div>
                        <p className='bg-line w-full h-px'></p>
                        <div className='flex items-center justify-between'>

                            <div className='flex items-center gap-2'>
                                <Image width={23} height={23} src='/icons/books-svgrepo-com.svg' alt='' />
                                <p>Lesson:</p>
                            </div>
                            <p className='font-semibold'>{currentCourse?.lessons.length}</p>
                        </div>
                        <p className='bg-line w-full h-px md:hidden'></p>

                    </div>
                    <div className='flex flex-col gap-4 md:w-3/7'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Image width={23} height={23} src='/icons/student-reading-svgrepo-com.svg' alt='' />
                                <p>Enrolled:</p>
                            </div>
                            <p className='font-semibold'>65 students</p>
                        </div>
                        <p className='bg-line w-full h-px'></p>
                        <div className='flex items-center justify-between'>

                            <div className='flex items-center gap-2'>
                                <Image src='/icons/language-svgrepo-com.svg' width={23} height={23} alt='' />
                                <p>Language:</p>
                            </div>
                            <p className='font-semibold'>Arabic</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

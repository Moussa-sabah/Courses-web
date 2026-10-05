

import Image from 'next/image'


export default function CommentElement() {
    return (
        <div className='comment flex gap-7 py-7  text-[15px]'>
            <Image src='/usersImages/user1.jpg' width={100} height={100} alt='' className='rounded-full object-cover h-18 w-18' />
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1 font-semibold'>
                    <p className='text-[#6C6C6C] '>Moussa Sabah</p>
                    <p className='text-[#ABABAB] '>Oct 10,2021</p>
                </div>
                <p className='text-secondary font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro impedit cumque placeat aliquam harum ut, vel laudantium. Exercitationem, ullam odio.</p>
            </div>
        </div>
    )
}

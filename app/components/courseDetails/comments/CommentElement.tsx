

import { Comment } from '@/types/Course'
import Image from 'next/image'


interface Props {
    comment: Comment
}

export default function CommentElement({ comment }: Props) {
    return (
        <div className='comment flex gap-5 md:gap-7 py-7  '>
            <Image src={comment?.userImage} width={100} height={100} alt='' className='rounded-full object-cover w-14 h-14 md:h-18 md:w-18' />
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1 '>
                    <p className='text-[#6C6C6C] capitalize font-semibold '>{comment?.username}</p>
                    <p className='text-secondary  text-sm'>{new Date(comment.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}</p>
                </div>
                <p className='text-secondary font-medium text-sm'>{comment?.text}</p>
            </div>
        </div>
    )
}

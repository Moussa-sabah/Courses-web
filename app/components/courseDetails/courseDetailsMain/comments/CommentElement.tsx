

import { Comment } from '@/types/Course'
import Image from 'next/image'


interface Props {
    comment: Comment
}

export default function CommentElement({ comment }: Props) {
    return (
        <div className='comment flex gap-7 py-7  text-[15px]'>
            <Image src={comment?.userImage} width={100} height={100} alt='' className='rounded-full object-cover h-18 w-18' />
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1 font-semibold'>
                    <p className='text-[#6C6C6C] capitalize'>{comment?.username}</p>
                    <p className='text-[#ABABAB] '>{new Date(comment.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}</p>
                </div>
                <p className='text-secondary font-semibold'>{comment?.text}</p>
            </div>
        </div>
    )
}

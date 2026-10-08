

import React from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

interface Props {
    commentsSectionRef: React.Ref<HTMLDivElement>
}

export default function Comments({ commentsSectionRef }: Props) {
    return (
        <div ref={commentsSectionRef} className='flex flex-col  py-5'>
            <h1 className='text-2xl font-semibold'>Comments</h1>
            <CommentsList />
            <AddComment />
        </div>
    )
}

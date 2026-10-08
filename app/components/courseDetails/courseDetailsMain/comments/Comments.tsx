

import React from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

export default function Comments() {
    return (
        <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold'>Comments</h1>
            <CommentsList />
            <AddComment />
        </div>
    )
}

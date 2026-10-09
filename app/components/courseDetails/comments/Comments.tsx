

import React from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'


export default function Comments() {
    return (
        <div  className='flex flex-col  pt-5 '>
            <h1 className='text-2xl font-semibold'>Comments</h1>
            <CommentsList />
            <AddComment />
        </div>
    )
}

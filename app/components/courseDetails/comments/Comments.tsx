

import React from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'


export default function Comments() {
    return (
        <div  className='flex flex-col  pt-5 gap-6'>
           <div className='flex flex-col gap-2 lg:gap-0'>
             <h1 className=' text-3xl lg:text-2xl font-semibold'>Comments</h1>
            <CommentsList />
           </div>
            <AddComment />
        </div>
    )
}



import './style.css'

export default function CourseFilter() {
    return (
        <div className='flex items-center gap-3 text-sm'>
            <button className='filterBtn'>All Status</button>
            <button className='filterBtn opacity-50'>Not Started</button>
            <button className='filterBtn opacity-50'>In Progress</button>
            <button className='filterBtn opacity-50'>Completed</button>
        </div>
    )
}

'use client'
import { useCourseStore } from '@/store/useCourseStore'
import './allCourses.css'
import { useEffect, useState } from 'react'

interface Props {
    handleAddFilter: (filter: string) => void
}

export default function CourseFilter({ handleAddFilter }: Props) {

    const removeFilter = useCourseStore(state => state.removeFilter)
    const [filter, setFilter] = useState<string>('')

    function changeFilter(filterType: string) {
        setFilter(filterType)
        handleAddFilter(filterType)
    }

    function handleRemoveFilter() {
        setFilter('')
        removeFilter()
    }
    useEffect(() => {
        removeFilter()
    }, [removeFilter])

    return (
        <div className='flex items-center gap-1.5 md:gap-3 text-[11px] 3xs:text-xs xs:text-xs md:text-sm'>
            <button onClick={handleRemoveFilter} className={`filterBtn px-3  md:px-4 py-2 md:py-1.25  ${filter === '' ? 'bg-primary text-white' : 'bg-notSelectedFilter'} `}>All Status</button>
            <button onClick={() => changeFilter('not_started')} className={`filterBtn px-3  md:px-4 py-2 md:py-1.25 ${filter === 'not_started' ? 'bg-primary text-white' : 'bg-notSelectedFilter'} `}>Not Started</button>
            <button onClick={() => changeFilter('in_progress')} className={`filterBtn px-3  md:px-4 py-2 md:py-1.25 ${filter === 'in_progress' ? 'bg-primary text-white' : 'bg-notSelectedFilter'}`}>In Progress</button>
            <button onClick={() => changeFilter('completed')} className={`filterBtn px-3  md:px-4 py-2 md:py-1.25 ${filter === 'completed' ? 'bg-primary text-white' : 'bg-notSelectedFilter'} `}>Completed</button>
        </div>
    )
}

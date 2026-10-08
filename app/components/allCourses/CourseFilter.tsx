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
        <div className='flex items-center gap-3 text-sm'>
            <button onClick={handleRemoveFilter} className={`filterBtn ${filter === '' ? 'bg-primary text-white' : 'bg-notSelectedFilter'} `}>All Status</button>
            <button onClick={() => changeFilter('not_started')} className={`filterBtn ${filter === 'not_started' ? 'bg-primary text-white' : 'bg-notSelectedFilter'} `}>Not Started</button>
            <button onClick={() => changeFilter('in_progress')} className={`filterBtn ${filter === 'in_progress' ? 'bg-primary text-white' : 'bg-notSelectedFilter'}`}>In Progress</button>
            <button onClick={() => changeFilter('completed')} className={`filterBtn ${filter === 'completed' ? 'bg-primary text-white' : 'bg-notSelectedFilter'} `}>Completed</button>
        </div>
    )
}

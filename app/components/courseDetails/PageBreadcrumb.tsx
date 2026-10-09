import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

export default function PageBreadcrumb() {
    return (
        <div className="font-semibold  flex items-center gap-2 text-sm py-3 lg:p-0">
            <Link href='/' className="flex items-center text-secondary">Home</Link>
            <FaAngleRight className="text-[11px]" />
            <Link href='/' className="flex items-center text-secondary">Courses</Link>
            <FaAngleRight className="text-[11px]" />
            <p>Course Details</p>
        </div>

    )
}




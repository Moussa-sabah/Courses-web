import React from 'react'

interface Props {
    name: string,
    pts: number
}

export default function AccountElement({ name, pts }: Props) {
    return (
        <div className='bg-white flex py-3 px-5 font-semibold   items-center justify-between w-full border border-black/10 rounded-md'>
            <p className='capitalize'>{name}</p>
            <p>{pts} pts</p>
        </div>
    )
}

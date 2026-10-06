

import React from 'react'
import AccontElement from './AccountElement'

export default function AccountsList() {
    return (
        <div className='bg-[#F5F9FA] flex items-center p-6 rounded-md  flex-col gap-6 w-full'>
            <AccontElement name={'moussa sabah'} pts={23} />
            <AccontElement name={'ali kareem'} pts={19} />
            <AccontElement name={'mustafa adel'} pts={17} />
            <AccontElement name={'mohammed hasan'} pts={11} />
            
        </div>
    )
}

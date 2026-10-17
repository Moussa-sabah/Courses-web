

import React from 'react'
import AccountElement from './AccountElement'

export default function AccountsList() {
    return (
        <div className='bg-[#F5F9FA] flex items-center p-5 2xs:p-3 md:p-5 rounded-md    flex-col gap-5 2xs:gap-3 md:gap-5 w-full'>
            <AccountElement name={'moussa sabah'} pts={23} />
            <AccountElement name={'ali kareem'} pts={19} />
            <AccountElement name={'mustafa adel'} pts={17} />
            <AccountElement name={'mohammed hasan'} pts={13} />
      
        </div>
    )
}

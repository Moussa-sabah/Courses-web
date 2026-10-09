

import React from 'react'
import AccountElement from './AccountElement'

export default function AccountsList() {
    return (
        <div className='bg-[#F5F9FA] flex items-center p-6 lg:p-5 rounded-md  lg:text-sm  flex-col gap-3 w-full'>
            <AccountElement name={'moussa sabah'} pts={23} />
            <AccountElement name={'ali kareem'} pts={19} />
            <AccountElement name={'mustafa adel'} pts={17} />
            <AccountElement name={'mohammed hasan'} pts={13} />
            <AccountElement name={'marwan salah'} pts={9} />
            <AccountElement name={'falah abdullah'} pts={8} />
        </div>
    )
}

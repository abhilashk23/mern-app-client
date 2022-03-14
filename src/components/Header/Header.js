import React from 'react'
import LaptopHeader from './LaptopHeader/LaptopHeader'
import MobileHeader from './MobileHeader/MobileHeader'

function Header() {
    return (
        <div>
            <div className='hidden md:block'>
                <LaptopHeader />
            </div>
            <div className='block md:hidden'>
                <MobileHeader />
            </div>
        </div>
    )
}

export default Header
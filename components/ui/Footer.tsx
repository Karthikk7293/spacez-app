'use client'

import { NAVBAR_ITEMS } from '@/lib/constants'
import { useState } from 'react'

const Footer = () => {
    const [active, setActive] = useState(3)
    return (
        <footer className="border-t border-gray-300 shadow-2xl fixed bottom-0 h-16 w-full bg-white visible md:hidden z-50">
            <div className="flex justify-around items-center  h-full">
                {NAVBAR_ITEMS.map(({ name, Icon }, index) => (
                    <button type='button' onClick={(() => setActive(index))} key={name} className={`flex flex-col  justify-center items-center ${active === index ? "text-[#874B2C] font-extrabold" : ""}  `}>
                        <Icon className="size-6" />
                        <span>{name}</span>
                    </button>
                ))}
            </div>
        </footer>
    )
}

export default Footer
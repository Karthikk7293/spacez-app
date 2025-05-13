'use client'

import { NAVBAR_ITEMS } from '@/lib/constants'
import { useState } from 'react'

const Footer = () => {
    const [active, setActive] = useState(3)
    return (
        <footer className="border-t border-gray-300 shadow-2xl fixed bottom-0 h-16 w-full">
            <div className="flex justify-around items-center  h-full">
                {NAVBAR_ITEMS.map(({ name, Icon }, index) => (
                    <div onClick={(() => setActive(index))} key={name} className={`flex flex-col  justify-center items-center ${active === index ? "" : "text-gray-400"}  `}>
                        <Icon className="size-6" />
                        <span>{name}</span>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer
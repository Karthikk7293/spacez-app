'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="border-b fixed bg-white z-50 w-full border-b-gray-200 px-5 ">
            <div className="flex  justify-between items-center  ">
                <Link href={'/'} className="">
                    <Image className="h-auto w-auto -mt-2 -ml-4 " height={100} width={100} src={'https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png'} alt="logo" />
                </Link>
                <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2 cursor-pointer ">
                    {isMenuOpen ? (
                        <div className="flex flex-col gap-1">
                            <div className="border w-5" />
                            <div className="border w-5" />
                            <div className="border w-5" />
                        </div>
                    ) : (
                        <div className="flex flex-col gap-1 relative pr-5">
                            <div className="border w-5 rotate-45 duration-300 absolute" />
                            <div className="border w-5 -rotate-45 duration-300 absolute" />
                        </div>
                    )}
                </button>
            </div>
        </header>
    )
}

export default Header
'use client'

import Image from 'next/image'

import HamburgerMenu from './HamburgerMenu';

const CommonHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <header className="sticky top-0 bg-white shadow-md flex justify-between items-center px-4 z-10">
            <Image
                src={'https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png'}
                alt="Logo"
                className="h-auto w-auto" height={100} width={100}
            />
            <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2">
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
            {isMenuOpen && <HamburgerMenu />}
        </header>
    )
}

export default CommonHeader
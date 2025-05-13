'use client'

import Image from 'next/image'

const Header = () => {

    return (
        <header className="border-b fixed bg-white z-50 w-full border-b-gray-200 px-5 ">
            <div className="flex  justify-between items-center  ">
                <div className="">
                    <Image className="h-auto w-auto -mt-2 -ml-4 " height={100} width={100} src={'https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png'} alt="logo" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="border w-5" />
                    <div className="border w-5" />
                    <div className="border w-5" />
                </div>
            </div>
        </header>
    )
}

export default Header
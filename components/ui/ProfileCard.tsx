'use client'

import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className="flex justify-center pb-4 ">
            <div className="border rounded-full border-gray-200 w-fit relative ">
                <Image width={120} height={120} alt="avatar" src={"/avatar.webp"} className="rounded-full" />
                <span className="absolute right-3 bottom-2 border rounded p-1 border-gray-100 bg-white text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default ProfileCard
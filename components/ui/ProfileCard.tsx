'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"
import { HeartIcon } from "@heroicons/react/20/solid"
import { PencilSquareIcon } from '@heroicons/react/16/solid'

const ProfileCard = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='flex  flex-col  md:w-[30%] items-center  '>
            <div className="flex   w-full justify-between md:justify-center items-center  py-2 ">
                <h2 className={`text-[28px] font-sans  `} >
                    Profile
                </h2>
                <span className='md:hidden ' onClick={(() => setShow(!show))}>
                    {show
                        ? <HeartIconSolid className="size-6" />
                        : <HeartIcon className="size-6" />
                    }
                </span>
            </div>
            <div className="flex justify-center pb-4 my-auto">
                <label htmlFor="avatar" className="border rounded-full border-gray-200 w-fit h-fit relative ">
                    <Image width={120} height={120} alt="avatar" src={"/avatar.webp"} className="rounded-full" />
                    <span className="absolute right-2 bottom-3 border rounded p-0.5 border-gray-100 bg-white text-gray-400">
                        <PencilSquareIcon className='size-4' />
                    </span>
                </label>
                <input id='avatar' type="file" className='hidden' />
            </div>
        </div>
    )
}

export default ProfileCard
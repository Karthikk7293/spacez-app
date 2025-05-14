'use client'

import { LogoutButtonTypes } from '@/lib/types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const DeleteAccount = ({ tooltip, Icon, text }: LogoutButtonTypes) => {
    return (
        <div role='button' className=' relative active:bg-gray-100 md:border-amber-800 flex cursor-pointer justify-between items-center pt-6 pb-3 md:border rounded px-2'>
            <span className='absolute left-4 top-1 text-xs hidden md:block '>{tooltip}</span>
            <div className="flex  items-center gap-3 text-red-700  ">
                <span className=''>
                    <Icon className='size-6' />
                </span>
                <a href="" className='underline underline-offset-3  '>{text}</a>
            </div>
            <ChevronRightIcon className="size-4" />
        </div>
    )
}

export default DeleteAccount
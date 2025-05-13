'use client'

import { ArrowRightStartOnRectangleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const LogoutButton = () => {
    return (
        <div className=' flex justify-between items-center py-5'>
            <div className="flex  items-center gap-3 ">
                <span>
                    <ArrowRightStartOnRectangleIcon className='size-6' />
                </span>
                <a href="" className='underline underline-offset-3 '>Log out</a>
            </div>
            <ChevronRightIcon className="size-4" />
        </div>
    )
}

export default LogoutButton
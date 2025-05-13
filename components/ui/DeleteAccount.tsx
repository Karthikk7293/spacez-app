import { ArchiveBoxXMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const DeleteAccount = () => {
    return (
        <div className=' flex justify-between items-center text-red-700 py-5'>
            <div className="flex  items-center gap-3 ">
                <span>
                    <ArchiveBoxXMarkIcon className='size-6' />
                </span>
                <a href="" className='underline underline-offset-3  '>Delete Account</a>
            </div>
            <ChevronRightIcon className="size-4" />
        </div>
    )
}

export default DeleteAccount
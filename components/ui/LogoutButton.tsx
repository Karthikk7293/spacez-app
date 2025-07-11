'use client'

import { LogoutButtonTypes } from '@/lib/types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'


const LogoutButton = ({ tooltip, text }: LogoutButtonTypes) => {
    return (
        <div role='button' className=' active:bg-gray-100 md:border-[#B82B14] py-2 px-3  cursor-pointer justify-between items-center  md:border rounded md:mb-3 mt-4 '>
            <p className='text-xs hidden md:block '>{tooltip}</p>
            <div className='flex justify-between   items-center gap-3'>
                <div className="flex  items-center gap-3 ">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.30775 17.5C1.80258 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.1974 0.5 15.6923V2.30775C0.5 1.80258 0.675 1.375 1.025 1.025C1.375 0.675 1.80258 0.5 2.30775 0.5H9.0095V2H2.30775C2.23075 2 2.16025 2.03208 2.09625 2.09625C2.03208 2.16025 2 2.23075 2 2.30775V15.6923C2 15.7692 2.03208 15.8398 2.09625 15.9038C2.16025 15.9679 2.23075 16 2.30775 16H9.0095V17.5H2.30775ZM13.2308 13.2692L12.1923 12.1845L14.627 9.75H6.09625V8.25H14.627L12.1923 5.8155L13.2308 4.73075L17.5 9L13.2308 13.2692Z" fill="#646864" />
                    </svg>
                    <a href="" className='underline underline-offset-3 '>{text}</a>
                </div>
                <ChevronRightIcon className="size-4" />
            </div>
        </div>
    )
}

export default LogoutButton
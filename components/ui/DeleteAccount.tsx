'use client'

import { LogoutButtonTypes } from '@/lib/types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const DeleteAccount = ({ tooltip, text }: LogoutButtonTypes) => {
    return (
        <div role='button' className=' active:bg-gray-100 md:border-[#B82B14] py-2 px-3  cursor-pointer justify-between items-center  md:border rounded '>
            <p className=' text-xs hidden md:block '>{tooltip}</p>
            <div className="flex justify-between   items-center gap-3 text-[#B82B14]">
                <div className='flex items-center gap-3'>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.4 13.1537L8 10.5537L10.6 13.1537L11.6538 12.1L9.05375 9.49998L11.6538 6.89998L10.6 5.84623L8 8.44623L5.4 5.84623L4.34625 6.89998L6.94625 9.49998L4.34625 12.1L5.4 13.1537ZM3.30775 17.5C2.80258 17.5 2.375 17.325 2.025 16.975C1.675 16.625 1.5 16.1974 1.5 15.6922V2.99998H0.5V1.49998H5V0.615479H11V1.49998H15.5V2.99998H14.5V15.6922C14.5 16.1974 14.325 16.625 13.975 16.975C13.625 17.325 13.1974 17.5 12.6923 17.5H3.30775ZM13 2.99998H3V15.6922C3 15.7692 3.03208 15.8397 3.09625 15.9037C3.16025 15.9679 3.23075 16 3.30775 16H12.6923C12.7692 16 12.8398 15.9679 12.9038 15.9037C12.9679 15.8397 13 15.7692 13 15.6922V2.99998Z" fill="#E53619" />
                    </svg>
                    <a href="" className='underline underline-offset-3  '>{text}</a>
                </div>
                <ChevronRightIcon className="size-4" />
            </div>
        </div>
    )
}

export default DeleteAccount
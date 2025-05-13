'use client'

import { StarIcon } from '@heroicons/react/24/outline'
import React from 'react'

const PartnerCard = () => {
    return (
        <div className=' mb-5'>
            <div className=" bg-orange-950 w-fit mx-auto text-white rounded-sm flex justify-center items-center px-2 gap-2">
                <StarIcon className='size-3' />
                <p className='uppercase text-xs  font-light  tracking-widest'>partner</p>
            </div>
        </div>
    )
}

export default PartnerCard
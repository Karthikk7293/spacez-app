'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { AvatarIcon, EditIcon } from '../images/Svg'

const ProfileCard = () => {
    const [show, setShow] = useState(false)
    const [image, setImage] = useState("")

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImage(previewUrl);
        }
    };

    return (
        <div className='flex  flex-col  md:w-[30%] items-center max-h-80  '>
            <div className="flex   w-full justify-between md:justify-center items-center  py-2 ">
                <h2 className={`text-[28px] font-sans font-bold  `} >
                    Profile
                </h2>
                <span className='md:hidden ' onClick={(() => setShow(!show))}>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 16.6329L7.98825 15.7233C6.46872 14.3448 5.21212 13.1602 4.21846 12.1696C3.22479 11.1789 2.43737 10.2971 1.85621 9.52436C1.27504 8.75176 0.869034 8.04692 0.638187 7.40984C0.407187 6.77291 0.291687 6.12658 0.291687 5.47086C0.291687 4.16996 0.730312 3.0808 1.60756 2.2034C2.48497 1.32615 3.57412 0.887527 4.87502 0.887527C5.67527 0.887527 6.43152 1.07468 7.14377 1.44899C7.85602 1.82329 8.47477 2.36008 9.00002 3.05934C9.52527 2.36008 10.144 1.82329 10.8563 1.44899C11.5685 1.07468 12.3248 0.887527 13.125 0.887527C14.4259 0.887527 15.5151 1.32615 16.3925 2.2034C17.2697 3.0808 17.7084 4.16996 17.7084 5.47086C17.7084 6.12658 17.5929 6.77291 17.3619 7.40984C17.131 8.04692 16.725 8.75176 16.1438 9.52436C15.5627 10.2971 14.7767 11.1789 13.7859 12.1696C12.7953 13.1602 11.5373 14.3448 10.0118 15.7233L9.00002 16.6329ZM9.00002 14.775C10.4667 13.4553 11.6736 12.3242 12.6209 11.3815C13.5681 10.439 14.3167 9.62023 14.8667 8.92509C15.4167 8.22995 15.7986 7.61265 16.0125 7.07319C16.2264 6.53389 16.3334 5.99978 16.3334 5.47086C16.3334 4.55419 16.0278 3.79031 15.4167 3.17919C14.8056 2.56808 14.0417 2.26253 13.125 2.26253C12.4012 2.26253 11.7321 2.46786 11.118 2.87853C10.504 3.28935 10.0177 3.86081 9.65933 4.59292H8.34071C7.97633 3.85485 7.48859 3.28194 6.87748 2.87417C6.26637 2.46641 5.59888 2.26253 4.87502 2.26253C3.96416 2.26253 3.20172 2.56808 2.58771 3.17919C1.97369 3.79031 1.66669 4.55419 1.66669 5.47086C1.66669 5.99978 1.77363 6.53389 1.98752 7.07319C2.20141 7.61265 2.58335 8.22995 3.13335 8.92509C3.68335 9.62023 4.43197 10.4376 5.37919 11.3772C6.32641 12.3168 7.53335 13.4494 9.00002 14.775Z" fill="#646864" />
                    </svg>


                </span>
            </div>
            <div className="flex md:justify-center  pb-4 my-auto">
                <label htmlFor="avatar" className=" rounded-full border-gray-200 w-fit h-fit relative ">
                    <div className='w-32 h-32  rounded-full overflow-hidden '>
                        {image ? <Image width={120} height={120} alt="avatar" src={image} className="w-full h-auto  " />
                            : <AvatarIcon />}
                    </div>
                    <span className="absolute right-2 bottom-3   border rounded pl-1 pt-0.5 pr-0.5  pb-1 border-gray-100 bg-white text-gray-400">
                        <EditIcon />
                    </span>
                </label>
                <input id='avatar' type="file" className='hidden' onChange={handleImageChange} />
            </div>
        </div>
    )
}

export default ProfileCard
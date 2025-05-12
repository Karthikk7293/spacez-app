'use client'

import Image from "next/image"

const ProfilePage = () => {
    return (
        <div className={` `}>
            <header className="border-b border-b-gray-200">
                <div className="flex  justify-between items-center  px-4">
                    <div className="">
                        <Image className="" height={50} width={100} src={'https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png'} alt="logo" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="border w-5" />
                        <div className="border w-5" />
                        <div className="border w-5" />
                    </div>
                </div>

            </header>
            <div className="pt-5">
                <h2 className={` pl-8 text-primaryB7  !leading-[34px]  mobile:!text-[28px] mobile:!leading-[30px] mobile:!capitalize  text-[36px] font-bold tracking-[0.03em] mobile:text-[28px] mobile:font-extrabold mobile:tracking-[0.02em] `} >
                    Profile
                </h2>
                <div className="flex justify-center ">
                    <div className="border rounded-full border-gray-200 w-fit relative ">
                        <Image width={160} height={160} alt="avatar" src={"/avatar.webp"} className="rounded-full" />
                        {/* <PencilSquareIcon className="w-6 h-6 absolute" /> */}

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 absolute  right-2 bottom-6">
                            <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
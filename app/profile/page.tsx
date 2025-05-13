'use client'

import InputBox from "@/components/ui/InputBox"
import Image from "next/image"
import { useState } from "react"

const ProfilePage = () => {
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(false)
    return (
        <div className="">
            <header className="border-b border-b-gray-200 px-5">
                <div className="flex  justify-between items-center  ">
                    <div className="">
                        <Image className="h-auto w-auto" height={50} width={100} src={'https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png'} alt="logo" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="border w-5" />
                        <div className="border w-5" />
                        <div className="border w-5" />
                    </div>
                </div>

            </header>
            <div className="px-5 ">
                <div className="flex justify-between items-center  py-2 ">
                    <h2 className={`text-[30px] font-sans `} >
                        Profile
                    </h2>
                    <span onClick={(() => setShow(!show))}>
                        {show ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        }
                    </span>

                </div>
                <div className="flex justify-center pb-7 ">
                    <div className="border rounded-full border-gray-200 w-fit relative ">
                        <Image width={160} height={160} alt="avatar" src={"/avatar.webp"} className="rounded-full" />
                        {/* <PencilSquareIcon className="w-6 h-6 absolute" /> */}

                        <span className="absolute right-3 bottom-2 border rounded p-1 border-gray-200 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                            </svg>
                        </span>


                    </div>
                </div>
                <hr className="text-gray-200" />
                <div className="py-3  flex justify-between items-center">
                    <div>
                        <p className="text-xs">Refer a friend, Earn in cash</p>
                        <p className="font-bold">SPACEZ-{new Date().getFullYear()}</p>
                    </div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                    </span>

                </div>
                <hr className="text-gray-200" />
                <div className="pt-5">
                    <InputBox name={"email"} type={"text"} placeHolder={"Legal Name"} required={true} readOnly={false} isBlur={false} state="" />
                    <InputBox name={"mobile"} type={"text"} placeHolder={"Phone Number"} required={true} readOnly={false} isBlur={false} state="" />
                    <InputBox name={"email"} type={"email"} placeHolder={"Email"} required={true} readOnly={false} isBlur={false} state="" />
                </div>
            </div>
            <footer className="border fixed bottom-0 h-16 w-full">
                <div className="flex justify-around items-center  h-full">
                    <div className={`flex flex-col  justify-center items-center ${active ? "" : "text-gray-400"}  `}>
                        <span className="" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 ">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span>Explore</span>
                    </div>
                    <div className={`flex flex-col  justify-center items-center ${active ? "" : "text-gray-400"}  `}>
                        <span className="" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                        </span>
                        <span>Offers</span>
                    </div>
                    <div className={`flex flex-col  justify-center items-center ${active ? "" : "text-gray-400"}  `}>
                        <span className="" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 ">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span>Bookings</span>
                    </div>
                    <div onClick={(() => setActive(!active))} className={` flex flex-col  justify-center items-center ${!active ? "" : "text-gray-400"}`}>
                        <span className="" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </span>
                        <span>Profile</span>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default ProfilePage
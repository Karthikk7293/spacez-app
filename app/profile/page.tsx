'use client'

import DeleteAccount from "@/components/ui/DeleteAccount"
import LogoutButton from "@/components/ui/LogoutButton"
import ProfileCard from "@/components/ui/ProfileCard"
import ProfileForm from "@/components/ui/ProfileForm"
import ReferralCard from "@/components/ui/ReferralCard"
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"
import { HeartIcon } from "@heroicons/react/24/outline"

import { useState } from "react"

const ProfilePage = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="">
            <div className="px-5 mb-24">
                <div className="flex justify-between items-center  py-2 ">
                    <h2 className={`text-[30px] font-sans `} >
                        Profile
                    </h2>
                    <span onClick={(() => setShow(!show))}>
                        {show ? <HeartIconSolid className="size-6" />
                            : <HeartIcon className="size-6" />
                        }
                    </span>

                </div>
                <ProfileCard />
                <hr className="text-gray-200" />
                <ReferralCard />
                <hr className="text-gray-200" />
                <ProfileForm />
                <hr className="text-gray-200" />
                <LogoutButton />
                <DeleteAccount />
            </div>

        </div>
    )
}

export default ProfilePage
'use client'

import DeleteAccount from "@/components/ui/DeleteAccount"
import LogoutButton from "@/components/ui/LogoutButton"
import ProfileCard from "@/components/ui/ProfileCard"
import ProfileForm from "@/components/ui/ProfileForm"
import ReferralCard from "@/components/ui/ReferralCard"


import { useState } from "react"

const ProfilePage = () => {
    const [showReferral, setShowReferral] = useState(false)

    return (
        <div className="relative">
            {/* <div className="absolute w-screen h-screen  left-0 top-0 z-40 bg-gray-500 opacity-20"></div> */}
            <div className="px-5 mb-24 md:w-[60%] mx-auto z-10 ">
                <div className="  flex flex-col md:flex-row   mx-auto">
                    <ProfileCard />
                    <div className=" md:w-[70%]">
                        <hr className="text-gray-200 md:hidden" />
                        <ReferralCard showReferral={showReferral} />
                        <hr className="text-gray-200" />
                        <ProfileForm setShowReferral={setShowReferral} />
                        <hr className="text-gray-200" />
                    </div>
                </div>
                <LogoutButton />
                <DeleteAccount />
            </div>

        </div>
    )
}

export default ProfilePage
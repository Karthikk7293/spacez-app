'use client'

import DeleteAccount from "@/components/ui/DeleteAccount"
import LogoutButton from "@/components/ui/LogoutButton"
import PartnerCard from "@/components/ui/PartnerCard"
import ProfileCard from "@/components/ui/ProfileCard"
import ProfileForm from "@/components/ui/ProfileForm"
import ReferralCard from "@/components/ui/ReferralCard"
import { ArchiveBoxXMarkIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"

import { useState } from "react"

const PartnerPage = () => {
    const [showReferral, setShowReferral] = useState(false)
    const [focus, setFocus] = useState("")

    return (
        <div className="relative min-h-[90vh] ">
            {focus !== "" && <div className="absolute w-screen h-full  left-0 top-0 z-30 bg-gray-500 opacity-20"></div>}
            <div className="px-5 md:pt-24 md:w-[60%] mx-auto z-10 ">
                <div className="  flex flex-col md:flex-row   mx-auto">
                    <ProfileCard />
                    <PartnerCard />
                    <div className=" md:w-[70%]">
                        <hr className="text-gray-200 md:hidden" />
                        <ReferralCard showReferral={showReferral} />
                        <hr className="text-gray-200" />
                        <ProfileForm setShowReferral={setShowReferral} focus={focus} setFocus={setFocus} />
                        <hr className="text-gray-200" />
                    </div>
                </div>
                <LogoutButton tooltip={"leaving so soon ? 😔"} text={"Log out"} Icon={ArrowRightStartOnRectangleIcon} />
                <DeleteAccount tooltip={"this will delete all your data 💔"} text={"Delete Account"} Icon={ArchiveBoxXMarkIcon} />
            </div>
        </div>
    )
}


export default PartnerPage
'use client'

import DeleteAccount from "@/components/ui/DeleteAccount"
import LogoutButton from "@/components/ui/LogoutButton"
import PartnerCard from "@/components/ui/PartnerCard"
import ProfileCard from "@/components/ui/ProfileCard"
import ProfileForm from "@/components/ui/ProfileForm"
import ReferralCard from "@/components/ui/ReferralCard"

import { useState } from "react"

const PartnerPage = () => {
    const [showReferral, setShowReferral] = useState(false)
    const [focus, setFocus] = useState("")

    return (
        <div className="relative ">
            {focus !== "" && <div className="fixed w-full h-screen  left-0 top-0  z-30 bg-gray-500 opacity-20"></div>}
            <div className="px-5 md:pt-24 md:w-[60%] mx-auto z-10 ">
                <div className="  flex flex-col md:flex-row   mx-auto">
                    <ProfileCard />
                    <PartnerCard />
                    <div className=" md:w-[70%]">
                        <hr className="text-[#E5E6E5] md:hidden" />
                        <ReferralCard showReferral={showReferral} />
                        <hr className="text-[#E5E6E5]" />
                        <ProfileForm setShowReferral={setShowReferral} focus={focus} setFocus={setFocus} />
                        <hr className="text-[#E5E6E5]" />
                    </div>
                </div>
                <LogoutButton tooltip={"leaving so soon ? 😔"} text={"Log out"} />
                <DeleteAccount tooltip={"this will delete all your data 💔"} text={"Delete Account"} />
            </div>
        </div>
    )
}


export default PartnerPage
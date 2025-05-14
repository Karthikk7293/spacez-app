'use client'

import { FormEvent, useEffect, useState } from "react"
import InputBox from "./InputBox"
import { ProfileFormTypes, UserDetailsTypes } from "@/lib/types"
import { handleUpdatePhone, handleUpdateReferralStatus } from "@/lib/util"




const ProfileForm = ({ setShowReferral, focus, setFocus }: ProfileFormTypes) => {
    const [userData, setUserData] = useState({ name: "", mobile: "+91", email: "" })
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const userDetails = localStorage.getItem('userDetails')
        if (userDetails) {
            const data: UserDetailsTypes = JSON.parse(userDetails)
            setUserData(data)
            handleUpdateReferralStatus(setShowReferral, data)
        }

    }, [])


    const handleChange = (value: string, name: string) => {
        if (name === 'mobile') {
            setUserData(((prev) => ({ ...prev, mobile: handleUpdatePhone(value) })));
        } else {
            setUserData(((prev) => ({ ...prev, [name]: value })));
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        localStorage.setItem('userDetails', JSON.stringify(userData))
        setFocus("")
        handleUpdateReferralStatus(setShowReferral, userData)
        setLoading(false)

    }


    return (
        <div className="py-5 ">
            <InputBox
                name={"name"}
                type={"text"}
                placeHolder={"Legal Name"}
                required={false}
                state={userData.name}
                showEdit={true}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                focus={focus}
                setFocus={setFocus}
                loading={loading} />
            <InputBox
                name={"mobile"}
                type={"text"}
                placeHolder={"Phone Number"}
                required={true}
                state={userData.mobile}
                showEdit={true}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                focus={focus}
                setFocus={setFocus}
                loading={loading} />
            <InputBox
                name={"email"}
                type={"email"}
                placeHolder={"Email"}
                required={false}
                state={userData.email}
                showEdit={true}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                focus={focus}
                setFocus={setFocus}
                loading={loading} />
        </div>
    )
}

export default ProfileForm
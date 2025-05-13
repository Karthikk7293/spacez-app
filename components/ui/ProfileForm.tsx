'use client'

import { useEffect, useState } from "react"
import InputBox from "./InputBox"

interface UserDetailsTypes {
    name: string,
    mobile: string,
    email: string
}

interface ProfileFormTypes {
    setShowReferral: (data: boolean) => void
}


const ProfileForm = ({ setShowReferral }: ProfileFormTypes) => {
    const [userData, setUserData] = useState({ name: "", mobile: "+91", email: "" })
    const [focus, setFocus] = useState("")

    useEffect(() => {
        let userDetails = localStorage.getItem('userDetails')
        if (userDetails) {
            const data: UserDetailsTypes = JSON.parse(userDetails)
            setUserData(data)
            if (data.name !== "" && data.email !== "" && data.mobile !== "") {
                setShowReferral(true)
            } else {
                setShowReferral(false)
            }
        }

    }, [])


    const handleChange = (value: string, name: string) => {
        if (name === 'mobile') {
            const code = value.split("")
            code.splice(0, 3)
            const data = code.map((item, index) => {
                if (index > 4) {
                    return item
                } else {
                    return "*"
                }
            })
            setUserData(((prev) => ({ ...prev, mobile: ["+", "9", "1", ...data].join("") })));
        }
        if (name === 'email') {
            setUserData(((prev) => ({ ...prev, email: value })));
        }
        if (name === "name") {
            setUserData(((prev) => ({ ...prev, name: value })));
        }
    }

    const handleSubmit = () => {
        localStorage.setItem('userDetails', JSON.stringify(userData))
        setFocus("")
        if (userData.name !== "" && userData.email !== "" && userData.mobile !== "") {
            setShowReferral(true)
        } else {
            setShowReferral(false)
        }

    }

    return (
        <div className="py-5">
            <InputBox
                name={"name"}
                type={"text"}
                placeHolder={"Legal Name"}
                required={true}
                state={userData.name}
                showEdit={true}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                focus={focus}
                setFocus={setFocus} />
            <InputBox
                name={"mobile"}
                type={"text"}
                placeHolder={"Phone Number"}
                required={true}
                state={userData.mobile}
                showEdit={false}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                focus={focus}
                setFocus={setFocus} />
            <InputBox
                name={"email"}
                type={"email"}
                placeHolder={"Email"}
                required={true}
                state={userData.email}
                showEdit={true}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                focus={focus}
                setFocus={setFocus} />
        </div>
    )
}

export default ProfileForm
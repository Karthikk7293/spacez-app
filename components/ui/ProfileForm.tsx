'use client'

import { useState } from "react"
import InputBox from "./InputBox"


const ProfileForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("+91")

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
            setMobile(["+", "9", "1", ...data].join(""))
        }
        if (name === 'email') {
            setEmail(value)
        }
        if (name === "name") {
            setName(value)
        }
    }

    const handleSubmit = () => {
        const userDetails = {
            name,
            email,
            mobile
        }
        localStorage.setItem('userDetails', JSON.stringify(userDetails))
    }

    return (
        <div className="py-5">
            <InputBox name={"name"} type={"text"} placeHolder={"Legal Name"} required={true} readOnly={false} state={name} showEdit={true} handleChange={handleChange} handleSubmit={handleSubmit} />
            <InputBox name={"mobile"} type={"text"} placeHolder={"Phone Number"} required={true} readOnly={false} state={mobile} showEdit={false} handleChange={handleChange} handleSubmit={handleSubmit} />
            <InputBox name={"email"} type={"email"} placeHolder={"Email"} required={true} readOnly={false} state={email} showEdit={true} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    )
}

export default ProfileForm
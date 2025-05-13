'use client'

import InputBox from "./InputBox"

const ProfileForm = () => {

    return (
        <div className="py-5">
            <InputBox name={"name"} type={"text"} placeHolder={"Legal Name"} required={true} readOnly={false} state="" showEdit={true} />
            <InputBox name={"mobile"} type={"text"} placeHolder={"Phone Number"} required={true} readOnly={false} state="" showEdit={false} />
            <InputBox name={"email"} type={"email"} placeHolder={"Email"} required={true} readOnly={false} state="" showEdit={true} />
        </div>
    )
}

export default ProfileForm
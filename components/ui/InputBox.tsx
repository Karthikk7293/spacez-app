'use client'

import { InputBoxProps } from "@/lib/types"
import { useEffect, useState } from "react"
import { EditIcon } from "../images/Svg"


const InputBox = ({ type, name, placeHolder, required, showEdit, state, focus, loading, setFocus, handleChange, handleSubmit }: InputBoxProps) => {

    const [showSaveButton, setShowSaveButton] = useState(false)

    useEffect(() => {
        const userDetails = localStorage.getItem("userDetails")
        if (userDetails) {
            const user = JSON.parse(userDetails)
            if (user[name] === state) {
                setShowSaveButton(false)
            } else {
                setShowSaveButton(true)
            }
        } else {
            setShowSaveButton(true)
        }

    }, [state])

    return (
        <div className={` ${focus === name && "z-50"}`}>
            <form className={`${focus === name && "z-50"}`} onSubmit={(e) => handleSubmit(e)}>
                <div className={` flex   ${focus === name ? "z-50 border-[#AD6038] " : " border-[#4B4E4B]"} bg-white items-center border-y-[2px] border-t-[0.64px] border-x-[0.64px] my-2 relative`}>
                    <span className={` text-nowrap text-[#7D817D] top-4 left-4 absolute duration-150 ${focus === name || state != "" ? "-translate-3 text-xs " : "translate-0 text-sm "} `}>{placeHolder}</span>
                    <input
                        autoFocus
                        className=" w-full px-3 pt-5 h-12 !border-transparent focus:outline-none "
                        type={type}
                        name={name}
                        required={required}
                        readOnly={focus !== name}
                        value={state}
                        placeholder={focus === name ? placeHolder : ""}
                        onChange={((e) => handleChange(e.target.value, name))}
                        maxLength={name === 'mobile' ? 15 : 100}
                    />
                    {showEdit && <span onClick={(() => setFocus(name))} className=" cursor-pointer px-2 ">
                        <EditIcon />
                    </span>}
                </div>
                <div className={` ${focus === name ? "visible z-50 " : "hidden"}   duration-200 bg-white  w-full flex justify-end gap-3`}>
                    <button onClick={() => setFocus("")} type="reset" className={`${focus === name ? " z-50 " : ""} text-xs cursor-pointer  px-3 py-2 underline underline-offset-2 active:bg-gray-100`}>Cancel</button>
                    <button type="submit" className={` ${focus === name && showSaveButton ? " z-50 bg-amber-50 " : ""} active:bg-gray-100 border-gray-300 text-xs border cursor-pointer rounded-sm px-3 py-2   `} >
                        {loading ? <svg className=" size-3 animate-ping  border-3 border-blue-400 rounded-full" viewBox="0 0 24 24"></svg> : "save"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InputBox
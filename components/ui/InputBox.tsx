'use client'

import { InputBoxProps } from "@/lib/types"
import { PencilSquareIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"


const InputBox = ({ type, name, placeHolder, required, showEdit, state, focus, setFocus, handleChange, handleSubmit }: InputBoxProps) => {

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
        }

    }, [state])



    return (
        <div className={` ${focus === name && "z-50"}`}>
            <form className={`${focus === name && "z-50"}`} onSubmit={(e) => handleSubmit(e)}>
                <div className={` flex border  ${focus === name && "z-50"} bg-white items-center border-b-3 border-amber-800 my-2 relative`}>
                    <span className={` text-nowrap text-gray-500 top-4 left-4 absolute duration-150 ${focus === name || state != "" ? "-translate-3 text-xs " : "translate-0 text-sm "} `}>{placeHolder}</span>
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
                        <PencilSquareIcon className="size-5 text-gray-300 " />
                    </span>}
                </div>
                <div className={` ${focus === name ? "visible z-50 " : "hidden"}   duration-200 bg-white  w-full flex justify-end gap-3`}>
                    <button onClick={() => setFocus("")} type="reset" className={`${focus === name ? " z-50 " : ""} text-xs cursor-pointer  px-3 py-2 underline underline-offset-2 active:bg-gray-100`}>Cancel</button>
                    <button type="submit" className={` ${focus === name && showSaveButton ? " z-50 bg-amber-50 " : ""} active:bg-gray-100 border-gray-300 text-xs border cursor-pointer rounded-sm px-3 py-2   `} >Save</button>
                </div>
            </form>
        </div>
    )
}

export default InputBox
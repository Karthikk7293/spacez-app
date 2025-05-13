'use client'

import { PencilSquareIcon } from "@heroicons/react/16/solid"
import { useState } from "react"

interface InputBoxProps {
    type: string,
    name: string,
    placeHolder: string,
    required: boolean,
    readOnly: boolean,
    state: string,
    showEdit: boolean,
    handleChange: (value: string, name: string) => void
    handleSubmit: () => void
}

const InputBox = ({ type, name, placeHolder, required, readOnly, showEdit, state, handleChange, handleSubmit }: InputBoxProps) => {
    const [focus, setFocus] = useState("")
    return (
        <>
            <div className="flex border items-center border-b-2 my-2 relative">
                <span className={` text-nowrap text-gray-500 top-4 left-4 absolute duration-150 ${focus === name || state != "" ? "-translate-3 text-xs " : "translate-0 text-sm "} `}>{placeHolder}</span>
                <input
                    className=" w-full px-3 pt-5 h-12 !border-transparent focus:outline-none "
                    type={type}
                    name={name}
                    required={required}
                    readOnly={readOnly}
                    value={state}
                    placeholder={focus === name ? placeHolder : ""}
                    onFocus={(() => setFocus(name))}
                    onBlur={(() => setFocus(""))}
                    onChange={((e) => handleChange(e.target.value, name))}
                />
                {showEdit && <span className=" px-2 ">
                    <PencilSquareIcon className="size-5 text-gray-300" />
                </span>}
            </div>
            <div className={` ${name === focus ? "visible" : "hidden"} w-full flex justify-end`}>
                <button className=" text-xs  px-3 py-2 underline underline-offset-2">Cancel</button>
                <button onClick={(() => handleSubmit())} className="border-gray-300 text-xs border rounded-sm px-3 py-2">Save</button>
            </div>
        </>
    )
}

export default InputBox
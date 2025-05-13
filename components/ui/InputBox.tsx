'use client'

import { useState } from "react"

interface InputBoxProps {
    type: string,
    name: string,
    placeHolder: string,
    required: boolean,
    readOnly: boolean,
    state: string,
    showEdit: boolean,
}

const InputBox = ({ type, name, placeHolder, required, readOnly, showEdit, }: InputBoxProps) => {

    const [focus, setFocus] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault()

    }

    return (
        <div className="flex border items-center border-b-2 my-2 relative">
            <span className={` text-nowrap text-gray-500 top-3 left-3 absolute duration-150 ${focus === name ? "-translate-2 text-xs " : "translate-0 text-sm "} `}>{placeHolder}</span>
            <input
                className=" w-full px-3 pt-5 h-12 !border-transparent focus:outline-none "
                type={type}
                name={name}
                required={required}
                readOnly={readOnly}
                placeholder={focus === name ? placeHolder : ""}
                onFocus={(() => setFocus(name))}
                onBlur={(() => setFocus(name))}
                onChange={((e) => handleChange(e))}
            />
            {showEdit && <span className=" px-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-gray-300">
                    <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                </svg>
            </span>}
        </div>
    )
}

export default InputBox
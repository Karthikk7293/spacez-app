'use client'

import { PencilSquareIcon } from "@heroicons/react/16/solid"
import { FormEvent } from "react"

interface InputBoxProps {
    type: string
    name: string
    placeHolder: string
    required: boolean
    state: string
    showEdit: boolean
    focus: string
    setFocus: (value: string) => void
    handleChange: (value: string, name: string) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const InputBox = ({ type, name, placeHolder, required, showEdit, state, focus, setFocus, handleChange, handleSubmit }: InputBoxProps) => {

    return (
        <div className="z-50">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex border  z-50  bg-white items-center border-b-3 border-amber-800 my-2 relative">
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
                    />
                    {showEdit && <span onClick={(() => setFocus(name))} className=" cursor-pointer px-2 ">
                        <PencilSquareIcon className="size-5 text-gray-300 " />
                    </span>}
                </div>
                <div className={` ${focus === name ? "visible" : "hidden"} duration-200 bg-white z-50 w-full flex justify-end gap-3`}>
                    <button onClick={() => setFocus("")} type="reset" className=" text-xs cursor-pointer  px-3 py-2 underline underline-offset-2 active:bg-gray-100">Cancel</button>
                    <button type="submit" className={` ${focus === name ? "active:bg-gray-100" : ""} border-gray-300 text-xs border cursor-pointer rounded-sm px-3 py-2   `} >Save</button>
                </div>
            </form>
        </div>
    )
}

export default InputBox
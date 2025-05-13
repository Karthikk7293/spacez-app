'use client'

interface InputBoxProps {
    type: string,
    name: string,
    placeHolder: string,
    required: boolean,
    readOnly: boolean,
    state: string,
    isBlur: boolean,
    showEdit: boolean
}

const InputBox = ({ type, name, placeHolder, required, readOnly, state, showEdit }: InputBoxProps) => {

    // const [blur, setBlur]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault()

    }

    // const handleBlur = (status: boolean) => {
    //     // setBlur(status)
    // }

    return (
        <div className="flex border items-center border-b-2 my-2">
            <input
                className=" w-full p-3 !border-transparent focus:outline-none "
                type={type}
                name={name}
                placeholder={placeHolder}
                required={required}
                readOnly={readOnly}
                value={state}
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
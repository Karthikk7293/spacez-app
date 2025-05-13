'use client'

interface InputBoxProps {
    type: string,
    name: string,
    placeHolder: string,
    required: boolean,
    readOnly: boolean,
    state: string,
    isBlur: boolean
}

const InputBox = ({ type, name, placeHolder, required, readOnly, state }: InputBoxProps) => {

    // const [blur, setBlur]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault()
    }

    // const handleBlur = (status: boolean) => {
    //     // setBlur(status)
    // }

    return (
        <div>
            <input
                className="border border-b-2 w-full p-3 my-2"
                type={type}
                name={name}
                placeholder={placeHolder}
                required={required}
                readOnly={readOnly}
                value={state}
                onChange={((e) => handleChange(e))}

            />
        </div>
    )
}

export default InputBox
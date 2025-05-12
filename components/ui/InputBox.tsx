'use client'

interface InputBoxProps {
    type: string,
    name: string,
    placeHolder: string,
    required: boolean,
    readOnly: boolean,
    state: string,
    isBlur: boolean
    setState: (data: any) => void;
}

const InputBox = ({ type, name, placeHolder, required, readOnly, state, setState }: InputBoxProps) => {

    // const [blur, setBlur]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        setState(value)
    }

    // const handleBlur = (status: boolean) => {
    //     // setBlur(status)
    // }

    return (
        <div>
            <input
                className=""
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
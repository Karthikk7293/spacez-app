import { FormEvent } from "react"

export interface InputBoxProps {
    type: string
    name: string
    placeHolder: string
    required: boolean
    state: string
    showEdit: boolean
    loading: boolean
    focus: string
    setFocus: (value: string) => void
    handleChange: (value: string, name: string) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export interface UserDetailsTypes {
    name: string
    mobile: string
    email: string
}

export interface ProfileFormTypes {
    setShowReferral: (data: boolean) => void
    focus: string
    setFocus: (data: string) => void
}

export interface ReferralCardTypes {
    showReferral: boolean;
}

export interface LogoutButtonTypes {
    tooltip: string
    text: string
}
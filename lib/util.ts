import { UserDetailsTypes } from "./types"

export const handleUpdateReferralStatus = (setState: (value: boolean) => void, userData: UserDetailsTypes) => {
    if (userData.name !== "" && userData.email !== "" && userData.mobile !== "") {
        setState(true)
    } else {
        setState(false)
    }
}

export const handleUpdatePhone = (value: string): string => {
    const number = value.replace(/[^0-9+*]/g, '')
    const code = number.split("")
    code.splice(0, 3)
    const data = code.map((item, index) => {
        if (index > 4) {
            return item
        } else {
            return "*"
        }
    })
    const result = ["+", "9", "1", ...data].join("");
    return result
}
'use client'

import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { LockClosedIcon } from "@heroicons/react/24/solid"

const ReferralCard = ({ showReferral }) => {
    return (
        <div className="py-3 flex justify-between items-center">
            <div>
                <p className="text-xs">Refer a friend, Earn in cash</p>
                {showReferral
                    ? <p className="font-bold">SPACEZ-{new Date().getFullYear()}</p>
                    : <p className="font-extrabold tracking-tighter ">*********</p>}
            </div>
            <div onClick={(() => setShowReferral(!showReferral))}>
                {showReferral
                    ? <ChevronRightIcon className="size-4" />
                    : <LockClosedIcon className="size-4" />}
            </div>
        </div>
    )
}

export default ReferralCard
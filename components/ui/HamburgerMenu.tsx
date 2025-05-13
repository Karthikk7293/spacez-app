"use client";

import Link from "next/link";

export default function HamburgerMenu() {
    return (
        <nav className="absolute top-20 left-0 w-full bg-white shadow-md p-4 min-h-[92vh] ">
            <ul className="space-y-2">
                <li>
                    <Link href="/profile/partner" className="block text-gray-800 hover:text-blue-600">
                        Partner Profile
                    </Link>
                </li>
                <li>
                    <Link href="/profile/ref_lock" className="block text-gray-800 hover:text-blue-600">
                        Ref_Lock Profile
                    </Link>
                </li>
                <li>
                    <Link href="/profile/user" className="block text-gray-800 hover:text-blue-600">
                        User Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
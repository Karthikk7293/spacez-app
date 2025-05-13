'use client'

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" min-h-screen">
            <Header />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    );
}
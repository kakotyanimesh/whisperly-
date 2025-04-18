"use client"
import { Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex items-center justify-between md:mx-0 mx-10">
            <Link href="/" className="flex items-center gap-2">
                <div className="bg-gradient-to-b from-[hsl(var(--primary))] via-pink-400 to-[hsl(var(--secondary))] w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">WI</span>
                </div>
                <h1 className="bg-gradient-to-r from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] bg-clip-text text-transparent inline-block text-2xl font-bold">Whisperly</h1>
            </Link>
            <p className="text-sm md:block hidden">© 2025 Echo. All rights reserved.</p>
            <div className="flex gap-5 text-pink-700">
                {/* <Link href="/"><Github  className="fill-pink-700" /></Link> */}
                <Link href="https://x.com/_animeshkakoty" target="_blank"><Twitter className="fill-pink-700" /></Link>
            </div>
        </div>
    )
}
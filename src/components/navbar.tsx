"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import Link from "next/link"

export const Navbar = () => {
    const router = useRouter()
    return (
        <div className="mt-5 flex  justify-between ">
            <Link href="/" className="flex items-center gap-2">
                <div className="bg-gradient-to-b from-[hsl(var(--primary))] via-pink-400 to-[hsl(var(--secondary))] w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">WI</span>
                </div>
                <h1 className="bg-gradient-to-r from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] bg-clip-text text-transparent inline-block text-2xl font-bold">Whisperly</h1>
            </Link>
            <Button variant="primary" size="primary" onClick={() => {
                router.push("/signin")
            }} className="md:w-28 w-20">Signin </Button>
        </div>
    )
}
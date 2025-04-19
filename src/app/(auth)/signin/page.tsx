"use client"
import { Button } from "@/components/ui/button";
import { CuteCircleOne, CutecircleTwo } from "@/components/ui/cutecircles";
import { InputBox } from "@/components/ui/inputBox";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";

export default function SignUp() {
    const [isClicked, setIsClicked] = useState(false)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const usernameRef = useRef<HTMLInputElement | null>(null)
    
    const signin = async() => {
        if(!usernameRef.current?.value || !passwordRef.current?.value){
            alert("empty fields")
            return
        }
        setIsClicked(!isClicked)
        await signIn("credentials", {
            username : usernameRef.current?.value,
            password : passwordRef.current?.value,
            redirect : false
        })

        redirect("/dashboard")
    }
    return (
        <div className="flex flex-col justify-center items-center mt-20 relative">
            <div className="absolute md:-top-24 md:right-103 -top-10 right-2">
                <CuteCircleOne/>
            </div>
            <div className="absolute md:-bottom-15 md:left-96 -bottom-27 left-4 ">
                <CutecircleTwo/>
                
            </div>
            <div className={`md:p-10 p-7 border-[1px] border-slate-700  bg-[hsl(238,58%,10%)] rounded-bl-3xl  rounded-tr-3xl  md:space-y-4 space-y-3 ${isClicked ? "opacity-40" : undefined}`}>
                <div className="text-center md:w-80 w-60 space-y-3">
                    <h1 className="md:text-3xl text-2xl ">Welcome back Brother </h1>
                    {/* <p className="md:text-sm text-xs">Enter your details to start your journey with Echo</p> */}
                </div>
                <InputBox ref={usernameRef} type="email" placeholder="your username " label="username" />
                <InputBox ref={passwordRef} type="password" placeholder="Write your password here " label="password" />
                <Button disabled={isClicked} variant={isClicked ? "secondary" : "primary"} className="w-full md:mt-10 mt-5" size="primary" onClick={signin}>{isClicked ? "signinnnn...." : "sign in"}</Button>
                <p className="text-sm text-center">Don&apos;t have an account ? <Link href="/signup" className="text-pink-500">Sign up </Link> </p>
            </div>
        </div>
    )
}
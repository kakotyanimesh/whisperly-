"use client"
import { Button } from "@/components/ui/button";
import { CuteCircleOne, CutecircleTwo } from "@/components/ui/cutecircles";
import { InputBox } from "@/components/ui/inputBox";
import { registerUserCall } from "@/lib/apicalls/user";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";

export default function SignUp() {
    const [isClicked, setIsClicked] = useState(false)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const usernameRef = useRef<HTMLInputElement | null>(null)

    const signup = async () => {
        if(!usernameRef.current?.value || !passwordRef.current?.value || !emailRef.current?.value){
            alert("empty fields ")
            return 
        }
        setIsClicked(!isClicked)

        await registerUserCall({username : usernameRef.current?.value, password : passwordRef.current?.value, email : emailRef.current?.value})
        redirect("/signin")
    }
    return (
        <div className="flex flex-col justify-center relative items-center mt-10 ">
            <div className="absolute md:-top-20 md:right-103 -top-5 right-2">
                    <CuteCircleOne/>
                </div>
                <div className="absolute md:-bottom-14 md:left-91 -bottom-10 left-4 ">
                    <CutecircleTwo/>
                    
                </div>
            <div className={`md:p-10 p-7 border border-slate-700 bg-[hsl(238,58%,10%)] rounded-bl-3xl rounded-tr-3xl md:space-y-4 space-y-3 ${isClicked ? "opacity-40" : undefined}`}>
                
                <div className="text-center md:w-96 space-y-3">
                    <h1 className="md:text-3xl text-2xl ">Create an Account</h1>
                    <p className="md:text-sm text-xs">Enter your details to start your journey with Echo</p>
                </div>
                <InputBox ref={emailRef} type="email" placeholder="suspect@email.com" label="email" />
                <InputBox ref={passwordRef} type="password" placeholder="Write your password here " label="password" />
                <InputBox ref={usernameRef} type="email" placeholder="your username " label="username" />
                <Button variant={isClicked ? "secondary" : "primary"} disabled={isClicked} className="w-full md:mt-10 mt-5" size="primary" onClick={signup}>{!isClicked ? "Signup" : "registering user "} </Button>
                <p className="text-sm text-center">Already have an account ? <Link href="/signin" className="text-pink-500">Sign in </Link> </p>

            </div>
        </div>
    )
}
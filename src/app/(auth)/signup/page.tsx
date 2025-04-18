"use client"
import { Button } from "@/components/ui/button";
import { InputBox } from "@/components/ui/inputBox";
import { registerUserCall } from "@/lib/apicalls/user";
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
        <div className="flex flex-col justify-center items-center mt-10 ">
            <div className={`md:p-10 p-7 border border-slate-700 bg-[hsl(237,29%,14%)] md:rounded-bl-3xl rounded-bl-2xl md:rounded-tr-3xl rounded-tr-2xl md:space-y-4 space-y-3 ${isClicked ? "opacity-40" : undefined}`}>
                <div className="text-center md:w-96 space-y-3">
                    <h1 className="md:text-3xl text-2xl ">Create an Account</h1>
                    <p className="md:text-sm text-xs">Enter your details to start your journey with Echo</p>
                </div>
                <InputBox ref={emailRef} type="email" placeholder="suspect@email.com" label="email" />
                <InputBox ref={passwordRef} type="password" placeholder="Write your password here " label="password" />
                <InputBox ref={usernameRef} type="email" placeholder="your username " label="username" />
                <Button variant={isClicked ? "secondary" : "primary"} disabled={isClicked} className="w-full md:mt-10 mt-5" size="primary" onClick={signup}>{!isClicked ? "Signup" : "registering user "} </Button>
            </div>
        </div>
    )
}
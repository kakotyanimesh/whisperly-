"use client"
import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"
import { useRef } from "react"

export default function SignInPage (){
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    return (
        <div>
            <input className="border-2 border-slate-600" type="text" ref={usernameRef}/>
            <input className="border-2 border-slate-600" type="text" ref={passwordRef} />
            <button onClick={async() => {
                await signIn("credentials", {
                    redirect : false,
                    username : usernameRef.current?.value,
                    password : passwordRef.current?.value
                })

                redirect("/dashboard")
            }}>signin</button>
        </div>
    )
}
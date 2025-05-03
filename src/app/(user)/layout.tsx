"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { House, Telescope , Mic, Library, User } from 'lucide-react';
import { Button } from "@/components/ui/button";


export default function RootLayout({children} : {
    children : React.ReactNode
}) {
    const params = usePathname()
    console.log(params.split("/")[1]);
    
    
    return (
        <div className="flex h-screen md:gap-10 overflow-hidden">
            <div className="md:relative md:inset-auto md:z-auto md:flex-col md:justify-start fixed bottom-0 right-0 left-0 z-50 flex items-center justify-center md:space-y-10 md:pt-5 md:bg-[hsl(237,26%,15%)] md:border-r-[1px] md:border-[hsl(240,3%,27%)] md:px-6 md:min-h-screen md:boder-t-0 border-t-1 border-white/20 bg-white/5 backdrop-blur-lg ">
                <Link href="/" className="md:flex hidden items-center gap-2 border-b-1 border-[hsl(240,3%,27%)]  pb-5 -mx-6 md:px-6">
                    <div className="bg-gradient-to-b from-[hsl(var(--primary))] via-pink-400 to-[hsl(var(--secondary))] w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">WI</span>
                    </div>
                    <h1 className="bg-gradient-to-r from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] bg-clip-text text-transparent inline-block text-2xl font-bold">Whisperly</h1>
                </Link>
                <div className="flex md:flex-col flex-row md:space-y-6 py-4 md:py-0">
                    {
                        sidebarRoutes.map((s, k) => (
                            <Link 
                            className={`px-4 py-2 transition-all ease-linear flex items-center gap-3
                            ${params.split("/")[1] === s.src.split("/")[1] ? "bg-slate-600 md:rounded-md rounded-bl-2xl rounded-tr-2xl"  : "hover:bg-slate-600 hover:rounded-tr-2xl hover:rounded-bl-2xl"}    
                            `}
                            href={s.src} key={k}>
                                <span className=" text-pink-600">{s.icon}</span>
                                <span className="hidden md:flex">{s.name}</span>
                            </Link>
                        ))

                    }
                </div>
                <Button className="bottom-10 md:absolute md:block hidden">Become an Artist </Button>
            </div>
            <div className="pt-10 px-5 md:mx-0 flex-1 overflow-y-auto h-full">
                
                {children}
            </div>
        </div>
    )
}


const sidebarRoutes = [
    {name : "Dashboard", icon : <House strokeWidth={1.5}/>, key : 0 ,src : "/dashboard"},
    {name : "Explore", icon : <Telescope strokeWidth={1.5}/>, key : 1,src : "/explore"},
    {name : "libaray", icon : <Mic strokeWidth={1.5}/>, key : 2 ,src :"/library"},
    {name : "voice", icon : <Library strokeWidth={1.5}/>, key : 3,src : "/voice"},
    {name : "Profile", icon: <User strokeWidth={1.5} /> ,key : 4, src : "/profile"}
]
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { House, Telescope , Mic, Library  } from 'lucide-react';


export default function RootLayout({children} : {
    children : React.ReactNode
}) {
    const params = usePathname()
    console.log(params);
    
    return (
        <div className="flex md:gap-10">
            <div className="md:relative md:inset-auto md:z-auto md:flex-col md:justify-start fixed bottom-0 right-0 left-0 z-50 flex items-center justify-center border-t-2 md:space-y-10 md:pt-5 bg-[hsl(237,26%,15%)] md:border-r-[1px] border-[hsl(240,3%,27%)] md:px-8 md:min-h-screen md:boder-t-0">
                <Link href="/" className="md:flex hidden items-center gap-2 border-b-1 border-[hsl(240,3%,27%)]  pb-5 -mx-8 px-10">
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
                            ${params === s.src ? "bg-slate-600 rounded-2xl"  : "hover:bg-slate-600 hover:rounded-tr-2xl hover:rounded-bl-2xl"}    
                            `}
                            href={s.src} key={k}>
                                <span className=" text-pink-600">{s.icon}</span>
                                <span className="hidden md:flex">{s.name}</span>
                            </Link>
                        ))

                    }
                </div>
            </div>
            <div className="pt-10">
                {children}
            </div>
        </div>
    )
}


const sidebarRoutes = [
    {name : "Dashboard", icon : <House strokeWidth={1.5}/>, key : 0 ,src : "/dashboard"},
    {name : "Explore", icon : <Telescope strokeWidth={1.5}/>, key : 1,src : "/explore"},
    {name : "libaray", icon : <Mic strokeWidth={1.5}/>, key : 2 ,src :"/library"},
    {name : "voice", icon : <Library strokeWidth={1.5}/>, key : 3,src : "/voice"}
]
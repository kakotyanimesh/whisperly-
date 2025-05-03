"use client"

import { ReactNode } from "react"
import { Card } from "./displayCard"
import { motion } from "motion/react"
import { easeOut } from "motion"

interface UserDetailedCardProps {
    title : string,
    desc : string,
    p : string,
    Icon : ReactNode
}


const childVariantMotion = {
    initial : {
        y : 0
    },
    hover : {
        y : -2, transition : {easeOut, duration : 0.3}
    }
}


export default function UserDetailedCard({title, desc, p, Icon} : UserDetailedCardProps) {
    return (
        <Card>
            <motion.div initial="initial" whileHover={"hover"} className="relative group"> 
                <div className="md:space-y-2 space-y-1">
                    <h1 className="italic">{title}</h1>
                    <p className="text-2xl">{desc}</p>
                    <p className="text-sm">{p}</p>
                </div>
                <motion.div variants={childVariantMotion} className="absolute top-0 right-0 bg-gradient-to-br from-[hsl(var(--primary))] via-pink-600 to-[hsl(var(--secondary))] w-10 h-10 flex items-center justify-center rounded-full group-hover:shadow-md group-hover:shadow-pink-400">
                    {Icon}
                </motion.div>
            </motion.div>
        </Card>
    )
}
"use client"
import { easeIn } from "motion"
import { motion } from "motion/react"

const variants = {
    initial : {rotate : 0},
    hover : {y : -2, rotate: 2, transition : {delay : 0.2, easeIn}}
}

export default function TextCard({quote, author} : {
    quote : string,
    author : string
}){
    return (
        <motion.div initial="initial" whileHover="hover"  className="md:mx-56 space-y-5 bg-gradient-to-tr from-slate-700 to-zink-900 backdrop-blur-2xl border-white/15 border-1 hover:shadow-xs hover:shadow-white/50 w-full md:p-10 p-4 rounded-bl-2xl rounded-tr-2xl hover:rounded-br-2xl hover:rounded-tl-2xl transition-all ease-linear">
            <h1 className="md:text-xl text-sm">{quote}</h1>
            <motion.p variants={variants} className="md:text-lg text-xs before:bg-gradient-to-br before:from-[hsl(var(--primary))]/15 before:via-pink-600/40 before:to-[hsl(var(--secondary))]/15 before:absolute inline-block relative before:-inset-1 before:block before:skew-6">
                <span className="relative">{author}</span>
            </motion.p>
        </motion.div>
    )
}
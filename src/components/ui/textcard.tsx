"use client"
import { easeIn } from "motion"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

const variants = {
    initial : {rotate : 0},
    hover : {y : -2, rotate: 2, transition : {delay : 0.2, easeIn}}
}

const textAppearingAnimation = {
    hidden : {
        opacity : 0,
        y : 10
    },
    visible : {
        y : 0,
        opacity : 1
    }
}

export default function TextCard({quote, author} : {
    quote : string,
    author : string
}){
    const ref = useRef(null)
    const isInView = useInView(ref, {once : true, amount : 0.5 })
    return (
        <motion.div initial="initial" whileHover="hover"  className="md:mx-56 space-y-5 bg-gradient-to-tr from-slate-700 to-zink-900 backdrop-blur-2xl border-white/15 border-1 hover:shadow-xs hover:shadow-white/50 w-full md:p-10 p-4 rounded-bl-2xl rounded-tr-2xl hover:rounded-br-2xl hover:rounded-tl-2xl transition-all ease-linear">
            <motion.div
                ref={ref}
                initial='hidden' 
                animate={isInView ? "visible" : {}} 
                transition={{staggerChildren: 0.03}} aria-hidden className="md:text-xl text-sm">
                {quote.split(" ").map((t, k) => (
                    <span className="inline" key={k}>{t.split("").map((t, k) => (
                        <motion.span className="inline-block" variants={textAppearingAnimation} key={k}>{t}</motion.span>
                    ))}
                    {k !== quote.split(" ").length -1 && " "}
                    </span>
                ))}
            </motion.div>
            <motion.p variants={variants} className="md:text-lg text-xs before:bg-gradient-to-br before:from-[hsl(var(--primary))]/15 before:via-pink-600/40 before:to-[hsl(var(--secondary))]/15 before:absolute inline-block relative before:-inset-1 before:block before:skew-6">
                <span className="relative">{author}</span>
            </motion.p>
        </motion.div>
    )
}
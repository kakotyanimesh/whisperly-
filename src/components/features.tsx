"use client"
import Link from "next/link"
import { ReactNode } from "react"
import { motion } from "motion/react"
import { ArrowRight, LibraryBig, Sparkles, Volume2 } from "lucide-react"
import { easeIn } from "motion"

export const Features = () => {
    return (
        <div className="relative flex justify-center items-center text-center flex-col md:py-32 py-10  md:-mx-32 -mx-5">
            <div className="bg-gradient-to-br absolute inset-0 z-0 from-[hsl(var(--primary))] opacity-15 via-pink-400 to-[hsl(var(--secondary))]"></div>
            <div className="relative z-10 space-y-10">
                <div className="space-y-3">
                    <h1 className="md:text-5xl text-3xl">The Voice Sanctuary for Your Mind</h1>
                    <p className="text-sm mx-10">Whisperly helps you find balance through familiar voices that bring comfort and peace.</p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 md:mx-40 mx-5 md:gap-10 gap-4">
                    {
                        featureCardArray.map((f, k) => (
                            <FeatureCard key={k} title={f.title} desc={f.desc} icon={f.icon} src={f.src} linktag={f.linktag} middleone={f.middleone}/>
                        ))
                    } 
                </div>
            </div>
        </div>
    )
}

interface FeaturesCardProps {
    icon : ReactNode,
    title : string,
    desc : string
    linktag : string,
    src : string,
    middleone ? : boolean
}

// hover on parent and triggers the child with framer : tailwind also has that but lets use motion


const childVariant = {
    initial : {rotate : 0},
    hover : {rotate : 40, y : -1, transition : {duration : 0.3, easeIn}}
}
const FeatureCard = ({icon, title, desc, linktag, src, middleone} : FeaturesCardProps) => {
    return (
        <motion.div initial="initial" whileHover="hover" className={` group text-start space-y-5  border-1 border-white/15 transition-all ease-linear bg-white/10 shadow-md  p-6 ${middleone === true ? "hover:rounded-3xl" : "rounded-bl-3xl rounded-tr-3xl hover:rounded-br-3xl hover:rounded-tl-3xl"}`}>
            <motion.div variants={childVariant} className="bg-gradient-to-br from-[hsl(var(--primary))] via-pink-600 to-[hsl(var(--secondary))] w-10 h-10 flex items-center justify-center rounded-full group-hover:shadow group-hover:shadow-pink-400">
                {icon}
            </motion.div>
            <div className="space-y-3">
                <h1 className="md:text-xl text-sm">{title}</h1>
                <p className="md:text-sm text-xs">{desc}</p>
                <Link href={src} className="md:text-sm text-[11px] flex flex-row items-center text-shadow-xl text-pink-600 group-hover:underline underline-offset-4 transition-all ease-linear">{linktag }<span className="group-hover:opacity-100 opacity-0 transition-all ease-linear"><ArrowRight size={12}/></span></Link>
            </div>
        </motion.div>
    )
}


const featureCardArray : FeaturesCardProps[] = [
    {
        icon : <Volume2/>,
        title : "Character Voices",
        desc : "Listen to comforting quotes and wisdom from your favorite characters, voiced to perfection.",
        src : "/audio",
        linktag : "Explore the Voices",
        middleone : false
    },
    {
        icon : <LibraryBig />,
        title : "Personal Library",
        desc : "Create your own collection of quotes and meditations that speak to you and help you find balance.",
        src : "/library",
        linktag : "Start Collecting",
        middleone : true
    },
    {
        icon : <Sparkles />,
        title : "Custom Generation",
        desc : "Generate personalized content in the voice of your favorite characters to help with your specific needs.",
        src : "/ai",
        linktag : "Try generator",
        middleone : false
    }
]
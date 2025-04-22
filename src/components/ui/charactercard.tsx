"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { easeIn } from "motion"

interface CharacterCardProps {
    imagesrc : string,
    id : number,
    movie : string,
    characterName : string,
    quoteCount : string,

}

const animateVariants = {
    initial : {
        opacity : 0
    },
    animate : {
        opacity : 1,
        transition : {
            easeIn, 
        }
    }
}


export const CharacterCard = ({imagesrc, id, characterName, quoteCount , movie} : CharacterCardProps) => {
    return (
        <Link href={`/character/${id}`}>
            <motion.div initial="initial" whileHover="animate" whileTap={"animate"} className="group relative md:w-[350px] w-[280px] md:h-[250px] h-[200px] rounded-tr-3xl rounded-bl-3xl border-1 border-slate-700 hover:shadow-xs hover:shadow-pink-800">
                <Image src={imagesrc} fill className="object-cover rounded-tr-3xl rounded-bl-3xl opacity-50  w-full h-full " alt="characterImage"/>
                <div className="absolute bottom-0 md:p-2  flex flex-row justify-center text-start w-full  items-center gap-5">
                    <span className="group-hover:bg-slate-900 w-full z-10 absolute rounded-bl-2xl h-full group-hover:opacity-50 transition-all ease-linear duration-200"></span>
                    <div className="z-70">
                        <h1>{characterName}</h1>
                        <p>{movie}</p>
                    </div>
                    <h1 className="z-70 bg-[hsl(0,0%,100%)] text-black  px-2 rounded-tr-xl rounded-bl-xl ">{quoteCount} quotes </h1>
                </div>
                <motion.div variants={animateVariants} className=" text-center flex justify-center w-full items-center h-full  absolute" >
                    <h2 className="bg-gradient-to-bl from-[hsl(var(--primary))] via-pink-400 px-2 py-2 rounded-bl-2xl rounded-tr-2xl">Click to play</h2>  
                </motion.div>
            </motion.div>
        </Link>
    )
}
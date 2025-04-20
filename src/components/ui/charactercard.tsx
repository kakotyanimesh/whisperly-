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
                <div className="absolute bottom-5 left-10 group-hover:opacity-20 ease-linear transition-all">
                    <h1>{characterName}</h1>
                    <p>{movie}</p>
                </div>
                <h1 className="bottom-10 group-hover:opacity-20 ease-linear transition-all right-10 bg-[hsl(240,6%,79%)] text-black  px-2 rounded-tr-xl rounded-bl-xl absolute">{quoteCount} quotes </h1>
                <motion.div variants={animateVariants} className=" text-center flex justify-center w-full items-center h-full  absolute" >
                    <h2 className="bg-gradient-to-bl from-[hsl(var(--primary))] via-pink-400 px-2 py-2 rounded-bl-2xl rounded-tr-2xl">Click to play</h2>  
                </motion.div>
            </motion.div>
        </Link>
    )
}
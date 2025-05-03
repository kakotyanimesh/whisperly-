"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { Card } from "./displayCard"
import { Circle, CuteCircleOne } from "./cutecircles"

interface CharacterCardProps {
    imagesrc : string,
    id : number,
    movie : string,
    characterName : string,
    quoteCount : string,

}

const animateChild = {
    initial : {
        opacity : 0
    },
    animate : {
        opacity : 1,
        y : -8,
        transition : {
            ease : "easeIn",
            duration : 0.4 
        }
    }
}

const animateParent = {
    initial : {
        y : 0
    },
    animate : {
        y : -5,
        transition : {
            ease : "easeIn",
            duration : 0.4
        }
    }

}


export const CharacterCard = ({imagesrc, id, characterName, quoteCount , movie} : CharacterCardProps) => {
    return (
        <Link href={`/explore/${id}`}>
            {/* <motion.div initial="initial" variants={animateParent} whileHover="animate" whileTap={"animate"} className="group relative md:w-[350px] w-[340px] md:h-[250px] h-[200px] rounded-tr-3xl rounded-bl-3xl border-1 border-slate-700 hover:shadow-sm hover:shadow-pink-800">
                <Image src={imagesrc} fill className="object-cover rounded-tr-3xl rounded-bl-3xl opacity-50  w-full h-full " alt="characterImage"/>
                <div className="absolute bottom-0 md:p-2  flex flex-row justify-center text-start w-full  items-center gap-5">
                    <span className="group-hover:bg-slate-900 w-full z-10 absolute rounded-bl-2xl h-full group-hover:opacity-50 transition-all ease-linear duration-200"></span>
                    <div className="z-70">
                        <h1>{characterName}</h1>
                        <p>{movie}</p>
                    </div>
                    <h1 className="z-70 bg-[hsl(0,0%,100%)] text-black  px-2 rounded-tr-xl rounded-bl-xl ">{quoteCount} quotes </h1>
                </div>
                <motion.div variants={animateChild} className=" text-center flex justify-center w-full items-center h-full  absolute" >
                    <h2 className="bg-gradient-to-bl from-[hsl(var(--primary))] via-pink-400 px-2 py-2 rounded-bl-2xl rounded-tr-2xl">Click to play</h2>  
                </motion.div>
            </motion.div> */}
            <Card  className="relative w-90 group h-[450px] space-y-10">
                <div className="w-full relative h-[250px]"> {/* Make height explicit */}
                    <Image
                        src={imagesrc}
                        alt="Player image"
                        fill
                        className="object-cover rounded-md group-hover:shadow-md group-hover:shadow-pink-600 transition-all ease-linear"
                    />
                </div>
                <CuteCircleOne className="absolute size-20 right-10 bottom-20 "/>
                <div className="space-y-2">
                    <h1 className="text-2xl bg-gradient-to-r from-[hsl(var(--primary))] via-white to-[hsl(var(--secondary))] bg-clip-text text-transparent inline-block italic">{characterName}</h1>
                    <div className="w-full bg-gradient-to-r from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] h-[1px]"></div>
                    <div className="flex bg-gradient-to-r from-[hsl(var(--primary))] via-white to-[hsl(var(--secondary))] bg-clip-text text-transparent flex-row justify-between">
                        <h1><span className="text-sm text-white">from</span> <br /> <span>{movie}</span></h1>
                        <p><span className="text-sm text-white">Qutes</span> <br /> <span>{quoteCount}</span></p>
                    </div>
                </div>
            </Card>
        </Link>
    )
}
"use client"

import { AudioCard } from "./ui/audiocard";
import { Button } from "./ui/button";
import { motion } from "motion/react";


export default function HomePage(){
    
    return (
        <div className="flex items-center flex-col  mt-40 text-center">
            <div className="space-y-7 relative md:mx-30">
                <motion.div className="absolute md:left-5 md:-top-15 -top-21 bg-gradient-to-bl from-[hsl(var(--primary))] via-pink-400 opacity-20 to-[hsl(var(--secondary))] md:size-52 size-42 md:rounded-tr-[5rem] rounded-tr-[3rem] md:rounded-bl-[5rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl">

                </motion.div>
                <div className="absolute md:right-24 right-2 md:top-49 top-46 bg-gradient-to-br from-[hsl(var(--primary))] via-pink-400 opacity-20 to-[hsl(var(--secondary))] size-42  rounded-t-full rounded-br-full">

                </div>
                <motion.h1 initial={{y : 5, opacity : 0}} whileInView={{y : 0, opacity : 1, transition: {duration : 0.2, ease : "circOut"}}} className="md:text-7xl text-4xl">Whispers of Peace from Your Favorite 
                    <span className="bg-gradient-to-r font-[50] from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] bg-clip-text text-transparent"> Voices </span>
                </motion.h1>
                <h1 className="md:text-7xl text-4xl sr-only">Whispers of Peace from Your Favorite 
                    <span className="bg-gradient-to-r font-[50] from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] bg-clip-text text-transparent"> Voices </span>
                </h1>
                {/* <div className="md:text-7xl text-4xl">
                    <PullUpText text="Whispers of Peace from Your Favorite"/>
                    <span className="bg-gradient-to-r font-[50] from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] bg-clip-text text-transparent"> Voices </span>

                </div> */}
                <motion.p 
                    initial={{y : 7, opacity : 0}} whileInView={{y : 0, opacity : 1, transition: {duration : 0.3, ease : "circOut"}}}
                className="md:mx-40 md:text-xl mx-2 text-sm text-center">Listen softly. Breathe deeply. Feel connected. Your favorite characters will whisper to you, bringing comfort and peace with every word.</motion.p>
                <motion.div 
                 initial={{y : 8, opacity : 0}} whileInView={{opacity : 1, y : 0, transition : {duration : 0.5, ease : "circOut"}}}
                 className="flex md:flex-row flex-col items-center gap-5 justify-center md:mx-0 mx-10">
                    <Button variant="primary" size="primary" className="w-full md:w-auto">Get Started </Button>
                    <Button variant="secondary" size="secondary" className="w-full md:w-auto">Listen To Sample </Button>
                </motion.div>
                <motion.div 
                initial={{y : 10, opacity : 0}} whileInView={{y : 0, opacity :1 , transition : {duration : 0.7, ease : "circOut"}}}
                className="flex justify-center items-center mt-20">
                    <AudioCard character="MI-jeong" audioSrc="/audio/liberationaudio.mp3" source="My Liberation Notes" quote="if we had lived in seoul, would we have been different? no matter where i lived... i think i would have been the same. regardless of where i lived, my life would have been just like this."/>

                </motion.div>
            </div>      
        </div>
    )
}
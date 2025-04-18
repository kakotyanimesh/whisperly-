"use client"

import { AudioCard } from "./ui/audiocard";
import { Button } from "./ui/button";

export default function HomePage(){
    
    return (
        <div className="flex items-center flex-col  mt-40 text-center">
            <div className="space-y-7 relative md:mx-30">
                <div className="absolute md:left-5 md:-top-15 -top-21 bg-gradient-to-bl from-[hsl(var(--primary))] via-pink-400 opacity-20 to-[hsl(var(--secondary))] md:size-52 size-42 md:rounded-tr-[5rem] rounded-tr-[3rem] md:rounded-bl-[5rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl">

                </div>
                <div className="absolute md:right-24 right-2 md:top-49 top-46 bg-gradient-to-br from-[hsl(var(--primary))] via-pink-400 opacity-20 to-[hsl(var(--secondary))] size-42  rounded-t-full rounded-br-full">

                </div>
                <h1 className="md:text-7xl text-4xl">Whispers of Peace from Your Favorite 
                    <span className="bg-gradient-to-r font-[50] from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] bg-clip-text text-transparent"> Voices </span>
                </h1>
                <p className="md:mx-40 md:text-xl mx-2 text-sm text-center">Listen softly. Breathe deeply. Feel connected. Your favorite characters will whisper to you, bringing comfort and peace with every word.</p>
                <div className="flex md:flex-row flex-col items-center gap-5 justify-center md:mx-0 mx-10">
                    <Button variant="primary" size="primary" className="w-full md:w-auto">Get Started </Button>
                    <Button variant="secondary" size="secondary" className="w-full md:w-auto">Listen To Sample </Button>
                </div>
                <div className="flex justify-center items-center mt-20">
                    <AudioCard character="MI-jeong" audioSrc="/audio/liberationaudio.mp3" source="My Liberation Notes" quote="if we had lived in seoul, would we have been different? no matter where i lived... i think i would have been the same. regardless of where i lived, my life would have been just like this."/>

                </div>
            </div>      
        </div>
    )
}
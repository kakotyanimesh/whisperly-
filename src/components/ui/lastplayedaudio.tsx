import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { Play  } from "lucide-react"
// import { useAudioContext } from "@/context/audioPlayerContext";

export const healingCardVariants = cva(
    "flex bg-gradient-to-tr flex-row justify-between from-slate-700 to-zink-900 rounded-tr-4xl rounded-bl-4xl border-1 border-zinc-700 ",
    {
        variants : {
            size : {
                default : "h-4xl md:w-[75rem]",
                sm : "h-3xl"
            }
        },
        defaultVariants : {
            size : "default"
        }
    }
)

export interface HealingCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof healingCardVariants>{
    title : string,
    desc : string,
    artistName : string,
    artistImage : string,
    audioUrl ?: string
}

export const HealingCard = React.forwardRef<HTMLDivElement, HealingCardProps>((
    {
        size,
        className,
        title,
        desc,
        artistImage,
        artistName,
    }, ref
) => {
    // const {play, pause, currentSrc, isPlaying } = useAudioContext()
    return (
        <div ref={ref} className={cn(healingCardVariants({size}), className)}>
            {/* <div className="relative" >
                <Image src={artistImage} width={200} height={200} alt="crearor Image" className="opacity-40 rounded-bl-4xl"/>
                
            </div> */}
            <h1>{artistName}</h1>
            <Image src={artistImage} width={100} height={0} alt="artist image" className="opacity-20"/>
            <div className="text-start space-y-5 pt-5 flex flex-col pl-10">
                <h1 className="text-2xl italic">&quot;{title}&quot;</h1>
                <p className="text-sm -mt-5 font-light">{desc}</p>
                <div className="flex gap-5">
                    <Button variant="musicButton" size="musicButtonSize"><Play size={15} className="fill-pink-800 text-pink-800" strokeWidth={1.5}/> Play</Button>
                    {/* <Button className="border-none bg-none" variant="musicButton" size={"musicButtonSize"}><Heart size={20} className="text-red-800" strokeWidth={1.5} /></Button>
                    <button>
                        <Heart className='text-pink-500 size-5 cursor-pointer'/>
                    </button> */}
                </div>
            </div>
        </div>
    )
})


HealingCard.displayName = "healingCard"
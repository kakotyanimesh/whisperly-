import { AudioCard } from "@/components/ui/audiocard"
import { Card } from "@/components/ui/displayCard"
import Image from "next/image"

export default async function Player({params} : {params : {id : string}}){

    const {id} = await params
    console.log(id);
    
    return (
        <div className="flex gap-7 h-screen overflow-hidden ">
            <Card className="w-90 group h-[630px] space-y-10">
                <div className="w-full relative h-[300px]"> {/* Make height explicit */}
                    <Image
                        src="https://i.pinimg.com/736x/22/c9/fd/22c9fd09af9b520ca3678e441be77723.jpg"
                        alt="Player image"
                        fill
                        className="object-cover rounded-md group-hover:shadow-md group-hover:shadow-pink-600 transition-all ease-linear"
                    />
                </div>
                <div className="space-y-2">
                    <div className="space-y-2 bg-gradient-to-r from-[hsl(var(--primary))] via-pink-100 to-[hsl(var(--secondary))] bg-clip-text text-transparent inline-block">
                        <h1 className="text-2xl italic">YOEM MI JEONG</h1>
                        <h1 className="text-sm">MY LIBERATION NOTES </h1>
                        <p className="text-sm">A legendary Jedi Master with immense wisdom and power. Despite his small size, Yoda was widely known as the most powerful Jedi Master in the galaxy.</p>
                    </div>
                    <div className="w-full bg-gradient-to-r from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] h-[1px]">
                    </div>
                    <div className="flex bg-gradient-to-r from-[hsl(var(--primary))] via-pink-100 to-[hsl(var(--secondary))] bg-clip-text text-transparent flex-row justify-between">
                        <h1>from <br /> <span>MY LIBERATION NOTES</span></h1>
                        <p>Quotes <br /> <span>10</span></p>
                    </div>
                </div>
            </Card>
            <div className="flex-1 overflow-y-auto h-full scrollbar-hide space-y-10">
                <AudioCard character="MI-jeong" audioSrc="/audio/liberationaudio.mp3" source="My Liberation Notes" quote="if we had lived in seoul, would we have been different? no matter where i lived... i think i would have been the same. regardless of where i lived, my life would have been just like this."/>
                <AudioCard character="MI-jeong" audioSrc="/audio/liberationaudio.mp3" source="My Liberation Notes" quote="if we had lived in seoul, would we have been different? no matter where i lived... i think i would have been the same. regardless of where i lived, my life would have been just like this."/>
                <AudioCard character="MI-jeong" audioSrc="/audio/liberationaudio.mp3" source="My Liberation Notes" quote="if we had lived in seoul, would we have been different? no matter where i lived... i think i would have been the same. regardless of where i lived, my life would have been just like this."/>
                <AudioCard character="MI-jeong" audioSrc="/audio/liberationaudio.mp3" source="My Liberation Notes" quote="if we had lived in seoul, would we have been different? no matter where i lived... i think i would have been the same. regardless of where i lived, my life would have been just like this."/>
            </div>

        </div>
    )
    
}

import { CharacterCard } from "@/components/ui/charactercard"
import { auth } from "../../../../auth"
import UserDetailedCard from "@/components/ui/userdetailedCard"
import { Heart, Play, Stars } from "lucide-react"
import { CuteCircleOne, CutecircleTwo } from "@/components/ui/cutecircles"



export default async function dashboard() {
    const session = await auth()
    const date = new Date()
    
    return (
        <div className="space-y-10 relative">
            <CutecircleTwo className="absolute md:right-28 md:block hidden md:top-20 top-70  size-34"/>
            <CuteCircleOne className="absolute md:top-10 -top-5 right-6 md:left-40 size-34"/>
            <div>
                <h1 className="text-2xl">Welcome <br />
                    <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] bg-clip-text text-transparent inline-block">{session?.user?.name?.toUpperCase()}</span>
                </h1>
                <h1 className="text-lg">
                    {date.toLocaleString('default', {weekday : 'long'})},&nbsp;
                    {date.toLocaleString('default', {day : 'numeric'})},&nbsp;
                    {date.toLocaleString('default', {month : 'long'})},&nbsp;
                    {date.toLocaleString('default', {year : 'numeric'})}
                </h1>
            </div>
            {/* <div className="space-y-4">
                <h1>Your Last Whisper</h1>
                <AudioPlayerContextProvider>
                    <HealingCard title="Healing isn't linear. Honor your pace." artistName="Animesh Kakoty" desc="Today, remember that some days are harder than others. Take a moment to pause, breathe deeply, and allow yourself to just be without judgment." artistImage="https://i.pinimg.com/736x/22/c9/fd/22c9fd09af9b520ca3678e441be77723.jpg"/>
                </AudioPlayerContextProvider>
            </div> */}
            <div className="flex md:flex-row flex-col justify-between md:gap-10 gap-5">
                <UserDetailedCard Icon={<Play/>} title="Listening Time" desc="3h 45m" p="+12% from last week"/>
                <UserDetailedCard Icon={<Heart/>} title="Saved Quotes" desc="14" p="+12% from last week"/>
                <UserDetailedCard Icon={<Stars/>} title="Calm Score" desc="78%" p="+12% from last week"/>
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between ">
                    <h1 className="text-xl">Last Played  </h1>
                    <button className="md:mr-14 cursor-pointer text-pink-800 hover:underline transition-all ease-linear hover:underline-offset-4">show all</button>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 space-x-20 space-y-10">
                    <CharacterCard imagesrc="https://i.pinimg.com/736x/22/c9/fd/22c9fd09af9b520ca3678e441be77723.jpg" characterName="Yoem MI-jeong" movie="My Liberation Notes" quoteCount="10" id={2}/>
                    <CharacterCard imagesrc="https://i.pinimg.com/736x/22/c9/fd/22c9fd09af9b520ca3678e441be77723.jpg" characterName="Yoem MI-jeong" movie="My Liberation Notes" quoteCount="10" id={2}/>
                    <CharacterCard imagesrc="https://i.pinimg.com/736x/22/c9/fd/22c9fd09af9b520ca3678e441be77723.jpg" characterName="Yoem MI-jeong" movie="My Liberation Notes" quoteCount="10" id={2}/>
                </div>
                
            </div>
        </div>
    )
}
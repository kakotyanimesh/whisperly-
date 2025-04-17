import Link from "next/link"
import { ReactNode } from "react"
import { LibraryBig, Sparkles, Volume2 } from "lucide-react"

export const Features = () => {
    return (
        <div className="space-y-10 flex justify-center items-center text-center flex-col md:py-32 py-10 bg-[hsl(var(--muted))]/30 md:-mx-32 -mx-5">
                <div className="space-y-3">
                    <h1 className="md:text-5xl text-3xl">The Voice Sanctuary for Your Mind</h1>
                    <p className="text-sm mx-10">Whisperly helps you find balance through familiar voices that bring comfort and peace.</p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 md:mx-40 mx-5 md:gap-10 gap-4">
                    {
                        featureCardArray.map((f, k) => (
                            <FeatureCard key={k} title={f.title} desc={f.desc} icon={f.icon} src={f.src} linktag={f.linktag}/>
                        ))
                    } 
                </div>
        </div>
    )
}

interface FeaturesCardProps {
    icon : ReactNode,
    title : string,
    desc : string
    linktag : string,
    src : string
}

const FeatureCard = ({icon, title, desc, linktag, src} : FeaturesCardProps) => {
    return (
        <div className="group text-start space-y-5 bg-[hsl(var(--primary))]/5 border-[hsl(var(--primary))]/30 border-1  p-6 rounded-2xl ">
            <div className="bg-gradient-to-br from-[hsl(var(--primary))] via-pink-600 to-[hsl(var(--secondary))] w-10 h-10 flex items-center justify-center rounded-full">
                {icon}
            </div>
            <div className="space-y-3">
                <h1 className="text-xl">{title}</h1>
                <p className="text-sm">{desc}</p>
                <Link href={src} className="text-sm text-pink-600 ">{linktag }</Link>
            </div>
        </div>
    )
}


const featureCardArray : FeaturesCardProps[] = [
    {
        icon : <Volume2/>,
        title : "Character Voices",
        desc : "Listen to comforting quotes and wisdom from your favorite characters, voiced to perfection.",
        src : "/audio",
        linktag : "Explore the Voices"
    },
    {
        icon : <LibraryBig />,
        title : "Personal Library",
        desc : "Create your own collection of quotes and meditations that speak to you and help you find balance.",
        src : "/library",
        linktag : "Start Collecting"
    },
    {
        icon : <Sparkles />,
        title : "Custom Generation",
        desc : "Generate personalized content in the voice of your favorite characters to help with your specific needs.",
        src : "/ai",
        linktag : "Try generator"
    }
]
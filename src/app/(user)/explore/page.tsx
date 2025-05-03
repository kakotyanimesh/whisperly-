import { Characterdiv } from "@/components/characterdiv";
import { Quotediv } from "@/components/quotediv";
import { InputBox } from "@/components/ui/inputBox";
import { SwitchTab } from "@/components/ui/switchtab";
import { Search } from "lucide-react";


export default async function Explorer() {
    return (
        <div className="space-y-10 justify-self-center">
            <div className="justify-self-center space-y-4 text-center">
                <h1 className="md:text-5xl text-3xl bg-gradient-to-r from-[hsl(var(--primary))] via-pink-300 to-[hsl(var(--secondary))] bg-clip-text text-transparent inline-block">Explore</h1>
                <p className="md:text-xl text-sm">Discover characters and quotes from your favorite movies and series.</p>
                <InputBox placeholder="search for movies, quotes...." variant={"default"} label="" type="search" className="" icon={<Search size={20}/>}/>
            </div>
            <SwitchTab childrens={[{title : "Character", key : 1, component:<Characterdiv/>}, {title : "Quote", key : 2, component:<Quotediv/>}]} className="md:w-[500px] w-[350px] justify-self-center "/>
            
        </div>
    )
}
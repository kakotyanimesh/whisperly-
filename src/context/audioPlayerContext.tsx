"use client"
import { createContext, ReactNode, useContext, useRef, useState } from "react";

interface audioPlayerContextProps {
    play : (src : string) => void
    pause : () => void,
    liked : () => void
    isPlaying : boolean,
    currentSrc : string |  null
}

const audioPlayerContext = createContext<audioPlayerContextProps | undefined>(undefined)


export const AudioPlayerContextProvider = ({children} : {children : ReactNode}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSrc, setCurrentSrc] = useState<string | null>(null)
    
    const play = (src : string) => {
        if(!audioRef.current){
            audioRef.current = new Audio()
        }

        if(audioRef.current.src !== src){
            audioRef.current.src = src
        }

        audioRef.current.play()
        setCurrentSrc(src)
        setIsPlaying(true)
    }

    const pause = () => {
        if(audioRef.current?.src){
            audioRef.current.pause()
            setIsPlaying(false)
        }
    }
    
    const liked = () => {
        alert("liked for now ")
    }
    return (
        <audioPlayerContext.Provider value={{play, pause, isPlaying, currentSrc, liked}} >
            {children}
        </audioPlayerContext.Provider>
    )
}



// custom hook to create the context

export const useAudioContext = () => {
    const context = useContext(audioPlayerContext)

    if(!context) throw new Error("You can't use it every where")
    
    return context
}
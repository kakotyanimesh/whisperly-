import { AudioLines, Heart, Pause, Play  } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';


interface AudioCardProps {
    character : string
    source : string
    quote ?: string
    audioSrc ?:string,
    duration ?: string

}


export const AudioCard = ({character, source, quote, audioSrc, duration} : AudioCardProps) => {
    const audiRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const playAudio = () => {
        if(!audiRef.current) return
        if(isPlaying){
            audiRef.current.pause()
        } else {
            audiRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
      audiRef.current = new Audio(audioSrc)
    
      return () => {
        audiRef.current?.pause()
        audiRef.current = null
      }
    }, [audioSrc])
    
    return (
        <div className='space-y-3 bg-gradient-to-tr from-slate-700 to-zink-900 rounded-xl border-1 border-zinc-700 md:w-xl md:px-10 px-5 pt-5 pb-4'>
            {/* first div  */}
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row  justify-between gap-2 text-start'>
                    <div className='bg-gradient-to-bl from-[hsl(var(--primary))] via-pink-400 flex items-center justify-center md:size-10 size-7 rounded-full  to-[hsl(var(--secondary))]'>
                         <AudioLines/>

                    </div>
                    <div className='md:text-sm text-xs' >
                        <h3>{character}</h3>
                        <p>{source}</p>
                    </div>
                </div>
                <div>
                    <Heart className='text-pink-500 size-5 cursor-pointer'/>
                </div>
            </div>
            <blockquote  className='text-pink-200 md:text-base text-sm'>&quot; {quote} &quot;</blockquote >
            <div className='flex justify-between items-center border-t border-slate-400 pt-3 md:-mx-10 -mx-5 md:px-10 px-5'>
                <h1>{duration}</h1>
                <button onClick={playAudio} className='bg-gradient-to-tr cursor-pointer from-[hsl(var(--primary))] to-[hsl(var(--secondary))] via-pink-400 flex items-center justify-center md:size-10 size-10 rounded-full   ' >
                    {
                        isPlaying ?<Pause /> :<Play className=''/>
                    }
                </button>
            </div>
        </div>
    )
}
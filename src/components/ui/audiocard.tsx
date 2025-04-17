import { AudioLines, Heart, Pause, Play  } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';


interface AudioCardProps {
    character : string
    source : string
    quote ?: string
    audioSrc ?:string

}


export const AudioCard = ({character, source, quote, audioSrc} : AudioCardProps) => {
    const audiRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setprogress] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    

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
      const audio = audiRef.current
      if(!audio) return

      const updateProgress = () => {
        const current = audio.currentTime
        const total = audio.duration

        setprogress((current/total) * 100)
      }

      audio.addEventListener("timeupdate", updateProgress)

      return () => {
        audio.removeEventListener("timeupdate", updateProgress)
      }
    }, [])

    const sliderAudio = (e : React.MouseEvent<HTMLDivElement>) => {
        // e has object and having properties 
        // console.log(e);
        // console.log(e.target.value)
        if(!audiRef.current) return
        const sliderWidth = e.currentTarget.clientWidth
        const clickedPositon = e.nativeEvent.offsetX
        const clickedInpercentage = (clickedPositon / sliderWidth) * 100
        
        const audioDuration = audiRef.current.duration
        audiRef.current.currentTime = (clickedInpercentage / 100) * audioDuration
        setprogress(clickedInpercentage)
    }
    return (
        <div className='space-y-3 bg-gradient-to-tr from-slate-700 to-zink-900 rounded-xl border-1 border-zinc-700 md:w-xl md:px-10 px-5 pt-5 pb-4'>
            {/* first div  */}
            <audio src={audioSrc} preload='auto' ref={audiRef}></audio>
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
                <button onClick={() => setIsLiked(!isLiked)}>
                    {
                        isLiked ? <Heart className='text-pink-500 fill-pink-500 size-5 cursor-pointer'/> : <Heart className='text-pink-500 size-5 cursor-pointer'/>
                    }
                </button>
            </div>
            <blockquote  className='text-pink-200 md:text-base text-sm'>&quot; {quote} &quot;</blockquote >
            <div className='flex justify-between gap-5 items-center border-t border-red-400 pt-3 md:-mx-10 -mx-5 md:px-10 px-5'>
                <div onClick={sliderAudio} className='w-full h-2 bg-[hsl(var(--primary))] rounded cursor-pointer relative'>
                    <div className='h-2 bg-pink-400 rounded absolute top-0 left-0' style={{width : `${progress}%`}}>

                    </div>
                </div>
                {/* <h1>0.00 / {audiRef.current?.duration}</h1>  */}
                <button onClick={playAudio} className='bg-gradient-to-tr cursor-pointer from-[hsl(var(--primary))] to-[hsl(var(--secondary))] via-pink-400 flex items-center justify-center md:size-10 size-10 rounded-full   ' >
                    {
                        isPlaying ?<Pause /> :<Play className=''/>
                    }
                </button>
            </div>
        </div>
    )
}
import { cn } from "@/config/tw_merge"
import React from "react"

// export const CuteCircleOne = () => {
//     return (
//         <div className="bg-gradient-to-br from-[hsl(var(--primary))] via-pink-400 opacity-20 to-[hsl(var(--secondary))] size-30 md:size-42  rounded-t-full rounded-br-full">

//         </div>
//     )
// }

export const CuteCircleOne =  React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({
    className, ...props
}, ref) => {
    return (
        <div ref={ref} className={cn("bg-gradient-to-br from-[hsl(var(--primary))] via-pink-400 opacity-20 to-[hsl(var(--secondary))]   rounded-t-full rounded-br-full", className)} {...props}>

        </div>
    )
})

CuteCircleOne.displayName = "div"

export const CutecircleTwo = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({
    className, ...props
}, ref) => {
    return (
        <div className={cn("bg-gradient-to-bl from-[hsl(var(--primary))] via-pink-400 opacity-20 to-[hsl(var(--secondary))] md:rounded-tl-[4rem] rounded-tl-[2rem] md:rounded-br-[4rem] rounded-2xl rounded-br-[2rem]", className)} ref={ref} {...props}>

        </div>
    )
})

CutecircleTwo.displayName = "circledivtwo"
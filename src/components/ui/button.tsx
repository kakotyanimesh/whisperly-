import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../lib/cn";

export const buttonVariants = cva(
    "flex justify-center items-center  transition-colors ease-linear cursor-pointer  ",
    {
      variants : {
        variant : {
            primary : "transition-all ease-linear bg-gradient-to-br from-[hsl(var(--primary))] via-pink-500  to-[hsl(var(--secondary))] text-white hover:bg-gradient-to-tr md:rounded-br-2xl md:hover:rounded-br-xl md:hover:rounded-bl-xl rounded-br-xl md:rounded-tl-2xl hover:rounded-tl-xl md:hover:rounded-tr-xl rounded-tl-xl",
            secondary : "border border-slate-600 text-slate-50 bg-gradient-to-tr from-slate-700 to-zink-900 hover:text-pink-500 md:rounded-tr-2xl md:hover:rounded-tr-xl hover:rounded-tl-xl rounded-tr-xl md:rounded-bl-2xl md:hover:rounded-bl-xl hover:rounded-br-xl transition-all ease-linear rounded-bl-xl",
            loading : ""
        },
        size : {
            primary : "h-10 text-md md:px-7 px-3 font-medium ",
            secondary : "px-10 h-10 text-sm font-medium "
        }
      },
      defaultVariants : {
        variant : "secondary",
        size : "secondary"
      }  
    },
)


export interface ButtonPros extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{}

export const Button = React.forwardRef<HTMLButtonElement, ButtonPros>(({className, variant, size, ...props}, ref) => {
    return (
        <button
            className={cn(buttonVariants({variant, size}), className)}
            {...props}
            ref={ref}
        />
    )
}) 


Button.displayName = "Button"
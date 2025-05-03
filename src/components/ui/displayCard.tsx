import { cn } from "@/config/tw_merge";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export const cardVariants = cva(
    "rounded-bl-3xl rounded-tr-3xl hover:rounded-br-3xl hover:rounded-tl-3xl transition-all ease-linear border-1 border-slate-700 hover:shadow-sm hover:shadow-pink-800 w-full ",
    {
        variants : {
            variants : {
                primary : "bg-[hsl(237,26%,15%)]/50 border-1 border-zinc-700 text-pink-200",
                secondary : ""
            },
            sizes : {
                md : "px-10 py-6",
                sm : ""
            }
            
        },
        defaultVariants : {
            variants : "primary",
            sizes : "md"
        }
    }
)


export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps <typeof cardVariants>{}


export const Card : React.FC<CardProps> = ({
    children,
    variants,
    className,
    sizes,
    ...props
}) => {
    return (
        <div 
            className={cn(cardVariants({variants, sizes}), className)}
            {...props}
        >
            {children}
        </div>
    )
}


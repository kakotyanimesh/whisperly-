import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const inputVarients = cva(
    "md:rounded-br-2xl rounded-br-xl md:rounded-tl-2xl rounded-tl-xl  w-full border-[1px] focus:bg-slate-900 bg-slate-800   border-slate-600  text-sm focus:ring-2 focus:outline-none focus:ring-slate-700",
    {
        variants : {
            sizes : {
                sm : "h-10 text-sm md:px-7 px-3 ",
                lg : "h-12 text-lg",
                md : "h-10 text-base"
            },
            variant : {
                default : "",
                newtype : "ring-2 ring-red-400"
                // types of input will be definw later 
            }
        },
        defaultVariants : {
            sizes : "sm",
            variant : "default"
        }
    }
)


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVarients>{
    label : string
}


export const InputBox = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, label, type, variant, sizes, ...props}, ref) => {
        return (
            <div className="flex flex-col text-start space-y-1">
                <label className="md:text-lg text-sm" htmlFor={label}>{label}</label>
                <input type={type} ref={ref} className={cn(inputVarients({variant, sizes}), className)} {...props} />
            </div>
        )
    }
)


InputBox.displayName = "Input"
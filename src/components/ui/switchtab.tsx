"use client"
import { cn } from "@/config/tw_merge";
import React, { ReactNode, useState } from "react";

interface SwitchTabProps extends React.HTMLAttributes<HTMLDivElement> {
  childrens: {
    title : string,
    key : number,
    component : ReactNode
  }[],
}

export const SwitchTab = React.forwardRef<HTMLDivElement , SwitchTabProps>(
  ({ childrens, className, ...props }, ref) => {
    const [key, setkey] = useState<number>(0)

    const renderTab = () => {
        switch (key) {
            case 0:
                return childrens[0].component
            case 1 : 
                return childrens[1].component
            default:
                break;
        }
    }
    
    return (
      <div className="space-y-6">
        <div
        className={cn(className, " bg-[hsl(236,26%,24%)] flex rounded-md justify-between gap-1 py-1 px-1 ")}
        {...props}
        ref={ref}
        >
            {childrens.map((s, k) => (
                <div className={`${k === key ? "bg-gradient-to-br from-[hsl(var(--primary))] via-pink-400 to-[hsl(var(--secondary))]" : ""} cursor-pointer text-center w-full  text-white rounded-md`} key={k} onClick={() => setkey(k)}>{s.title}</div>
            ))}
        </div>
        {renderTab()}
      </div>
    );
  }
);

SwitchTab.displayName = "SwitchTab";


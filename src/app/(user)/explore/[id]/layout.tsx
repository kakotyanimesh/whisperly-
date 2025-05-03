
import React from "react"

export default function RootLayout({children} : {children : React.ReactNode}){
    return (
        <div className="">
                {/* <Button variant={"transparent"} className="">Back</Button> */}
                {children}
        </div>
    )
}
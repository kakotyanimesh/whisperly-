import { motion } from "motion/react"

export const PullUpText = ({text} : {text : string}) => {
    const textSplit = text.split(" ")
    return (
        <h1 className="flex">
            {
                textSplit.map((w, k) => (
                    <motion.div key={k}>
                        {/* {w == "" ? <span>&nbsp;</span> : w} */}
                        {w} &nbsp;
                        {/* {k !== text.split(" ").length -1 && " "} */}

                    </motion.div>
                ))
            }
        </h1>
    )
}
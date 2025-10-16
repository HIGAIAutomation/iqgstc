import React from "react";
import { motion } from "motion/react"


const Header = () => {
    return (
        <header className="w-full h-20 text-center ">
            <motion.ul animate={{ rotate: 360 }} >
                <h1 className=" text-5xl unifrakturmaguntia-regular ">Stock Market Dashboard</h1>
            </motion.ul>

        </header>
    )
}
export default Header;
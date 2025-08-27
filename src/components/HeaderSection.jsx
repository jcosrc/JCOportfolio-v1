import { motion, spring } from "framer-motion"
import { a } from "framer-motion/client"
import { FiGithub, FiTwitter, FiYoutube, FiLinkedin, FiFacebook} from "react-icons/fi"

const HeaderSection = () => {
  return (
    <header className="sticky w-full z-500 transition-all duration-300 top-3">
        
        <motion.div
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.2
        }}
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between h-16 sm:h-18 md:h-20 bg-gradient-to-r from-pallete-darkblue to-gray-600 rounded-2xl">

            {/* Logo */}
            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{
                type:"spring",
                stiffness: 100,
                damping: 25,
                delay:0.3,
                duration: 1.2,
            }}
            className="flex items-center">

                <div className="h-10 w-10 rounded-xl bg-gradient-to-b from-pallete-lightblue to-gray-400 flex justify-center items-center text-white font-akaya font-bold text-xl mr-3">
                    JCO
                </div>
                {/*logo lettering */}
                <span className="text-xl font-bold bg-gradient-to-tr from-pallete-white to-pallete-lightblue bg-clip-text text-transparent">
                    JCOmotion
                </span>
            </motion.div>

            {/*Desktop Nav Bar */}
            <nav className="lg:flex hidden space-x-8">
                {["Home", "About", "Projects", "Contact"].map((item, index) => (
                    <motion.a
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.3 + index * 0.2,
                    }}
                    key={item}
                    className="relative text-white dark:text-gray-200 hover:text-pallete-orange dark:hover:text-pallete-orange font-medium transition-colors duration-300 group"
                    href="#">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pallete-orange group-hover:w-full transition-all duration-300"></span>
                    </motion.a>
                ))}
            </nav>

            {/*Icons rightNavBar Desktop View */}    
            <div className="md:flex hidden items-center space-x-4">
                <motion.a
                initial={{opacity: 0, scale:0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    delay: 1,
                    duration: 0.8
                }}
                className="text-white hover:text-pallete-orange transition-colors duration-300"
                href="#">
                    <FiGithub className="w-5 h-5" />
                </motion.a>

                <motion.a
                initial={{opacity: 0, scale:0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    delay: 1,
                    duration: 0.8
                }}
                className="text-white hover:text-pallete-orange transition-colors duration-300"
                href="#">
                    <FiFacebook className="w-5 h-5" />
                </motion.a>

                <motion.a
                initial={{opacity: 0, scale:0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    delay: 1,
                    duration: 0.8
                }}
                className="text-white hover:text-pallete-orange transition-colors duration-300"
                href="#">
                    <FiYoutube className="w-5 h-5" />
                </motion.a>
            </div>
        </motion.div>

    </header>
  )
}

export default HeaderSection
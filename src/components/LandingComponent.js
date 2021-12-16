import React from 'react';
import './Landing.css';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import * as AiIcons from 'react-icons/ai';


function Landing() {
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    const firstGreeting = {
    initial: {
        y: 0
    },
    animate: {
        y: 0,
        transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        staggerDirection: 1
        },
    },
    };

    const letter = {
    initial: {
        y: 400,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, ...transition },
    },
    };

    return (
        <div className="landing-page">
            <motion.div className="backdrop"
            initial={{opacity: 0, y: -1000}}
            animate={{opacity: 0.6, y: 0, transition: {delay: 0.7, duration: 2.5, ease: [0.26, 0.85, 0.94, 0.41]}}}>
            </motion.div>
            <div className='picture-title'>
                <div className='bottom-left'><span>Picture taken by me in Japan, 2019</span></div>
            </div>
            <div className="front-row">
                <motion.div className='greetings'>
                <motion.span initial="initial" animate="animate" className='first' variants={firstGreeting}>
                    <motion.span variants={letter}>H</motion.span>
                    <motion.span variants={letter}>i</motion.span>
                    <motion.span variants={letter}> </motion.span>
                    <motion.span variants={letter}>T</motion.span>
                    <motion.span variants={letter}>h</motion.span>
                    <motion.span variants={letter}>e</motion.span>
                    <motion.span variants={letter}>r</motion.span>
                    <motion.span variants={letter}>e</motion.span>
                    <motion.span variants={letter}>!</motion.span>     
                </motion.span>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.5, duration: 2, ease: [0.6, 0.01, -0.05, 0.9]}}}>Click here to know more about me</motion.p>
                <Link 
                    activeClass="active"
                    to="section-about-me"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}> 
                        <motion.div
                        initial={{opacity: 0, y: -200}} 
                        animate={{opacity: 1, y: 0, transition: {delay: 2.8, duration: 2, ease: [0.6, 0.01, -0.05, 0.9]}}} 
                        whileHover={{scale: 1.1}} 
                        whileTap={{scale: 0.9}}>
                            <AiIcons.AiFillDownCircle/>
                        </motion.div>
                </Link>  
                </motion.div>
            </div>
        </div>
    )
}

export default Landing

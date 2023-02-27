import React from 'react';
import { motion } from "framer-motion";
import Nav from 'react-bootstrap/Nav'

const Intro = ({
    ...props
}) => {
    const titleLine1 = "Hello I'm Upendra."
    const titleLine2 = "I am a front-end developer from Buffalo, NY."
    const titleLine3 = "I enjoy building interfaces & learning new tech."

    // variants for framer motion
    const sentence = {
        hidden: {
            opacity: 1,
        },
        visible: {
            transition: {
                opacity: 1,
                delay: .5,
                staggerChildren: 0.05
            }
        }
    }

    const letter = {
        hidden: {
            opacity: 0,
            // y: 100
        },
        visible: {
            // y: 0,
            opacity: 1,
        }
    }

    return (
        <>
            <motion.div>
                <motion.h1
                    className="helloLine"
                    initial="hidden"
                    animate="visible"
                    variants={sentence}>
                    {titleLine1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                        )
                    })}
                </motion.h1>
                <motion.h2>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: .5 }}>
                        {titleLine2}
                    </motion.div>
                </motion.h2>
                <motion.h3>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1 }}>
                        {titleLine3}
                    </motion.div>
                </motion.h3>
                <div className='downloadResumeSec'>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.5 }}>
                        <Nav.Link href="/Upendra_Kumar_Resume.pdf" target="_blank">
                            <a href="../../Upendra_Kumar_Resume.pdf" target="_blank" >
                                Download Resume
                            </a></Nav.Link>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default Intro;

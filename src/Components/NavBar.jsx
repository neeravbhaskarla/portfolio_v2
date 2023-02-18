import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import '../styles/NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const [mobile, setMobile] = useState(false);
    const handleResize = () =>{
        if(window.innerWidth < 960){
            setMobile(true)
        }
        else{
            setMobile(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        return ()=> window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className="navbar-wrapper">
            <AnimatePresence>
                <motion.div key="toggle" className='navbar-toggle'>
                    <div className="toggle-wrapper">
                        <div className="circle" onClick={()=>setToggle(!toggle)}>
                            <div className="lines">
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {
                    toggle && (
                        <>
                            <motion.div key="first-transition" 
                                className='navbar-first-transition'
                                initial={{y:"-100%"}}
                                animate={{y:"0%"}}
                                transition={{duration: 0.6, ease: "linear"}}
                                exit={{y:"-100%", transition: {delay: 1, duration: 0.5, ease: "easeInOut"}}}></motion.div>
                            
                            <motion.nav key="main-navbar"
                                className='navbar-main'
                                initial={{y:"-100%"}}
                                animate={{y:"0%"}}
                                transition={{delay: 0.7, duration: 0.5, ease: "easeInOut"}}
                                exit={{y:"-100%", transition: {delay: 0.4, duration: 0.4, ease: "linear"}}}>
                                <motion.div key="toggle" className='navbar-toggle-inside'>
                                    <div className="toggle-wrapper-inside">
                                        <div className="circle" onClick={()=>setToggle(!toggle)}>
                                            <div className="lines">
                                                <div className="line1"></div>
                                                <div className="line2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <ul className='links-list'>
                                    <li>
                                        <Link to="/home" onClick={()=>setToggle(false)}>
                                            <div className="home">
                                                <motion.div
                                                    initial={{y: "100%"}}
                                                    animate={{y: "0%"}}
                                                    transition={{delay: 1.2, duration: 0.3, ease: "easeOut"}}
                                                    exit={{y:"100%", transition:{duration: 0.3, ease: "easeOut"}}}>
                                                    HOME
                                                </motion.div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" onClick={()=>setToggle(false)}>
                                            <div className="about">
                                                <motion.div
                                                    initial={{y: "100%"}}
                                                    animate={{y: "0%"}}
                                                    transition={{delay: 1.2, duration: 0.3, ease: "easeOut"}}
                                                    exit={{y:"100%", transition:{duration: 0.3, ease: "easeOut"}}}>
                                                    ABOUT
                                                </motion.div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/projects" onClick={()=>setToggle(false)}>
                                            <div className="projects">
                                                <motion.div
                                                    initial={{y: "100%"}}
                                                    animate={{y: "0%"}}
                                                    transition={{delay: 1.2, duration: 0.3, ease: "easeOut"}}
                                                    exit={{y:"100%", transition:{duration: 0.3, ease: "easeOut"}}}>
                                                    PROJECTS
                                                </motion.div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </motion.nav>
                        </>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default NavBar
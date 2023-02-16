import React, { useState } from 'react'
import {motion} from 'framer-motion'
import '../styles/NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
            <>
                <div className="navbar-wrapper">
                    <motion.div className='navbar-toggle'>
                        <h1>---</h1>
                    </motion.div>
                    <motion.nav className='navbar-main'>
                        <ul>
                            <li><Link to="/home">HOME</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/projects">PROJECTS</Link></li>
                        </ul>
                    </motion.nav>
                </div>
            </>
    )
}

export default NavBar
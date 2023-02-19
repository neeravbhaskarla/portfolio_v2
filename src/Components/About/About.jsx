import React from 'react'
import {motion} from 'framer-motion'

import HeadingCircle from './HeadingCircle'
import './About.scss'

function About() {
  return (
    <>
      <div className="about-wrapper">
          <motion.div className="about-main-page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.8, duration: 1, ease: "linear"}}>
                    <div className="about-header">
                      <HeadingCircle/>
                    </div>
                    <div className="about-landing">
                      <div className="about-landing-title">
                        <span>ABOUT</span>  
                      </div>
                      <div className="about-landing-quote">
                        <span><q> Crafting digital solutions with code: The art and science of a software developer</q></span>
                      </div>
                    </div>
          </motion.div>
      </div>
    </>
  )
}

export default About
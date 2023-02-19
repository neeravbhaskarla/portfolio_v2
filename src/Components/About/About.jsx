import React from 'react'
import {motion} from 'framer-motion'
import './About.scss'

function About() {
  return (
    <>
      <div className="about-wrapper">
          <motion.div className="about-main-page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.8, duration: 1, ease: "linear"}}>
                      ABOUT
          </motion.div>
      </div>
    </>
  )
}

export default About
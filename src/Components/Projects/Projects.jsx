import React from 'react'
import {motion} from 'framer-motion'
import './Projects.scss'

function Projects() {
  return (
    <>
      <div className="projects-wrapper">
        <motion.div className="projects-main-page"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.8, duration: 1, ease: "linear"}}>
              <h1>ABOUT</h1>
        </motion.div>
      </div>
    </>
  )
}

export default Projects
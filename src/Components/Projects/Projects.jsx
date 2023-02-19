import React, { useEffect, useState, useRef } from 'react'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'

import {projects} from '../../Data/ProjectsData'
import './Projects.scss'

function Projects() {

  // const projects = useSelector(state => state.projects);
  const [index, setIndex] = useState(0);
  const [triggerEffect, setTriggerEffect] = useState(true);
  
  const imageRef = useRef(null);
  const descRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(()=>{
    let timeout = setTimeout(()=>{
      setTriggerEffect(false)
    }, 200)
    return ()=>clearTimeout(timeout);
  }, [triggerEffect])
  
  const incrementIndex = () =>{
    if(index < projects.length-1){
      imageRef.current.style.transform = "translateX(-105%)"
      nameRef.current.style.opacity = 0
      descRef.current.style.opacity = 0
      
      const transistionTimeout = setTimeout(()=>{
        setIndex(index+1)
        imageRef.current.style.transform = "translateX(0%)"
        nameRef.current.style.opacity = 1
        descRef.current.style.opacity = 1
        clearTimeout(transistionTimeout)
      }, 800)
    }
  }
  const decrementIndex = () =>{
    if(index > 0){
      imageRef.current.style.transform = "translateX(-105%)"
      nameRef.current.style.opacity = 0
      descRef.current.style.opacity = 0
      
      const transistionTimeout = setTimeout(()=>{
        setIndex(index-1)
        imageRef.current.style.transform = "translateX(0%)"
        nameRef.current.style.opacity = 1
        descRef.current.style.opacity = 1
        clearTimeout(transistionTimeout)
      }, 800)
    }
  }
  return (
          <div className="projects-wrapper">
            <motion.div className="projects-main-page"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.8, duration: 1, ease: "linear"}}>
                  <div className="project-header">
                    <span>PROJECTS</span>
                  </div>
                  <div className="project-main">
                    <div className="project-main-left">
                      <img src={projects[index].imageURL} alt="" ref={imageRef}/>
                    </div>
                    <div className="project-main-right">
                      <div className="content">
                        <span ref={descRef}>{projects[index].description}</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-footer">
                    <div className="project-footer-left">
                      <span ref={nameRef}>{projects[index].name}</span>
                    </div>
                    <div className="project-footer-right">
                      <button className="project-footer-right-left-arrow" 
                            onClick={decrementIndex}>
                        <svg width="65" height="38" viewBox="0 0 65 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.23198 17.2322C4.25567 18.2085 4.25567 19.7915 5.23198 20.7678L21.1419 36.6777C22.1182 37.654 23.7011 37.654 24.6774 36.6777C25.6537 35.7014 25.6537 34.1184 24.6774 33.1421L10.5353 19L24.6774 4.85786C25.6537 3.88155 25.6537 2.29864 24.6774 1.32233C23.7011 0.34602 22.1182 0.34602 21.1419 1.32233L5.23198 17.2322ZM69.0078 16.5L6.99975 16.5V21.5L69.0078 21.5V16.5Z" fill="#F5EFDF"/>
                        </svg>
                      </button>
                      <button className="project-footer-right-right-arrow"
                            onClick={incrementIndex}>
                        <svg width="65" height="38" viewBox="0 0 65 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M63.7758 20.7678C64.7521 19.7915 64.7521 18.2085 63.7758 17.2322L47.8659 1.32233C46.8896 0.34602 45.3067 0.34602 44.3304 1.32233C43.3541 2.29864 43.3541 3.88155 44.3304 4.85786L58.4725 19L44.3304 33.1421C43.3541 34.1184 43.3541 35.7014 44.3304 36.6777C45.3067 37.654 46.8896 37.654 47.8659 36.6777L63.7758 20.7678ZM0 21.5L62.0081 21.5V16.5L0 16.5L0 21.5Z" fill="#F5EFDF"/>
                        </svg>
                      </button>
                    </div>
                  </div>
            </motion.div>
        </div>
  )
}

export default Projects
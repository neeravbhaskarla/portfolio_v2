import React, {useEffect, useRef} from 'react'
import {motion} from 'framer-motion'

import HeadingCircle from './HeadingCircle'
import './About.scss'
import useWindowSize from '../../Hooks/useWindowSize'

function About() {

  // For Smooth Scroll
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();
  const data = {
      ease: 0.05,
      current: 0,
      previous: 0,
      rounded: 0
  };

  useEffect(() => {
      requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
      setBodyHeight();
  }, [size.height]);

  const setBodyHeight = () => {
      document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  };

  const skewScrolling = () => {
      data.current = window.scrollY;
      data.previous += (data.current - data.previous) * data.ease;
      data.rounded = Math.round(data.previous * 100) / 100;

      const difference = data.current - data.rounded;
      const acceleration = difference / size.width;
      // const velocity = +acceleration;
      // const skew = velocity * 7.5;
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

      requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div id="smooth-wrapper" ref={app}>
      <div id="smooth-content" ref={scrollContainer}>
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
      </div>
    </div>
  )
}

export default About
import React, {useEffect, useRef} from 'react'
import {motion} from 'framer-motion'

import HeadingCircle from './HeadingCircle'
import './About.scss'
import useWindowSize from '../../Hooks/useWindowSize'
import FooterField from '../FooterField/FooterField'

function About() {

  // For Smooth Scroll
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();
  const data = {
      ease: 0.05,
      // ease: 1,
      current: 0,
      previous: 0,
      rounded: 0
  };
  useEffect(() => {
      if(size.width>450)
          requestAnimationFrame(() => smoothScrolling());
      else{
          app.current.style.position = "relative"
      }
      
      return ()=>{
        document.body.style.height = 0
      }

  }, []);

  useEffect(() => {
      setBodyHeight();
  }, [size.height]);
  const setBodyHeight = () => {
      if(size.width>450)
          document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  };

  const smoothScrolling = () => {
      data.current = window.scrollY;
      data.previous += (data.current - data.previous) * data.ease;
      data.rounded = Math.round(data.previous * 100) / 100;

      // const difference = data.current - data.rounded;
      // const acceleration = difference / size.width;
      // const velocity = +acceleration;
      // const skew = velocity * 7.5;

      if(size.width>450){
          scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;
          requestAnimationFrame(() => smoothScrolling());
      }
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
                          <span>LIVING BY</span>  
                        </div>
                        <div className="about-landing-quote">
                          <span><q>Crafting digital solutions with code is the art and science of a software developer.</q></span>
                        </div>
                      </div> 
                      <div className="footer-div"></div>
            </motion.div>
            <div className="about-description">
              <div className="about-description-wrapper">
                <div className="wrapper-top"></div>
                <div className="content">
                  <div className="content-wrapper">
                    <div className="heading">
                      <span>ABOUT</span>
                    </div>
                    <div className="description">
                      <div className="description-wrapper">
                        <span>My name is Neerav, a passionate self-taught web developer from India. I specialize in creating innovative and engaging websites that deliver exceptional user experiences.
                              <br/><br/>
                              I am proficient in Data Structures & Algorithms, Object-Oriented Programming, Design Patterns and Full Stack Web application development, and have a solid understanding of these areas.
                              <br/><br/>
                              Experience with working on various programming languages such as Java, Python and various Frontend & Backend Frameworks.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-bottom"></div>
              </div>    
            </div>

            <FooterField path="/projects" name="Projects" requiredNav/>
        </div>
      </div>
    </div>
  )
}

export default About
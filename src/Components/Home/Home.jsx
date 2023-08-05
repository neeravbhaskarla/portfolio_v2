import React, {useRef, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'
import FooterField from '../FooterField/FooterField'
import {skills} from '../../Data/SkillsData'
import useWindowSize from "../../Hooks/useWindowSize";
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei';
import {Room} from '../Model/Room'
import "./Home.scss"

const Home = () =>{
    const [freeze, setFreeze] = useState(true)

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
        // Page freezing until animation is completed.
        const timeout = setTimeout(()=>{
            setFreeze(false)
        }, 2000)

        //Resetting the height to 0
        return ()=>{
            document.body.style.height = 0
            window.scrollTo(0, 0);
            clearTimeout(timeout)
        }
    }, []);

    useEffect(() => {
        // If the page is not freezed only the scroll (smooth-scroll) will work
        if(!freeze)
            setBodyHeight();
    }, [size.height, freeze]);

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

    // const skills = useSelector(state=>state.skills);
    const languages = skills.languages;
    const frameworks = skills.frameworks;
    const backend = skills.backend
    const DirLight = () =>{
        return(
            <>
                <directionalLight position={[50, 40, 100]} intensity={0.45}/>
                <directionalLight position={[0, 8, 8]} intensity={1} color={0xF5EFDF}/>
            </>
        )
    }
    return (
        <div id="smooth-wrapper" ref={app}>
            <div id="smooth-content" ref={scrollContainer}>
                <motion.div key="home-page"
                    className="home-wrapper"
                    initial={{opacity: 1}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.8, ease: "linear"}}}>
                    <motion.div className='room-gltf' key="room-gltf"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1.8, duration: 1, ease: "linear"}}>
                            <Canvas>
                                <OrthographicCamera makeDefault zoom={40} position={[0, 5, 15]}/>
                                <DirLight/>
                                <Room/>
                            </Canvas>
                    </motion.div>
                    <motion.div className="home-main-page"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1.8, duration: 1, ease: "linear"}}>
                        <div className="name-logo">
                            <span>Neerav Bhaskarla</span>
                        </div>
                        <motion.div className="main-role">
                            <div className="role-wrapper">
                                <span>Digital Graphic Designer</span>
                            </div>
                        </motion.div>
                        <motion.div className="footer">
                            <div className="box1">
                                <div className="box1-up">
                                    <div className="box1-up-content">
                                        <span>Passionate about creating memorable projects</span>
                                    </div>
                                </div>
                                <div className="box1-down">
                                    <div className="box1-down-content">
                                        <span>
                                            <svg width="15" height="40" viewBox="0 0 15 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.79289 42.7071C7.18342 43.0976 7.81658 43.0976 8.20711 42.7071L14.5711 36.3431C14.9616 35.9526 14.9616 35.3195 14.5711 34.9289C14.1805 34.5384 13.5474 34.5384 13.1569 34.9289L7.5 40.5858L1.84315 34.9289C1.45262 34.5384 0.819456 34.5384 0.428932 34.9289C0.0384079 35.3195 0.0384079 35.9526 0.428932 36.3431L6.79289 42.7071ZM6.5 0L6.5 42H8.5L8.5 0L6.5 0Z" fill="#F5EFDF"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="box2">
                                <div className="box2-content">
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>


                    <div className="skills-wrapper">
                        <div className="skills-top">
                        </div>
                        <div className="skills-area">
                            <div className="languages">
                                <div className="marquee-container">
                                    <div className="marquee">
                                            {
                                                languages.map((language)=>(
                                                    <span key={language}>{language}</span>
                                                ))
                                            }
                                            {
                                                languages.map((language)=>(
                                                    <span key={language}>{language}</span>
                                                ))
                                            }
                                    </div>
                                </div>
                            </div>
                            <div className="frameworks">
                                <div className="marquee-container">
                                    <div className="marquee">
                                            {
                                                frameworks.map((framework)=>(
                                                    <span key={framework}>{framework}</span>
                                                ))
                                            }
                                            {
                                                frameworks.map((framework)=>(
                                                    <span key={framework}>{framework}</span>
                                                ))
                                            }
                                    </div>
                                </div>
                            </div>
                            <div className="backend">
                                <div className="marquee-container">
                                    <div className="marquee">
                                            {
                                                backend.map((backend)=>(
                                                    <span key={backend}>{backend}</span>
                                                ))
                                            }
                                            {
                                                backend.map((backend)=>(
                                                    <span key={backend}>{backend}</span>
                                                ))
                                            }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-type">
                            <div className="skill-wrapper">
                                <span className="skill-heading">
                                    Skills
                                </span>
                                <span className="skill-types">
                                    Language / Development tools / Design tools
                                </span>
                            </div>
                        </div>
                    </div>
                    <FooterField name="About Me" path="/about" requiredNav/>
                </motion.div>
            </div>
        </div>
    )
}

export default Home;

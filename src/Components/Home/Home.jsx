import React from 'react'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'
import FooterField from '../FooterField/FooterField'
import {skills} from '../../Data/SkillsData'
import "./Home.scss"

const Home = () =>{
    // const skills = useSelector(state=>state.skills);
    const languages = skills.languages;
    const frameworks = skills.frameworks;
    const backend = skills.backend
    return (
        <>
            <div className="home-wrapper">
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
            </div>
        </>
    )
}

export default Home;
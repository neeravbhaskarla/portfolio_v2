import React, {useEffect, useState, lazy, Suspense} from 'react'
// import { gsap } from "gsap-trial";
// import ScrollTrigger from "gsap-trial/ScrollTrigger";
// import ScrollSmoother from "gsap-trial/ScrollSmoother";

import Loading from './Components/Loading/Loading'
import { motion, AnimatePresence } from 'framer-motion'
import {useDispatch, useSelector} from 'react-redux'
import { Navigate, redirect, useLocation } from 'react-router-dom';

import { MainWebsite } from './Components/MainWebsite';
import { fetchProjects } from "./Redux/ProjectSlice";
import { fetchSkills } from './Redux/SkillSlice'
import {IMAGES} from './Data/DefaultData'

import './styles/App.scss'
import NavBar from './Components/NavBar/NavBar';

const App = () =>{


  // // For Smooth Scrolling
  // const el = useRef();
  // const q = gsap.utils.selector(el);
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // useLayoutEffect(() => {
  //   let smoother = ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true
  //   });
  //   return () => {
  //     smoother.kill();
  //   };
  // }, []);


  // Redux Dispatch Events
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProjects())
    dispatch(fetchSkills())
  }, [])

  // State Selector Events
  const skillLoading = useSelector((state)=>state.skills.loading)
  const projectsLoading = useSelector((state)=>state.projects.loading)
  const [pagesLoaded, setPagesLoaded] = useState(true)

  // Checking if both API's are being fetched
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkLoading = setInterval(() => {
      if (skillLoading === false && projectsLoading === false) {
        setLoading(false);
        clearInterval(checkLoading);
      }
    }, 4000);

    return () => clearInterval(checkLoading);
  }, [skillLoading, projectsLoading]);

  const location = useLocation()

  return(
    <>
      {!loading &&
      <motion.div
        style={{position: "fixed", zIndex: 999}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.4 ,duration: 0.8}}>
          <NavBar key="navbar"/>
      </motion.div>}
      {loading && location.pathname !== '/' ? <Navigate to="/" replace/>: null}
      <div>
        <div>
            <AnimatePresence>
              {(location.pathname === '/' && loading) ? <motion.div
                    key="load"
                    style={{position: "fixed", zIndex: 999}}
                    initial={{y: "0%"}}
                    animate={{y: "0%"}}
                    exit={{y:"-100%", transition:{delay: 1 ,duration: 1,  ease:"easeOut"}}}>
                      <Loading images={IMAGES}/>
                  </motion.div>
                  :
                  <motion.div className='main-page'>
                    <MainWebsite key="main-website"/>
                  </motion.div>}
            </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default App;

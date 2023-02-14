import React, {useEffect, useState} from 'react'
import Home from './Components/Home'
import Loading from './Components/Loading'
import { motion, AnimatePresence } from 'framer-motion'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProjects } from "./Redux/ProjectSlice";
import { fetchSkills } from './Redux/SkillSlice'
import {IMAGES} from './Data/DefaultData'

import './styles/App.scss'
import './styles/Loading.scss'

const App = () =>{
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchProjects())
    dispatch(fetchSkills())
  }, [])
  
  const [loading, setLoading] = useState(true)
  const skillLoading = useSelector((state)=>state.skills.loading)
  const projectsLoading = useSelector((state)=>state.projects.loading)

  useEffect(() => {
    const checkLoading = setInterval(() => {
      if (skillLoading === false && projectsLoading === false) {
        setLoading(false);
        clearInterval(checkLoading);
      }
    }, 3000);
  
    return () => clearInterval(checkLoading);
  }, [skillLoading, projectsLoading]);

  return(
    <AnimatePresence>
      {loading?
        <motion.div 
          key="loa"
          initial={{y: "0%"}}  
          animate={{y: "0%"}}  
          exit={{y:"100%", transition:{duration: 1,  ease:"easeOut"}}}>
            <Loading images={IMAGES}/>
        </motion.div>:
        <Home/>}
    </AnimatePresence>
  )
}

export default App;
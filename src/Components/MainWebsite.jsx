import Home from './Home/Home'

import { Routes, Route, Navigate, useLocation} from "react-router-dom";
import About from './About/About';
import Projects from './Projects/Projects';
import { AnimatePresence } from 'framer-motion';


export const MainWebsite = () =>{
    const location = useLocation()
    return(
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="*" element={<Navigate to="/home" replace/>}/>
            </Routes>
        </AnimatePresence>
    )
}
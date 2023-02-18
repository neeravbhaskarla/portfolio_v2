import Home from './Home/Home'

import { Routes, Route, Navigate} from "react-router-dom";
import About from './About/About';
import Projects from './Projects/Projects';


export const MainWebsite = () =>{
    return(
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
    )
}
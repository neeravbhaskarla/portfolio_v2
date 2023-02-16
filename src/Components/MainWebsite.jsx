import Home from './Home'

import { Routes, Route, Navigate} from "react-router-dom";
import About from './About';
import Projects from './Projects';


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
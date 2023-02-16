import React, { useEffect, useState } from "react";
import {motion, usePresence} from 'framer-motion'
import '../styles/Loading.scss'

const Loading = ({images}) => {
    const [isPresent, safeToRemove] = usePresence();
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(images[index].image)
    const [startShowing, setStartShowing] = useState(false)
    let interval = null
    useEffect(()=>{
        if(startShowing && isPresent){
            interval = setTimeout(()=>{
                setIndex((index+1)%images.length)
                setImage(images[index].image)
            }, 200)
        }
        return () => clearTimeout(interval);
    }, [startShowing, index, isPresent])

    const handleAnimationComplete = () =>{
        setStartShowing(true);
    }
    return (
            <>
                <div className="loading-wrapper">
                    <div className="loading-container">
                        <motion.div 
                            key="loading-images"
                            className="loading-images"
                            initial={{clipPath: "polygon(0 0, 0 0, 100% 0, 100% 0)", opacity: 1}}
                            animate={{clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)", opacity: 1}}
                            exit={{opacity: 0, transition:{duration: 1, ease: 'easeOut'}}}
                            transition={{delay: 0.8, duration: 1.5, ease: 'linear'}}
                            onAnimationComplete={handleAnimationComplete}
                            >
                            <img src={image} alt=""/>   
                        </motion.div>
                        <div className="loading-text">
                            <motion.div 
                            key="loading-text"
                            className="text-wrapper"
                            initial={{opacity: 0, y: "20%"}}
                            animate={{opacity: 1, y: "0%"}}
                            exit={{opacity: 0, y: "-20%", transition:{duration: 0.6, ease: 'easeOut'}}}
                            transition={{delay: 1, duration: 2, ease: 'easeOut'}}
                            onAnimationComplete={safeToRemove}>
                                <h3>I build attractive and</h3>
                                <h3>manageable products</h3>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Loading;
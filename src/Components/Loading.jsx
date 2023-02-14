import React, { useEffect, useState } from "react";
import '../styles/Loading.scss'

const Loading = ({images}) => {
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(images[index].image)
    
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setImage(images[index].image)
            setIndex((index+1)%images.length)
        }, 300)

        return ()=> clearTimeout(timeout)
    }, [index])

    return (
            <>
                <div className="loading-wrapper">
                    <div className="loading-container">
                        <div className="loading-images">
                            <img src={image} alt=""/>
                        </div>
                        <div className="loading-text">
                            <div className="text-wrapper">
                                <h3>I build attractive and</h3>
                                <h3>manageable products</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Loading;
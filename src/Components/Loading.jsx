import React, { useEffect, useState } from "react";
import '../styles/Loading.scss'

// Futer to JSON fetched from API
const IMAGES = [
    {
        id: "image-1",
        image: "/assets/I1.png"
    },
    {
        id: "image-2",
        image: "/assets/I2.png"
    },
    {
        id: "image-3",
        image: "/assets/I3.png"
    }
]

const Loading = () => {
    
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(IMAGES[index].image)

    useEffect(()=>{
        setTimeout(()=>{
            setImage(IMAGES[index].image)
            setIndex((index+1)%IMAGES.length)
        }, 400)
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
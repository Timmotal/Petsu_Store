import React, { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import "./Slider.scss";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.unsplash.com/photo-1663079974166-b154aac575d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1661768662059-4c4edfd09346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1669072257062-fc92a408ff8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1670116425207-7ff3a28c6a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1670115982436-b77e392a39f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
        // why not pass currentSlide as prev
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
    };

  return ( 
    <div className="slider">
        <div 
            className="container"
            style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
            <img src={data[4]} alt="" />
        </div>

        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider



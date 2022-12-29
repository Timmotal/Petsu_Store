import React from 'react';
import Slider from "../../components/Slider/Slider";
import "../../components/FeaturedProducts/FeaturedProducts"
import "./Home.scss";
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
 
    </div>
  )
}


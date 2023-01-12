import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";


const Product = () => { 

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/4685042/pexels-photo-4685042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4685031/pexels-photo-4685031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4685034/pexels-photo-4685034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4685033/pexels-photo-4685033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=> setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e=> setSelectedImg(1)} />
          <img src={images[2]} alt="" onClick={e=> setSelectedImg(2)} />
          <img src={images[3]} alt="" onClick={e=> setSelectedImg(3)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$168</span>
        <p>
        
        </p>
       
         
      
        
      </div>
    </div>
  )
}



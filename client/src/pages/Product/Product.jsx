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
   
  )
}



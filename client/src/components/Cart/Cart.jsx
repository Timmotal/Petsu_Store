import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Pyjamas",
            desc: "Pyjamas",
            isNew: true,
            oldPrice: 410,
            price: 400,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2468231/pexels-photo-2468231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Palazo",
            isNew: true,
            desc: "Pyjamas",
            oldPrice: 510,
            price: 500,
        },
    ]




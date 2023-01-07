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

  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {data?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="item-img" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item?.desc?.substring(0,100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
 
        </div>


    </div> 
    // <div>My Beautiful Lady,
    //      Warren Buffet, Richard Feynman, Elon Musk, Albert Einstein and Now Timmortal
    //       but you can be different bro
    // </div>
  )
}



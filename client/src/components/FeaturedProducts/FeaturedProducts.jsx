import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss'

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1936854/pexels-photo-1936854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/859195/pexels-photo-859195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve",
            isNew: true,
            oldPrice: 110,
            price: 100,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat",
            isNew: true,
            oldPrice: 210,
            price: 200,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1857375/pexels-photo-1857375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Cardigan",
            isNew: true,
            oldPrice: 310,
            price: 300,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Pyjamas",
            isNew: true,
            oldPrice: 410,
            price: 400,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/6976660/pexels-photo-6976660.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            isNew: true,
            oldPrice: 510,
            price: 500,
        },
    ]

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Even the all-powerful Pointing
                    has no control about the blind texts it is an almost unorthographic
                    life One day however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                </p>
            </div>
            <div className="bottom">
                {data.map( item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>

    )
}


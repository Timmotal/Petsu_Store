import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ item }) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                {item.isNew && <span>New Season</span>}
           </div>  
            
                
            </div>
        
    </Link>
  )
}




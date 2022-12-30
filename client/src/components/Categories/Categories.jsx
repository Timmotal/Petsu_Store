import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row"></div>
        </div>



           
        </div>
    </div>
  )
}


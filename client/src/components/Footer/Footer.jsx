// import React from 'react'

// export const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// } ---------  I RAN INTO SOME BUGS BECAUSE I DID THIS

import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Children</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>

            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>

            <div className="item">
                <h1>About</h1>
                  <span>
                  </span>
            </div>
        </div>
    </div>
  )
}



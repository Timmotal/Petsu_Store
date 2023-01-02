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
                      Civility vicinity graceful is it at.
                      Improve up at to on mention perhaps raising.
                      Way building not get formerly her peculiar.
                      Up uncommonly prosperous sentiments simplicity acceptance to so.
                      Reasonable appearance companions oh by remarkably
                  </span>
            </div>

            <div className="item">
                <h1>Contact</h1>
                <span>
                      Far far away, behind the word mountains, far from the countries Vokalia
                      and Consonantia, there live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
            </div>
        </div>
    </div>
  )
}



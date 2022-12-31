import React from 'react';
import './Contacts.scss';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contacts = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>be in touch with us:</span>
            <div className="mail">
                <input type="text" placeholder='Enter Your Email...' />
                <button>join us</button>
            </div>
            <div className="icons">
           
        
         
               
          
            </div>
        </div>
    </div>
  )
}


import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
          <div className="contact">
      <div className="wrapper">        
        <span>
          <h3 className="subscribeText">HSUHK Entrepreneurship Challenge 2023 </h3> 
          <h4 className="subscribeDesc">
            Limited Perks. <br />
            Subscribe & Grab now.
          </h4>
           <p className="smallText"> 
            You will receive our announcement for new drops, 
            perks, private events & more
          </p>
        </span>
    
       

        <div className="mail">
          <input type="text" placeholder="your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      
    </div>


    </div>
    
  );
};

export default Contact;


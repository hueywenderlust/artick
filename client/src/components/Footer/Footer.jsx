import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Shops</span>
          <span>Marketplace</span>
          <span>the Projects</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <div className="col">
            <div className="row">
              <h1>About Us</h1>
              <span>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                ut labore etdolore.
              </span>
                <br />
                <br />

            </div>
            <div className="row">
                <span>get in touch with us:</span>
                <br />
              <div className="icons">
              
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <GoogleIcon />
                <PinterestIcon />
              </div>
            </div>
          </div>
          
        </div>
        {/* <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div> */}
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Artick</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

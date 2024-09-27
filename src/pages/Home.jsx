/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../main";
import { useContext } from "react";
import { toast } from "react-toastify";

const Hero = () => {
  const navigate = useNavigate();

  const { isAuthenticated, setLabel } = useContext(Context);

  const handleHomeBtn =(label) =>{
    if(isAuthenticated){
      setLabel(label);  
      navigate("/apparel");
    }
  }

  return (
    <>
      <div
        style={{
          marginTop: "200px",
        }}
        className="hero container"
      >
        <div className="banner">
          <h1
            style={{
              color: "#100ab7",
            }}
          >
            Apparel Reuse and Sustainability
          </h1>
          <p>
            Turn Your Old Apparel into a New Opportunity! Easily donate,
            recycle, or dispose of unused clothes with our hassle-free service.
            Make a positive impact by giving your wardrobe a second life today!
          </p>
        </div>
        <div className="banner">
          <img src="/section-12.jpg" alt="hero" className="animated-image " />
        </div>
      </div>

      <div name="section-1" className="biography container ">
        <div className="banner">
          <img
            src="/donate-123.png"
            alt="donate"
            className="animated-image recycle-img"
          />
        </div>
        <div className="banner">
          <h1>Share the Warmth, Change a Life</h1>
          <p className="banner-p">
            Your closet holds the key to someone’s comfort. Donate your
            gently-used clothing and transform it into hope for those in need.
            Every piece you give brings a smile and a new beginning
          </p>
          <button
            className="home-btn"
            onClick={() => {
              handleHomeBtn("Donate")
            }}
          >
            Donate
          </button>
        </div>
      </div>

      <div className="hero container">
        <div className="banner">
          <h1>Fashion Meets Sustainability</h1>
          <p>
            Tired of those worn-out clothes? Do not trash them—recycle them!
            Join the green revolution and turn your old garments into something
            new, reducing waste and preserving the planet for future
            generations.
          </p>
          <button
            className="home-btn"
            onClick={() => {
              handleHomeBtn("Recycle")
            }}
          >
            Recycle
          </button>
        </div>
        <div className="banner">
          <img src="/recycle-12.jpg" alt="hero" className="animated-image" />
        </div>
      </div>

      <div className="biography container ">
        <div className="banner">
          <img
            style={{
              width: "100%",
              height: "400px",
            }}
            src="/dispose-123.png"
            alt="dispose"
            className="animated-image"
          />
        </div>
        <div className="banner">
          <h1>Dispose Smart, Protect the Planet</h1>
          <p className="banner-p">
            Not everything can be saved, but it can still be handled
            responsibly! Dispose of your apparel safely and sustainably through
            our hassle-free service, and keep our planet clean for tomorrow.
          </p>
          <button
            className="home-btn"
            onClick={() => {
              handleHomeBtn("Dispose")
            }}
          >
            Dispose
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

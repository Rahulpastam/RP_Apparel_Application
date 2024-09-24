import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/donate-1.png",
  "/recycle-1.jpg",
  "/dispose-1.jpg" ,
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
    <div className="hero-content">
      <div className="hero-left">
        <h1 className="hero-title">Welcome to Our RP Apparels Management</h1>
        <p className="hero-description">
        Turn Your Old Apparel into a New Opportunity! Easily donate, recycle, or dispose of unused clothes with our hassle-free service. Make a positive impact by giving your wardrobe a second life today!
        </p>
      </div>
      <div className="hero-right">
        <div className="carousel-container">
          <div
            className="carousel-slide"
            style={{
              transform: `translateX(${-currentImage * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`carousel ${index}`}
                className="carousel-image"
              />
            ))}
          </div>
        </div>
        <Link to={"/actionType"}><button className="hero-button">Get Started </button></Link>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;

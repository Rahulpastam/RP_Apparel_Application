import { useState, useEffect } from "react";

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
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
    <div className="hero-content">
      <div className="hero-left">
        <h1 className="hero-title">Welcome to Our Platform</h1>
        <p className="hero-description">
          We provide top-notch services to cater to all your needs. Experience
          the best solutions with us, where innovation meets efficiency.
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
        <button className="hero-button">Get Started</button>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;

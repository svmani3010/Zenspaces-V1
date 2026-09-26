import React, { useState } from "react";
// import "./About.css"; // <-- Make sure to uncomment this when ready!
// import { assets } from "../assets/images"; // Make sure the path is correct!

import { assets } from "../assets/images"; // ✅ added

// --- SLIDE DATA ---
// Here we define the 3 slides and their specific hotspots
const slideData = [
  {
    id: 0,
    // ✅ Use the imported reference, NOT a string
    image: assets.kitchen,
    hotspots: [
      {
        id: 1,
        top: "48%",
        left: "22%",
        title: "POP Container - Slim Rectangle",
        sku: "11234800",
        price: "16.99",
      },
      {
        id: 2,
        top: "55%",
        left: "42%",
        title: "Glass Spice Jar Set",
        sku: "99887766",
        price: "24.99",
      },
    ],
  },
  {
    id: 1,
    image: assets.kitchen2,
    hotspots: [
      {
        id: 3,
        top: "65%",
        left: "30%",
        title: "Modern Minimalist Sofa",
        sku: "88442211",
        price: "899.00",
      },
    ],
  },
  {
    id: 2,
    image: assets.kitchen3,
    hotspots: [
      {
        id: 4,
        top: "40%",
        left: "75%",
        title: "Ceramic Table Lamp",
        sku: "44556677",
        price: "45.00",
      },
      {
        id: 5,
        top: "70%",
        left: "50%",
        title: "Plush Area Rug",
        sku: "11223344",
        price: "120.00",
      },
    ],
  },
];

export function AboutSection() {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Tracks which slide we are on!

  // Toggles the tooltip
  const toggleHotspot = (id) => {
    if (activeHotspot === id) {
      setActiveHotspot(null);
    } else {
      setActiveHotspot(id);
    }
  };

  // Move to the next slide
  const nextSlide = () => {
    setActiveHotspot(null); // Close any open tooltips
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  // Move to the previous slide
  const prevSlide = () => {
    setActiveHotspot(null); // Close any open tooltips
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  // Move to a specific slide when clicking an indicator dot
  const goToSlide = (index) => {
    setActiveHotspot(null);
    setCurrentSlide(index);
  };

  const activeSlideData = slideData[currentSlide];

  return (
    <section className="vision-wrapper">
      <div className="vision-content-max">
        {/* LEFT SIDE: Image Carousel & Hotspots */}
        <div className="vision-carousel-area">
          {/* Left Arrow */}
          <button className="carousel-arrow left-arrow" onClick={prevSlide}>
            {"<"}
          </button>

          {/* The Image Anchor */}
          <div className="image-anchor">
            <img
              src={activeSlideData.image}
              alt="Curated Space"
              className="main-carousel-image"
            />

            {/* Loop through the hotspots for the CURRENT slide only */}
            {activeSlideData.hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="hotspot-container"
                style={{ top: hotspot.top, left: hotspot.left }}
              >
                <button
                  className="hotspot-btn"
                  onClick={() => toggleHotspot(hotspot.id)}
                >
                  +
                </button>

                {/* Tooltip Popup */}
                <div
                  className={`hotspot-tooltip ${
                    activeHotspot === hotspot.id ? "show" : ""
                  }`}
                >
                  <h4>{hotspot.title}</h4>
                  <p>SKU: {hotspot.sku}</p>
                  <p>Price: {hotspot.price}</p>
                </div>
              </div>
            ))}

            {/* Slide Indicators (Blue Dots) */}
            <div className="carousel-indicators">
              {slideData.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button className="carousel-arrow right-arrow" onClick={nextSlide}>
            {">"}
          </button>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="vision-text-area">
          <h4 className="vision-subtitle">Zenspaces AI Vision</h4>
          <h2 className="vision-title">
            Organize physical spaces and make it accessible to all with a
            curated marketplace
          </h2>
          <p className="vision-description">
            Say goodbye to guesswork and hello to perfect spaces! Zenspaces.ai
            combines cutting-edge AI, Augmented Reality, and a vast marketplace
            to help you visualize and style your home with confidence. Discover
            curated decor from top brands and see exactly how each piece
            fits—making home design effortless and fun!
          </p>
        </div>
      </div>
    </section>
  );
}

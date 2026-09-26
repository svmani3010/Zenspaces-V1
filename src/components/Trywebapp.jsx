import React from "react";
// 1. Import your assets object
import { assets } from "../assets/images";

export default function Trywebapp() {
  // 2. Update the data array to use the assets object instead of strings
  const featuresData = [
    {
      id: 1,
      title: "Organization",
      description: "Optimize your pantry with smart storage solutions.",
      tags: ["Containers", "Jars", "Canisters"],
      image: assets.active1, // ✅ Fixed
    },
    {
      id: 2,
      title: "Wall Spaces",
      description: "Maximize your vertical space with stylish solutions.",
      tags: ["Television", "Wall Clocks", "Art", "Mirrors"],
      image: assets.active2, // ✅ Fixed
    },
    {
      id: 3,
      title: "Wearables",
      description: "Preview your watch on your wrist with realistic fitting.",
      tags: ["Digital", "Analog", "Mechanical"],
      image: assets.active3, // ✅ Fixed
    },
  ];

  return (
    <div className="trywebapp-container">
      <div className="unified-shadow-wrapper">
        <div className="trywebapp-container-top">
          <div className="cta-banner">
            <span className="cta-text">Ready for the Transformation?</span>
            <span className="cta-icon">✨</span>
          </div>
          <p className="cta-subtext">
            Drop a photo, let AI do its thing—instant transformation, straight
            from your browser!
          </p>
        </div>

        <div className="trywebapp-container-bg">
          {/* HEADER SECTION */}
          <header className="top-nav">
            <div className="nav-logo">
              <img
                src={assets.company_logo} // ✅ Fixed
                alt="ZenSpaces Logo"
                className="logo-icon"
              />
            </div>

            <div className="nav-downloads">
              <span className="download-text">Download our app</span>
              <img
                src={assets.google_logo} // ✅ Fixed
                alt="Get it on Google Play"
                className="store-badge"
              />
              <img
                src={assets.apple_logo} // ✅ Fixed
                alt="Download on the App Store"
                className="store-badge"
              />
            </div>
          </header>

          {/* MAIN CONTENT SECTION */}
          <main className="main-content">
            <h1 className="section-title">Active Features</h1>

            <div className="features-grid">
              {featuresData.map((feature) => (
                <div key={feature.id} className="feature-card">
                  <div className="card-image-wrapper">
                    <img
                      src={feature.image} // Works automatically now
                      alt={feature.title}
                      className="card-image"
                    />
                  </div>

                  <div className="card-body">
                    <h2 className="card-title">{feature.title}</h2>
                    <p className="card-description">{feature.description}</p>

                    <div className="card-tags">
                      {feature.tags.map((tag, index) => (
                        <span key={index} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="try-now-btn-1">Try Now</button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <div className="active-bottom-text">
        <p className="active-bottom-text-1">
          Note: For the full experience with advanced AR features,
          <span className="blue-link">download our mobile app.</span>
        </p>
      </div>
    </div>
  );
}

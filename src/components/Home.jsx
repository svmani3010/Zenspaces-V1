import React from "react";
import { FaRocket } from "react-icons/fa";

import { assets } from "../assets/images"; // ✅ added
import googleLogo from "../assets/images/google_logo.png"; // keep as is (already correct)

export function Home() {
  return (
    <section
      className="Home"
      style={{
        padding: "20px 11%",
      }}
    >
      <div className="Home-content-background">
        <div className="Home-content">
          <h1 className="Home-heading">
            <span style={{ color: "#131313" }}>Your Space, </span>
            <span style={{ color: "#39B1E3", fontWeight: 700 }}>
              Visualized,
            </span>
            <br />
            <span style={{ color: "#121212" }}>Your Design, </span>
            <span style={{ color: "#37B0E3", fontWeight: 700 }}>
              Customized,
            </span>
            <br />
            <span style={{ color: "#141414" }}>Your Vision, </span>
            <span style={{ color: "#39B1E3" }}>Realized.</span>
          </h1>

          <p className="Home-sub">
            Scan, style, organize, and shop&mdash;all in one intuitive app that
            turns your vision into reality.
          </p>

          {/* CTA buttons */}
          <div className="Home-ctas">
            {/* App Store */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn"
            >
              <img
                src={assets.apple_logo} // ✅ Fixed: No more /src/assets string
                alt="Apple"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </a>

            {/* Play Store */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn"
              aria-label="Get it from Play Store"
            >
              {/* ✅ Fixed: Using assets object for consistency */}
              <img
                src={assets.google_logo}
                alt="Google Play"
                className="store-icon"
              />

              <div className="store-btn-text">
                <span className="store-btn-small"></span>
                <span className="store-btn-big"></span>
              </div>
            </a>

            {/* Try Now Button */}
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="try-now-btn"
              aria-label="Try Now"
            >
              <div className="try-now-inner">
                <FaRocket className="try-now-icon" />
                <span className="try-now-text">TRY NOW</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="Home-image-wrap">
          <video className="Home-room-img" autoPlay loop muted playsInline>
            {/* ✅ Fixed: Using assets.video so Vercel finds the file */}
            <source src={assets.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

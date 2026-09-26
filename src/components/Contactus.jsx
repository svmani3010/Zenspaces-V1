import React from "react";
// import "./Contactus.css";
import { FaRocket, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export function Contactus() {
  return (
    <section className="contact-wrapper">
      {/* Top Section: Title and Cards */}
      <div className="contact-content">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-cards-container">
          {/* Card 1: Office */}
          <div className="contact-card">
            <div className="icon-circle">
              <LocationIcon />
            </div>
            <div className="card-text">
              <h3>Our Office</h3>
              <p>Sacramento, CA 95823</p>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="contact-card">
            <div className="icon-circle">
              <MailIcon />
            </div>
            <div className="card-text">
              <h3>Email Us</h3>
              <p>support@zenspaces.ai</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section: Dark Footer Bar */}
      <footer className="contact-footer">
        {/* Left Column: Keeps the center balanced */}
        <div className="footer-spacer"></div>

        {/* Center Column: Perfectly centered text */}
        <div className="footer-center">
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#terms">Terms of Service</a>
          </div>
          <p className="copyright">© 2026 ZenSpaces.AI. All rights reserved.</p>
        </div>

        {/* Right Column: Contains the button */}
        <div className="footer-right">
          <button className="try-now-btn-2">
            <FaRocket />
            <span></span>
          </button>
        </div>
      </footer>
      <div className="footer-right">
        <button className="try-now-btn-2">
          <RocketIcon /> Try Now
        </button>
      </div>
    </section>
  );
}

// --- SVG Icons ---

const LocationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="Mm22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const RocketIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: "8px" }}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

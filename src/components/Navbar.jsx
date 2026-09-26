import React from "react";
// 1. Import your assets object correctly
import { assets } from "../assets/images";

/* CODIA_HYBRID_LAYOUT_KERNEL_START */
export function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        background: "#FEFAF6",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="navbar-inner">
        {/* Left nav links */}
        <div className="nav-links-left">
          <a href="#home" className="nav-link">
            HOME
          </a>
          <a href="#zenjourney" className="nav-link">
            ZEN JOURNEY
          </a>
          <a href="#trywebapp" className="nav-link">
            TRY WEBAPP
          </a>
          <a href="#about" className="nav-link">
            ABOUT
          </a>
        </div>

        {/* Center logo */}
        <div className="nav-logo">
          <a href="#home">
            <img
              // 2. Use assets.company_logo instead of a hardcoded string
              src={assets.company_logo}
              alt="ZenSpaces Logo"
              width={150}
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>

        {/* Right nav links */}
        <div className="nav-links-right">
          <a href="#howitworks" className="nav-link">
            HOW IT WORKS
          </a>
          <a href="#solutions" className="nav-link">
            SOLUTIONS
          </a>
          <a href="#blogs" className="nav-link">
            BLOGS
          </a>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
/* CODIA_HYBRID_LAYOUT_KERNEL_END */

import React from "react";
// import "./Howitworks.css";

export function Howitworks() {
  const steps = [
    {
      icon: <CameraIcon />,
      label: "Scan Your Space",
      text: "Download the Zenspaces.ai app and use your smartphone camera to scan any room. Our AI patent pending technology will measure your space accurately in seconds.",
    },
    {
      icon: <LightbulbIcon />,
      label: "Tailored Suggestions",
      text: "Based on your room dimensions and style preferences, our AI will suggest tailored storage, organization, and decor products that fit perfectly in your space.",
    },
    {
      icon: <EyeIcon />,
      label: "Visualize in Real-Time",
      text: "See recommended products in your actual space through augmented reality. Rotate, move, and customize until everything looks perfect.",
    },
    {
      icon: <ShoppingCartIcon />,
      label: "One-Click Purchase",
      text: "Love what you see? Purchase directly through our platform with a single click. No more jumping between websites or visiting multiple stores.",
    },
  ];

  return (
    <section className="how-it-works">
      <h2 className="how-it-works__title">How It Works?</h2>
      <div className="how-it-works__steps-container">
        {steps.map((step, index) => (
          <div key={index} className="how-it-works__step">
            <div className="how-it-works__icon-wrapper">
              <div className="how-it-works__icon">{step.icon}</div>
              {index < steps.length - 1 && (
                <div className="how-it-works__connector-wrapper">
                  <div className="how-it-works__connector" />
                </div>
              )}
            </div>
            <h3 className="how-it-works__label">{step.label}</h3>
            <p className="how-it-works__text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- SVG Icons ---

const CameraIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

const LightbulbIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14h.01"></path>
    <path d="M11.3 19A4.1 4.1 0 0 1 9 17.5a8.2 8.2 0 0 1-6-8A8.2 8.2 0 0 1 9 2c2.2 0 4.2.8 5.6 2.1a8.2 8.2 0 0 1 2.4 5.9a8.2 8.2 0 0 1-6 8c-.6 0-1.1-.1-1.7-.2"></path>
    <path d="M9 10a2.4 2.4 0 0 0 2.4-2.4c0-.6-.1-1.1-.3-1.6"></path>
  </svg>
);

const EyeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const ShoppingCartIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

export default Howitworks;

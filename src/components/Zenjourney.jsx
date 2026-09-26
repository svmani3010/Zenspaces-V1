import React from "react";
// 1. Import your central assets object
import { assets } from "../assets/images";

/* CODIA_HYBRID_LAYOUT_KERNEL_START */

// 2. Update the data array to use the assets object
const cardData = [
  {
    id: 1,
    stepTitle: "Step 1: Setup",
    description:
      "Set up your turntable and mixer. Make sure all audio cables are connected securely to the correct channels.",
    image: assets.step1, // ✅ Fixed
  },
  {
    id: 2,
    stepTitle: "Step 2: Connect",
    description:
      "Connect your speakers and power everything on. Keep your master volume low initially to protect your ears.",
    image: assets.step2, // ✅ Fixed
  },
  {
    id: 3,
    stepTitle: "Step 3: Cue",
    description:
      "Load your first track onto Deck A, put your headphones on, and find the perfect cue point to start the beat.",
    image: assets.step3, // ✅ Fixed
  },
  {
    id: 4,
    stepTitle: "Step 4: Mix",
    description:
      "Match the tempo of the second track on Deck B and smoothly use the crossfader to transition the music!",
    image: assets.step4, // ✅ Fixed
  },
];

export function Zenjourney() {
  return (
    <section className="design-journey">
      <div className="dj-content">
        <h2 className="dj-title">Smart Design Journey</h2>
        <p className="dj-subtitle">
          Transform Your Space with Patent Pending Zenspaces.AI Technology
        </p>
        <p className="dj-hint">
          <em>Hover over any card to see how it works!</em>
        </p>
      </div>
      <div className="dj-cards">
        <div className="dj-cards-padding">
          <div className="dj-cards-container">
            {cardData.map((card) => (
              <div key={card.id} className="dj-card">
                <div className="dj-card-inner">
                  <div
                    className="dj-card-front"
                    style={{
                      padding: "15px",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      height: "400px",
                    }}
                  >
                    <img
                      src={card.image} // ✅ Now uses bundled asset path
                      alt={card.stepTitle}
                      className="dj-card-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                  <div className="dj-card-back">
                    <h3>{card.stepTitle}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="category-pill-bg">
          <div className="category-pill">
            <div className="slide-item item-1">
              Smart categorization using interior design principles - 🔥 Popular
            </div>
            <div className="slide-item item-2">
              Smart categorization using interior design principles - ✨ Elegant
            </div>
            <div className="slide-item item-3">
              Smart categorization using interior design principles - ✌️ Zen
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* CODIA_HYBRID_LAYOUT_KERNEL_END */

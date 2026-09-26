import React from "react";

export function Solutions() {
  const cardsData = [
    {
      id: 1,
      title: "Home Organization",
      description:
        "Optimize your living space with smart storage solutions that blend function and style. From closet systems to kitchen organizers, find products that maximize space efficiency while complementing your home's aesthetic.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="card-icon"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Garage Organization",
      description:
        "Transform your cluttered garage into an organized, functional space. Discover storage systems, tool organizers, and space-saving solutions designed specifically for garage environments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="card-icon"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Home Furnishing and Decor",
      description:
        "Complete your home with furniture and decor pieces that reflect your personal style. From sofas and tables to lighting and accessories, find the perfect additions to make your house feel like home.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="card-icon"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <div className="solutions-container">
      <h2 className="solutions-title">Solutions for Every Space</h2>

      <div className="cards-wrapper">
        {cardsData.map((card) => (
          <div key={card.id} className="solution-card">
            <div className="icon-wrapper">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

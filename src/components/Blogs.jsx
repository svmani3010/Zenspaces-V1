import React from "react";

import { assets } from "../assets/images"; // ✅ added

export function Blogs() {
  const blogData = [
    {
      id: 1,
      date: "16 SEP",
      category: "PANTRY",
      imageText: "Visualize.\nCustomize.\nClick to Own!",
      title: "Your Pantry Can Be Your Happy Place — Here's How",
      description:
        "Does your pantry spark joy every morning? You open the door. Everything has its perfect place. You find the oats you need instantly. Those beautiful containers fit perfectly on every shelf. You smile and start your day feeling organized and ready.",
      link: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="blogs-container">
      {/* Header Section */}
      <div className="blogs-header">
        <h2 className="blogs-title">Our Blogs</h2>
        <p className="blogs-subtitle">
          Design smarter, not harder: visualize, customize, and make any room
          click-to-own with AI-powered
          <br />
          layouts tailored to each space.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="blogs-wrapper">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            {/* Image Section */}
            <div
              className="blog-image-container"
              style={{ backgroundImage: `url(${blog.imageUrl})` }}
            >
              {/* Overlay */}
              <div className="blog-image-overlay"></div>

              {/* Date */}
              <div className="blog-date-badge">{blog.date}</div>

              {/* Image Text */}
              <h3 className="blog-image-text">
                {blog.imageText.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>

              {/* Category */}
              <div className="blog-category-badge">{blog.category}</div>
            </div>

            {/* Content Section */}
            <div className="blog-content">
              <h4 className="blog-post-title">{blog.title}</h4>
              <p className="blog-post-description">{blog.description}</p>

              <a href={blog.link} className="blog-read-more">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="read-more-icon"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

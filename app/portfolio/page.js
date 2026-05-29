"use client";

import TretoLayout from "@/layout/TretoLayout";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "WordPress Business Website",
      category: "wordpress",
      image: "https://placehold.co/600x450/f5f5f5/E8136A?text=WordPress+Site",
      description: "Custom WordPress theme with responsive design and SEO optimization",
      tech: ["WordPress", "PHP", "Tailwind CSS"],
      result: "40% faster load time"
    },
    {
      id: 2,
      title: "Salesforce CRM Integration",
      category: "crm",
      image: "https://placehold.co/600x450/f5f5f5/E8136A?text=CRM+Dashboard",
      description: "Seamless Salesforce integration for automated lead management",
      tech: ["Salesforce API", "Node.js", "REST API"],
      result: "15 hours saved per week"
    },
    {
      id: 3,
      title: "MERN Stack Dashboard",
      category: "mern",
      image: "https://placehold.co/600x450/f5f5f5/E8136A?text=MERN+Dashboard",
      description: "Full-stack admin dashboard with real-time analytics",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      result: "Real-time data processing"
    },
    {
      id: 4,
      title: "E-commerce WordPress Store",
      category: "wordpress",
      image: "https://placehold.co/600x450/f5f5f5/E8136A?text=E-commerce+Store",
      description: "Full-featured online store with payment gateway integration",
      tech: ["WordPress", "WooCommerce", "Stripe API"],
      result: "25% increase in sales"
    },
    {
      id: 5,
      title: "JobDiva API Integration",
      category: "crm",
      image: "https://placehold.co/600x450/f5f5f5/E8136A?text=JobDiva+API",
      description: "Custom JobDiva integration for recruitment platform",
      tech: ["JobDiva API", "Node.js", "Express"],
      result: "Automated candidate sync"
    },
    {
      id: 6,
      title: "React Native Mobile App",
      category: "mern",
      image: "https://placehold.co/600x450/f5f5f5/E8136A?text=Mobile+App",
      description: "Cross-platform mobile app for business operations",
      tech: ["React Native", "Node.js", "MongoDB"],
      result: "Available on iOS & Android"
    }
  ];

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />
          <div className="container">
            {/* Header Section */}
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Featured <span className="mil-accent">projects</span>
              </p>
              <h2 className="mil-up mil-mb-30">Portfolio</h2>
              <p className="mil-left-offset">
                A Collection of my favorite projects I've designed recently.{" "}
                <br />
                Feeling great while sharing here.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="mil-filter" style={{ marginBottom: "40px" }}>
              <ul style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
                <li>
                  <button 
                    onClick={() => setFilter("all")}
                    className={filter === "all" ? "mil-current" : ""}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "14px", padding: "8px 16px" }}
                  >
                    All Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setFilter("wordpress")}
                    className={filter === "wordpress" ? "mil-current" : ""}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "14px", padding: "8px 16px" }}
                  >
                    WordPress
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setFilter("mern")}
                    className={filter === "mern" ? "mil-current" : ""}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "14px", padding: "8px 16px" }}
                  >
                    MERN Stack
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setFilter("crm")}
                    className={filter === "crm" ? "mil-current" : ""}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "14px", padding: "8px 16px" }}
                  >
                    CRM Integration
                  </button>
                </li>
              </ul>
            </div>

            {/* Portfolio Grid */}
            <div className="row" style={{ paddingBottom: "80px" }}>
              {filteredItems.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.id} style={{ marginBottom: "30px" }}>
                  <div 
                    className="mil-portfolio-card"
                    style={{
                      backgroundColor: "var(--bg-white)",
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      border: "1px solid var(--border-light)",
                      height: "100%"
                    }}
                  >
                    {/* Image */}
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "220px",
                          objectFit: "cover",
                          transition: "transform 0.3s ease"
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        backgroundColor: "#E8136A",
                        color: "white",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "600"
                      }}>
                        {item.category.toUpperCase()}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "20px" }}>
                      <h3 style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "600" }}>{item.title}</h3>
                      <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "12px", lineHeight: "1.5" }}>
                        {item.description}
                      </p>
                      
                      {/* Tech Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                        {item.tech.map((tech, i) => (
                          <span key={i} style={{
                            fontSize: "10px",
                            color: "#E8136A",
                            backgroundColor: "rgba(232,19,106,0.1)",
                            padding: "3px 10px",
                            borderRadius: "20px"
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Result */}
                      <div style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        padding: "8px 0",
                        borderTop: "1px solid var(--border-light)",
                        marginTop: "8px"
                      }}>
                        <i className="fas fa-chart-line" style={{ color: "#E8136A", marginRight: "5px" }}></i>
                        <strong>Result:</strong> {item.result}
                      </div>

{/* Two Buttons */}
<div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
  {/* View Details Button - Opens Case Study */}
  <Link 
    href={`/project?id=${item.id}`}
    style={{
      flex: 1,
      textAlign: "center",
      backgroundColor: "transparent",
      color: "#E8136A",
      border: "1px solid #E8136A",
      textDecoration: "none",
      fontSize: "12px",
      fontWeight: "500",
      padding: "8px 12px",
      borderRadius: "8px",
      transition: "all 0.3s ease"
    }}
  >
    View Case Study →
  </Link>
  
  {/* Contact Button */}
  <Link 
    href="/contact"
    style={{
      flex: 1,
      textAlign: "center",
      backgroundColor: "#E8136A",
      color: "white",
      textDecoration: "none",
      fontSize: "12px",
      fontWeight: "500",
      padding: "8px 12px",
      borderRadius: "8px",
      transition: "all 0.3s ease"
    }}
  >
    Hire Me →
  </Link>
</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default page;

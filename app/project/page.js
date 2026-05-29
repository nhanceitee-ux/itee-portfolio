"use client";

import TretoLayout from "@/layout/TretoLayout";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ProjectPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Case study data for each project
  const projects = {
    "1": {
      id: "1",
      title: "WordPress Business Website",
      category: "WordPress Development",
      timeline: "3 weeks",
      image: "https://placehold.co/1200x600/f5f5f5/E8136A?text=WordPress+Project",
      overview: "A complete business website solution built with WordPress featuring custom theme development, responsive design, and SEO optimization.",
      challenge: "The client had an outdated website that was slow, not mobile-friendly, and difficult to update.",
      solution: "Built a custom WordPress theme with Tailwind CSS for fast loading. Implemented SEO best practices.",
      results: ["40% faster load time", "50% increase in mobile traffic", "Easy content management"],
      technologies: ["WordPress", "PHP", "Tailwind CSS", "MySQL"]
    },
    "2": {
      id: "2",
      title: "Salesforce CRM Integration",
      category: "CRM Integration",
      timeline: "4 weeks",
      image: "https://placehold.co/1200x600/f5f5f5/E8136A?text=Salesforce+Integration",
      overview: "Seamless Salesforce integration for automated lead management and reporting system.",
      challenge: "Manual data entry was causing delays and errors. Client needed automated sync between website and Salesforce.",
      solution: "Built custom Node.js API to connect website forms with Salesforce, implementing real-time data sync.",
      results: ["15 hours saved per week", "Zero manual errors", "Real-time lead tracking"],
      technologies: ["Node.js", "Salesforce API", "Express", "JWT"]
    },
    "3": {
      id: "3",
      title: "MERN Stack Dashboard",
      category: "MERN Stack",
      timeline: "6 weeks",
      image: "https://placehold.co/1200x600/f5f5f5/E8136A?text=MERN+Dashboard",
      overview: "Full-stack admin dashboard with real-time analytics and user management.",
      challenge: "Client needed a scalable dashboard to monitor business metrics and manage users efficiently.",
      solution: "Built MERN application with React, Node.js/Express, and MongoDB for data storage.",
      results: ["Real-time visualization", "50% faster reporting", "Scalable architecture"],
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    "4": {
      id: "4",
      title: "E-commerce WordPress Store",
      category: "WordPress Development",
      timeline: "5 weeks",
      image: "https://placehold.co/1200x600/f5f5f5/E8136A?text=E-commerce+Store",
      overview: "Full-featured online store with payment gateway integration.",
      challenge: "Client wanted to move from physical store to online selling with smooth checkout experience.",
      solution: "Built WooCommerce store with custom theme and Stripe integration.",
      results: ["25% increase in sales", "Smooth checkout", "Mobile responsive"],
      technologies: ["WordPress", "WooCommerce", "Stripe API", "PHP"]
    },
    "5": {
      id: "5",
      title: "JobDiva API Integration",
      category: "CRM Integration",
      timeline: "3 weeks",
      image: "https://placehold.co/1200x600/f5f5f5/E8136A?text=JobDiva+API",
      overview: "Custom JobDiva integration for recruitment platform.",
      challenge: "Recruitment agency needed automated candidate sync between their website and JobDiva.",
      solution: "Built custom API integration to push/pull candidate data in real-time.",
      results: ["Automated sync", "80% less manual work", "Real-time updates"],
      technologies: ["JobDiva API", "Node.js", "Express", "REST API"]
    },
    "6": {
      id: "6",
      title: "React Native Mobile App",
      category: "MERN Stack",
      timeline: "8 weeks",
      image: "https://placehold.co/1200x600/f5f5f5/E8136A?text=Mobile+App",
      overview: "Cross-platform mobile app for business operations.",
      challenge: "Client needed a mobile solution for field workers to access and update data in real-time.",
      solution: "Built React Native app with Node.js backend and MongoDB database.",
      results: ["iOS & Android", "Real-time sync", "Offline capability"],
      technologies: ["React Native", "Node.js", "MongoDB", "Express"]
    }
  };

  const project = projects[id];

  if (!id || !projects[id]) {
    return (
      <TretoLayout noFooter>
        <div className="container" style={{ padding: "100px 0", textAlign: "center" }}>
          <h2>Project not found</h2>
          <Link href="/portfolio" className="mil-button" style={{ marginTop: "20px", display: "inline-block" }}>
            Back to Portfolio
          </Link>
        </div>
      </TretoLayout>
    );
  }

  return (
    <TretoLayout noFooter>
      <div style={{ paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="container">
          {/* Back Button */}
          <Link href="/portfolio" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#E8136A",
            textDecoration: "none",
            marginBottom: "30px",
            fontSize: "14px"
          }}>
            ← Back to Portfolio
          </Link>

          {/* Project Image */}
          <div style={{
            marginBottom: "40px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
          }}>
            <img 
              src={project.image} 
              alt={project.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block"
              }}
            />
          </div>

          {/* Header */}
          <div className="mil-text-center" style={{ marginBottom: "40px" }}>
            <p className="mil-upper mil-mb-30" style={{ fontSize: "14px", letterSpacing: "2px" }}>
              <span className="mil-accent">{project.category}</span>
            </p>
            <h1 style={{ 
              fontSize: "clamp(28px, 5vw, 42px)", 
              marginBottom: "15px",
              fontWeight: "700"
            }}>
              {project.title}
            </h1>
            <div style={{ 
              display: "inline-block",
              backgroundColor: "rgba(232,19,106,0.1)",
              padding: "6px 16px",
              borderRadius: "30px",
              fontSize: "14px",
              color: "#E8136A"
            }}>
              <strong>Timeline:</strong> {project.timeline}
            </div>
          </div>

          {/* Details */}
          <div className="row">
            <div className="col-lg-8">
              <div style={{ marginBottom: "35px" }}>
                <h3 style={{ fontSize: "22px", marginBottom: "15px", fontWeight: "600" }}>Project Overview</h3>
                <p style={{ lineHeight: "1.7", color: "var(--text-muted)", fontSize: "16px" }}>
                  {project.overview}
                </p>
              </div>

              <div style={{ marginBottom: "35px" }}>
                <h3 style={{ fontSize: "22px", marginBottom: "15px", fontWeight: "600" }}>The Challenge</h3>
                <p style={{ lineHeight: "1.7", color: "var(--text-muted)", fontSize: "16px" }}>
                  {project.challenge}
                </p>
              </div>

              <div style={{ marginBottom: "35px" }}>
                <h3 style={{ fontSize: "22px", marginBottom: "15px", fontWeight: "600" }}>The Solution</h3>
                <p style={{ lineHeight: "1.7", color: "var(--text-muted)", fontSize: "16px" }}>
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Results Card */}
              <div style={{
                backgroundColor: "var(--bg-white)",
                padding: "25px",
                borderRadius: "16px",
                border: "1px solid var(--border-light)",
                marginBottom: "25px"
              }}>
                <h4 style={{ fontSize: "18px", marginBottom: "20px", fontWeight: "600" }}>📊 Key Results</h4>
                {project.results.map((result, i) => (
                  <p key={i} style={{ marginBottom: "12px", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <i className="fas fa-check-circle" style={{ color: "#E8136A", fontSize: "14px" }}></i>
                    {result}
                  </p>
                ))}
              </div>

              {/* Technologies Card */}
              <div style={{
                backgroundColor: "var(--bg-white)",
                padding: "25px",
                borderRadius: "16px",
                border: "1px solid var(--border-light)",
                marginBottom: "25px"
              }}>
                <h4 style={{ fontSize: "18px", marginBottom: "20px", fontWeight: "600" }}>⚙️ Technologies</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{
                      backgroundColor: "rgba(232,19,106,0.1)",
                      color: "#E8136A",
                      padding: "6px 14px",
                      borderRadius: "25px",
                      fontSize: "13px",
                      fontWeight: "500"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div style={{
            backgroundColor: "#E8136A",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
            color: "white",
            marginTop: "50px"
          }}>
            <h3 style={{ color: "white", marginBottom: "15px", fontSize: "24px" }}>Need Something Similar?</h3>
            <p style={{ marginBottom: "20px", fontSize: "16px", opacity: 0.9 }}>Let's discuss how I can help with your project</p>
            <Link href="/contact" style={{
              backgroundColor: "white",
              color: "#E8136A",
              padding: "12px 32px",
              borderRadius: "40px",
              textDecoration: "none",
              display: "inline-block",
              fontWeight: "600",
              fontSize: "15px",
              transition: "all 0.3s ease"
            }}>
              Hire Me →
            </Link>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default ProjectPage;

const Education = () => {
  const educationItems = [
    {
      degree: "MBA in Analytics & Data Science",
      year: "2025 - 2027",
      institution: "Manipal University, Jaipur",
      badge: "Pursuing",
      icon: "fas fa-chart-line"
    },
    {
      degree: "B.Tech in CSE (Cyber Security)",
      year: "2019 - 2023",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
      badge: "8.0 CGPA",
      icon: "fas fa-laptop-code"
    },
    {
      degree: "Higher Secondary (12th)",
      year: "2018 - 2019",
      institution: "Shri Guru Tegh Bahadur School, Ratlam",
      badge: "85.5%",
      icon: "fas fa-school"
    }
  ];

  return (
    <div className="mil-section mil-op-space-90">
      <div className="mil-bg-item" style={{ bottom: "0%", left: "25%", transform: "rotate(-25deg)" }} />
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Column - Academic Journey Header + Google Cloud */}
          <div className="col-xl-5 mil-mb-60">
            <div className="mil-text-right-adapt">
              <p className="mil-upper mil-mb-30">My Academic <span className="mil-accent">Journey</span></p>
              <h2 className="mil-up mil-mb-30">Education & <span className="mil-accent">Certificates</span></h2>
              <p>Computer Science graduate with ongoing MBA in Analytics & Data Science.</p>
              
              {/* Google Cloud Section - Compact & Actionable */}
              <div style={{ 
                marginTop: "35px", 
                padding: "20px",
                backgroundColor: "var(--bg-white)",
                borderRadius: "16px",
                border: "1px solid var(--border-light)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px", justifyContent: "flex-end" }}>
                <div>
                    <h4 style={{ marginBottom: "4px", fontSize: "18px" }}>30 Days of Google Cloud</h4>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "0" }}>11+ Skill Badges • Lifetime Access</p>
                  </div>
                  <div>
                  <i className="fab fa-google" style={{ fontSize: "28px", color: "#E8136A" }}></i>
                  </div>
                    
                  
                </div>
                <p style={{ fontSize: "13px", lineHeight: "1.5", marginBottom: "16px" }}>
                  Earned multiple Google Cloud skill badges in machine learning, data engineering, Kubernetes, networking, and cloud development.
                </p>
                <a 
                  href="https://www.skills.google/public_profiles/ed7ed1c0-39cf-4ef1-bc32-4902ba235d67/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mil-button mil-type-2"
                  style={{ 
                    padding: "8px 20px", 
                    fontSize: "12px", 
                    height: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <i className="fas fa-external-link-alt" style={{ fontSize: "11px" }}></i>
                  View All Certificates
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="col-xl-6" style={{ 
                    padding: "60px 0px", 
                    
                  }}>
            {educationItems.map((item, index) => (
              <div className="mil-icon-box mil-mb-40" key={index}>
                <div className="mil-text-icon no-textured">
                  <i className={item.icon} style={{ fontSize: "24px", color: "#E8136A" }}></i>
                </div>
                <div className="mil-box-text">
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                    <p className="mil-upper mil-text-lg" style={{ marginBottom: "5px", fontWeight: "600" }}>{item.degree}</p>
                    <span style={{ fontSize: "11px", color: "#E8136A", fontWeight: "600", backgroundColor: "rgba(232,19,106,0.1)", padding: "2px 10px", borderRadius: "20px" }}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="mil-upper mil-upper-sm mil-mb-15" style={{ fontSize: "12px" }}>{item.year}</p>
                  <p style={{ fontSize: "14px", marginBottom: "0" }}>{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
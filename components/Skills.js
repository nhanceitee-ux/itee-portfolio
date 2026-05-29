const Skills = () => {
  const allSkills = [
    { name: "WordPress", icon: "fab fa-wordpress", color: "#21759B" },
    { name: "React.js", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "Salesforce", icon: "fab fa-salesforce", color: "#00A1E0" },
    { name: "MongoDB", icon: "fas fa-database", color: "#47A248" },
    { name: "Tailwind CSS", icon: "fas fa-wind", color: "#06B6D4" },
    { name: "Express.js", icon: "fas fa-server", color: "#000000" },
    { name: "Git/GitHub", icon: "fab fa-github", color: "#181717" },
    { name: "HTML5/CSS3", icon: "fab fa-html5", color: "#E34F26" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "Next.js", icon: "fas fa-server", color: "#000000" },
    { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
    { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
    { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
    { name: "RESTful APIs", icon: "fas fa-plug", color: "#E8136A" },
    { name: "JobDiva", icon: "fas fa-briefcase", color: "#E8136A" }
  ];

  return (
    <div className="mil-section mil-op-space-90">
      <div className="mil-bg-item" style={{ bottom: "15%", left: "7%" }} />
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-15%", right: "25%", transform: "rotate(-35deg)" }}
      />
      <div className="container">
        {/* Section Header */}
        <div className="mil-text-center" style={{ marginBottom: "50px" }}>
          <p className="mil-upper mil-mb-30">
            My Technical <span className="mil-accent">Toolkit</span>
          </p>
          <h2 className="mil-up">Skills & <span className="mil-accent">Expertise</span></h2>
        </div>

        {/* Skills Grid - Clean, no badges */}
        <div className="row">
          {allSkills.map((skill, index) => (
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
              <div
                className="mil-skill-item"
                style={{
                  backgroundColor: "var(--bg-white)",
                  padding: "25px 10px",
                  margin: "10px",
                  borderRadius: "16px",
                  textAlign: "center",
                  border: "1px solid var(--border-light)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#E8136A";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-light)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <i 
                  className={skill.icon} 
                  style={{ 
                    fontSize: "42px", 
                    color: skill.color, 
                    marginBottom: "12px", 
                    display: "block" 
                  }}
                ></i>
                <h4 style={{ 
                  fontSize: "15px", 
                  fontWeight: "600", 
                  marginBottom: "0",
                  color: "var(--text-dark)"
                }}>
                  {skill.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mil-text-center" style={{ marginTop: "40px" }}>
          <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>
            <i className="fas fa-code" style={{ color: "#E8136A", marginRight: "8px" }}></i>
            Full-stack development • WordPress • CRM Integration • MERN Stack
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
/*--updated on 29--*/

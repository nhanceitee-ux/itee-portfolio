import Link from "next/link";

const About = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-25%", right: "15%", transform: "rotate(-35deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-4">
            <div className="mil-about-person mil-mb-30">
              <img
                src="img/faces/1.jpg"
                alt="Sophie Miller"
                className="mil-avatar"
              />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="row">
              <div className="col-xl-12">
                <p className="mil-upper mil-mb-30">
                  <span className="mil-accent">Hello</span>, my name is
                </p>
                <h2 className="mil-up mil-mb-60">Sophie Miller</h2>
                <p className="mil-mb-30">
                  From France, Paris. I have rich experience in web design, also
                  I am good at React, Vue.js. I love to talk with you about our
                  unique. I have been studying UI UX Design since October 2020.
                  I like creating a cool design project.
                </p>
                <p className="mil-mb-30">
                  Over 6+ years of IT experience which includes 2+ years of a
                  React JS Developer and 3 years of Experience as a UI/UX
                  Developer and 1 years of Experience as software Developer.
                </p>
                <div className="mil-buttons-frame">
                  <Link legacyBehavior href="/portfolio">
                    <a className="mil-button">Download CV</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

export const About2 = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-20%", left: "15%", transform: "rotate(-35deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ top: "25%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-12">
                <div className="mil-text-center">
                  
                  {/* Profile Image */}
                  {/* <div className="mil-about-person-2 mil-mb-30">
                    <img
                      src="img/faces/itee-profile.jpg"
                      alt="Itee Rajpurohit - WordPress & MERN Developer"
                      className="mil-avatar"
                      style={{ width: "180px", height: "180px", objectFit: "cover" }}
                    />
                  </div> */}
                  
                  {/* Experience Badge */}
                  <div className="mil-freelance-badge" style={{ 
                    display: "inline-block", 
                    marginBottom: "20px",
                    fontSize: "13px",
                    fontWeight: "600"
                  }}>
                    🚀 4+ YEARS OF EXPERIENCE
                  </div>
                  
                  {/* Title */}
                  <p className="mil-upper mil-mb-20" style={{ letterSpacing: "2px" }}>
                    WordPress <span className="mil-accent">&</span> Full-Stack Developer
                  </p>
                  
                  {/* Name - Wrapped for better visibility */}
<div style={{ 
  width: "100%", 
  overflow: "visible", 
  marginBottom: "25px",
  textAlign: "center"
}}>
  <h2 className="mil-up" style={{ 
    fontSize: "clamp(36px, 5vw, 52px)",
    fontWeight: "700",
    background: "linear-gradient(135deg, #1A1A1A 0%, #E8136A 80%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block",
    margin: "0 auto",
    padding: "0 20px",
    letterSpacing: "0",
    whiteSpace: "nowrap",
    overflow: "visible",
    lineHeight: "1.2",
    textAlign: "center"
  }}>
    Itee Rajpurohit
  </h2>
</div>
                  
                  {/* Tagline */}
                  <h4 style={{ 
                    color: "#E8136A", 
                    marginBottom: "30px",
                    fontWeight: "500",
                    fontSize: "clamp(16px, 2vw, 20px)"
                  }}>
                    WordPress Specialist • MERN Stack • CRM Expert
                  </h4>
                  
                  {/* Description */}
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="mil-text-center">
                        <p className="mil-mb-25" style={{ lineHeight: "1.7" }}>
                          I'm a <strong className="mil-accent">Full-Stack Developer</strong> with 4+ years of experience 
                          building scalable web solutions. I specialize in <strong className="mil-accent">WordPress development</strong> 
                          for fast, SEO-friendly websites, and <strong className="mil-accent">MERN stack applications</strong> 
                          for complex business needs.
                        </p>
                        
                        <p className="mil-mb-25" style={{ lineHeight: "1.7" }}>
                          My expertise includes seamless <strong className="mil-accent">CRM integration</strong> 
                          (Salesforce, JobDiva), responsive design that works perfectly on all devices, 
                          and performance optimization that keeps your users engaged and Google happy.
                        </p>
                        
                        <p className="mil-mb-30" style={{ lineHeight: "1.7" }}>
                          <strong className="mil-accent">Available for freelance projects</strong> — from business websites 
                          to complex web apps. One developer for projects at any scale.
                        </p>
                        
                        {/* Stats Section */}
                        <div className="row mil-mb-40" style={{ marginTop: "30px" }}>
                          <div className="col-4">
                            <div className="mil-counter" style={{ 
                              padding: "15px",
                              background: "rgba(232, 19, 106, 0.05)",
                              borderRadius: "12px"
                            }}>
                              <h3 style={{ color: "#E8136A", fontSize: "32px", fontWeight: "700", marginBottom: "5px" }}>4+</h3>
                              <p style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0" }}>Years Experience</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="mil-counter" style={{ 
                              padding: "15px",
                              background: "rgba(232, 19, 106, 0.05)",
                              borderRadius: "12px"
                            }}>
                              <h3 style={{ color: "#E8136A", fontSize: "32px", fontWeight: "700", marginBottom: "5px" }}>40+</h3>
                              <p style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0" }}>Projects Done</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="mil-counter" style={{ 
                              padding: "15px",
                              background: "rgba(232, 19, 106, 0.05)",
                              borderRadius: "12px"
                            }}>
                              <h3 style={{ color: "#E8136A", fontSize: "32px", fontWeight: "700", marginBottom: "5px" }}>100%</h3>
                              <p style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0" }}>Satisfaction</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Buttons */}
                        {/* <div className="mil-buttons-frame" style={{ 
                          display: "flex", 
                          gap: "15px", 
                          justifyContent: "center",
                          flexWrap: "wrap"
                        }}>
                          <Link legacyBehavior href="/portfolio">
                            <a className="mil-button mil-type-2">View Portfolio</a>
                          </Link>
                          <Link legacyBehavior href="/contact">
                            <a className="mil-button">Hire Me</a>
                          </Link>
                          <a href="/resume.pdf" download className="mil-button mil-type-2" style={{ background: "transparent" }}>
                            Download Resume
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

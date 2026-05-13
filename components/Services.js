import Link from "next/link";

const Services = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-10%", right: "20%", transform: "rotate(-25deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ bottom: "20%", left: "-5%", transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">Freelance</p>
        <h2 className="mil-up mil-mb-60">Services</h2>
        <div className="row">
          
          {/* Service 1 - WordPress Development */}
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-60">
              <div className="mil-text-icon">
                <i className="fab fa-wordpress" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  WordPress Development
                </p>
                <p className="mil-upper mil-mb-30">
                  — <span className="mil-accent">Custom Quote</span>
                </p>
                <p>
                  Custom WordPress themes, plugins, and full-site development. 
                  SEO-optimized, responsive, and built to convert.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 - MERN Stack Development */}
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-60">
              <div className="mil-text-icon">
                <i className="fab fa-react" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  MERN Stack Development
                </p>
                <p className="mil-upper mil-mb-30">
                  — <span className="mil-accent">Custom Quote</span>
                </p>
                <p>
                  Full-stack web applications with MongoDB, Express, React, and Node.js. 
                  Scalable, performant, and production-ready.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 - CRM Integration */}
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-30">
              <div className="mil-text-icon">
                <i className="fas fa-plug" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  CRM Integration
                </p>
                <p className="mil-upper mil-mb-30">
                  — <span className="mil-accent">Custom Quote</span>
                </p>
                <p>
                  Seamless Salesforce & JobDiva integration, REST APIs, 
                  and automated workflows for your business operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mil-text-center" style={{ marginTop: "20px" }}>
          <Link legacyBehavior href="/contact">
            <a className="mil-button" style={{ padding: "12px 35px" }}>
              <i className="fas fa-comment-dots" style={{ marginRight: "8px" }}></i>
              Let's Discuss Your Project
            </a>
          </Link>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "15px" }}>
            Every project is unique — contact me for a personalized quote
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
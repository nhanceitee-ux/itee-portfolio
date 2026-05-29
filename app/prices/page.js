import TretoLayout from "@/layout/TretoLayout";
import Link from "next/link";

const page = () => {
  const packages = [
    {
      name: "WordPress Starter",
      description: "Perfect for small businesses and personal websites",
      features: [
        "Template Based WordPress website (up to 5 pages)",
        "Fully responsive design",
        "Basic SEO setup",
        "15 Days post-launch support",
        "Fast loading optimization"
      ],
      popular: false,
      badge: "Best for Startups"
    },
    {
      name: "Business Pro",
      description: "For growing businesses needing advanced functionality",
      features: [
        "Custom WordPress + Advanced features",
        "CRM integration (if any)",
        "Advanced SEO & performance optimization",
        "30 Days post-launch support",
        "API integrations",
        "Priority support"
      ],
      popular: true,
      badge: "Most Popular"
    },
    {
      name: "MERN Stack Custom",
      description: "Full-stack applications for complex business needs",
      features: [
        "Custom MERN application (React, Node.js, MongoDB)",
        "RESTful API development",
        "Database design & optimization",
        "Authentication & security setup",
        "1.5 months post-launch support",
        "Scalable architecture",
        "Third-party integrations"
      ],
      popular: false,
      badge: "Enterprise Ready"
    }
  ];

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
                Flexible <span className="mil-accent">Plans</span>
              </p>
              <h2 className="mil-up mil-mb-30">Pricing & Packages</h2>
              <p className="mil-left-offset" style={{ maxWidth: "600px" }}>
                Every project is unique. Choose a package that fits your needs,
                and I'll provide a personalized quote based on your requirements.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="row">
              {packages.map((pkg, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="mil-price-card mil-mb-60">
                    <div className="mil-card-head">
                      {pkg.popular && (
                        <div className="mil-label mil-upper mil-upper-sm">
                          {pkg.badge}
                        </div>
                      )}
                      <p className="mil-upper mil-upper-sm mil-mb-30">
                        {pkg.name}
                      </p>
                      
                      {/* Custom Quote Instead of Price */}
                      <div style={{ marginBottom: "15px" }}>
                        <h2 className="mil-up" style={{ fontSize: "28px" }}>
                          Custom <span className="mil-accent">Quote</span>
                        </h2>
                        <p style={{ fontSize: "12px", opacity: "0.7" }}>
                          Contact for exact pricing
                        </p>
                      </div>
                      <p style={{ fontSize: "14px" }}>{pkg.description}</p>
                    </div>
                    <div className="mil-proces-body">
                      <ul>
                        {pkg.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <Link legacyBehavior href="/contact">
                        <a className="mil-button mil-type-2">
                          Let's Discuss →
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mil-call-to-action">
            <div className="container">
              <div className="mil-text-center">
                <h3 className="mil-up mil-mb-30">
                  Need a <span className="mil-accent">Custom Solution</span>?
                </h3>
                <p className="mil-mb-30">
                  Every project is unique. Let's discuss your requirements 
                  and get a personalized quote tailored to your needs.
                </p>
                <Link legacyBehavior href="/contact">
                  <a className="mil-button mil-type-2">Get a Free Consultation</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default page;

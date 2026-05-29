import Link from "next/link";

const Banner = ( { bgImage = "img/faces/6.jpg" } ) => {
  return (
    <div className="mil-section mil-banner mil-banner-right">
      <div className="container-full">
        <div className="row no-gutters align-items-center justify-content-between">
          <div className="col-xl-7">
            <div className="mil-p-120-120">
              <div
                className="mil-banner-text"
                data-swiper-parallax-y={-600}
                data-swiper-parallax-duration={600}
              >
                <div
                  className="mil-bg-title-boxed"
                  style={{ top: 0, left: "-82%" }}
                />
                <p className="mil-upper mil-mb-30">
                  Graphic <span className="mil-accent">and</span> Web Developer
                </p>
                <h1 className="mil-up mil-mb-40">Sophie Miller</h1>
                <div className="mil-short mil-left-offset">
                  <p className="mil-mb-30">
                    From France, Paris. I have rich experience in web design,
                    also I am good at wordpress. I love to talk with you about
                    our unique.
                  </p>
                  <div className="mil-buttons-frame">
                    <Link legacyBehavior href="/portfolio">
                      <a className="mil-button mil-type-2">Portfolio</a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="mil-button">Contact me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <img
              src={bgImage}
              alt="face"
              className="mil-banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

export const Banner2 = () => {
  return (
    <div className="mil-section mil-banner">
      <div className="container-full">
        <div className="row no-gutters align-items-center justify-content-between flex-sm-row-reverse">
          <div className="col-xl-7">
            <div className="mil-p-120-120">
              <div
                className="mil-banner-text"
                data-swiper-parallax-y={-600}
                data-swiper-parallax-duration={600}
              >
                <div
                  className="mil-bg-title-boxed"
                  style={{ top: "-100px", left: "-82%", opacity: 0.4 }}
                />
                
                {/* Fixed Badge - No overlapping */}
                {/* <div style={{ marginBottom: "20px" }}>
                  <span style={{
                    display: "inline-block",
                    padding: "5px 16px",
                    backgroundColor: "rgba(232, 19, 106, 0.12)",
                    borderLeft: "3px solid #E8136A",
                    borderRadius: "0px 20px 20px 0px",
                    fontSize: "13px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#E8136A"
                  }}>
                    🚀 OPEN FOR FREELANCE
                  </span>
                </div> */}
                
                <p className="mil-upper mil-mb-20" style={{ marginBottom: "15px" }}>
                  <span className="mil-accent">WordPress</span> for Speed • <span className="mil-accent">MERN</span> for Power
                </p>
                 {/* Name - Fixed width to prevent cutting off */}
                <h1 className="mil-up mil-mb-30" style={{ 
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  marginBottom: "25px",
                  lineHeight: "1.2",
                  wordBreak: "normal",
                  overflowWrap: "normal"
                }}>
                  Itee Rajpurohit
                </h1>
                {/* Description */}
                <div className="mil-short" style={{ maxWidth: "600px", marginBottom: "30px" }}>
                  <p style={{ marginBottom: "25px", lineHeight: "1.6" }}>
                    <strong className="mil-accent">WordPress specialist</strong> for fast, SEO-friendly websites. 
                    Need something more powerful? I build <strong className="mil-accent">custom MERN stack applications</strong> 
                    with seamless CRM integration (Salesforce/Jobscience). One developer for projects at any scale - from business sites to complex web apps.
                  </p>
                </div>
                                {/* Buttons - Aligned properly */}
                <div className="mil-buttons-frame" style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                  <Link legacyBehavior href="/portfolio">
                    <a className="mil-button mil-type-2" style={{ whiteSpace: "nowrap" }}>View Work</a>
                  </Link>
                  <Link legacyBehavior href="/contact">
                    <a className="mil-button" style={{ whiteSpace: "nowrap" }}>Start a Project</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <img
              src="img/faces/6.jpg"
              alt="Itee Rajpurohit - WordPress Developer"
              className="mil-banner-image"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};
/*--updated on 29--*/

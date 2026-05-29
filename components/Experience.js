import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Experience = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ top: 0, right: "15%", transform: "rotate(-25deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ bottom: "15%", left: "-5%", transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">
          4+ Years of <span className="mil-accent">Experience</span>
        </p>
        <h2 className="mil-up mil-mb-60">Work Experience</h2>
        <div className="row">
          <div className="col-lg-6">
            <p className="mil-mb-60">
              Helping businesses scale with modern web solutions - from high-performance WordPress sites 
  to custom MERN applications with seamless Salesforce & JobDiva integration.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="mil-timeline-nav-2">
              <div className="mil-timeline-2-pagination mil-upper mil-mb-30" />
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-prev mil-timeline-2-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
                <div className="mil-next mil-timeline-2-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="col-xl-12">
            <Swiper
              {...sliderProps.timelineSlider}
              className="swiper-container mil-timeline-slider-2"
            >
              {/* IMS Group - Current */}
              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">IMS Group</p>
                    <p className="mil-upper mil-mb-30">
                      <span className="mil-accent">Web Developer</span> | Aug 2024 - Present
                    </p>
                    <p>
                      Developed scalable REST APIs using Node.js/Express, optimized MySQL queries (30% improvement), 
                      integrated Salesforce & Jobscience CRM, and implemented JWT authentication.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* IT Spark Technology */}
              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">IT Spark Technology</p>
                    <p className="mil-upper mil-mb-30">
                      <span className="mil-accent">Web Developer</span> | Apr 2023 - Aug 2024
                    </p>
                    <p>
                      Built backend modules with Node.js/Express, developed RESTful APIs with validation, 
                      designed MySQL schemas, and collaborated with frontend teams for seamless integration.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Softvyom Technology */}
              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">Softvyom Technology</p>
                    <p className="mil-upper mil-mb-30">
                      <span className="mil-accent">Web Developer</span> | Feb 2022 - Apr 2023
                    </p>
                    <p>
                      Built 10+ responsive UI screens, developed REST APIs with Node.js/Express, 
                      worked with MongoDB, and integrated third-party APIs.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Freelance */}
              <SwiperSlide className="swiper-slide">
                <div className="mil-icon-box mil-type-2 mil-mb-30">
                  <div className="mil-box-text">
                    <p className="mil-upper mil-text-lg mil-mb-15">Freelance</p>
                    <p className="mil-upper mil-mb-30">
                      <span className="mil-accent">Web Developer</span> | Remote
                    </p>
                    <p>
                      Built 10+ responsive UI screens, developed REST APIs with Node.js/Express, 
                      worked with MongoDB, and integrated third-party APIs.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
/*--updated on 29--*/

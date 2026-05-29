import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="mil-text-center-adapt">
          <p className="mil-upper mil-mb-30">
            What <span className="mil-accent">Clients Say</span>
          </p>
          <h2 className="mil-up mil-mb-60">Testimonials</h2>
          <p className="mil-mb-60">
            Real feedback from clients who have experienced the quality and professionalism of my web development services.
          </p>
        </div>
        <div className="mil-divider" />
        <div className="row">
          <div className="col-xl-8">
            <Swiper
              {...sliderProps.reviewsSlider}
              className="swiper-container mil-reviews-slider"
            >
              <div className="swiper-wrapper">
                {/* Testimonial 1 */}
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/1.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        "Itee delivered an excellent WordPress site that exceeded our expectations. 
                        The site is fast, responsive, and easy to manage. Great communication throughout 
                        the project. Highly recommended!"
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Dummy <span className="mil-accent">1</span>
                      </p>
                      <p className="mil-mb-30">Position / Company Name</p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Testimonial 2 */}
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/2.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        "The MERN stack application developed by Itee was exactly what we needed. 
                        Clean code, on-time delivery, and great problem-solving skills. Will definitely 
                        work with him again."
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Dummy <span className="mil-accent">2</span>
                      </p>
                      <p className="mil-mb-30">Position / Company Name</p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Testimonial 3 */}
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/3.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        "Seamless Salesforce integration! Itee understood our requirements perfectly 
                        and delivered a solution that saved us hours of manual work. Professional, 
                        skilled, and very responsive."
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Dummy <span className="mil-accent">3</span>
                      </p>
                      <p className="mil-mb-30">Position / Company Name</p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Testimonial 4 */}
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/4.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        "Great attention to detail! The responsive design works perfectly on all devices. 
                        Itee is a talented developer who truly cares about delivering quality work. 
                        Highly recommend for web development projects."
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Dummy <span className="mil-accent">4</span>
                      </p>
                      <p className="mil-mb-30">Position / Company Name</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-xl-4">
            <div className="mil-reviews-nav">
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-prev mil-reviews-prev">
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
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </div>
                <div className="mil-next mil-reviews-next">
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
              <div className="mil-reviews-pagination mil-upper mil-mb-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
/*--updated on 29--*/

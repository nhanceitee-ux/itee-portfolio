import TretoLayout from "@/layout/TretoLayout";
const page = () => {
  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />
          <div className="container">
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Contact <span className="mil-accent">me</span>
              </p>
              <h2 className="mil-up mil-mb-30">Let's get you an estimate</h2>
              <p className="mil-left-offset">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="mil-contact">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">
                      About <span className="mil-accent">me</span>
                    </p>
                    <p>
                      Margaret Anderson <br />
                      Web and App Developer <br />
                      Miami, FL <br />
                      United States of America
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">Email</p>
                    <p>
                      <a href="mailto:hello@treto.co">hello@treto.co</a>
                      <br />
                      <a href="mailto:hello@treto.co">projects@treto.co</a>
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">Chats</p>
                    <p>
                      <a href="tel:+123456789">Telegram</a>
                      <br />
                      <a href="tel:+123456789">WhatsApp</a>
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-90">
                    <p className="mil-upper mil-mb-30">Phone</p>
                    <p>
                      <a href="tel+5636366060">+ 56 3636 60 60</a> <br />
                      <a href="tel+5663630606">+ 56 6363 06 06</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <form id="cform" className="cform" method="post">
                    <label className="mil-upper">
                      Your full name <span className="mil-accent">*</span>
                    </label>
                    <input type="text" className="mil-mb-30" name="name" />
                    <label className="mil-upper">
                      Your email address <span className="mil-accent">*</span>
                    </label>
                    <input type="email" className="mil-mb-30" name="email" />
                    <label className="mil-upper">
                      Your phone number <span className="mil-accent">*</span>
                    </label>
                    <input type="tel" className="mil-mb-30" name="tel" />
                    <label className="mil-upper">
                      Subject <span className="mil-accent">*</span>
                    </label>
                    <input type="text" className="mil-mb-30" name="subject" />
                    <label className="mil-upper">
                      Tell me your ideas <span className="mil-accent">*</span>
                    </label>
                    <textarea
                      className="mil-mb-30"
                      name="message"
                      defaultValue={""}
                    />
                    <label className="mil-checkbox mil-mb-30">
                      by sending the message you accept the{" "}
                      <a href="#.">terms and conditions</a>.
                      <input type="checkbox" name="checkmark" defaultChecked />
                      <span className="mil-checkmark" />
                    </label>
                    <button type="submit" className="mil-button">
                      Submit
                    </button>
                  </form>
                  <div className="alert-success" style={{ display: "none" }}>
                    <h5>Thanks, your message is sent successfully.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};
export default page;

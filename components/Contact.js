import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdabjwvw");  // ✅ Your form ID

  if (state.succeeded) {
    return (
      <div className="mil-section mil-op-space-90">
        <div className="container">
          <div className="mil-text-center" style={{ padding: "60px 0" }}>
            <i className="fas fa-check-circle" style={{ fontSize: "60px", color: "#E8136A", marginBottom: "20px" }}></i>
            <h2 className="mil-up">Thank You!</h2>
            <p>Your message has been sent successfully. I'll get back to you soon!</p>
            <a href="/" className="mil-button" style={{ marginTop: "20px", display: "inline-block" }}>Back to Home</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">
          Contact <span className="mil-accent">me</span>
        </p>
        <h2 className="mil-up mil-mb-60">Let's get you an estimate</h2>
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Email</p>
              <p>
                <a href="mailto:iteepurohit@gmail.com">iteepurohit@gmail.com</a>
              </p>
            </div>
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Phone</p>
              <p>
                <a href="tel:+919479919095">+91 94799 19095</a>
              </p>
            </div>
            <div className="mil-contact-card">
              <p className="mil-upper mil-mb-30">Freelance</p>
              <p>Available for WordPress, MERN, and CRM projects</p>
            </div>
          </div>
          <div className="col-lg-7">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your full name <span className="mil-accent">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="mil-mb-30" 
                    name="name" 
                    id="name"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your email address <span className="mil-accent">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="mil-mb-30" 
                    name="email" 
                    id="email"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="col-lg-12">
                  <label className="mil-upper">
                    Your message <span className="mil-accent">*</span>
                  </label>
                  <textarea
                    className="mil-mb-30"
                    name="message"
                    id="message"
                    rows="5"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className="col-lg-12 mil-text-row">
                  <label className="mil-checkbox mil-mb-30">
                    by sending, I accept the{" "}
                    <a href="#.">terms and conditions</a>.
                    <input type="checkbox" name="checkmark" id="terms" required />
                    <span className="mil-checkmark" />
                  </label>
                  <button type="submit" className="mil-button" disabled={state.submitting}>
                    {state.submitting ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
/*--updated on 29--*/

"use client";

import TretoLayout from "@/layout/TretoLayout";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("https://formspree.io/f/mdabjwvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <TretoLayout noFooter>
        <div className="container" style={{ padding: "120px 0", textAlign: "center" }}>
          <i className="fas fa-check-circle" style={{ fontSize: "60px", color: "#E8136A", marginBottom: "20px" }}></i>
          <h2 className="mil-up">Thank You!</h2>
          <p style={{ marginTop: "15px" }}>Your message has been sent successfully. I'll get back to you soon!</p>
          <Link href="/" className="mil-button" style={{ marginTop: "30px", display: "inline-block" }}>
            Back to Home
          </Link>
        </div>
      </TretoLayout>
    );
  }

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
                Contact <span className="mil-accent">Me</span>
              </p>
              <h2 className="mil-up mil-mb-30">Let's Work Together</h2>
              <p className="mil-left-offset" style={{ maxWidth: "600px" }}>
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
            </div>

            <div className="row justify-content-between" style={{ paddingBottom: "80px" }}>
              {/* Contact Info Cards */}
              <div className="col-lg-4">
                <div className="mil-contact-card mil-mb-30">
                  <p className="mil-upper mil-mb-30">Email</p>
                  <p>
                    <a href="mailto:iteepurohit@gmail.com">iteepurohit@gmail.com</a>
                  </p>
                </div>
                <div className="mil-contact-card mil-mb-30">
                  <p className="mil-upper mil-mb-30">Phone / WhatsApp</p>
                  <p>
                    <a href="tel:+919479919095">+91 94799 19095</a>
                  </p>
                </div>
                <div className="mil-contact-card">
                  <p className="mil-upper mil-mb-30">Freelance</p>
                  <p>Available for WordPress, MERN, and CRM integration projects.</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-7">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <label className="mil-upper">
                        Your full name <span className="mil-accent">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="mil-mb-30" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "12px", borderRadius: "8px" }}
                      />
                    </div>
                    <div className="col-lg-12">
                      <label className="mil-upper">
                        Your email address <span className="mil-accent">*</span>
                      </label>
                      <input 
                        type="email" 
                        className="mil-mb-30" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "12px", borderRadius: "8px" }}
                      />
                    </div>
                    <div className="col-lg-12">
                      <label className="mil-upper">
                        Your message / Project details <span className="mil-accent">*</span>
                      </label>
                      <textarea
                        className="mil-mb-30"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        style={{ width: "100%", padding: "12px", borderRadius: "8px", resize: "vertical" }}
                      />
                    </div>
                    <div className="col-lg-12 mil-text-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
                      <label className="mil-checkbox" style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                        <input type="checkbox" required style={{ width: "auto" }} />
                        <span>by sending, I accept the <a href="#">terms and conditions</a>.</span>
                        <span className="mil-checkmark" />
                      </label>
                      <button 
                        type="submit" 
                        className="mil-button" 
                        disabled={status === "submitting"}
                        style={{ padding: "12px 35px" }}
                      >
                        {status === "submitting" ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                    {status === "error" && (
                      <div className="col-lg-12" style={{ marginTop: "15px" }}>
                        <p style={{ color: "red", fontSize: "14px" }}>Something went wrong. Please try again or email me directly.</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default page;
/*--updated on 29--*/

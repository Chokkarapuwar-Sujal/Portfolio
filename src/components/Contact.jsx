import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiries",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Hi, I'm ${name} (${email}).\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let&apos;s Connect</h2>

        <div className="contact-layout">
          {/* Left — Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option>General Inquiries</option>
                  <option>Job Opportunity</option>
                  <option>Freelance Project</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-outline contact-submit">
                <FiSend /> Send Message
              </button>
            </form>
          </div>

          {/* Right — Get In Touch */}
          <div className="contact-info">
            <h3 className="contact-info-title">Get In Touch</h3>

            <div className="contact-details">
              <div className="contact-detail-card">
                <div className="detail-icon">
                  <FiMail />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{personalInfo.email}</span>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="detail-icon">
                  <FiMapPin />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">India</span>
                </div>
              </div>
            </div>

            <h4 className="contact-socials-title">Socials . . .</h4>

            <div className="contact-socials">
              <a
                href={personalInfo.github}
                className="contact-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                className="contact-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-social-link"
                aria-label="Email"
              >
                <FiMail />
              </a>
              
              {/*
              <a
                href="#"
                className="contact-social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="contact-social-link"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </a>
              */}

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

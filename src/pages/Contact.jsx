import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function Contact({ navigateTo }) {
  const formRef = useRef(null);

  const scrollToForm = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="contact-hero section-padding">
        <div className="container">
          <div className="contact-hero-content">
            <div className="badge">Get In Touch</div>
            <h1 className="contact-hero-title text-gradient">
              Let's Discuss Your Business
            </h1>
            <p className="contact-hero-desc">
              Tell us about your challenges and we'll recommend the right AI solution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="contact-grid-section">
        <div className="container">
          <div className="grid-2 contact-layout-grid" ref={formRef}>
            {/* Form Column */}
            <motion.div 
              className="card contact-form-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-header-wrap">
                <h2>Book Your Free Call</h2>
                <p>Plug your revenue leaks. Complete the form below to get started.</p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Info Column */}
            <motion.div 
              className="contact-info-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {/* Contact Details Card */}
              <div className="card info-details-card">
                <h3>Contact Information</h3>
                
                <div className="info-items-list">
                  <a href="mailto:leadzenix3@gmail.com" className="info-item-row">
                    <div className="info-icon-box">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="info-label">Email Address</span>
                      <span className="info-value">leadzenix3@gmail.com</span>
                    </div>
                  </a>

                  <a href="https://wa.me/916301667440" target="_blank" rel="noopener noreferrer" className="info-item-row">
                    <div className="info-icon-box">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="info-label">WhatsApp Chat</span>
                      <span className="info-value">+91 63016 67440</span>
                    </div>
                  </a>

                  <div className="info-item-row no-click">
                    <div className="info-icon-box">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="info-label">Business Hours</span>
                      <span className="info-value">Monday – Saturday</span>
                      <span className="info-subvalue">9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value card */}
              <div className="card info-trust-card">
                <div className="trust-badge-header">
                  <ShieldCheck size={20} className="text-blue" />
                  <h4>Our Promise</h4>
                </div>
                <p>
                  No high-pressure sales pitches. We review your current workflows, calculate potential savings from AI voice agents or WhatsApp chatbot deployment, and deliver a custom blueprint for your business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-cta-section section-padding">
        <div className="container">
          <div className="cta-card">
            <div className="glow-spot" style={{ bottom: '-100px', left: '-100px' }} />
            <div className="cta-card-content">
              <h2>Ready To Automate Your Business?</h2>
              <p>
                Let's build AI systems that help you capture more leads, automate customer communication, and grow your business 24/7.
              </p>
              <div className="cta-card-actions">
                <a href="#contact" onClick={scrollToForm} className="btn btn-primary">
                  Book Your Free Call
                  <ArrowRight size={18} />
                </a>
                <a 
                  href="https://wa.me/916301667440" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                >
                  Chat On WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

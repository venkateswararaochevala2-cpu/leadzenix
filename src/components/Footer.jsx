import React from 'react';
import { Mail, Phone, Clock, ArrowRight } from 'lucide-react';

function Footer({ navigateTo }) {
  const handleLinkClick = (hash, e) => {
    e.preventDefault();
    navigateTo(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <img src="/image.png" alt="LeadZenix Logo" className="footer-logo" />
            <p className="footer-desc">
              LeadZenix helps businesses grow by automating customer conversations, capturing leads, and booking appointments with AI-powered voice agents, WhatsApp chatbots, and automation systems.
            </p>
            <div className="footer-contact-details">
              <a href="mailto:leadzenix3@gmail.com" className="footer-contact-item">
                <Mail size={16} />
                <span>leadzenix3@gmail.com</span>
              </a>
              <a href="https://wa.me/916301667440" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <Phone size={16} />
                <span>+91 63016 67440</span>
              </a>
              <div className="footer-contact-item">
                <Clock size={16} />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleLinkClick('#home', e)}>Home</a></li>
              <li><a href="#revenue-systems" onClick={(e) => handleLinkClick('#revenue-systems', e)}>Revenue Systems</a></li>
              <li><a href="#solutions" onClick={(e) => handleLinkClick('#solutions', e)}>Solutions</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick('#about', e)}>About</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick('#contact', e)}>Contact</a></li>
            </ul>
          </div>

          {/* Revenue Systems */}
          <div className="footer-col">
            <h3>Revenue Systems</h3>
            <ul className="footer-links">
              <li>
                <a href="#revenue-systems" onClick={(e) => handleLinkClick('#revenue-systems', e)}>
                  Lead Capture & Call Automation
                </a>
              </li>
              <li>
                <a href="#revenue-systems" onClick={(e) => handleLinkClick('#revenue-systems', e)}>
                  WhatsApp Sales & Support
                </a>
              </li>
              <li>
                <a href="#revenue-systems" onClick={(e) => handleLinkClick('#revenue-systems', e)}>
                  Revenue Website System
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-col">
            <h3>Solutions</h3>
            <ul className="footer-links">
              <li><a href="#solutions" onClick={(e) => handleLinkClick('#solutions', e)}>Real Estate AI Voice System</a></li>
              <li><a href="#solutions" onClick={(e) => handleLinkClick('#solutions', e)}>Hospital AI Receptionist</a></li>
              <li><a href="#solutions" onClick={(e) => handleLinkClick('#solutions', e)}>Automobile Lead Qualification</a></li>
              <li><a href="#solutions" onClick={(e) => handleLinkClick('#solutions', e)}>Real Estate WhatsApp Assistant</a></li>
              <li><a href="#solutions" onClick={(e) => handleLinkClick('#solutions', e)}>E-Commerce & D2C WhatsApp System</a></li>
              <li><a href="#solutions" onClick={(e) => handleLinkClick('#solutions', e)}>Hospital Appointment Bot</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} LeadZenix. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#contact" onClick={(e) => handleLinkClick('#contact', e)} className="footer-strategy-link">
              Book Your Free Call <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

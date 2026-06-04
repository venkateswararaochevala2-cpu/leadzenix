import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, Globe, Check, ArrowRight, Video, Calendar } from 'lucide-react';

function Contact({ navigateTo }) {
  const checklistItems = [
    "Current business challenges",
    "Revenue leaks and bottlenecks",
    "AI Voice Agent opportunities",
    "WhatsApp automation possibilities",
    "Customer support automation",
    "Custom AI implementation roadmap"
  ];

  const handleBooking = () => {
    window.open("https://cal.com/leadzenix/free-ai-consultation", "_blank");
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: '#F8FAFC', minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '6rem 0' }}>
      <div className="container">
        <div className="grid-2-contact">
          
          {/* Left Side (Main Content) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              {/* Badge */}
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 16px',
                borderRadius: '9999px',
                backgroundColor: '#EFF6FF',
                color: '#2563EB',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}>
                Free Consultation
              </span>
              
              {/* Heading */}
              <h1 style={{
                fontSize: '3.25rem',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem'
              }}>
                Let's Discuss Your Business
              </h1>
              
              {/* Subheading */}
              <p style={{
                fontSize: '1.15rem',
                color: '#475569',
                lineHeight: 1.6,
                margin: 0
              }}>
                Book a free 30-minute AI Strategy Session and discover how automation can help your business save time, reduce costs, and increase revenue.
              </p>
            </div>

            {/* What We'll Discuss Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                What We'll Discuss
              </h3>
              <div className="checklist-grid">
                {checklistItems.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#EFF6FF',
                      color: '#2563EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#334155' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information Card */}
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)' }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)'
              }}
              className="contact-info-card-grid"
            >
              <a href="mailto:leadzenix3@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase' }}>Email</span>
                  <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#0F172A' }}>leadzenix3@gmail.com</span>
                </div>
              </a>

              <a href="tel:+916301867440" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={18} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase' }}>Phone</span>
                  <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#0F172A' }}>+91 63018 67440</span>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={18} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase' }}>Hours</span>
                  <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#0F172A' }}>Monday – Saturday</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Globe size={18} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase' }}>Format</span>
                  <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#0F172A' }}>Google Meet Consultation</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side (Booking Card) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              borderRadius: '28px',
              padding: '3rem 2.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.035), 0 1px 3px rgba(0, 0, 0, 0.01)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              <div>
                {/* Booking Card Title */}
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em'
                }}>
                  Book Your Free Call
                </h2>
                
                {/* Description */}
                <p style={{
                  fontSize: '0.975rem',
                  color: '#64748B',
                  lineHeight: 1.55,
                  margin: 0
                }}>
                  Choose a convenient time directly from our calendar and receive instant confirmation.
                </p>
              </div>

              {/* Feature Chips */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {[
                  { text: '30 Minute Session', icon: Clock },
                  { text: 'Google Meet', icon: Video },
                  { text: 'Free Consultation', icon: Check },
                  { text: 'Instant Confirmation', icon: Calendar }
                ].map((chip, idx) => {
                  const ChipIcon = chip.icon;
                  return (
                    <div 
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '6px 14px',
                        borderRadius: '12px',
                        backgroundColor: '#EFF6FF',
                        color: '#2563EB',
                        fontSize: '0.825rem',
                        fontWeight: 600
                      }}
                    >
                      <ChipIcon size={14} />
                      {chip.text}
                    </div>
                  );
                })}
              </div>

              {/* Action Button & Trust Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBooking}
                  style={{
                    width: '100%',
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
                >
                  Book Free Strategy Session
                  <ArrowRight size={18} />
                </motion.button>

                <p style={{
                  fontSize: '0.85rem',
                  color: '#64748B',
                  textAlign: 'center',
                  margin: 0,
                  lineHeight: 1.4
                }}>
                  No sales pressure. Just a practical discussion about how AI can help your business.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Contact;

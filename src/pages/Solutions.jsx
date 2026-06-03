import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  Globe, 
  Plus, 
  Minus, 
  Check, 
  Building2, 
  Stethoscope, 
  Car, 
  ShoppingBag,
  ArrowRight,
  Database,
  Cpu
} from 'lucide-react';

function Solutions({ navigateTo }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const categories = [
    {
      id: 'voice',
      title: 'AI Voice Agent Solutions',
      icon: Phone,
      items: [
        {
          id: 're-voice-inbound',
          title: 'Real Estate AI Voice System (Inbound)',
          subtitle: 'Inbound Calling Agent',
          desc: 'Answers all incoming property enquiries.',
          features: [
            'Property Information',
            'Pricing Questions',
            'Site Visit Booking',
            'Lead Qualification',
            'Customer Support'
          ],
          dashboard: [
            'Call Recordings',
            'Transcripts',
            'Analytics',
            'Appointment Tracking',
            'Lead Management'
          ]
        },
        {
          id: 'voice-outbound',
          title: 'Outbound Calling Agent',
          subtitle: 'Outbound Calling Agent',
          desc: 'Calls leads automatically and follows up.',
          features: [
            'Bulk Lead Calling',
            'Lead Qualification',
            'Follow-Up Automation',
            'Site Visit Scheduling',
            'Lead Scoring'
          ],
          dashboard: [
            'Call Recordings',
            'Transcripts',
            'Analytics',
            'Appointment Tracking',
            'Lead Management'
          ]
        },
        {
          id: 'hospital-receptionist',
          title: 'Hospital AI Receptionist',
          subtitle: 'Receptionist Agent',
          desc: 'AI receptionist for medical clinics and hospitals.',
          features: [
            'Appointment Booking',
            'Doctor Availability',
            'Patient Support',
            'Multi-Language Support',
            'Call Handling'
          ],
          dashboard: [
            'Call Logs',
            'Appointment Tracking',
            'Transcripts',
            'Analytics Dashboard'
          ]
        },
        {
          id: 'automobile-agent',
          title: 'Automobile Lead Qualification Agent',
          subtitle: 'Lead Qualification Agent',
          desc: 'Qualifies automobile buyers automatically.',
          features: [
            'Calls New Leads',
            'Lead Qualification',
            'Interest Scoring',
            'Test Drive Scheduling',
            'Automated Follow-Ups'
          ],
          dashboard: null
        },
        {
          id: 'custom-voice',
          title: 'Custom AI Voice Agents',
          subtitle: 'Bespoke Integration',
          desc: 'Built specifically around your business workflows.',
          features: [
            'Fully Customized Dialogue Flow',
            'Direct System Webhook Integrations',
            'Specific Voice Tone Mapping',
            'CRM Specific Updates',
            'Enterprise API Access'
          ],
          dashboard: null
        }
      ]
    },
    {
      id: 'whatsapp',
      title: 'AI WhatsApp Chatbot Solutions',
      icon: MessageSquare,
      items: [
        {
          id: 're-whatsapp',
          title: 'Real Estate WhatsApp Assistant',
          subtitle: 'Property Assistant Bot',
          desc: 'Qualify and book site visits through WhatsApp chats.',
          features: [
            'Property Details',
            'Site Visit Booking',
            'Lead Qualification',
            'Customer Support'
          ],
          dashboard: null
        },
        {
          id: 'ecommerce-whatsapp',
          title: 'E-Commerce & D2C WhatsApp System',
          subtitle: 'Sales & Support Bot',
          desc: 'Take orders and support buyers directly in WhatsApp.',
          features: [
            'Product Enquiries',
            'Order Placement',
            'Order Tracking',
            'Customer Support'
          ],
          dashboard: null
        },
        {
          id: 'hospital-whatsapp',
          title: 'Hospital Appointment Bot',
          subtitle: 'Healthcare WhatsApp Bot',
          desc: 'Automate doctor bookings and patient information.',
          features: [
            'Appointment Booking',
            'Doctor Availability',
            'Clinic Information',
            'Patient Support'
          ],
          dashboard: null
        },
        {
          id: 'custom-whatsapp',
          title: 'Custom WhatsApp Chatbots',
          subtitle: 'Bespoke Integration',
          desc: 'Fully customized based on your business requirements.',
          features: [
            'Custom Workflow Configurations',
            'Catalog & Payment API Integrations',
            'Multi-agent Support Desks',
            'Bespoke Automation Rules'
          ],
          dashboard: null
        }
      ]
    },
    {
      id: 'websites',
      title: 'Business Website Development',
      icon: Globe,
      items: [
        {
          id: 'web-dev',
          title: 'Business Website Development',
          subtitle: 'Conversion-Focused Web',
          desc: 'Websites engineered to capture traffic and convert it to revenue.',
          features: [
            'Modern Design',
            'Mobile Responsive',
            'Fast Loading',
            'Lead Generation Focused',
            'SEO Friendly',
            'AI Integrations',
            'Conversion Optimized'
          ],
          dashboard: null
        }
      ]
    }
  ];

  const handleCardToggle = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="solutions-hero section-padding">
        <div className="container">
          <div className="solutions-hero-content">
            <div className="badge">Showcase</div>
            <h1 className="solutions-hero-title text-gradient">
              AI Solutions Built Around Real Business Problems
            </h1>
            <p className="solutions-hero-desc">
              Explore our range of purpose-built voice agents, WhatsApp assistants, and conversion-optimized websites. Click on any solution card to expand and view its full set of features.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-grid-section">
        <div className="container">
          <div className="solutions-category-list">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.id} className="solutions-category-group">
                  <div className="category-header">
                    <div className="category-title-wrap">
                      <CatIcon size={24} className="category-icon" />
                      <h2>{cat.title}</h2>
                    </div>
                    <div className="category-line" />
                  </div>

                  <div className="grid-2">
                    {cat.items.map((item) => {
                      const isExpanded = expandedCard === item.id;
                      return (
                        <motion.div
                          key={item.id}
                          layout
                          onClick={() => handleCardToggle(item.id)}
                          className={`card solution-card ${isExpanded ? 'expanded' : ''}`}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="solution-card-header">
                            <div>
                              <span className="solution-subtitle">{item.subtitle}</span>
                              <h3>{item.title}</h3>
                            </div>
                            <div className="expand-indicator">
                              {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                          </div>
                          
                          <p className="solution-card-desc">{item.desc}</p>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="solution-details-wrap"
                              >
                                <div className="solution-details-inner">
                                  <div className="details-block">
                                    <h4>Key Features</h4>
                                    <ul className="details-list">
                                      {item.features.map((feat, fIdx) => (
                                        <li key={fIdx}>
                                          <Check size={14} className="feature-check" />
                                          <span>{feat}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {item.dashboard && (
                                    <div className="details-block">
                                      <h4>Dashboard Features</h4>
                                      <ul className="details-list">
                                        {item.dashboard.map((dash, dIdx) => (
                                          <li key={dIdx}>
                                            <Database size={14} className="dashboard-db" />
                                            <span>{dash}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="solutions-cta-section section-padding">
        <div className="container">
          <div className="cta-card">
            <div className="glow-spot" style={{ top: '-100px', right: '-100px' }} />
            <div className="cta-card-content">
              <h2>Need a Customized AI Solution?</h2>
              <p>
                We build custom AI voice agents and WhatsApp workflows engineered around your specific business systems. Let's design your strategy.
              </p>
              <div className="cta-card-actions">
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); navigateTo('#contact'); }} 
                  className="btn btn-primary"
                >
                  Book Your Free Call
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  Globe, 
  Plus, 
  Minus, 
  Check, 
  Database,
  Cpu,
  ArrowRight,
  FileText,
  TrendingUp,
  BarChart2,
  Bot,
  Users,
  Clock,
  Calendar
} from 'lucide-react';

const tickerItems = [
  { text: "AI Voice Agents", icon: Bot },
  { text: "WhatsApp Chatbots", icon: MessageSquare },
  { text: "Business Websites", icon: Globe },
  { text: "Lead Automation", icon: Users },
  { text: "Appointment Booking", icon: Calendar },
  { text: "24/7 Support", icon: Clock }
];

function Solutions({ navigateTo }) {
  const [expandedCards, setExpandedCards] = useState({
    're-voice-inbound': true // Keep first one expanded by default for visual wow
  });

  const categories = [
    {
      id: 'voice',
      title: 'AI Voice Agent Solutions',
      icon: Phone,
      items: [
        {
          id: 're-voice-inbound',
          title: 'Real Estate AI Voice Agent (Inbound)',
          subtitle: 'Inbound Calling Agent',
          desc: 'An AI voice assistant that answers every incoming property enquiry instantly, provides property information, qualifies buyers, answers common questions, and books site visits automatically. This helps real estate businesses respond faster and capture more qualified leads.',
          features: [
            'Property Information',
            'Pricing Questions',
            'Site Visit Booking',
            'Lead Qualification',
            'Customer Support'
          ],
          dashboard: [
            'Call Transcripts',
            'Analytics Dashboard',
            'Appointment Tracking',
            'Lead Management',
            'Conversion Reports'
          ]
        },
        {
          id: 'voice-outbound',
          title: 'Real Estate AI Voice Agent (Outbound)',
          subtitle: 'Outbound Calling Agent',
          desc: 'An AI voice agent that automatically calls new property leads, follows up on enquiries, qualifies buyers, checks interest levels, and schedules site visits. It ensures every lead receives timely follow-up without requiring manual calling from your sales team.',
          features: [
            'Automatic Lead Calling',
            'Lead Qualification',
            'Follow-Up Automation',
            'Site Visit Scheduling',
            'Buyer Interest Scoring'
          ],
          dashboard: [
            'Call Transcripts',
            'Analytics Dashboard',
            'Appointment Tracking',
            'Lead Management',
            'Follow-Up Reports'
          ]
        },
        {
          id: 'hospital-receptionist',
          title: 'Hospital AI Receptionist',
          subtitle: 'Receptionist Agent',
          desc: 'An AI receptionist that answers patient calls, provides clinic information, handles appointment bookings, checks doctor availability, and assists patients with common enquiries, reducing workload for hospital staff.',
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
            'Call Transcripts',
            'Analytics Dashboard'
          ]
        },
        {
          id: 'automobile-agent',
          title: 'Automobile Lead Qualification Agent',
          subtitle: 'Lead Qualification Agent',
          desc: 'An AI voice agent designed for automobile dealerships that contacts new enquiries, qualifies potential buyers, identifies purchase intent, answers common questions, and schedules test drives automatically.',
          features: [
            'Calls New Leads',
            'Lead Qualification',
            'Interest Scoring',
            'Test Drive Scheduling',
            'Automated Follow-Ups'
          ],
          dashboard: [
            'Call Transcripts',
            'Lead Tracking',
            'Follow-Up Reports',
            'Appointment Tracking',
            'Performance Analytics'
          ]
        },
        {
          id: 'custom-voice',
          title: 'Custom AI Voice Agents',
          subtitle: 'Custom Voice Solution',
          desc: 'A fully customized AI voice agent built around your business processes and customer journey. Designed to automate repetitive conversations, qualify leads, answer questions, and improve customer engagement.',
          features: [
            'Fully Customized Conversation Flows',
            'Business Workflow Automation',
            'Custom Voice Personalities',
            'System Integrations',
            'Advanced Automation Logic'
          ],
          dashboard: [
            'Conversation Logs',
            'Analytics Dashboard',
            'Performance Tracking',
            'Customer Interaction Reports',
            'Custom Reporting'
          ]
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
          desc: 'An AI-powered WhatsApp assistant that responds instantly to property enquiries, shares property details, qualifies buyers, answers questions, and books site visits automatically.',
          features: [
            'Property Details',
            'Site Visit Booking',
            'Lead Qualification',
            'Customer Support'
          ],
          dashboard: [
            'Chat History',
            'Lead Tracking',
            'Booking Reports',
            'Customer Analytics'
          ]
        },
        {
          id: 'ecommerce-whatsapp',
          title: 'E-Commerce & D2C WhatsApp System',
          subtitle: 'Sales & Support Bot',
          desc: 'An AI WhatsApp assistant that helps customers discover products, place orders, track deliveries, and receive support. It creates a seamless shopping experience while reducing manual workload.',
          features: [
            'Product Enquiries',
            'Order Placement',
            'Order Tracking',
            'Customer Support'
          ],
          dashboard: [
            'Order Tracking',
            'Customer Conversations',
            'Sales Analytics',
            'Support Reports'
          ]
        },
        {
          id: 'hospital-whatsapp',
          title: 'Hospital Appointment Bot',
          subtitle: 'Healthcare WhatsApp Bot',
          desc: 'A WhatsApp assistant that helps patients book appointments, check doctor availability, access clinic information, and receive support directly through WhatsApp.',
          features: [
            'Appointment Booking',
            'Doctor Availability',
            'Clinic Information',
            'Patient Support'
          ],
          dashboard: [
            'Appointment Reports',
            'Chat History',
            'Patient Enquiry Tracking',
            'Analytics Dashboard'
          ]
        },
        {
          id: 'custom-whatsapp',
          title: 'Custom WhatsApp Chatbots',
          subtitle: 'Custom WhatsApp Solution',
          desc: 'A fully customized WhatsApp chatbot built around your business requirements. Automate customer conversations, support requests, lead generation, and business workflows from one platform.',
          features: [
            'Custom Workflow Automation',
            'Catalog Integration',
            'Payment Integration',
            'Multi-Agent Support',
            'Custom Automation Rules'
          ],
          dashboard: [
            'Conversation Analytics',
            'Customer Tracking',
            'Automation Reports',
            'Performance Dashboard'
          ]
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
          subtitle: 'Revenue-Focused Website',
          desc: 'A professional website designed to build trust, generate enquiries, and convert visitors into customers. Every website is optimized for speed, mobile devices, search engines, and lead generation.',
          features: [
            'Modern Website Design',
            'Mobile Responsive',
            'Fast Loading Speed',
            'Lead Capture Forms',
            'SEO-Friendly Structure',
            'AI Integrations',
            'Conversion Optimization'
          ],
          dashboard: [
            'Website Analytics',
            'Lead Tracking',
            'Form Submission Reports',
            'Visitor Insights',
            'Conversion Tracking'
          ]
        }
      ]
    }
  ];

  const handleCardToggle = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Hero Section */}
      <section className="solutions-hero section-padding">
        <div className="container">
          <div className="solutions-hero-content">
            <div className="badge-pill" style={{ margin: '0 auto 1.5rem auto', display: 'inline-flex' }}>
              <span>Our AI Solutions</span>
            </div>
            <h1 className="solutions-hero-title">
              AI Solutions That Help You <span style={{ color: '#38BDF8' }}>Get More Leads</span> and <span style={{ color: '#38BDF8' }}>Book More Appointments</span>
            </h1>
            <p className="solutions-hero-desc">
              From AI voice agents to WhatsApp automation and business websites, we build systems that help businesses respond faster, automate repetitive work, and grow revenue.
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
                      const isExpanded = !!expandedCards[item.id];
                      return (
                        <motion.div
                          key={item.id}
                          layout
                          onClick={() => handleCardToggle(item.id)}
                          className={`sol-card-premium ${isExpanded ? 'expanded' : ''}`}
                          transition={{ duration: 0.3 }}
                          style={{
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            height: 'fit-content',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '16px',
                            border: isExpanded ? '1px solid rgba(0, 102, 255, 0.3)' : '1px solid rgba(0, 0, 0, 0.05)',
                            boxShadow: isExpanded ? '0 10px 30px rgba(0, 102, 255, 0.06)' : '0 4px 15px rgba(0, 0, 0, 0.01)',
                            overflow: 'hidden',
                            position: 'relative'
                          }}
                        >
                          {/* Top Portion (Dark Navy when expanded, light when collapsed) */}
                          <div 
                            className={`sol-card-header-premium ${isExpanded ? 'expanded-dark' : ''}`}
                            style={{
                              padding: '2rem',
                              backgroundColor: isExpanded ? '#0b1329' : '#FFFFFF',
                              color: isExpanded ? '#FFFFFF' : 'var(--color-dark)',
                              transition: 'background-color 0.3s, color 0.3s',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              gap: '1.25rem',
                              borderBottom: isExpanded ? 'none' : '1px solid rgba(0, 0, 0, 0.03)'
                            }}
                          >
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                              <div 
                                className="sol-card-icon-wrap"
                                style={{
                                  width: '48px',
                                  height: '48px',
                                  borderRadius: '12px',
                                  backgroundColor: isExpanded ? '#0066FF' : 'rgba(0, 102, 255, 0.06)',
                                  color: isExpanded ? '#FFFFFF' : '#0066FF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0
                                }}
                              >
                                <CatIcon size={24} />
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <span 
                                  style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    color: isExpanded ? 'rgba(255, 255, 255, 0.6)' : '#0066FF'
                                  }}
                                >
                                  {item.subtitle}
                                </span>
                                 <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, lineHeight: 1.25, color: isExpanded ? '#FFFFFF' : 'var(--color-dark)' }}>
                                   {item.title}
                                 </h3>
                                {!isExpanded && (
                                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', margin: '0.5rem 0 0 0', lineHeight: 1.5 }}>
                                    {item.desc.length > 120 ? item.desc.substring(0, 120) + '...' : item.desc}
                                  </p>
                                )}
                                {isExpanded && (
                                  <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', margin: '0.5rem 0 0 0', lineHeight: 1.5 }}>
                                    {item.desc}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div 
                              className="sol-expand-indicator"
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                backgroundColor: isExpanded ? '#0066FF' : 'rgba(0, 0, 0, 0.03)',
                                color: isExpanded ? '#FFFFFF' : '#0066FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}
                            >
                              {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                          </div>

                          {/* Expanded content */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                style={{ overflow: 'hidden' }}
                              >
                                <div style={{ padding: '2.5rem 2rem', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}>
                                  <div 
                                    className="sol-details-grid-premium"
                                    style={{
                                      display: 'grid',
                                      gridTemplateColumns: '1fr 1fr',
                                      gap: '2.5rem',
                                      marginBottom: '2.5rem'
                                    }}
                                  >
                                    {/* Key Features */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                      <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0066FF', letterSpacing: '0.8px', margin: 0 }}>
                                        KEY FEATURES
                                      </h4>
                                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                        {item.features.map((feat, fIdx) => (
                                          <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.925rem', fontWeight: 600, color: '#1E293B' }}>
                                            <div 
                                              style={{
                                                width: '18px',
                                                height: '18px',
                                                borderRadius: '50%',
                                                backgroundColor: '#0066FF',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#FFFFFF',
                                                flexShrink: 0
                                              }}
                                            >
                                              <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span>{feat}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* Dashboard Features */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                      <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0066FF', letterSpacing: '0.8px', margin: 0 }}>
                                        DASHBOARD FEATURES
                                      </h4>
                                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                        {item.dashboard.map((dash, dIdx) => (
                                          <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.925rem', fontWeight: 600, color: '#1E293B' }}>
                                            <div 
                                              style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '6px',
                                                backgroundColor: 'rgba(0, 102, 255, 0.08)',
                                                color: '#0066FF',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                              }}
                                            >
                                              <FileText size={14} />
                                            </div>
                                            <span>{dash}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>

                                  {/* Bottom Visibility Banner */}
                                  <div 
                                    className="sol-visibility-banner-premium"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '1rem',
                                      backgroundColor: 'rgba(0, 102, 255, 0.04)',
                                      border: '1px solid rgba(0, 102, 255, 0.1)',
                                      borderRadius: '12px',
                                      padding: '1rem 1.25rem'
                                    }}
                                  >
                                    <div 
                                      style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '8px',
                                        backgroundColor: '#0066FF',
                                        color: '#FFFFFF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                      }}
                                    >
                                      <BarChart2 size={20} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0066FF' }}>
                                        Get complete visibility and control
                                      </span>
                                      <span style={{ fontSize: '0.775rem', color: '#64748B', fontWeight: 500 }}>
                                        {cat.id === 'websites' 
                                          ? 'Track visitor behavior, monitor forms, and convert more traffic.' 
                                          : 'Track performance, monitor calls, and convert more leads.'}
                                      </span>
                                    </div>
                                  </div>
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

      {/* Final CTA Section */}
      <section className="final-cta-section section-padding">
        <div className="container">
          <div className="cta-card">
            {/* Background glowing waves and grid decoration */}
            <div className="cta-glow-spot-1" />
            <div className="cta-glow-spot-2" />
            <div className="cta-grid-dots-left" />
            <div className="cta-grid-dots-right" />
            
            <div className="cta-card-content">
              <h2>Ready To Automate <br />Your <span className="text-highlight">Business?</span></h2>
              
              <p>
                Let LeadZenix help you save time, reduce manual work, and convert more leads with AI-powered automation systems that <span className="text-highlight-blue">work 24/7</span> for your business.
              </p>
              
              <div className="cta-card-actions">
                <a href="https://cal.com/leadzenix/free-ai-consultation" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn-primary">
                  <Phone size={18} className="btn-left-icon" />
                  Book Your Free Call
                  <ArrowRight size={18} className="btn-right-icon" />
                </a>
                <a href="https://wa.me/916301667440" target="_blank" rel="noopener noreferrer" className="btn btn-outline cta-btn-outline">
                  <svg className="whatsapp-icon btn-left-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 2C6.479 2 2 6.479 2 12.03 c0 1.907.531 3.676 1.447 5.197L2 22l4.927-1.385c1.472.84 3.167 1.325 4.974 1.325 5.552 0 10.03-4.479 10.03-10.03S17.583 2 12.03 2zm5.728 14.154c-.227.639-1.285 1.189-1.782 1.272-.455.076-.983.136-2.734-.58-2.24-.916-3.623-3.189-3.737-3.342-.113-.153-.925-1.231-.925-2.35 0-1.12.583-1.667.792-1.895.208-.228.455-.285.607-.285.152 0 .304.004.436.011.136.008.318-.053.497.383.182.443.626 1.528.68 1.64.053.114.09.246.011.4-.078.155-.152.249-.24.351-.087.1-.186.223-.265.3-.087.087-.182.182-.079.359.102.178.455.753.974 1.214.67.595 1.231.78 1.408.867.178.087.281.072.383-.045.102-.118.455-.53.58-.712.125-.182.25-.152.417-.091.171.061 1.076.508 1.262.603.186.095.311.14.356.22.045.076.045.439-.182 1.078z"/>
                  </svg>
                  Chat On WhatsApp
                </a>
              </div>
            </div>

            {/* Bottom Trust Panel / Infinite Ticker */}
            <div className="cta-trust-panel">
              <div className="cta-trust-header">
                <span className="line-decor"></span>
                <span className="trust-title">Businesses trust LeadZenix for</span>
                <span className="line-decor"></span>
              </div>
              
              <div className="cta-ticker-outer">
                <div className="cta-logo-card">
                  <img src="/Logo.png" alt="LeadZenix Logo" className="cta-logo-img" />
                </div>
                
                <div className="cta-ticker-inner">
                  <div className="cta-ticker-track">
                    {tickerItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={`ticker-item-1-${idx}`} className="cta-ticker-item">
                          <Icon size={18} className="ticker-item-icon" />
                          <span>{item.text}</span>
                        </div>
                      );
                    })}
                    {tickerItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={`ticker-item-2-${idx}`} className="cta-ticker-item">
                          <Icon size={18} className="ticker-item-icon" />
                          <span>{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;

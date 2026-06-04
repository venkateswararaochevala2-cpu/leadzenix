import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  MessageSquare,
  Monitor,
  Headphones,
  Phone,
  Calendar,
  User,
  FileText,
  BarChart2,
  ShoppingBag,
  Clock,
  Layers,
  Smartphone,
  Cpu,
  Zap,
  Search,
  Home,
  Building2,
  Stethoscope,
  GraduationCap,
  Car,
  Scale,
  Settings,
  MoreHorizontal,
  Eye,
  EyeOff,
  Bot,
  Users
} from 'lucide-react';

const tickerItems = [
  { text: "AI Voice Agents", icon: Bot },
  { text: "WhatsApp Chatbots", icon: MessageSquare },
  { text: "Business Websites", icon: Monitor },
  { text: "Lead Automation", icon: Users },
  { text: "Appointment Booking", icon: Calendar },
  { text: "24/7 Support", icon: Clock }
];

function RevenueSystems({ navigateTo }) {
  const [openScenarios, setOpenScenarios] = React.useState({
    'system-01': false,
    'system-02': false,
    'system-03': false
  });

  const toggleScenario = (id) => {
    setOpenScenarios(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const systems = [
    {
      id: 'system-01',
      num: '01',
      title: 'AI Calling System',
      desc: 'Never miss a customer call again. Our AI answers calls, talks with customers, collects information, and books appointments automatically, even outside business hours.',
      icon: PhoneCall,
      included: [
        { name: 'AI Call Answering', icon: Headphones },
        { name: 'AI Follow-Up Calls', icon: Phone },
        { name: 'Appointment Booking', icon: Calendar },
        { name: 'Lead Qualification', icon: User },
        { name: 'Call Summaries', icon: FileText },
        { name: 'Performance Reports', icon: BarChart2 }
      ],
      scenario: {
        title: 'Example Scenario: Real Estate Business',
        problem: 'Many people call about properties every day, but busy sales teams can\'t answer every call. Missed calls often mean lost sales opportunities.',
        solution: 'Our AI answers every call instantly, answers common questions, collects customer details, and books property visits automatically.',
        results: [
          'More appointments booked',
          'Faster response times',
          'More qualified leads',
          'Fewer missed opportunities'
        ]
      },
      idealFor: [
        { name: 'Real Estate', icon: Home },
        { name: 'Hospitals', icon: Building2 },
        { name: 'Clinics', icon: Stethoscope },
        { name: 'Education', icon: GraduationCap },
        { name: 'Automobile Dealers', icon: Car },
        { name: 'Law Firms', icon: Scale },
        { name: 'Service Businesses', icon: Settings },
        { name: 'And More', icon: MoreHorizontal }
      ]
    },
    {
      id: 'system-02',
      num: '02',
      title: 'AI WhatsApp System',
      desc: 'Automatically reply to customers on WhatsApp, answer questions, collect leads, and book appointments 24/7.',
      icon: MessageSquare,
      included: [
        { name: 'AI WhatsApp Assistant', icon: MessageSquare },
        { name: 'Instant Replies', icon: Zap },
        { name: 'Lead Collection', icon: User },
        { name: 'Appointment Booking', icon: Calendar },
        { name: 'Customer Support', icon: Headphones },
        { name: 'Automated Follow-Ups', icon: Clock }
      ],
      scenario: {
        title: 'Example Scenario: E-Commerce Business',
        problem: 'Customers send messages throughout the day, but businesses can\'t always reply quickly. Many potential customers leave before getting a response.',
        solution: 'Our AI WhatsApp Assistant replies instantly, answers questions, recommends products, and helps customers complete their purchases.',
        results: [
          'Faster customer responses',
          'More sales opportunities',
          'Better customer experience',
          'Increased conversions'
        ]
      },
      idealFor: [
        { name: 'E-Commerce', icon: ShoppingBag },
        { name: 'Retail Shops', icon: Home },
        { name: 'Clinics', icon: Stethoscope },
        { name: 'Education', icon: GraduationCap },
        { name: 'Automobile Dealers', icon: Car },
        { name: 'Law Firms', icon: Scale },
        { name: 'Service Businesses', icon: Settings },
        { name: 'And More', icon: MoreHorizontal }
      ]
    },
    {
      id: 'system-03',
      num: '03',
      title: 'Business Website System',
      desc: 'A professional website designed to attract customers, build trust, and generate enquiries for your business.',
      icon: Monitor,
      included: [
        { name: 'Modern Website Design', icon: Layers },
        { name: 'Mobile-Friendly Layout', icon: Smartphone },
        { name: 'Lead Capture Forms', icon: FileText },
        { name: 'Fast Loading Speed', icon: Zap },
        { name: 'SEO Setup', icon: Search },
        { name: 'AI Integrations', icon: Cpu }
      ],
      scenario: null, // System 3 has no scenario
      idealFor: [
        { name: 'Local Businesses', icon: Home },
        { name: 'Service Providers', icon: Settings },
        { name: 'Agencies', icon: Layers },
        { name: 'Startups', icon: Zap },
        { name: 'Retailers', icon: ShoppingBag },
        { name: 'Clinics & Med', icon: Stethoscope },
        { name: 'Consultants', icon: User },
        { name: 'And More', icon: MoreHorizontal }
      ]
    }
  ];

  return (
    <div className="page-wrapper" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Hero Section */}
      <section className="systems-hero section-padding">
        <div className="container">
          <div className="systems-hero-content">
            <div className="badge-pill" style={{ margin: '0 auto 1.5rem auto', display: 'inline-flex' }}>
              <span>Our Revenue Systems</span>
            </div>
            <h1 className="systems-hero-title">
              Our Revenue Systems for <span className="text-highlight">Lead Generation</span> and <span className="text-highlight">Sales</span>
            </h1>
            <p className="systems-hero-desc">
              AI-powered systems that capture leads, engage customers, and book appointments automatically — so your business grows 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Systems Detail Section */}
      <section className="systems-list-section">
        <div className="container">
          <div className="systems-vertical-list">
            {systems.map((sys, idx) => {
              const IconHeader = sys.icon;
              const isScenarioOpen = openScenarios[sys.id];
              return (
                <motion.div 
                  key={sys.id} 
                  className="rev-system-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Card Main Info Header */}
                  <div className="rev-card-header">
                    <div className="rev-header-left">
                      <div className="rev-num-badge">{sys.num}</div>
                      <div className="rev-title-group">
                        <h2>{sys.title}</h2>
                        <p>{sys.desc}</p>
                      </div>
                    </div>
                    <div className="rev-header-right">
                      <div className="rev-header-icon-circle">
                        <IconHeader size={28} />
                      </div>
                    </div>
                  </div>

                  {/* Included Grid */}
                  <div className="rev-included-section">
                    <span className="rev-section-label">WHAT'S INCLUDED</span>
                    <div className="rev-included-grid">
                      {sys.included.map((item, index) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.div 
                            key={index} 
                            className="rev-included-item"
                            whileHover={{ y: -3, scale: 1.02, boxShadow: '0 4px 12px rgba(0, 102, 255, 0.08)' }}
                            transition={{ duration: 0.2 }}
                          >
                            <ItemIcon size={18} className="rev-item-icon" />
                            <span>{item.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Show/Hide Scenario Action Button (if scenario exists) */}
                  {sys.scenario && (
                    <div className="rev-scenario-trigger-wrap" style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                      <motion.button
                        className="btn btn-secondary rev-toggle-scenario-btn"
                        onClick={() => toggleScenario(sys.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          padding: '0.6rem 1.2rem',
                          border: '1px solid rgba(0, 102, 255, 0.2)',
                          backgroundColor: isScenarioOpen ? 'rgba(0, 102, 255, 0.05)' : '#FFFFFF',
                          color: '#0066FF',
                          borderRadius: '8px',
                          cursor: 'pointer'
                        }}
                      >
                        {isScenarioOpen ? <EyeOff size={16} /> : <Eye size={16} />}
                        {isScenarioOpen ? 'Hide Example Scenario' : 'Show Example Scenario'}
                      </motion.button>
                    </div>
                  )}

                  {/* Collapsible Example Scenario */}
                  {sys.scenario && (
                    <AnimatePresence initial={false}>
                      {isScenarioOpen && (
                        <motion.div 
                          className="rev-scenario-container-dark"
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: '1rem', marginBottom: '2.5rem' }}
                          exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="rev-scenario-inner-dark">
                            <div className="rev-scenario-header-dark">
                              <span>{sys.scenario.title}</span>
                              <button 
                                className="rev-scenario-close-circle"
                                onClick={() => toggleScenario(sys.id)}
                              >
                                <ChevronUp size={16} />
                              </button>
                            </div>

                            <div className="rev-scenario-body-grid-dark">
                              {/* Problem */}
                              <div className="rev-scenario-col-dark">
                                <div className="rev-scenario-col-header-dark">
                                  <AlertTriangle size={18} className="rev-col-icon-dark" />
                                  <span>THE PROBLEM</span>
                                </div>
                                <p>{sys.scenario.problem}</p>
                              </div>

                              {/* Solution */}
                              <div className="rev-scenario-col-dark">
                                <div className="rev-scenario-col-header-dark">
                                  <Lightbulb size={18} className="rev-col-icon-dark" />
                                  <span>THE SOLUTION</span>
                                </div>
                                <p>{sys.scenario.solution}</p>
                              </div>

                              {/* Result */}
                              <div className="rev-scenario-col-dark">
                                <div className="rev-scenario-col-header-dark">
                                  <Target size={18} className="rev-col-icon-dark" />
                                  <span>THE RESULT</span>
                                </div>
                                <ul className="rev-scenario-results-list-dark">
                                  {sys.scenario.results.map((res, rIdx) => (
                                    <li key={rIdx}>
                                      <Check size={14} className="rev-result-check-icon-dark" />
                                      <span>{res}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Ideal For Businesses Like Yours Section */}
                  <div className="rev-ideal-section" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                      Ideal For Businesses Like Yours
                    </h3>
                    <div className="rev-ideal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.75rem' }}>
                      {sys.idealFor.map((item, index) => {
                        const IdealIcon = item.icon;
                        return (
                          <motion.div 
                            key={index} 
                            className="rev-ideal-item"
                            whileHover={{ y: -4, scale: 1.03, boxShadow: '0 6px 15px rgba(0, 0, 0, 0.05)', borderColor: 'rgba(0, 102, 255, 0.2)' }}
                            transition={{ duration: 0.2 }}
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '1.25rem 0.5rem',
                              backgroundColor: '#FFFFFF',
                              border: '1px solid rgba(0, 0, 0, 0.05)',
                              borderRadius: '12px',
                              textAlign: 'center',
                              cursor: 'default'
                            }}
                          >
                            <div className="rev-ideal-icon-wrap" style={{ color: '#0066FF', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <IdealIcon size={24} />
                            </div>
                            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1E293B' }}>{item.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                </motion.div>
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

export default RevenueSystems;

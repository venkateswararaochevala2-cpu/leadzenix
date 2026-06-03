import React from 'react';
import { motion } from 'framer-motion';
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
  Search
} from 'lucide-react';

function RevenueSystems({ navigateTo }) {
  const [openScenarios, setOpenScenarios] = React.useState({
    'system-01': true, // Open the first one by default
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
      title: 'Lead Capture & Call Automation System',
      desc: 'AI Voice Agents answer inbound calls, capture leads, qualify prospects, and book appointments 24/7.',
      icon: PhoneCall,
      included: [
        { name: 'AI Inbound Calling Agent', icon: Headphones },
        { name: 'AI Outbound Calling Agent', icon: Phone },
        { name: 'Appointment Booking', icon: Calendar },
        { name: 'Lead Qualification', icon: User },
        { name: 'Call Transcripts', icon: FileText },
        { name: 'Analytics Dashboard', icon: BarChart2 }
      ],
      scenario: {
        title: 'Example Scenario: Real Estate Business',
        problem: 'A real estate company receives hundreds of enquiries every month. Many potential buyers never receive a follow-up call because sales teams are busy. Even missing one qualified lead can mean losing a high-value property sale.',
        solution: 'LeadZenix deploys an AI Voice Agent that answers every incoming call instantly. The AI qualifies leads, answers property questions, schedules site visits, and automatically follows up with prospects.',
        results: [
          'More site visit bookings',
          'Faster lead response',
          'Better conversion rates',
          'No missed opportunities'
        ]
      }
    },
    {
      id: 'system-02',
      num: '02',
      title: 'WhatsApp Sales & Support System',
      desc: 'AI WhatsApp Chatbots automate customer communication, lead qualification, support requests, appointment booking, and order management 24/7.',
      icon: MessageSquare,
      included: [
        { name: 'AI WhatsApp Chatbot', icon: MessageSquare },
        { name: 'Lead Qualification', icon: User },
        { name: 'Appointment Booking', icon: Calendar },
        { name: 'Customer Support', icon: Headphones },
        { name: 'Order Management', icon: ShoppingBag },
        { name: 'Automated Follow-Ups', icon: Clock }
      ],
      scenario: {
        title: 'Example Scenario: D2C E-Commerce Brand',
        problem: 'Businesses receive enquiries every day through WhatsApp. Many customers never receive immediate responses and leave before converting.',
        solution: 'LeadZenix deploys an AI WhatsApp Chatbot that responds instantly, answers customer questions, collects lead information, books appointments, and helps customers complete purchases.',
        results: [
          'Instant responses',
          'Higher customer satisfaction',
          'More bookings',
          'More sales'
        ]
      }
    },
    {
      id: 'system-03',
      num: '03',
      title: 'Revenue Website System',
      desc: 'Most websites look good but fail to generate business. We build conversion-focused websites integrated with AI systems designed to generate enquiries and revenue.',
      icon: Monitor,
      included: [
        { name: 'Professional Design', icon: Layers },
        { name: 'Mobile Responsive', icon: Smartphone },
        { name: 'Lead Capture Forms', icon: FileText },
        { name: 'Fast Loading', icon: Zap },
        { name: 'SEO-Friendly Structure', icon: Search },
        { name: 'AI Integration', icon: Cpu }
      ],
      scenario: {
        title: 'Example Scenario: Local Service Provider',
        problem: 'A business relies only on social media and has no professional online presence. Potential customers struggle to find information and trust the business.',
        solution: 'LeadZenix builds a professional website integrated with AI systems that captures enquiries and automatically connects visitors with the right solution.',
        results: [
          'More enquiries',
          'Better trust',
          'Higher conversion rates',
          'Stronger online presence'
        ]
      }
    }
  ];

  return (
    <div className="page-wrapper">
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
                          <div key={index} className="rev-included-item">
                            <ItemIcon size={18} className="rev-item-icon" />
                            <span>{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Collapsible Example Scenario */}
                  <div className="rev-scenario-container">
                    <button 
                      className={`rev-scenario-toggle-btn ${isScenarioOpen ? 'active' : ''}`}
                      onClick={() => toggleScenario(sys.id)}
                    >
                      <span>{sys.scenario.title}</span>
                      {isScenarioOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {isScenarioOpen && (
                      <div className="rev-scenario-body-grid">
                        {/* Problem */}
                        <div className="rev-scenario-col problem">
                          <div className="rev-scenario-col-header text-red">
                            <AlertTriangle size={18} />
                            <span>THE PROBLEM</span>
                          </div>
                          <p>{sys.scenario.problem}</p>
                        </div>

                        {/* Solution */}
                        <div className="rev-scenario-col solution">
                          <div className="rev-scenario-col-header text-blue">
                            <Lightbulb size={18} />
                            <span>THE SOLUTION</span>
                          </div>
                          <p>{sys.scenario.solution}</p>
                        </div>

                        {/* Result */}
                        <div className="rev-scenario-col result">
                          <div className="rev-scenario-col-header text-green">
                            <Target size={18} />
                            <span>THE RESULT</span>
                          </div>
                          <ul className="rev-scenario-results-list">
                            {sys.scenario.results.map((res, rIdx) => (
                              <li key={rIdx}>
                                <Check size={14} className="rev-result-check-icon" />
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="systems-cta-section section-padding">
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow-spot-1" />
            <div className="cta-glow-spot-2" />
            <div className="cta-card-content">
              <h2>Ready To Build Your Revenue System?</h2>
              <p>
                Let's automate your business and help you capture more leads, book more appointments, and generate more revenue.
              </p>
              <div className="cta-card-actions">
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); navigateTo('#contact'); }} 
                  className="btn btn-primary cta-btn-primary"
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

export default RevenueSystems;

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  AlertCircle,
  PhoneCall,
  Clock,
  Users,
  Briefcase,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Star,
  Phone,
  User,
  Database,
  Monitor,
  MousePointer,
  CheckCircle,
  Home as HomeIcon,
  HeartPulse,
  Car,
  GraduationCap,
  School,
  ShoppingCart,
  Check,
  Sparkles,
  Bot,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import EcosystemAnimation from '../components/EcosystemAnimation';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import LeadZenixConversationFAQ from '../components/LeadZenixConversationFAQ';

const industries = [
  {
    title: "Real Estate",
    description: "AI voice agents that answer calls, share project details, qualify leads, and book site visits automatically.",
    icon: HomeIcon,
    theme: "blue",
    features: ["Lead Qualification", "Site Visit Booking", "24/7 Follow-ups"]
  },
  {
    title: "Hospitals & Clinics",
    description: "AI receptionist and WhatsApp chatbots to book appointments, answer queries, and support patients 24/7.",
    icon: HeartPulse,
    theme: "purple",
    features: ["Appointment Booking", "Call Handling", "Patient Support", "24/7 Availability"]
  },
  {
    title: "Automobile Dealerships",
    description: "AI calling agents that follow up with leads, answer questions, schedule test drives, and increase sales conversions.",
    icon: Car,
    theme: "blue",
    features: ["Lead Follow-up", "Test Drive Booking", "Higher Conversions", "Sales Support"]
  },
  {
    title: "Coaching Centers",
    description: "AI systems that handle student inquiries, batch information, fee details, and admissions automatically.",
    icon: GraduationCap,
    theme: "purple",
    features: ["Student Inquiries", "Admissions Support", "Fee & Batch Info", "24/7 Assistance"]
  },
  {
    title: "Schools & Colleges",
    description: "Automate admissions, answer parent queries, share information, and manage communication with AI.",
    icon: School,
    theme: "blue",
    features: ["Admissions Support", "Parent Communication", "Information Sharing", "24/7 Support"]
  },
  {
    title: "E-commerce & Online Stores",
    description: "WhatsApp chatbots that answer product questions, share offers, track orders, and boost customer satisfaction.",
    icon: ShoppingCart,
    theme: "purple",
    features: ["Instant Support", "Order Tracking", "Offer Sharing", "More Sales"]
  }
];

const tickerItems = [
  { text: "AI Voice Agents", icon: Bot },
  { text: "WhatsApp Chatbots", icon: MessageSquare },
  { text: "Business Websites", icon: Globe },
  { text: "Lead Automation", icon: Users },
  { text: "Appointment Booking", icon: Calendar },
  { text: "24/7 Support", icon: Clock }
];

const individualSolutions = [
  {
    category: "AI Voice System",
    title: "Real Estate Inbound Agent",
    description: "Answers incoming property enquiries, shares details, and books site visits.",
    theme: "blue",
    features: ["Property Information", "Pricing Questions", "Site Visit Booking", "Lead Qualification", "Customer Support"]
  },
  {
    category: "AI Voice System",
    title: "Real Estate Outbound Agent",
    description: "Calls leads automatically, qualifies them, and follows up to schedule visits.",
    theme: "blue",
    features: ["Bulk Lead Calling", "Lead Qualification", "Follow-Up Automation", "Site Visit Scheduling", "Lead Scoring"]
  },
  {
    category: "AI Voice System",
    title: "Voice Agent Dashboard",
    description: "Full metrics suite to track, record, and manage voice interactions.",
    theme: "blue",
    features: ["Call Recordings", "Transcripts", "Analytics", "Appointment Tracking", "Lead Management"]
  },
  {
    category: "Hospital AI System",
    title: "Hospital AI Receptionist",
    description: "24/7 clinical reception to book patients and check doctor schedules.",
    theme: "blue",
    features: ["Appointment Booking", "Doctor Availability", "Patient Support", "Multi-Language Support", "Call Handling"]
  },
  {
    category: "Automobile AI System",
    title: "Automobile Lead Qualifier",
    description: "Calls new leads, scores interest, and schedules dealership test drives.",
    theme: "blue",
    features: ["Calls New Leads", "Lead Qualification", "Interest Scoring", "Test Drive Scheduling", "Automated Follow-Ups"]
  },
  {
    category: "WhatsApp System",
    title: "Real Estate WA Assistant",
    description: "WhatsApp bot responding instantly with property listings and site visit options.",
    theme: "green",
    features: ["Property Details", "Site Visit Booking", "Lead Qualification", "Customer Support"]
  },
  {
    category: "WhatsApp System",
    title: "E-Commerce WA System",
    description: "D2C shopping helper that tracks orders, processes carts, and handles FAQs.",
    theme: "green",
    features: ["Product Enquiries", "Order Placement", "Order Tracking", "Customer Support"]
  },
  {
    category: "WhatsApp System",
    title: "Hospital Appointment Bot",
    description: "Instant WhatsApp triage, appointment booking, and clinic directions.",
    theme: "green",
    features: ["Appointment Booking", "Doctor Availability", "Clinic Information", "Patient Support"]
  },
  {
    category: "Website Development",
    title: "Conversion Business Website",
    description: "Modern, high-speed, SEO-optimized business websites with built-in lead funnels.",
    theme: "purple",
    features: ["Modern Design", "Mobile Responsive", "Fast Loading", "Lead Gen Focused", "SEO Friendly"]
  },
  {
    category: "Custom AI System",
    title: "Tailored Custom Agent",
    description: "Bespoke systems built from scratch to match your unique operational workflow.",
    theme: "purple",
    features: ["Custom Workflows", "Bespoke Integrations", "Full Customization", "Enterprise Scalability", "Dedicated Support"]
  }
];

function Home({ navigateTo }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const problems = [
    { num: '01', title: 'Missed Calls', desc: 'Every missed call could be a lost customer.', icon: PhoneCall },
    { num: '02', title: 'Slow Lead Response', desc: 'Most businesses respond too late and lose leads to competitors.', icon: Clock },
    { num: '03', title: 'Poor Follow-Up', desc: 'Interested prospects are forgotten because follow-up is manual.', icon: Users },
    { num: '04', title: 'Repetitive Work', desc: 'Your team spends time on tasks that can be automated.', icon: Briefcase },
    { num: '05', title: 'Booking Management', desc: 'Manual scheduling creates delays and confusion.', icon: Calendar },
    { num: '06', title: 'Customer Support Delays', desc: 'Customers expect instant answers.', icon: MessageSquare },
  ];

  const valueProps = [
    { title: 'Revenue-Focused Solutions', desc: 'We build systems designed solely to increase sales, capture leads, and stop leaks, not just fancy tech integrations.', icon: TrendingUp },
    { title: 'Custom-Built Systems', desc: 'Every AI agent, WhatsApp workflow, and landing page is specifically engineered for your exact business requirements.', icon: Cpu },
    { title: 'End-To-End Support', desc: 'From designing flowcharts to deploying and testing systems, we handle everything for a completely turn-key solution.', icon: Layers },
    { title: 'Fast Deployment', desc: 'Get your fully automated revenue systems up, running, and active in 2 to 4 weeks with minimal friction.', icon: Zap },
    { title: 'Long-Term Partnership', desc: 'We continuously optimize, retrain, and monitor your AI models to ensure performance scales with your business.', icon: ShieldCheck },
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container hero-grid">
          {/* Hero Left */}
          <motion.div
            className="hero-left-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="badge">AI Automation Solutions For Growing Businesses</div>
            <h1 className="hero-title">
              Stop Losing Leads,
              <br />
              <span className="hero-highlight">Missing Calls</span>,
              <br />
              and Wasting Time
            </h1>
            <p className="hero-description">
              LeadZenix helps businesses grow by automating customer conversations, capturing leads, and booking appointments with AI-powered voice agents, WhatsApp chatbots, and automation systems.
            </p>
            <div className="hero-ctas">
              <a href="https://cal.com/leadzenix/free-ai-consultation" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book Your Free Call
                <ArrowRight size={18} />
              </a>
              <a href="#revenue-systems" onClick={(e) => { e.preventDefault(); navigateTo('#revenue-systems'); }} className="btn btn-outline">
                Explore Revenue Systems
              </a>
            </div>
          </motion.div>

          {/* Hero Right (Ecosystem Animation) */}
          <motion.div
            className="hero-right-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <EcosystemAnimation />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problems-section section-padding">
        {/* Background Decorative Patterns */}
        <div className="problems-bg-dots" />
        <div className="problems-bg-circles" />

        <div className="container">
          <div className="section-header text-center-header">
            <div className="badge-pill">
              <AlertCircle size={16} className="badge-pill-icon" />
              <span>Business Challenges</span>
            </div>
            <h2>
              Revenue Leaks That Are <span className="text-highlight">Costing</span> Your Business Money
            </h2>
            <p>Traditional manual systems are failing to meet the expectations of modern digital buyers, resulting in lost prospects and wasted cash.</p>
            <div className="header-divider" />
          </div>

          <motion.div
            className="grid-3 problems-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {problems.map((prob) => {
              const Icon = prob.icon;
              return (
                <motion.div
                  key={prob.num}
                  className="card problem-card"
                  variants={itemVariants}
                >
                  <div className="problem-num-badge">
                    <span>{prob.num}</span>
                  </div>
                  <div className="problem-icon-wrapper">
                    <Icon size={26} className="problem-card-icon" />
                  </div>
                  <div className="problem-card-content">
                    <h3>{prob.title}</h3>
                    <div className="card-title-dash" />
                    <p>{prob.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Revenue Systems Teaser Section */}
      <section className="systems-teaser section-padding">
        {/* Background Decorative Patterns */}
        <div className="teaser-bg-dots" />
        <div className="teaser-bg-circles" />

        <div className="container">
          <div className="section-header text-center-header">
            <div className="badge-pill">
              <Star size={16} fill="#0066FF" stroke="#0066FF" className="badge-pill-icon" />
              <span>What We Build</span>
            </div>
            <h2>
              The Revenue Systems We Build for <span className="text-highlight">Your Business</span>
            </h2>
            <p>We create AI-powered systems that answer customers, capture leads, and book appointments automatically.</p>
            <div className="header-divider" />
          </div>

          <motion.div
            className="teaser-grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1: AI Calling System */}
            <motion.div className="card teaser-card theme-blue" variants={itemVariants}>
              <div className="teaser-num-badge">01</div>
              <h3>AI Calling System</h3>
              <p className="card-desc">AI agents answer calls, capture leads, and notify your team instantly.</p>
              
              <div className="flow-visualizer">
                <div className="flow-node">
                  <div className="flow-icon-circle">
                    <Phone size={20} />
                  </div>
                  <span className="flow-label">Answers Calls</span>
                </div>
                <div className="flow-connector" />
                <div className="flow-node">
                  <div className="flow-icon-circle">
                    <User size={20} />
                  </div>
                  <span className="flow-label">Captures Lead Information</span>
                </div>
                <div className="flow-connector" />
                <div className="flow-node">
                  <div className="flow-icon-circle">
                    <Database size={20} />
                  </div>
                  <span className="flow-label">Saves to CRM</span>
                </div>
              </div>

              <div className="outcome-box">
                <CheckCircle size={20} className="outcome-check-icon" />
                <div className="outcome-text-wrapper">
                  <span className="outcome-title">Outcome: </span>
                  <span className="outcome-text">More qualified leads and fewer missed opportunities.</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: WhatsApp Automation System */}
            <motion.div className="card teaser-card theme-green" variants={itemVariants}>
              <div className="teaser-num-badge">02</div>
              <h3>WhatsApp Automation System</h3>
              <p className="card-desc">Automate customer conversations, answer questions, and book appointments.</p>
              
              <div className="flow-visualizer">
                <div className="flow-node">
                  <div className="flow-icon-circle">
                    <MessageSquare size={20} />
                  </div>
                  <span className="flow-label">Replies Instantly</span>
                </div>
                <div className="flow-connector" />
                <div className="flow-node">
                  <div className="flow-icon-circle">
                    <User size={20} />
                  </div>
                  <span className="flow-label">Qualifies Leads</span>
                </div>
                <div className="flow-connector" />
                <div className="flow-node">
                  <div className="flow-icon-circle">
                    <Calendar size={20} />
                  </div>
                  <span className="flow-label">Books Appointments</span>
                </div>
              </div>

              <div className="outcome-box">
                <CheckCircle size={20} className="outcome-check-icon" />
                <div className="outcome-text-wrapper">
                  <span className="outcome-title">Outcome: </span>
                  <span className="outcome-text">Faster responses and more sales conversations.</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Business website */}
            <motion.div className="card teaser-card theme-purple" variants={itemVariants}>
              <div className="teaser-num-badge">03</div>
              <h3>Business website</h3>
              <p className="card-desc">A website designed to turn visitors into leads and customers.</p>
              
              <div className="flow-visualizer">
                <div className="flow-node">
                  <div className="flow-icon-circle">
                    <Monitor size={20} />
                  </div>
                  <span className="flow-label">Visitor Arrives</span>
                </div>
                <div className="flow-connector" />
                <div className="flow-node">
                  <div className="flow-icon-circle">
                    <MousePointer size={20} />
                  </div>
                  <span className="flow-label">Visitor Engages</span>
                </div>
                <div className="flow-connector" />
                <div className="flow-node">
                  <div className="flow-icon-circle">
                    <User size={20} />
                  </div>
                  <span className="flow-label">Becomes a Lead</span>
                </div>
              </div>

              <div className="outcome-box">
                <CheckCircle size={20} className="outcome-check-icon" />
                <div className="outcome-text-wrapper">
                  <span className="outcome-title">Outcome: </span>
                  <span className="outcome-text">More inquiries, appointments, and customers.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Industries We Serve Section */}
      <section className="industries-section section-padding">
        {/* Background Decorative Patterns */}
        <div className="industries-bg-dots" />
        <div className="industries-bg-circles" />

        <div className="container">
          <div className="section-header text-center-header">
            <div className="badge-pill">
              <Users size={16} className="badge-pill-icon" />
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2>
              AI Solutions for <span className="text-highlight">Every Business</span>
            </h2>
            <p>From small businesses to large enterprises, our AI voice agents, WhatsApp chatbots, and automation systems are built to solve real business problems.</p>
            <div className="header-divider" />
          </div>

          <motion.div
            className="grid-3 industries-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={i}
                  className={`card industry-card theme-${ind.theme}`}
                  variants={itemVariants}
                >
                  {/* Top-Right Accent Dot */}
                  <div className="industry-card-dot" />
                  
                  {/* Card Header Content */}
                  <div className="industry-card-main">
                    <div className="industry-icon-wrapper">
                      <Icon size={28} className="industry-card-icon" />
                    </div>
                    <div className="industry-card-info">
                      <h3>{ind.title}</h3>
                      <p>{ind.description}</p>
                    </div>
                  </div>

                  {/* Card Badges / Features Grid */}
                  <div className="industry-features-container">
                    {ind.features.map((feat, fIdx) => (
                      <div key={fIdx} className="industry-feature-badge">
                        <Check size={12} className="industry-check-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>



      {/* Individual Solutions Section */}
      <section className="indiv-solutions-section section-padding">
        {/* Background Decorative Patterns */}
        <div className="indiv-bg-dots" />
        <div className="indiv-bg-circles" />

        <div className="container">
          <div className="indiv-solutions-header-wrapper">
            <div className="section-header text-left-header" style={{ marginBottom: '3rem' }}>
              <div className="badge-pill">
                <Briefcase size={16} className="badge-pill-icon" />
                <span>INDIVIDUAL SOLUTIONS</span>
              </div>
              <h2>AI Solutions Built Around <span className="text-highlight">Real Business Problems</span></h2>
              <p>Not everything needs a full system. Start with what hurts most. Explore our high-performance voice agents, WhatsApp chatbots, and bespoke website developments.</p>
              <div className="header-divider" />
            </div>
          </div>
        </div>

        {/* Scrollable Carousel Row with Smooth CSS Track */}
        <div className="indiv-carousel-wrapper">
          <div className="indiv-carousel-track">
            {individualSolutions.map((sol, idx) => (
              <div key={`indiv-sol-1-${idx}`} className={`indiv-sol-card theme-${sol.theme}`}>
                <div className="indiv-sol-header">
                  <span className="indiv-sol-category">{sol.category}</span>
                  <h3>{sol.title}</h3>
                </div>
                <div className="indiv-sol-divider" />
                <ul className="indiv-sol-features">
                  {sol.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={14} className="indiv-sol-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#solutions" 
                  onClick={(e) => { e.preventDefault(); navigateTo('#solutions'); }}
                  className="indiv-sol-link"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
            {individualSolutions.map((sol, idx) => (
              <div key={`indiv-sol-2-${idx}`} className={`indiv-sol-card theme-${sol.theme}`}>
                <div className="indiv-sol-header">
                  <span className="indiv-sol-category">{sol.category}</span>
                  <h3>{sol.title}</h3>
                </div>
                <div className="indiv-sol-divider" />
                <ul className="indiv-sol-features">
                  {sol.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={14} className="indiv-sol-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#solutions" 
                  onClick={(e) => { e.preventDefault(); navigateTo('#solutions'); }}
                  className="indiv-sol-link"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Solutions Button (Bottom Redirect) */}
        <div className="indiv-solutions-cta">
          <a 
            href="#solutions" 
            onClick={(e) => { e.preventDefault(); navigateTo('#solutions'); }}
            className="btn btn-primary"
          >
            Explore Solutions
            <ArrowRight size={18} />
          </a>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="faq-section section-padding">
        {/* Background Decorative Patterns */}
        <div className="faq-bg-dots" />
        <div className="faq-bg-circles" />

        <div className="container">
          <div className="section-header text-center-header">
            <div className="badge-pill">
              <span>FAQ</span>
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>Clear, direct answers to common questions about our AI systems, integrations, and business automation solutions.</p>
            <div className="header-divider" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <LeadZenixConversationFAQ />
          </motion.div>
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
                    <path d="M12.031 2C6.479 2 2 6.479 2 12.03c0 1.907.531 3.676 1.447 5.197L2 22l4.927-1.385c1.472.84 3.167 1.325 4.974 1.325 5.552 0 10.03-4.479 10.03-10.03S17.583 2 12.03 2zm5.728 14.154c-.227.639-1.285 1.189-1.782 1.272-.455.076-.983.136-2.734-.58-2.24-.916-3.623-3.189-3.737-3.342-.113-.153-.925-1.231-.925-2.35 0-1.12.583-1.667.792-1.895.208-.228.455-.285.607-.285.152 0 .304.004.436.011.136.008.318-.053.497.383.182.443.626 1.528.68 1.64.053.114.09.246.011.4-.078.155-.152.249-.24.351-.087.1-.186.223-.265.3-.087.087-.182.182-.079.359.102.178.455.753.974 1.214.67.595 1.231.78 1.408.867.178.087.281.072.383-.045.102-.118.455-.53.58-.712.125-.182.25-.152.417-.091.171.061 1.076.508 1.262.603.186.095.311.14.356.22.045.076.045.439-.182 1.078z"/>
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

export default Home;

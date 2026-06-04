import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  ArrowRight,
  Bot,
  MessageSquare,
  Globe,
  Users,
  Calendar,
  Clock,
  Phone,
  PhoneCall,
  Monitor,
  AlertCircle,
  TrendingUp,
  Zap,
  Heart,
  ArrowDown,
  Building2,
  Stethoscope,
  Car,
  GraduationCap,
  Scale,
  Settings,
  ShoppingBag,
  Cpu,
  Home,
  Hospital,
  Wrench
} from 'lucide-react';

const DotGrid = () => (
  <svg width="84" height="60" viewBox="0 0 84 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
    {[0, 1, 2, 3, 4].map(row => 
      [0, 1, 2, 3, 4, 5].map(col => (
        <circle key={`${row}-${col}`} cx={6 + col * 14} cy={6 + row * 12} r="2" fill="#3B82F6" />
      ))
    )}
  </svg>
);

const tickerItems = [
  { text: "AI Voice Agents", icon: Bot },
  { text: "WhatsApp Chatbots", icon: MessageSquare },
  { text: "Business Websites", icon: Globe },
  { text: "Lead Automation", icon: Users },
  { text: "Appointment Booking", icon: Calendar },
  { text: "24/7 Support", icon: Clock }
];

function About({ navigateTo }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const problemsList = [
    { title: "Missed Calls", desc: "Every unanswered call is a potential customer lost.", icon: PhoneCall },
    { title: "Slow Customer Responses", desc: "Customers expect instant answers.", icon: Clock },
    { title: "Manual Appointment Booking", desc: "Staff spend hours scheduling appointments.", icon: Calendar },
    { title: "Lead Follow-Up Gaps", desc: "Qualified leads often go cold without follow-up.", icon: Users },
    { title: "Poor Website Conversions", desc: "Visitors leave without taking action.", icon: Monitor }
  ];

  const systemsWeBuild = [
    {
      title: "AI Voice Agent Systems",
      desc: "Handles incoming calls, qualifies leads, answers questions, and books appointments automatically.",
      icon: PhoneCall
    },
    {
      title: "WhatsApp Automation Systems",
      desc: "Provides instant responses, appointment booking, lead qualification, and customer support on WhatsApp.",
      icon: MessageSquare
    },
    {
      title: "Revenue Websites",
      desc: "Websites designed to generate leads, build trust, and convert visitors into customers.",
      icon: Monitor
    }
  ];

  const visualWorkflow = [
    { label: "Customer Inquiry", num: "01" },
    { label: "AI Responds Instantly", num: "02" },
    { label: "Lead Gets Qualified", num: "03" },
    { label: "Appointment Gets Booked", num: "04" },
    { label: "Business Gets More Revenue", num: "05" }
  ];

  const industries = [
    { label: "Real Estate", icon: Home },
    { label: "Hospitals", icon: Hospital },
    { label: "Clinics", icon: Stethoscope },
    { label: "Automobile Dealers", icon: Car },
    { label: "Educational Institutions", icon: GraduationCap },
    { label: "Law Firms", icon: Scale },
    { label: "Service Businesses", icon: Wrench },
    { label: "D2C Brands", icon: ShoppingBag }
  ];

  const whyChooseUs = [
    { title: "24/7 Availability", desc: "AI systems work day and night.", icon: Clock },
    { title: "Faster Response Times", desc: "Instant customer engagement.", icon: Zap },
    { title: "Reduced Manual Work", desc: "Automate repetitive tasks.", icon: Settings },
    { title: "Better Customer Experience", desc: "Quick and accurate support.", icon: Heart },
    { title: "Higher Lead Conversion", desc: "Respond before competitors do.", icon: TrendingUp },
    { title: "Custom-Built Solutions", desc: "Built around your business workflow.", icon: Cpu }
  ];

  return (
    <div className="page-wrapper" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Hero Section */}
      <section className="about-hero section-padding">
        <div className="container">
          <div className="about-hero-content" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <div className="badge-pill" style={{ margin: '0 auto 1.5rem auto', display: 'inline-flex' }}>
              <span>ABOUT LEADZENIX</span>
            </div>
            <h1 className="about-hero-title" style={{ fontSize: '3.25rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', color: '#0B1220' }}>
              We Build AI Systems That <span className="text-highlight">Solve Real Business Problems</span>
            </h1>
            <p className="about-hero-desc" style={{ fontSize: '1.15rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              Businesses lose leads, miss calls, respond late, and spend hours on repetitive work. We build AI-powered systems that automate customer interactions, appointment booking, lead management, and sales processes — helping businesses save time and generate more revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Why LeadZenix Exists (Dark Split Layout) */}
      <section className="about-why-exists-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div 
            className="about-split-dark-card"
            style={{
              backgroundColor: '#0B1220',
              borderRadius: '24px',
              padding: '4rem 3rem',
              color: '#FFFFFF',
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '4rem',
              boxShadow: '0 20px 40px rgba(11, 18, 32, 0.15)',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#4DA8F5', display: 'block', marginBottom: '1rem' }}>
                WHY LEADZENIX EXISTS
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, margin: 0, color: '#FFFFFF' }}>
                Most Businesses Don't Need More Tools
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4DA8F5', margin: 0 }}>
                They need systems that actually solve problems.
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  "Missed calls",
                  "Slow responses",
                  "Manual follow-ups",
                  "Lost leads",
                  "Overloaded staff"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4DA8F5' }} />
                    <span style={{ fontSize: '1.05rem', fontWeight: 500, color: '#E2E8F0' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '1.05rem', color: '#94A3B8', margin: 0, lineHeight: 1.6 }}>
                These problems cost businesses time, money, and customers every day.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#E2E8F0', fontWeight: 600, margin: 0, lineHeight: 1.6 }}>
                At LeadZenix, we build practical AI systems that eliminate these bottlenecks and help businesses operate more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - The Problems We Solve */}
      <section className="about-problems-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header text-center-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#0066FF', display: 'block', marginBottom: '1rem' }}>
              CHALLENGES
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0B1220' }}>
              The Problems We Solve
            </h2>
            <div className="header-divider" style={{ margin: '1rem auto' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            {problemsList.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <motion.div
                  key={idx}
                  className="about-problem-row-card"
                  whileHover={{ x: 8, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.03)', borderColor: 'rgba(0, 102, 255, 0.15)' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem 2rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    borderRadius: '16px',
                    gap: '2rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(0, 102, 255, 0.05)', color: '#0066FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={22} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0B1220', margin: 0 }}>{prob.title}</h3>
                      <p style={{ fontSize: '0.925rem', color: '#64748B', margin: 0 }}>{prob.desc}</p>
                    </div>
                  </div>
                  <div style={{ color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AlertCircle size={20} style={{ opacity: 0.3 }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 - What We Build */}
      <section className="about-build-section" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '6rem 0', 
        backgroundColor: '#FFFFFF',
        zIndex: 1
      }}>
        {/* Background Blobs and Dot Grids */}
        {/* Top Left Blob */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }} />
        
        {/* Bottom Right Blob */}
        <div style={{
          position: 'absolute',
          bottom: '-120px',
          right: '-120px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(59, 130, 246, 0) 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }} />

        {/* Top Right Dot Grid */}
        <div style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          zIndex: -1,
          pointerEvents: 'none'
        }}>
          <DotGrid />
        </div>

        {/* Bottom Left Dot Grid */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          zIndex: -1,
          pointerEvents: 'none'
        }}>
          <DotGrid />
        </div>

        <div className="container">
          <div className="section-header text-center-header" style={{ marginBottom: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#0066FF', display: 'block', marginBottom: '1rem' }}>
              OUR CAPABILITIES
            </span>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#0B1220', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              What We Build
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.6, maxWidth: '580px', margin: '0 auto' }}>
              Smart solutions that help businesses connect, engage, and grow effortlessly.
            </p>
            <div style={{
              width: '48px',
              height: '4px',
              backgroundColor: '#0066FF',
              borderRadius: '9999px',
              marginTop: '1.5rem'
            }} />
          </div>

          <div className="grid-3" style={{ gap: '2.5rem', position: 'relative', zIndex: 2 }}>
            {systemsWeBuild.map((sys, idx) => {
              const Icon = sys.icon;
              return (
                <motion.div
                  key={idx}
                  className="about-build-grid-card"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.12), 0 1px 5px rgba(0, 0, 0, 0.02)', borderColor: 'rgba(59, 130, 246, 0.25)' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '24px',
                    padding: '3rem 2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.01)',
                    minHeight: '380px'
                  }}
                >
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    backgroundColor: '#EFF6FF', 
                    color: '#0066FF', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '0.25rem'
                  }}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0B1220', margin: 0 }}>{sys.title}</h3>
                    <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>{sys.desc}</p>
                  </div>
                  <div style={{ color: '#0066FF', marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                    <ArrowRight size={20} strokeWidth={2} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 - How Our Systems Work (Visual Process) */}
      <section className="about-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header text-center-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#0066FF', display: 'block', marginBottom: '1rem' }}>
              OUR FLOW
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0B1220' }}>
              How Our Systems Work
            </h2>
            <div className="header-divider" style={{ margin: '1rem auto' }} />
          </div>

          <div 
            className="about-flow-container" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              gap: '1rem', 
              maxWidth: '1000px', 
              margin: '0 auto',
              position: 'relative'
            }}
          >
            {visualWorkflow.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div 
                  className="about-flow-node"
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0, 102, 255, 0.08)' }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 102, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '1.5rem 1.25rem',
                    textAlign: 'center',
                    flex: '1',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.015)'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0066FF', opacity: 0.6 }}>
                    {step.num}
                  </span>
                  <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#0B1220' }}>
                    {step.label}
                  </span>
                </motion.div>
                {idx < visualWorkflow.length - 1 && (
                  <div 
                    className="about-flow-arrow"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: '#0066FF', 
                      opacity: 0.5,
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Industries We Help */}
      <section className="about-industries-section" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '6rem 0', 
        backgroundColor: '#FFFFFF',
        zIndex: 1
      }}>
        {/* Background Blobs and Dot Grids */}
        {/* Top Left Blob */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }} />
        
        {/* Bottom Right Blob */}
        <div style={{
          position: 'absolute',
          bottom: '-120px',
          right: '-120px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(59, 130, 246, 0) 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }} />

        {/* Top Right Dot Grid */}
        <div style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          zIndex: -1,
          pointerEvents: 'none'
        }}>
          <DotGrid />
        </div>

        {/* Bottom Left Dot Grid */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          zIndex: -1,
          pointerEvents: 'none'
        }}>
          <DotGrid />
        </div>

        <div className="container">
          <div className="section-header text-center-header" style={{ marginBottom: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#0066FF', display: 'block', marginBottom: '0.75rem' }}>
              INDUSTRIES
            </span>
            {/* Dot + Line decoration */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0066FF' }} />
              <div style={{ width: '40px', height: '3px', backgroundColor: '#0066FF', borderRadius: '9999px' }} />
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#0B1220', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Businesses We Commonly Work With
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              We partner with a wide range of industries to deliver tailored solutions that drive real results.
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            position: 'relative', 
            zIndex: 2,
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  className="about-industry-card"
                  whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.12), 0 1px 5px rgba(0, 0, 0, 0.02)', borderColor: 'rgba(59, 130, 246, 0.25)' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '24px',
                    padding: '2.5rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.25rem',
                    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.01)',
                    width: 'calc(20% - 1.20rem)',
                    minWidth: '180px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    backgroundColor: '#EFF6FF', 
                    color: '#0066FF', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0B1220', textAlign: 'center' }}>
                    {ind.label}
                  </span>
                  {/* Bottom Accent Bar */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '0', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    width: '32px', 
                    height: '4px', 
                    backgroundColor: '#0066FF', 
                    borderRadius: '9999px' 
                  }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7 - Why Businesses Choose LeadZenix */}
      <section className="about-choose-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header text-center-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#0066FF', display: 'block', marginBottom: '1rem' }}>
              WHY US
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0B1220' }}>
              Why Businesses Choose LeadZenix
            </h2>
            <div className="header-divider" style={{ margin: '1rem auto' }} />
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {whyChooseUs.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  className="about-choose-card"
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.02)' }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    borderRadius: '16px',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  <div style={{ color: '#0066FF', display: 'flex', alignItems: 'center' }}>
                    <Icon size={24} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0B1220', margin: 0 }}>{feat.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0, lineHeight: 1.5 }}>{feat.desc}</p>
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
              <h2>Ready to Automate <br />Your <span className="text-highlight">Business?</span></h2>
              
              <p>
                Stop losing leads and wasting time on repetitive work. Let LeadZenix build a complete AI-powered revenue system for your business.
              </p>
              
              <div className="cta-card-actions">
                <a href="https://cal.com/leadzenix/free-ai-consultation" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn-primary">
                  <Phone size={18} className="btn-left-icon" />
                  Book a Free Strategy Call
                  <ArrowRight size={18} className="btn-right-icon" />
                </a>
                <a href="https://wa.me/916301667440" target="_blank" rel="noopener noreferrer" className="btn btn-outline cta-btn-outline">
                  <svg className="whatsapp-icon btn-left-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 2C6.479 2 2 6.479 2 12.03 c0 1.907.531 3.676 1.447 5.197L2 22l4.927-1.385c1.472.84 3.167 1.325 4.974 1.325 5.552 0 10.03-4.479 10.03-10.03S17.583 2 12.03 2zm5.728 14.154c-.227.639-1.285 1.189-1.782 1.272-.455.076-.983.136-2.734-.58-2.24-.916-3.623-3.189-3.737-3.342-.113-.153-.925-1.231-.925-2.35 0-1.12.583-1.667.792-1.895.208-.228.455-.285.607-.285.152 0 .304.004.436.011.136.008.318-.053.497.383.182.443.626 1.528.68 1.64.053.114.09.246.011.4-.078.155-.152.249-.24.351-.087.1-.186.223-.265.3-.087.087-.182.182-.079.359.102.178.455.753.974 1.214.67.595 1.231.78 1.408.867.178.087.281.072.383-.045.102-.118.455-.53.58-.712.125-.182.25-.152.417-.091.171.061 1.076.508 1.262.603.186.095.311.14.356.22.045.076.045.439-.182 1.078z"/>
                  </svg>
                  Chat on WhatsApp
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

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  PenTool, 
  Activity, 
  Terminal, 
  RotateCw, 
  Check, 
  ArrowRight,
  Target,
  Zap,
  ShieldAlert,
  FolderLock
} from 'lucide-react';

function About({ navigateTo }) {
  const missionList = [
    'Help businesses save time',
    'Automate repetitive work',
    'Improve customer experience',
    'Increase revenue using practical AI solutions'
  ];

  const builds = [
    { title: 'AI Voice Agent Systems', desc: 'Custom trained, human-like voice pipelines for inbound support and automated outbound qualification.' },
    { title: 'AI WhatsApp Chatbots', desc: 'Direct-to-chat automation, helping businesses answer questions, collect data, and book visits in real-time.' },
    { title: 'Revenue Websites', desc: 'Speedy, optimized landing pages with built-in chatbots and smart contact forms designed for instant lead booking.' },
    { title: 'Business Automation Systems', desc: 'API webhooks syncing lead data, appointment records, transcripts, and status updates directly to your CRM.' }
  ];

  const timelineSteps = [
    {
      phase: '01',
      title: 'Discover',
      desc: 'We analyze your business operations, trace current response patterns, and pinpoint exactly where you are losing leads or wasting hours on manual work.',
      icon: Compass
    },
    {
      phase: '02',
      title: 'Design',
      desc: 'Our team maps out conversational flows, defines database integrations, designs webhook schemas, and builds the visual layouts for your revenue system.',
      icon: PenTool
    },
    {
      phase: '03',
      title: 'Build',
      desc: 'We write the custom agents, configure speech-to-text models, program custom logic, set up WhatsApp API templates, and deploy clean, fast landing pages.',
      icon: Terminal
    },
    {
      phase: '04',
      title: 'Deploy',
      desc: 'After extensive volume and accent testing, we integrate the systems with your CRM, configure custom triggers, and launch your automated workflows live.',
      icon: Activity
    },
    {
      phase: '05',
      title: 'Optimize',
      desc: 'We monitor call logs, audit chat scripts, retrain models for greater accuracy, and deliver detailed dashboards to continuously plug leaks and lift conversion rates.',
      icon: RotateCw
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="about-hero section-padding">
        <div className="container">
          <div className="about-hero-content">
            <div className="badge">About LeadZenix</div>
            <h1 className="about-hero-title text-gradient">
              Helping Businesses Grow Through AI Automation
            </h1>
          </div>
        </div>
      </section>

      {/* Mission & What We Build Section */}
      <section className="about-details-section">
        <div className="container grid-2">
          {/* Mission */}
          <motion.div 
            className="card mission-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-badge-header">
              <Target size={24} className="badge-icon" />
              <h2>Our Mission</h2>
            </div>
            <p className="mission-intro">Our mission is simple:</p>
            <p className="mission-statement">
              Help businesses save time, automate repetitive work, improve customer experience, and increase revenue using practical AI solutions.
            </p>
            <ul className="mission-check-list">
              {missionList.map((item, idx) => (
                <li key={idx}>
                  <div className="check-icon-wrapper small-check">
                    <Check size={12} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What We Build */}
          <motion.div 
            className="card build-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-badge-header">
              <Zap size={24} className="badge-icon" />
              <h2>What We Build</h2>
            </div>
            <div className="build-grid">
              {builds.map((build, idx) => (
                <div key={idx} className="build-item">
                  <h3>{build.title}</h3>
                  <p>{build.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">Our Process</div>
            <h2>How We Build Your Revenue System</h2>
            <p>From initial discovery to continuous performance tuning, here is how we deploy high-ROI automation systems for your business.</p>
          </div>

          <div className="timeline-container">
            {/* Center Line for desktop */}
            <div className="timeline-line" />

            {timelineSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={step.phase}
                  className={`timeline-step-wrap ${isEven ? 'step-left' : 'step-right'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* Step Card */}
                  <div className="timeline-card card">
                    <div className="timeline-card-header">
                      <span className="step-number">{step.phase}</span>
                      <h3>{step.title}</h3>
                    </div>
                    <p>{step.desc}</p>
                  </div>

                  {/* Central Node */}
                  <div className="timeline-node">
                    <StepIcon size={18} className="timeline-node-icon" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section (verbatim features) */}
      <section className="about-why-choose section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">Why Partner With Us</div>
            <h2>Why Businesses Choose LeadZenix</h2>
            <p>We are a conversion-focused AI agency. We deliver turnkey outcomes, not complex code. Here is what we promise.</p>
          </div>

          <div className="grid-3">
            <div className="card text-center-card">
              <h3>Revenue-Focused Solutions</h3>
              <p>Everything we develop is custom tailored specifically to plug leaks, schedule consultations, and generate sales for your brand.</p>
            </div>
            <div className="card text-center-card">
              <h3>Custom-Built Systems</h3>
              <p>No generic, template bots. We program conversation logic, call templates, and websites mapping to your exact business objectives.</p>
            </div>
            <div className="card text-center-card">
              <h3>End-To-End Support</h3>
              <p>We consult, code, configure APIs, integrate CRMs, and perform launch checks. We handle the entire cycle.</p>
            </div>
          </div>
          
          <div className="grid-2" style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto 0 auto' }}>
            <div className="card text-center-card">
              <h3>Fast Deployment</h3>
              <p>Our agile build process delivers active, custom voice agents and responsive systems in 2 to 4 weeks.</p>
            </div>
            <div className="card text-center-card">
              <h3>Long-Term Partnership</h3>
              <p>We maintain, monitor call quality, update databases, and retrain LLMs to ensure your agency systems grow with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="glow-spot" style={{ top: '-100px', left: '-100px' }} />
            <div className="cta-card-content">
              <h2>Let's Discuss Your Business</h2>
              <p>
                We'll analyze your bottlenecks and recommend the exact AI systems to automate your customer communication.
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

export default About;

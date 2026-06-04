import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

function ConversationItem({ faq, index, isOpen, onToggle }) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Cycle avatars: Venky (0), Ali (1), Naveen (2)
  const team = [
    { name: 'Venky', avatar: '/venky.jpeg' },
    { name: 'Ali', avatar: '/ali.jpeg' },
    { name: 'Naveen', avatar: '/Naveen.jpeg' }
  ];

  const member = team[index % 3];
  const isQuestionRight = index % 2 === 0;

  return (
    <div className={`faq-conversation-row ${isOpen ? 'is-open' : ''}`}>
      {/* Question Row (Alternating Left/Right) */}
      <div className={`faq-question-row-wrapper ${isQuestionRight ? 'question-right' : 'question-left'}`}>
        <motion.div
          className={`faq-question-bubble ${isOpen ? 'active' : ''}`}
          onClick={onToggle}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <span className="faq-question-text">{faq.question}</span>
          <motion.div
            className="faq-toggle-circle"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </motion.div>
        </motion.div>
      </div>

      {/* Answer Row (Alternating Left/Right) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={`faq-answer-container ${isQuestionRight ? 'answer-left' : 'answer-right'}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className={`faq-answer-content-wrapper ${isQuestionRight ? 'content-left' : 'content-right'}`}>
              {/* Avatar Column */}
              <div
                className="faq-avatar-outer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <motion.div
                  className="faq-avatar-wrapper"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="faq-avatar-img"
                  />
                  <div className="faq-avatar-status-dot" />
                </motion.div>

                {/* Tooltip Card */}
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
                      className="faq-team-tooltip"
                      initial={{ opacity: 0, scale: 0.85, rotate: isQuestionRight ? -3 : 3, y: 10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, rotate: isQuestionRight ? -3 : 3, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      👋 Hi, I'm {member.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Answer Bubble Card */}
              <motion.div
                className={`faq-answer-card ${isQuestionRight ? 'bubble-left' : 'bubble-right'}`}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 15, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                <p className="faq-answer-text">{faq.answer}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LeadZenixConversationFAQ() {
  const faqs = [
    {
      question: "What types of businesses can benefit from LeadZenix solutions?",
      answer: "Our AI solutions can be customized for almost any business, including real estate, healthcare, automotive, e-commerce, education, and service-based businesses."
    },
    {
      question: "What does LeadZenix do?",
      answer: "We build AI Voice Agents, WhatsApp Chatbots, websites, and automation systems that help businesses handle customer interactions, capture leads, and book appointments automatically."
    },
    {
      question: "Can your AI systems book appointments automatically?",
      answer: "Yes. Our AI systems can schedule appointments, site visits, consultations, and follow-ups automatically, helping your team save time and reduce manual work."
    },
    {
      question: "Do your AI Voice Agents sound human?",
      answer: "Yes. Our AI Voice Agents have natural, human-like conversations and can interact with customers just like a trained team member."
    },
    {
      question: "Do your AI systems support multiple languages?",
      answer: "Yes. Our AI agents support multiple languages and can communicate with customers in the language that best fits your business."
    },
    {
      question: "Can you build a custom AI solution for my business?",
      answer: "Absolutely. Every business is different, so we build fully customized AI solutions based on your goals, workflows, and customer journey."
    },
    {
      question: "How can I track leads and customer conversations?",
      answer: "You get access to a dashboard where you can view leads, call transcripts, appointments, site visits, customer activity, and performance reports."
    },
    {
      question: "Do I need technical knowledge to use the system?",
      answer: "No. We handle everything from setup to deployment, so you can focus on running your business."
    },
    {
      question: "Can the AI work 24/7?",
      answer: "Yes. Our AI agents can answer calls, respond to messages, and engage with customers around the clock."
    },
    {
      question: "How do I know which solution is right for my business?",
      answer: "Book a free consultation call with us. We'll understand your business, identify your challenges, and recommend the best solution for your needs."
    },
    {
      question: "Why choose LeadZenix?",
      answer: "We build practical AI solutions tailored to your business and provide end-to-end support from planning and development to deployment and optimization."
    }
  ];

  const [openIndices, setOpenIndices] = useState([0]); // Open the first FAQ by default

  const handleToggle = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="faq-conversation-container">
      {faqs.map((faq, index) => (
        <ConversationItem
          key={index}
          faq={faq}
          index={index}
          isOpen={openIndices.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default LeadZenixConversationFAQ;

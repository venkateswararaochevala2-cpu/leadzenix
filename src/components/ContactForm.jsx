import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Send } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    emailAddress: '',
    phoneNumber: '',
    industry: '',
    servicesInterested: '',
    challenge: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        businessName: '',
        emailAddress: '',
        phoneNumber: '',
        industry: '',
        servicesInterested: '',
        challenge: ''
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="contact-success-card">
        <CheckCircle size={48} className="success-icon" />
        <h3>Free Call Requested!</h3>
        <p>
          Thank you for reaching out. We have received your details and will review your business challenges.
          Our team will contact you within 24 hours to schedule your free call.
        </p>
        <button className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessName" className="form-label">Business Name *</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            placeholder="LeadZenix Corp"
            value={formData.businessName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="emailAddress" className="form-label">Email Address *</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            required
            placeholder="john@example.com"
            value={formData.emailAddress}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            placeholder="+1 (555) 000-0000"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="industry" className="form-label">Industry *</label>
          <select
            id="industry"
            name="industry"
            required
            value={formData.industry}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select your industry</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Clinics & Hospitals">Clinics & Hospitals</option>
            <option value="Automobile Dealers">Automobile Dealers</option>
            <option value="D2C & E-Commerce">D2C & E-Commerce</option>
            <option value="Coaches & Consultants">Coaches & Consultants</option>
            <option value="Service Businesses">Service Businesses</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="servicesInterested" className="form-label">Services Interested In *</label>
          <select
            id="servicesInterested"
            name="servicesInterested"
            required
            value={formData.servicesInterested}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select a system</option>
            <option value="Lead Capture & Call Automation">Lead Capture & Call Automation System</option>
            <option value="WhatsApp Sales & Support">WhatsApp Sales & Support System</option>
            <option value="Revenue Website System">Revenue Website System</option>
            <option value="Custom AI Automation">Custom AI Workflows</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="challenge" className="form-label">Current Business Challenge *</label>
        <textarea
          id="challenge"
          name="challenge"
          required
          rows="4"
          placeholder="E.g., We are missing 30% of incoming customer calls due to high workload, losing potential leads."
          value={formData.challenge}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <button 
        type="submit" 
        className="btn btn-primary w-full btn-submit" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            Connecting Systems...
            <span className="spinner-border" />
          </>
        ) : (
          <>
            Book Your Free Call
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;

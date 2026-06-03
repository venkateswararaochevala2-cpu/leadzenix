import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle, CheckCircle2, ArrowLeftRight } from 'lucide-react';

function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="before-after-section-wrapper">
      <div 
        className="before-after-container" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Before Layer (Left Side / Underneath) */}
        <div className="slider-layer layer-before">
          <div className="layer-content">
            <div className="layer-badge badge-red">
              <AlertCircle size={16} />
              <span>Before Automation</span>
            </div>
            <h2>Losing Revenue & Prospects Daily</h2>
            <ul className="comparison-list">
              <li>
                <span className="dot dot-red" />
                <strong>Missed Calls:</strong> Every missed call could be a lost customer.
              </li>
              <li>
                <span className="dot dot-red" />
                <strong>Slow Response:</strong> Most businesses respond too late and lose leads to competitors.
              </li>
              <li>
                <span className="dot dot-red" />
                <strong>Poor Follow-Up:</strong> Interested prospects are forgotten because follow-up is manual.
              </li>
              <li>
                <span className="dot dot-red" />
                <strong>Repetitive Work:</strong> Your team spends time on tasks that can be automated.
              </li>
              <li>
                <span className="dot dot-red" />
                <strong>Booking Delay:</strong> Manual scheduling creates delays and confusion.
              </li>
              <li>
                <span className="dot dot-red" />
                <strong>Support Lag:</strong> Customers expect instant answers but face long delays.
              </li>
            </ul>
          </div>
        </div>

        {/* After Layer (Right Side / Clipped Foreground) */}
        <div 
          className="slider-layer layer-after"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <div className="layer-content">
            <div className="layer-badge badge-blue">
              <CheckCircle2 size={16} />
              <span>After LeadZenix</span>
            </div>
            <h2>Scaling Operations & Revenue 24/7</h2>
            <ul className="comparison-list">
              <li>
                <span className="dot dot-blue" />
                <strong>AI Voice Agents:</strong> Answers incoming calls instantly and answers queries 24/7.
              </li>
              <li>
                <span className="dot dot-blue" />
                <strong>Instant Response:</strong> Chatbots answer on WhatsApp immediately, locking in prospects.
              </li>
              <li>
                <span className="dot dot-blue" />
                <strong>Smart Follow-Up:</strong> Automated outbound calls & messages revive cold leads.
              </li>
              <li>
                <span className="dot dot-blue" />
                <strong>Maximized Focus:</strong> Team focuses only on closing qualified high-value deals.
              </li>
              <li>
                <span className="dot dot-blue" />
                <strong>Calendar Sync:</strong> Direct automated booking link with instant CRM confirmation.
              </li>
              <li>
                <span className="dot dot-blue" />
                <strong>Instant Support:</strong> WhatsApp bots handle FAQs and route complex tickets instantly.
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Handle */}
        <div 
          className="slider-divider" 
          style={{ left: `${sliderPos}%` }}
        >
          <div className="slider-handle">
            <ArrowLeftRight size={18} className="slider-handle-icon" />
          </div>
        </div>
      </div>
      <div className="slider-instructions">
        <span>Drag the slider to compare Before and After</span>
      </div>
    </div>
  );
}

export default BeforeAfterSlider;

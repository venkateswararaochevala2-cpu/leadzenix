import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Database, Settings, Globe } from 'lucide-react';

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.031 2C6.479 2 2 6.479 2 12.03 c0 1.907.531 3.676 1.447 5.197L2 22l4.927-1.385c1.472.84 3.167 1.325 4.974 1.325 5.552 0 10.03-4.479 10.03-10.03S17.583 2 12.03 2zm5.728 14.154c-.227.639-1.285 1.189-1.782 1.272-.455.076-.983.136-2.734-.58-2.24-.916-3.623-3.189-3.737-3.342-.113-.153-.925-1.231-.925-2.35 0-1.12.583-1.667.792-1.895.208-.228.455-.285.607-.285.152 0 .304.004.436.011.136.008.318-.053.497.383.182.443.626 1.528.68 1.64.053.114.09.246.011.4-.078.155-.152.249-.24.351-.087.1-.186.223-.265.3-.087.087-.182.182-.079.359.102.178.455.753.974 1.214.67.595 1.231.78 1.408.867.178.087.281.072.383-.045.102-.118.455-.53.58-.712.125-.182.25-.152.417-.091.171.061 1.076.508 1.262.603.186.095.311.14.356.22.045.076.045.439-.182 1.078z"/>
  </svg>
);

function EcosystemAnimation() {
  const [mounted, setMounted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(500);
  const [isLargeDevice, setIsLargeDevice] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setIsLargeDevice(window.innerWidth > 991);
      const handleResize = () => {
        setIsLargeDevice(window.innerWidth > 991);
      };
      window.addEventListener('resize', handleResize);
      
      if (containerRef.current) {
        const observer = new ResizeObserver((entries) => {
          for (let entry of entries) {
            setContainerWidth(entry.contentRect.width || 500);
          }
        });
        observer.observe(containerRef.current);
        return () => {
          window.removeEventListener('resize', handleResize);
          observer.disconnect();
        };
      }
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const services = isLargeDevice 
    ? [
        { id: 'voice', name: 'AI Voice Agents', icon: Phone, angle: -90, labelPos: 'bottom' },
        { id: 'websites', name: 'Business Websites', icon: Globe, angle: -18, labelPos: 'bottom' },
        { id: 'automation', name: 'Automation Workflows', icon: Settings, angle: 54, labelPos: 'bottom' },
        { id: 'crm', name: 'CRM Integration', icon: Database, angle: 126, labelPos: 'bottom' },
        { id: 'whatsapp', name: 'WhatsApp Chatbots', icon: MessageSquare, angle: 198, labelPos: 'bottom' }
      ]
    : [
        { id: 'voice', name: 'AI\nVoice\nAgents', icon: Phone, angle: -90, labelPos: 'top' },
        { id: 'websites', name: 'Business\nWebsites', icon: Globe, angle: -30, labelPos: 'right' },
        { id: 'automation', name: 'Automation\nWorkflows', icon: Settings, angle: 30, labelPos: 'bottom' },
        { id: 'crm', name: 'CRM\nIntegration', icon: Database, angle: 90, labelPos: 'bottom' },
        { id: 'whatsapp', name: 'WhatsApp\nChatbot', icon: WhatsAppIcon, angle: 150, labelPos: 'left' },
        { id: 'chatbot', name: 'Multi-Channel\nChatbot', icon: MessageSquare, angle: 210, labelPos: 'left' }
      ];


  let NODE_CENTER_DISTANCE = 210;

  if (!isLargeDevice) {
    if (containerWidth <= 280) {
      NODE_CENTER_DISTANCE = 90;
    }
    else if (containerWidth <= 340) {
      NODE_CENTER_DISTANCE = 100;
    }
    else if (containerWidth <= 420) {
      NODE_CENTER_DISTANCE = 115;
    }
    else if (containerWidth <= 480) {
      NODE_CENTER_DISTANCE = 130;
    }
    else if (containerWidth <= 640) {
      NODE_CENTER_DISTANCE = 145;
    }
    else if (containerWidth <= 768) {
      NODE_CENTER_DISTANCE = 165;
    }
    else if (containerWidth <= 991) {
      NODE_CENTER_DISTANCE = 185;
    }
  }

  // Determine service node diameter based on container width (matching CSS)
  let nodeDiameter = 70;
  if (!isLargeDevice) {
    if (containerWidth <= 480) {
      nodeDiameter = 50;
    } else if (containerWidth <= 768) {
      nodeDiameter = 56;
    } else if (containerWidth <= 1024) {
      nodeDiameter = 62;
    } else if (containerWidth <= 1280) {
      nodeDiameter = 68;
    }
  }

  const SVG_ORBIT_RADIUS = NODE_CENTER_DISTANCE - (nodeDiameter / 2);
  const viewBoxHalf = containerWidth / 2;

  return (
    <div className="premium-ecosystem">
      <div className="ecosystem-network" ref={containerRef}>

        {/* SVG Elements - Single outer circle and connection lines */}
        <svg
          className="network-rings"
          viewBox={`-${viewBoxHalf} -${viewBoxHalf} ${containerWidth} ${containerWidth}`}
          style={{ overflow: 'visible' }}
        >
          {/* One large outer circle only */}
          <circle
            cx="0"
            cy="0"
            r={SVG_ORBIT_RADIUS}
            stroke="#4DA8F5"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            fill="none"
          />

          {/* Slow clockwise rotation of tiny blue dots around the ring */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: 0, originY: 0 }}
          >
            {/* Tiny blue dots distributed around the outer ring */}
            {services.map((service, idx) => {
              const r = (service.angle * Math.PI) / 180;
              const dotX = Math.cos(r) * SVG_ORBIT_RADIUS;
              const dotY = Math.sin(r) * SVG_ORBIT_RADIUS;
              return (
                <circle
                  key={`ring-dot-${idx}`}
                  cx={dotX}
                  cy={dotY}
                  r="2.5"
                  fill="#4DA8F5"
                  opacity="0.7"
                />
              );
            })}
          </motion.g>

          {/* Small pulse nodes moving along the circumference */}
          {[
            { startAngle: 0, duration: 40 },
            { startAngle: 180, duration: 50 }
          ].map((pulse, idx) => (
            <motion.g
              key={`pulse-wrapper-${idx}`}
              animate={{ rotate: [pulse.startAngle, pulse.startAngle + 360] }}
              transition={{
                duration: pulse.duration,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ originX: "0px", originY: "0px" }}
            >
              {/* The moving pulse node */}
              <circle
                cx={SVG_ORBIT_RADIUS}
                cy={0}
                r="4"
                fill="#4DA8F5"
              />
              {/* A soft pulse effect under it */}
              <motion.circle
                cx={SVG_ORBIT_RADIUS}
                cy={0}
                animate={{
                  r: [4, 11, 4],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                fill="#4DA8F5"
              />
            </motion.g>
          ))}

          {/* Dash connection lines and blue anchor dots */}
          {services.map((service, index) => {
            const rad = (service.angle * Math.PI) / 180;
            const targetX = Math.cos(rad) * SVG_ORBIT_RADIUS;
            const targetY = Math.sin(rad) * SVG_ORBIT_RADIUS;
            return (
              <g key={`connection-${index}`}>
                {/* One dashed connection line from center to each node */}
                <line
                  x1="0"
                  y1="0"
                  x2={targetX}
                  y2={targetY}
                  stroke="#4DA8F5"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  strokeOpacity="0.4"
                />

                {/* Small blue anchor dots on the outer circle */}
                <circle
                  cx={targetX}
                  cy={targetY}
                  r="4.5"
                  fill="#4DA8F5"
                />

                {/* Staggered flow particle traveling center -> node */}
                {mounted && (
                  <motion.circle
                    r="3.5"
                    fill="#4DA8F5"
                    initial={{ cx: 0, cy: 0, opacity: 0 }}
                    animate={{
                      cx: [0, targetX],
                      cy: [0, targetY],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.6
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Hub - Hero Element */}
        <motion.div
          className="central-hub"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -3, 0]
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 }
          }}
        >
          <div className="hub-container">
            <img
              src="/Logo.png"
              alt="LeadZenix"
              className="hub-logo"
            />
          </div>
        </motion.div>

        {/* Circular Service Nodes placed mathematically */}
        {services.map((service, index) => {
          const Icon = service.icon;
          const rad = (service.angle * Math.PI) / 180;
          const x = Math.cos(rad) * NODE_CENTER_DISTANCE;
          const y = Math.sin(rad) * NODE_CENTER_DISTANCE;

          const labelStyles = {};
          if (!isLargeDevice) {
            if (service.labelPos === 'top') {
              labelStyles.top = 'auto';
              labelStyles.bottom = 'calc(100% + 8px)';
              labelStyles.left = '50%';
              labelStyles.transform = 'translateX(-50%)';
              labelStyles.textAlign = 'center';
            } else if (service.labelPos === 'bottom') {
              labelStyles.top = 'calc(100% + 8px)';
              labelStyles.left = '50%';
              labelStyles.transform = 'translateX(-50%)';
              labelStyles.textAlign = 'center';
            } else if (service.labelPos === 'left') {
              labelStyles.right = 'calc(100% + 10px)';
              labelStyles.left = 'auto';
              labelStyles.top = '50%';
              labelStyles.transform = 'translateY(-50%)';
              labelStyles.textAlign = 'right';
            } else if (service.labelPos === 'right') {
              labelStyles.left = 'calc(100% + 10px)';
              labelStyles.right = 'auto';
              labelStyles.top = '50%';
              labelStyles.transform = 'translateY(-50%)';
              labelStyles.textAlign = 'left';
            }
          }

          return (
            <div
              key={service.id}
              className="service-node-container"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <motion.div
                className="service-circle"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: [0, -3, 0]
                }}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.1 },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }
                }}
              >
                <div className="circle-content">
                  <div className="circle-icon">
                    <Icon size={32} />
                  </div>
                </div>
              </motion.div>

              <div 
                className="service-label"
                style={labelStyles}
              >
                {service.name.split('\n').map((line, lIdx) => (
                  <div key={lIdx}>{line}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EcosystemAnimation;
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Database, Settings, Globe } from 'lucide-react';

function EcosystemAnimation() {
  const [mounted, setMounted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(500);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width || 500);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { id: 'voice', name: 'AI Voice Agents', icon: Phone, angle: -90 },
    { id: 'websites', name: 'Business Websites', icon: Globe, angle: -18 },
    { id: 'automation', name: 'Automation Workflows', icon: Settings, angle: 54 },
    { id: 'crm', name: 'CRM Integration', icon: Database, angle: 126 },
    { id: 'whatsapp', name: 'WhatsApp Chatbots', icon: MessageSquare, angle: 198 }
  ];


  let NODE_CENTER_DISTANCE = 210;

  if (containerWidth <= 280) {
    NODE_CENTER_DISTANCE = 120;
  }
  else if (containerWidth <= 340) {
    NODE_CENTER_DISTANCE = 145;
  }
  else if (containerWidth <= 420) {
    NODE_CENTER_DISTANCE = 180;
  }

  // Determine service node diameter based on container width (matching CSS)
  let nodeDiameter = 70;
  if (containerWidth <= 480) {
    nodeDiameter = 50;
  } else if (containerWidth <= 768) {
    nodeDiameter = 56;
  } else if (containerWidth <= 1024) {
    nodeDiameter = 62;
  } else if (containerWidth <= 1280) {
    nodeDiameter = 68;
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
            {[0, 72, 144, 216, 288].map((angle, idx) => {
              const r = (angle * Math.PI) / 180;
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

              <div className="service-label">
                {service.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EcosystemAnimation;
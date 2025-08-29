"use client"

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const stats = [
  { 
    number: 100, 
    suffix: "+", 
    label: "Events Managed",
    description: "Successfully delivered events across 50+ countries"
  },
  { 
    number: 50000, 
    suffix: "+", 
    label: "Happy Attendees",
    description: "Millions of connections made through our platform"
  },
  { 
    number: 1, 
    suffix: "", 
    label: "Unified Platform",
    description: "One solution for all your event management needs"
  }
];

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setHasStarted(true)}
      transition={{ duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
      className="font-cherry-bomb text-5xl md:text-7xl font-bold text-white"
    >
      {Math.floor(count).toLocaleString()}{suffix}
    </motion.div>
  );
}

export function DynamicStats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Navy Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-royal-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(30,58,138,0.1),transparent_70%)]" />
      </div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-vivid-blue/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-quicksand text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted By
            <span className="block bg-gradient-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="font-quicksand text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of event professionals who trust EventSphere to deliver exceptional experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div className="glass-card p-8 text-center hover:shadow-glow transition-all duration-500 group-hover:scale-105">
                <div className="relative">
                  {/* Animated Number */}
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  
                  {/* Label */}
                  <h3 className="font-quicksand text-2xl font-bold text-vivid-blue mt-4 mb-3">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-quicksand text-white/70 leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Glowing Orb */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-3 h-3 bg-vivid-blue rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.8)",
                        "0 0 10px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>

              {/* Connecting Lines */}
              {index < stats.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-vivid-blue/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-quicksand text-white/60 mb-6">
            Ready to join our growing community of successful event organizers?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="px-8 py-3 bg-gradient-to-r from-vivid-blue to-royal-blue rounded-full font-quicksand font-semibold text-white cursor-pointer hover:shadow-glow transition-all duration-300">
              Start Your Free Trial
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client"

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";
import heroImage from "@/assets/hero-expo.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage.src} 
          alt="Futuristic expo hall with networking"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>
      

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-vivid-blue font-medium text-sm">
            <IconSparkles className="w-4 h-4" />
            EventSphere
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-cherry-bomb text-6xl md:text-8xl text-white mb-6 leading-[100%]"
        >
          Reinventing
          <br />
          <span className="bg-linear-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
            Event Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-quicksand text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your expo management with AI-powered analytics, seamless attendee experiences, and revolutionary booth allocation systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" className="group">
            Explore Platform
            <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button variant="glass" size="xl" className="text-white ">
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "100+", label: "Events Managed" },
            { number: "50K+", label: "Happy Attendees" },
            { number: "1", label: "Unified Platform" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="font-quicksand text-3xl md:text-4xl font-bold text-vivid-blue mb-2">
                {stat.number}
              </div>
              <div className="font-quicksand text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    
    {/* Scroll Indicator */}
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
    >
      {/* Mouse/Bar Shape */}
      <div className="w-6 h-12 rounded-full border-2 border-white/60 flex items-start justify-center">
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "anticipate" }}
          className="w-1.5 h-4 rounded-full bg-white/70 mt-1 hover:bg-white/90"
        />
      </div>
    </motion.div>
    </section>
  );
}
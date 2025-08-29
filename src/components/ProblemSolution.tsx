"use client"

import { motion } from "motion/react";
import problemSolutionImage from "@/assets/problem-solution.jpg";
import { IconAlertCircle, IconSparkles } from "@tabler/icons-react";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-quicksand text-4xl md:text-6xl font-bold text-foreground mb-6">
            From Chaos to
            <span className="block bg-gradient-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent pb-1">
              Clarity
            </span>
          </h2>
          <p className="font-quicksand text-xl text-muted-foreground max-w-3xl mx-auto">
            See how EventSphere transforms traditional event management into a seamless digital experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Split Screen Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-elegant h-[600px] md:h-[500px]"
          >
            {/* Background Image */}
            <img 
              src={problemSolutionImage.src } 
              alt="Comparison between traditional and digital event management"
              className="w-full h-full object-cover"
            />

            {/* Split Overlay */}
            <div className="absolute inset-0 flex">
              {/* Left Side - Problem */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-1/2 flex items-center justify-center p-8 relative"
              >
                <div className="bg-gradient-to-r from-black/70 to-black/30 absolute w-full h-full skew-x-[-12.5deg] scale-x-[1.2] origin-right -left-3"/>
                <div className="text-center text-white z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 bg-red-500/80 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <span className="text-2xl"><IconAlertCircle /></span>
                  </motion.div>
                  
                  <h3 className="font-quicksand text-3xl font-bold mb-4">
                    Traditional Events
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      "Paper-based registration",
                      "Manual booth allocation", 
                      "Limited networking opportunities",
                      "No real-time analytics",
                      "Disconnected experiences"
                    ].map((problem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                        <span className="font-quicksand text-white/80 text-sm">{problem}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Solution */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-1/2 flex items-center justify-center p-8 relative"
              >
                <div className="bg-linear-to-l from-vivid-blue/50 to-royal-blue/60 absolute w-full h-full skew-x-[-12.5deg] scale-x-[1.2] origin-left"/>
                <div className="text-center text-white z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 bg-green-500/80 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <span className="text-2xl"><IconSparkles /></span>
                  </motion.div>
                  
                  <h3 className="font-quicksand text-3xl font-bold mb-4">
                    EventSphere
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      "Digital-first registration",
                      "AI-powered booth matching",
                      "Smart networking features", 
                      "Real-time insights & analytics",
                      "Unified event experience"
                    ].map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="font-quicksand text-white/90 text-sm">{solution}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center Divider
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2 origin-top rotate-[15deg]"
            /> */}

            {/* VS Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
            >
              <span className="font-quicksand font-bold text-navy text-lg">VS</span>
            </motion.div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="glass-card p-6">
              <div className="font-quicksand text-3xl font-bold text-vivid-blue mb-2">75%</div>
              <div className="font-quicksand text-muted-foreground">Time Saved on Setup</div>
            </div>
            <div className="glass-card p-6">
              <div className="font-quicksand text-3xl font-bold text-vivid-blue mb-2">3x</div>
              <div className="font-quicksand text-muted-foreground">Higher Engagement</div>
            </div>
            <div className="glass-card p-6">
              <div className="font-quicksand text-3xl font-bold text-vivid-blue mb-2">90%</div>
              <div className="font-quicksand text-muted-foreground">Organizer Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client"

import { motion, AnimatePresence } from "motion/react";
import { IconLayout, IconUsers, IconChartBar, IconBrandGoogleAnalytics } from "@tabler/icons-react";
import { useState } from "react";

const features = [
  {
    icon: IconLayout,
    title: "Expo Management",
    description: "Complete event lifecycle management from planning to execution",
    details: [
      "Drag-and-drop floor planning",
      "Automated scheduling",
      "Resource allocation",
      "Real-time updates"
    ]
  },
  {
    icon: IconUsers,
    title: "Booth Allocation",
    description: "AI-powered booth matching and intelligent space optimization",
    details: [
      "Smart booth recommendations",
      "Interactive floor maps",
      "Pricing optimization",
      "Conflict resolution"
    ]
  },
  {
    icon: IconChartBar,
    title: "Analytics Dashboard",
    description: "Deep insights into event performance and attendee behavior",
    details: [
      "Real-time metrics",
      "Engagement tracking",
      "ROI analysis",
      "Predictive insights"
    ]
  },
  {
    icon: IconBrandGoogleAnalytics,
    title: "Revenue Tracking",
    description: "Comprehensive financial analytics and revenue optimization",
    details: [
      "Revenue forecasting",
      "Cost analysis",
      "Profit margins",
      "Payment tracking"
    ]
  }
];

export function OrganizersPortal() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-quicksand text-4xl md:text-6xl font-bold text-foreground mb-6">
            Organizers
            <span className="block bg-linear-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
              Command Center
            </span>
          </h2>
          <p className="font-quicksand text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize world-class events in one powerful platform
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block">
          <div className="py-8 grid md:grid-cols-4 gap-8 grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(-1)}
                className="cursor-pointer group"
              >
                <div className={`glass-card p-8 h-[30rem] transition-all duration-500 ${
                  activeCard === index 
                    ? "shadow-glow scale-105 bg-linear-to-br from-vivid-blue/10 to-royal-blue/5" 
                    : "hover:shadow-glass"
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    activeCard === index
                      ? "bg-linear-to-r from-vivid-blue to-royal-blue scale-110"
                      : "bg-linear-to-r from-deep-navy to-royal-blue group-hover:scale-105"
                  }`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-quicksand text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="font-quicksand text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: activeCard === index ? 1 : 0.7, 
                          x: 0 
                        }}
                        transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full transition-colors ${
                          activeCard === index ? "bg-vivid-blue" : "bg-muted-foreground/50"
                        }`} />
                        <span className={`font-quicksand text-sm transition-colors ${
                          activeCard === index ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Indicator */}
                  {activeCard === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-vivid-blue rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-glass transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-vivid-blue to-royal-blue flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-quicksand text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="font-quicksand text-muted-foreground mb-4">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-vivid-blue rounded-full" />
                    <span className="font-quicksand text-muted-foreground text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="font-quicksand text-2xl font-bold text-foreground mb-4">
              Ready to revolutionize your event management?
            </h3>
            <p className="font-quicksand text-muted-foreground mb-6">
              Join thousands of organizers who trust EventSphere to deliver exceptional experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="px-8 py-3 bg-linear-to-r from-vivid-blue to-royal-blue rounded-lg font-quicksand font-semibold text-white cursor-pointer">
                  Start Free Trial
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="px-8 py-3 glass-card border border-card-glass-border rounded-lg font-quicksand font-semibold text-foreground cursor-pointer hover:border-vivid-blue/50 transition-colors">
                  Schedule Demo
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
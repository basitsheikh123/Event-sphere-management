"use client"

import { motion } from "motion/react";
import { IconUsers, IconBuildingStore, IconTicket } from "@tabler/icons-react";
import { useRef } from "react";

const panels = [
  {
    icon: IconBuildingStore,
    title: "Organizers",
    description: "Create, manage, and scale world-class events",
    features: ["Event Planning", "Booth Management", "Analytics Dashboard", "Revenue Tracking"],
    color: "from-vivid-blue to-royal-blue"
  },
  {
    icon: IconBuildingStore,
    title: "Exhibitors", 
    description: "Showcase products and connect with attendees",
    features: ["Booth Booking", "Lead Generation", "Product Showcase", "ROI Analytics"],
    color: "from-royal-blue to-deep-navy"
  },
  {
    icon: IconTicket,
    title: "Attendees",
    description: "Discover, network, and engage at amazing events",
    features: ["Event Discovery", "Smart Networking", "Schedule Planning", "Interactive Maps"],
    color: "from-deep-navy to-vivid-blue"
  }
];

export function HorizontalIntro() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-gradient-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-quicksand text-4xl md:text-6xl font-bold text-white mb-4">
            Built For
            <span className="block bg-linear-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent pb-2">
              Everyone
            </span>
          </h2>
          <p className="font-quicksand text-xl text-white/80 max-w-3xl mx-auto">
            Whether you're organizing, exhibiting, or attending - EventSphere adapts to your needs
          </p>
        </motion.div>

        {/* Desktop Horizontal Scroll */}
        <div className="hidden lg:block">
          <div 
            ref={scrollRef}
            className="flex gap-8 pb-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {panels.map((panel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="shrink-0 w-96 snap-center"
              >
                <div className="glass-card p-8 h-96 hover:shadow-glass transition-all duration-300 group cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${panel.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <panel.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-quicksand text-3xl font-bold text-white mb-4">
                    {panel.title}
                  </h3>
                  
                  <p className="font-quicksand text-white/70 mb-6 leading-relaxed">
                    {panel.description}
                  </p>

                  <div className="space-y-3">
                    {panel.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-vivid-blue rounded-full" />
                        <span className="font-quicksand text-white/60 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="lg:hidden space-y-8">
          {panels.map((panel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-6 hover:shadow-glass transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${panel.color} flex items-center justify-center shrink-0`}>
                    <panel.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-quicksand text-2xl font-bold text-white mb-3">
                      {panel.title}
                    </h3>
                    <p className="font-quicksand text-white/70 mb-4">
                      {panel.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {panel.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-vivid-blue rounded-full" />
                          <span className="font-quicksand text-white/60 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
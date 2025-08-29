"use client"

import { motion } from "motion/react";
import { IconArrowRight, IconRocket, IconUsers, IconTrendingUp } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: IconRocket,
    number: "10,000+",
    label: "Events Managed",
    color: "from-vivid-blue to-royal-blue"
  },
  {
    icon: IconUsers,
    number: "500K+",
    label: "Happy Attendees",
    color: "from-royal-blue to-vivid-blue"
  },
  {
    icon: IconTrendingUp,
    number: "98%",
    label: "Satisfaction Rate",
    color: "from-vivid-blue to-royal-blue"
  }
];

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-deep-navy to-royal-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vivid-blue/30 to-transparent"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-vivid-blue/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-royal-blue/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Animated Background Lines */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-vivid-blue/20 to-transparent"
              style={{
                top: `${30 + i * 20}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-quicksand text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
                Event Experience?
              </span>
            </h2>
            <p className="font-quicksand text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join thousands of event organizers who have already revolutionized their events with EventSphere. 
              Start your free trial today and see the difference AI-powered event management can make.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="hero" size="xl" className="group">
              Start Free Trial
              <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="xl" className="text-white">
              Schedule Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/60 text-sm mb-4 font-quicksand">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
            <div className="flex items-center justify-center gap-6 text-white/40 text-xs">
              <span>🔒 SOC 2 Compliant</span>
              <span>•</span>
              <span>🌍 99.9% Uptime</span>
              <span>•</span>
              <span>📱 Mobile First</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-cherry-bomb text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="font-quicksand text-white/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="font-quicksand text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="font-quicksand text-white/80 mb-6 max-w-2xl mx-auto">
              Our team of event management experts is here to help you succeed. 
              Let's discuss your specific needs and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Sales Team
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/30 hover:border-white/50">
                View Documentation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

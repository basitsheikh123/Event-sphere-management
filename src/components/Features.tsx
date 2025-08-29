"use client"

import { motion } from "motion/react";
import { IconBrain, IconShield, IconUsers, IconChartBar, IconGlobe, IconCloud, IconBolt, IconDeviceMobile } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: IconBrain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms that optimize event planning, attendee matching, and resource allocation.",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20"
  },
  {
    icon: IconShield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced threat protection.",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20"
  },
  {
    icon: IconBolt,
    title: "Lightning Fast Performance",
    description: "Optimized infrastructure delivering sub-second response times and 99.9% uptime guarantee.",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20"
  },
  {
    icon: IconUsers,
    title: "Smart Networking",
    description: "AI-driven attendee matching, personalized recommendations, and real-time connection opportunities.",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20"
  },
  {
    icon: IconChartBar,
    title: "Advanced Analytics",
    description: "Comprehensive insights with real-time dashboards, predictive analytics, and actionable recommendations.",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20"
  },
  {
    icon: IconGlobe,
    title: "Global Reach",
    description: "Multi-language support, local payment methods, and region-specific compliance for worldwide events.",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20"
  },
  {
    icon: IconDeviceMobile,
    title: "Mobile First",
    description: "Responsive design optimized for all devices with native mobile apps for iOS and Android.",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20"
  },
  {
    icon: IconCloud,
    title: "Cloud Native",
    description: "Built on modern cloud infrastructure with automatic scaling, backups, and disaster recovery.",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-vivid-blue/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-royal-blue/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-quicksand text-4xl md:text-6xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
              Modern Events
            </span>
          </h2>
          <p className="font-quicksand text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive toolkit that makes EventSphere the most advanced event management platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:shadow-glow transition-all duration-500 border border-white/10 hover:border-vivid-blue/30 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-quicksand text-lg font-bold text-foreground mb-3 group-hover:text-vivid-blue transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="font-quicksand text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-vivid-blue/30 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-vivid-blue/10 to-royal-blue/10 rounded-2xl p-8 border border-vivid-blue/20">
            <h3 className="font-quicksand text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="font-quicksand text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of event organizers who have already transformed their events with EventSphere's powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

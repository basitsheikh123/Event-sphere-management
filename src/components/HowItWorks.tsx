"use client"

import { motion } from "motion/react";
import { IconUserCheck, IconSettings, IconUsers, IconChartBar, IconRocket, IconTarget, IconTrendingUp, IconAward, IconBulb, IconBolt } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const steps = [
  {
    icon: IconRocket,
    title: "Launch Setup",
    description: "Get started in minutes with our intelligent event configuration wizard",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20"
  },
  {
    icon: IconUserCheck,
    title: "Smart Registration",
    description: "AI-powered attendee matching and personalized onboarding experience",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20"
  },
  {
    icon: IconTarget,
    title: "Goal Setting",
    description: "Define success metrics and KPIs for your event with our analytics framework",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20"
  },
  {
    icon: IconSettings,
    title: "Automated Setup",
    description: "Intelligent booth allocation and event configuration in minutes",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20"
  },
  {
    icon: IconUsers,
    title: "Networking Hub",
    description: "Advanced matchmaking and real-time connection opportunities",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20"
  },
  {
    icon: IconBulb,
    title: "Smart Insights",
    description: "AI-generated recommendations for optimizing attendee engagement",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20"
  },
  {
    icon: IconChartBar,
    title: "Analytics Dashboard",
    description: "Comprehensive insights and performance metrics for organizers",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20"
  },
  {
    icon: IconTrendingUp,
    title: "Performance Tracking",
    description: "Monitor real-time progress and measure event success metrics",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20"
  },
  {
    icon: IconBolt,
    title: "Lightning Fast",
    description: "Optimized performance for seamless user experience across all devices",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20"
  },
  {
    icon: IconAward,
    title: "Success Celebration",
    description: "Track achievements and celebrate milestones with your team",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-vivid-blue/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-royal-blue/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-quicksand text-4xl md:text-6xl font-bold text-foreground mb-6">
            How It
            <span className="bg-gradient-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="font-quicksand text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of event management with our comprehensive 10-step process
          </p>
        </motion.div>

        {/* Desktop Enhanced Swiper */}
        <div className="hidden lg:block relative">
          {/* Navigation Arrows */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20">
            <button className="swiper-button-prev-custom w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-vivid-blue hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-vivid-blue/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
            <button className="swiper-button-next-custom w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-vivid-blue hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-vivid-blue/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Swiper
            modules={[FreeMode, Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.8,
              momentumVelocityRatio: 0.8,
              sticky: false,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.swiper-pagination-custom',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="!py-8 !px-4"
            style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index} style={{ width: '300px', overflow: 'visible' , height: "250px" }} className="!overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group h-full "
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 left-full w-6 h-0.5 bg-gradient-to-r from-vivid-blue/50 to-transparent transform -translate-y-1/2 z-0" />
                  )}
                  
                  {/* Enhanced Card */}
                  <div className="glass-card p-8 hover:shadow-glow transition-all duration-500 group cursor-pointer h-full relative  border border-white/10 hover:border-vivid-blue/30">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="font-quicksand text-xl font-bold text-foreground mb-4 group-hover:text-vivid-blue transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="font-quicksand text-muted-foreground leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Step Number with Enhanced Design */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-vivid-blue to-royal-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-vivid-blue/30 transition-all duration-500"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
        </div>

        {/* Mobile Enhanced Layout */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-vivid-blue to-transparent" />
                )}
                
                <div className="glass-card p-6 hover:shadow-glow transition-all duration-300 border border-white/10 hover:border-vivid-blue/30">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shrink-0 shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-quicksand text-lg font-bold text-foreground mb-2 group-hover:text-vivid-blue transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="font-quicksand text-muted-foreground leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className="w-6 h-6 bg-gradient-to-r from-vivid-blue to-royal-blue rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client"

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight, IconStar } from "@tabler/icons-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Event Director",
    company: "TechSummit Global",
    content: "EventSphere transformed our annual conference. We saw 200% increase in attendee engagement and cut our planning time in half. The AI-powered networking feature was a game-changer.",
    rating: 5,
    avatar: "SC",
    event: "TechSummit 2024",
    attendees: "15,000+",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Trade Show Manager", 
    company: "Global Exhibitions Inc.",
    content: "The booth allocation system saved us countless hours and the real-time analytics helped us optimize our floor plan on the fly. Our exhibitors were thrilled with the seamless experience.",
    rating: 5,
    avatar: "MR",
    event: "Global Trade Expo",
    attendees: "25,000+",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Corporate Events Lead",
    company: "Fortune 500 Corp",
    content: "We've managed over 50 events with EventSphere this year. The platform scales beautifully from intimate workshops to massive conferences. ROI tracking features are incredibly detailed.",
    rating: 5,
    avatar: "EW", 
    event: "Corporate Summit Series",
    attendees: "8,000+",
  },
  {
    id: 4,
    name: "David Park",
    role: "Festival Organizer",
    company: "Creative Events Co.",
    content: "The mobile app engagement was off the charts. Attendees loved the interactive features and the networking AI suggested connections that led to real business partnerships.",
    rating: 5,
    avatar: "DP",
    event: "Innovation Festival",
    attendees: "12,000+",
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop')",
          filter: "blur(2px)",
        }}
      />
      
      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-navy/90 via-deep-navy/85 to-royal-blue/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-quicksand text-4xl md:text-6xl font-bold text-white mb-6">
            Success
            <span className="block bg-linear-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="font-quicksand text-xl text-white/80 max-w-3xl mx-auto">
            Discover how event professionals worldwide are achieving extraordinary results with EventSphere
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <IconStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-quicksand text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Avatar */}
              <div className="w-16 h-16 bg-linear-to-r from-vivid-blue to-royal-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                {currentTestimonial.avatar}
              </div>

              {/* Details */}
              <div className="text-center md:text-left">
                <div className="font-quicksand text-xl font-bold text-white">
                  {currentTestimonial.name}
                </div>
                <div className="font-quicksand text-vivid-blue">
                  {currentTestimonial.role}
                </div>
                <div className="font-quicksand text-white/60 text-sm">
                  {currentTestimonial.company}
                </div>
              </div>

              {/* Event Stats */}
              <div className="text-center">
                <div className="font-quicksand text-white/60 text-sm mb-1">Event</div>
                <div className="font-quicksand font-semibold text-white">
                  {currentTestimonial.event}
                </div>
                <div className="font-quicksand text-vivid-blue text-sm">
                  {currentTestimonial.attendees} attendees
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
            variant="glass"
            size="icon"
            onClick={prevTestimonial}
            className="hover:scale-110 transition-transform"
          >
            <IconChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-vivid-blue scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="glass"
            size="icon" 
            onClick={nextTestimonial}
            className="hover:scale-110 transition-transform"
          >
            <IconChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-quicksand text-white/70 mb-6">
            Ready to create your own success story?
          </p>
          <Button variant="hero" size="xl" className="animate-glow-pulse">
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
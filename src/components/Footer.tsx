"use client"

import { motion } from "motion/react";
import { IconBrandTwitter, IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram, IconMail, IconPhone, IconMapPin, IconArrowUp } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-navy via-deep-navy to-royal-blue text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vivid-blue/30 to-transparent"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-vivid-blue/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-royal-blue/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-vivid-blue to-royal-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-cherry-bomb text-2xl font-bold">EventSphere</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Revolutionizing event management with AI-powered solutions that create unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: IconBrandTwitter, href: "#", label: "Twitter" },
                { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
                { icon: IconBrandFacebook, href: "#", label: "Facebook" },
                { icon: IconBrandInstagram, href: "#", label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-vivid-blue/20 transition-all duration-300 border border-white/20 hover:border-vivid-blue/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-quicksand text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Platform Features",
                "Pricing Plans",
                "Success Stories",
                "API Documentation",
                "Developer Portal",
                "Integration Guide"
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="text-white/70 hover:text-vivid-blue transition-colors duration-300 font-quicksand"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="font-quicksand text-xl font-bold text-white">Solutions</h3>
            <ul className="space-y-3">
              {[
                "Event Management",
                "Virtual Events",
                "Hybrid Events",
                "Conference Planning",
                "Trade Shows",
                "Corporate Events"
              ].map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="text-white/70 hover:text-vivid-blue transition-colors duration-300 font-quicksand"
                  >
                    {solution}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-quicksand text-xl font-bold text-white">Get in Touch</h3>
            <div className="space-y-4">
              {[
                { icon: IconMail, text: "hello@eventsphere.com" },
                { icon: IconPhone, text: "+1 (555) 123-4567" },
                { icon: IconMapPin, text: "San Francisco, CA" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-vivid-blue/20 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-4 h-4 text-vivid-blue" />
                  </div>
                  <span className="text-white/80 font-quicksand text-sm">{contact.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="secondary" className="w-full">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-quicksand text-2xl font-bold text-white mb-4">
              Stay Updated with EventSphere
            </h3>
            <p className="text-white/80 mb-6">
              Get the latest insights, tips, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-vivid-blue/50 transition-colors duration-300"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20">
          <div className="text-white/60 text-sm font-quicksand mb-4 md:mb-0">
            © 2024 EventSphere. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 font-quicksand">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 font-quicksand">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 font-quicksand">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-vivid-blue to-royal-blue rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-glow transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <IconArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}

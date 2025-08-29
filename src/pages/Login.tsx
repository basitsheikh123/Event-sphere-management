"use client"

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconEye, IconEyeOff, IconMail, IconLock, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import floatingElements from "@/assets/floating-elements.jpg";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-vivid-blue transition-colors">
            <IconArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="font-cherry-bomb text-4xl text-foreground">
              Welcome Back
            </h1>
            <p className="font-quicksand text-muted-foreground">
              Sign in to access your EventSphere dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="font-quicksand font-medium">
                  Email Address
                </Label>
                <div className="relative mt-2">
                  <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 glass-card border-card-glass-border focus:border-vivid-blue transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="font-quicksand font-medium">
                  Password
                </Label>
                <div className="relative mt-2">
                  <IconLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10 h-12 glass-card border-card-glass-border focus:border-vivid-blue transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-vivid-blue transition-colors"
                  >
                    {showPassword ? <IconEyeOff className="w-5 h-5" /> : <IconEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <Checkbox id="remember-me" className="w-4 h-4 rounded border-card-glass-border text-vivid-blue focus:ring-vivid-blue" />
                <span className="font-quicksand text-sm text-muted-foreground">Remember me</span>
              </label>
              <Link href="/forgot-password" className="font-quicksand text-sm text-vivid-blue hover:text-royal-blue transition-colors">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full">
              Sign In
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center">
            <span className="font-quicksand text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-vivid-blue hover:text-royal-blue transition-colors font-semibold">
                Sign up here
              </Link>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-gradient-hero">
        <img 
          src={floatingElements.src} 
          alt="Abstract floating elements"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-quicksand text-4xl font-bold text-white">
                Join thousands of
                <span className="block bg-linear-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
                  event organizers
                </span>
              </h2>
              <p className="font-quicksand text-xl text-white/80 max-w-md mx-auto">
                Who trust EventSphere to manage their most important events
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card p-4 text-center"
              >
                <div className="font-quicksand text-2xl font-bold text-vivid-blue">98%</div>
                <div className="font-quicksand text-sm text-white/70">Satisfaction Rate</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="glass-card p-4 text-center"
              >
                <div className="font-quicksand text-2xl font-bold text-vivid-blue">24/7</div>
                <div className="font-quicksand text-sm text-white/70">Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Animation Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-vivid-blue/20 backdrop-blur-xs"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-royal-blue/30 backdrop-blur-xs"
        />
      </div>
    </div>
  );
}
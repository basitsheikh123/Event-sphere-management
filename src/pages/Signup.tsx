"use client"

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconEye, IconEyeOff, IconMail, IconLock, IconUser, IconArrowLeft, IconBuilding } from "@tabler/icons-react";
import Link from "next/link";
import floatingElements from "@/assets/floating-elements.jpg";

const userTypes = [
  { id: "organizer", label: "Event Organizer", description: "Manage and create events", icon: IconBuilding },
  { id: "exhibitor", label: "Exhibitor", description: "Showcase your products", icon: IconUser },
  { id: "attendee", label: "Attendee", description: "Discover amazing events", icon: IconUser },
];

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "organizer",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
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
              Join EventSphere
            </h1>
            <p className="font-quicksand text-muted-foreground">
              Create your account and start managing amazing events
            </p>
          </div>

          {/* User Type Selection */}
          <div className="space-y-3">
            <Label className="font-quicksand font-medium">I am a</Label>
            <div className="grid grid-cols-1 gap-3">
              {userTypes.map((type) => (
                <label
                  key={type.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.userType === type.id
                      ? "border-vivid-blue bg-vivid-blue/5"
                      : "border-card-glass-border glass-card hover:border-vivid-blue/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="userType"
                    value={type.id}
                    checked={formData.userType === type.id}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="sr-only"
                  />
                  <type.icon className="w-5 h-5 text-vivid-blue" />
                  <div>
                    <div className="font-quicksand font-medium text-foreground">{type.label}</div>
                    <div className="font-quicksand text-sm text-muted-foreground">{type.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="font-quicksand font-medium">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="mt-2 h-12 glass-card border-card-glass-border focus:border-vivid-blue transition-colors"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="font-quicksand font-medium">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="mt-2 h-12 glass-card border-card-glass-border focus:border-vivid-blue transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="font-quicksand font-medium">
                Email Address
              </Label>
              <div className="relative mt-2">
                <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 h-12 glass-card border-card-glass-border focus:border-vivid-blue transition-colors"
                  required
                />
              </div>
            </div>

            {formData.userType !== "attendee" && (
              <div>
                <Label htmlFor="company" className="font-quicksand font-medium">
                  Company Name
                </Label>
                <div className="relative mt-2">
                  <IconBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="pl-10 h-12 glass-card border-card-glass-border focus:border-vivid-blue transition-colors"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="password" className="font-quicksand font-medium">
                Password
              </Label>
              <div className="relative mt-2">
                <IconLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
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

            <div>
              <Label htmlFor="confirmPassword" className="font-quicksand font-medium">
                Confirm Password
              </Label>
              <div className="relative mt-2">
                <IconLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 pr-10 h-12 glass-card border-card-glass-border focus:border-vivid-blue transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-vivid-blue transition-colors"
                >
                  {showConfirmPassword ? <IconEyeOff className="w-5 h-5" /> : <IconEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input 
                type="checkbox" 
                id="terms"
                className="w-4 h-4 mt-1 rounded border-card-glass-border text-vivid-blue focus:ring-vivid-blue" 
                required
              />
              <label htmlFor="terms" className="font-quicksand text-sm text-muted-foreground">
                I agree to the{" "}
                <a href="#" className="text-vivid-blue hover:text-royal-blue transition-colors">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-vivid-blue hover:text-royal-blue transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full">
              Create Account
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center">
            <span className="font-quicksand text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-vivid-blue hover:text-royal-blue transition-colors font-semibold">
                Sign in here
              </Link>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:block lg:w-1/2 overflow-hidden bg-gradient-hero h-screen fixed left-1/2">
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
                Start your journey
                <span className="block bg-linear-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
                  today
                </span>
              </h2>
              <p className="font-quicksand text-xl text-white/80 max-w-md mx-auto">
                Join the next generation of event management and transform how you create experiences
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4 max-w-sm mx-auto">
              {[
                "Free 30-day trial",
                "No setup fees",
                "24/7 customer support",
                "Easy migration from other platforms"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <div className="w-2 h-2 bg-vivid-blue rounded-full" />
                  <span className="font-quicksand">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Animation Elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-vivid-blue/20 backdrop-blur-xs"
        />
        <motion.div
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full bg-royal-blue/30 backdrop-blur-xs"
        />
      </div>
    </div>
  );
}
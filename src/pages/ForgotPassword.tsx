"use client"

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconMail, IconArrowLeft, IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import floatingElements from "@/assets/floating-elements.jpg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setCountdown(60);
    
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResend = () => {
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
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
          <Link href="/login" className="inline-flex items-center gap-2 text-muted-foreground hover:text-vivid-blue transition-colors">
            <IconArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="space-y-2">
                <h1 className="font-cherry-bomb text-4xl text-foreground">
                  Reset Password
                </h1>
                <p className="font-quicksand text-muted-foreground">
                  Enter your email address and we'll send you a link to reset your password
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 glass-card border-card-glass-border focus:border-vivid-blue transition-colors"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full">
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-16 h-16 bg-vivid-blue rounded-full flex items-center justify-center mx-auto"
                >
                  <IconCheck className="w-8 h-8 text-white" />
                </motion.div>

                <div className="space-y-2">
                  <h1 className="font-cherry-bomb text-4xl text-foreground">
                    Check Your Email
                  </h1>
                  <p className="font-quicksand text-muted-foreground">
                    We've sent a password reset link to
                  </p>
                  <p className="font-quicksand font-medium text-vivid-blue">
                    {email}
                  </p>
                </div>

                <div className="glass-card p-6 space-y-4">
                  <p className="font-quicksand text-sm text-muted-foreground">
                    Didn't receive the email? Check your spam folder or
                  </p>
                  {countdown > 0 ? (
                    <Button variant="ghost" disabled className="w-full">
                      Resend in {countdown}s
                    </Button>
                  ) : (
                    <Button variant="ghost" onClick={handleResend} className="w-full">
                      Resend Reset Link
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Footer */}
          <div className="text-center">
            <span className="font-quicksand text-muted-foreground">
              Remember your password?{" "}
              <Link href="/login" className="text-vivid-blue hover:text-royal-blue transition-colors font-semibold">
                Sign in here
              </Link>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:block lg:w-1/2 left-1/2 overflow-hidden bg-gradient-hero h-screen fixed">
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
                Secure &
                <span className="block bg-linear-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
                  Protected
                </span>
              </h2>
              <p className="font-quicksand text-xl text-white/80 max-w-md mx-auto">
                Your account security is our top priority. We use industry-standard encryption to keep your data safe.
              </p>
            </div>

            {/* Security Features */}
            <div className="space-y-4 max-w-sm mx-auto">
              {[
                "256-bit SSL encryption",
                "Two-factor authentication", 
                "Regular security audits",
                "GDPR compliant"
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
          animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-vivid-blue/20 backdrop-blur-xs"
        />
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-royal-blue/30 backdrop-blur-xs"
        />
      </div>
    </div>
  );
}
"use client"

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HorizontalIntro } from "@/components/HorizontalIntro";
import { DynamicStats } from "@/components/DynamicStats";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { OrganizersPortal } from "@/components/OrganizersPortal";
import { ExhibitorExperience } from "@/components/ExhibitorExperience";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HorizontalIntro />
      <DynamicStats />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Pricing />
      <OrganizersPortal />
      <ExhibitorExperience />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

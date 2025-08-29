"use client";

import { motion } from "motion/react";
import {
  IconCheck,
  IconStar,
  IconCrown,
  IconRocket,
  IconBolt,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    icon: IconRocket,
    price: "$99",
    period: "per month",
    description: "Perfect for small events and growing organizers",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20",
    features: [
      "Up to 500 attendees",
      "Basic analytics dashboard",
      "Email support",
      "Standard templates",
      "Mobile app access",
      "Basic integrations",
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: IconBolt,
    price: "$299",
    period: "per month",
    description: "Ideal for professional event organizers and agencies",
    color: "from-royal-blue to-vivid-blue",
    gradient: "from-royal-blue/20 to-vivid-blue/20",
    features: [
      "Up to 2,000 attendees",
      "Advanced analytics & reporting",
      "Priority support",
      "Custom branding",
      "Advanced integrations",
      "AI-powered recommendations",
      "Multi-language support",
      "Advanced security features",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: IconCrown,
    price: "Custom",
    period: "contact us",
    description: "For large-scale events and enterprise organizations",
    color: "from-vivid-blue to-royal-blue",
    gradient: "from-vivid-blue/20 to-royal-blue/20",
    features: [
      "Unlimited attendees",
      "Custom analytics & insights",
      "Dedicated account manager",
      "White-label solutions",
      "Custom integrations",
      "Advanced AI features",
      "Multi-tenant support",
      "SLA guarantees",
      "Custom training & onboarding",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy/5 via-deep-navy/5 to-royal-blue/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-vivid-blue/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-royal-blue/5 to-transparent rounded-full blur-3xl"></div>
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
            Simple, Transparent
            <span className="block bg-gradient-to-r from-vivid-blue to-royal-blue bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="font-quicksand text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your event management needs. All plans
            include our core features with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-vivid-blue to-royal-blue text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <IconStar className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`glass-card p-8 h-full hover:shadow-glow transition-all duration-500 border-2 ${
                  plan.popular
                    ? "border-vivid-blue/50 hover:border-vivid-blue/80"
                    : "border-white/10 hover:border-vivid-blue/30"
                } relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="font-quicksand text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>

                    <p className="font-quicksand text-muted-foreground text-sm mb-4">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span className="font-cherry-bomb text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="font-quicksand text-muted-foreground ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center shrink-0">
                          <IconCheck className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="font-quicksand text-foreground text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex-1 flex items-end">
                    {/* CTA Button */}
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      {plan.popular ? "Get Started" : "Choose Plan"}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-vivid-blue/10 to-royal-blue/10 rounded-2xl p-8 border border-vivid-blue/20">
            <h3 className="font-quicksand text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="font-quicksand text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer custom pricing for organizations with specific
              requirements. Let's discuss how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Contact Sales
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    hours: '10 Hours / month',
    price: '$299',
    description: 'Perfect for solopreneurs needing help with basic administrative tasks.',
    features: [
      'Email & Calendar Management',
      'Basic Data Entry',
      'Travel Booking',
      'Weekly Status Reports'
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    hours: '20 Hours / month',
    price: '$549',
    description: 'Ideal for growing businesses needing comprehensive daily support.',
    features: [
      'Everything in Starter',
      'Social Media Scheduling',
      'Customer Support Emails',
      'Basic WordPress/Website Updates',
      'Priority Response Time'
    ],
    highlight: true,
  },
  {
    name: 'Executive',
    hours: '40 Hours / month',
    price: '$999',
    description: 'A dedicated partner to manage your operations and drive growth.',
    features: [
      'Everything in Professional',
      'Project Management',
      'CRM Administration',
      'Invoicing & Basic Bookkeeping',
      'Daily Sync Meetings'
    ],
    highlight: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Pricing Packages</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Transparent pricing, <span className="text-gradient">no surprises</span>.
          </h3>
          <p className="text-lg text-slate-600">
            Choose a retainer package that fits your business needs. Need a custom plan? Let's chat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 border ${
                plan.highlight 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-slate-900/20 relative scale-105 z-10' 
                  : 'bg-white text-slate-900 border-slate-200 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h4 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h4>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>{plan.hours}</p>
              
              <div className="mb-6">
                <span className={`text-4xl font-display font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/mo</span>
              </div>
              
              <p className={`text-sm mb-8 h-10 ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-primary-400' : 'text-primary-500'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-primary-500 text-white hover:bg-primary-400' 
                    : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

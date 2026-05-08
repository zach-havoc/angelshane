import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Workspace" className="w-full h-48 object-cover rounded-2xl shadow-sm" />
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Planning" className="w-full h-64 object-cover rounded-2xl shadow-sm" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Collaboration" className="w-full h-64 object-cover rounded-2xl shadow-sm" />
                <div className="w-full h-48 rounded-2xl bg-primary-50 border border-primary-100 flex flex-col justify-center items-center text-center p-6">
                  <div className="text-4xl font-display font-bold text-primary-600 mb-2">99%</div>
                  <div className="text-sm font-medium text-slate-600">Client Retention Rate</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Your dedicated partner in productivity and growth.
            </h3>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Hello! I'm Angel Shane, a highly organized and proactive Virtual Assistant based in the digital world. With over 2 years of experience supporting executives, entrepreneurs, and creative agencies, I know exactly what it takes to keep a business running smoothly.
              </p>
              <p>
                I don't just complete tasks; I optimize workflows. My goal is to integrate seamlessly into your operations, learning your preferences and anticipating your needs before you even have to ask.
              </p>
              <p>
                When you work with me, you're not just hiring an assistant—you're partnering with a dedicated professional who cares about your business's success as much as you do.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-1">Angel Shane S. Enriquez</h4>
                <p className="text-primary-600 font-medium">Executive Virtual Assistant</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

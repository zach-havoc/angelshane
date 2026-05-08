import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-200/50 blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-200/40 blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-emerald-100/60 blur-[150px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Reclaim your time.<br />
              <span className="text-gradient">Scale your business.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              I'm Angel Shane a premium Virtual Assistant dedicated to streamlining your operations, managing your schedule, and handling the details so you can focus on the big picture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300">
                Hire Me Today <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm">
                <Play className="w-4 h-4 fill-slate-900" /> View Services
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary-500" /> 100% Reliable</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary-500" /> Fast Turnaround</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary-500" /> NDA Protected</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
              <img
                src="public/profile.jpeg"
                alt="Professional Virtual Assistant"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

              {/* Floating badges */}
              <div className="absolute bottom-6 left-6 glass px-4 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">2+</div>
                <div>
                  <div className="text-xs text-white/80 font-medium">Years of</div>
                  <div className="text-sm text-white font-bold">Experience</div>
                </div>
              </div>


            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

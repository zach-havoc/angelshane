import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, Database, Share2, HeadphonesIcon, FileText, Plane, CheckCircle2 } from 'lucide-react';

const servicesList = [
  {
    title: 'Email & Inbox Management',
    description: 'Declutter your inbox, respond to routine inquiries, flag urgent messages, and set up filters and labels for ultimate organization.',
    icon: Mail,
    color: 'bg-rose-50 text-rose-600 border-rose-100',
  },
  {
    title: 'Calendar & Meeting Management',
    description: 'Coordinate meeting times across time zones, prepare agendas, ensure you never miss an appointment or double-book.',
    icon: Calendar,
    color: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100',
  },
  {
    title: 'Data Entry & Research',
    description: 'Accurate data processing, internet research, competitor analysis, and comprehensive report generation.',
    icon: Database,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    title: 'Social Media Management',
    description: 'Content scheduling, community engagement, basic graphic design (Canva), and profile optimization.',
    icon: Share2,
    color: 'bg-pink-50 text-pink-600 border-pink-100',
  },
  {
    title: 'Customer Support',
    description: 'Responsive email and chat support, handling inquiries, and ensuring your customers feel valued.',
    icon: HeadphonesIcon,
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    title: 'Admin & Document Prep',
    description: 'Creating presentations, formatting documents, creating SOPs, and managing digital files.',
    icon: FileText,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    title: 'Travel Booking',
    description: 'Research and book flights, hotels, and ground transportation. I provide detailed itineraries so you can travel stress-free.',
    icon: Plane,
    color: 'bg-violet-50 text-violet-600 border-violet-100',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">My Services</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Mastering the details of your <span className="text-gradient">daily operations</span>.
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I offer a comprehensive suite of virtual assistant services designed to take the busywork off your plate. From managing your chaotic inbox to ensuring your travels are perfectly coordinated, I handle the logistics so you can focus on strategy and growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                <span className="text-slate-700 font-medium">Proactive problem solving and workflow optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                <span className="text-slate-700 font-medium">Clear, consistent communication and updates</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                <span className="text-slate-700 font-medium">Strict confidentiality and data security protocols</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {servicesList.map((task) => {
              const Icon = task.icon;
              return (
                <div key={task.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300 flex gap-6 items-start group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 ${task.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{task.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {task.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

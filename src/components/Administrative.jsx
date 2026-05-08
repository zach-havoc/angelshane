import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Database, ClipboardList, BookOpen, Layers, Monitor } from 'lucide-react';

const adminTasks = [
  {
    title: 'Data Entry & Management',
    description: 'Accurate and fast data entry into your CRM, spreadsheets, or database systems to keep your records flawless.',
    icon: Database,
  },
  {
    title: 'Document Formatting',
    description: 'Creating, formatting, and polishing Word documents, PDFs, and presentations so they look perfectly professional.',
    icon: FileText,
  },
  {
    title: 'Internet Research',
    description: 'Deep-dive research on competitors, lead generation, or market trends, delivered in an easy-to-read summary.',
    icon: Monitor,
  },
  {
    title: 'SOP Creation',
    description: 'Documenting your business processes into Standard Operating Procedures to help you scale and onboard easily.',
    icon: ClipboardList,
  },
  {
    title: 'File Organization',
    description: 'Decluttering and structuring your Google Drive or Dropbox so you can find exactly what you need, instantly.',
    icon: Layers,
  },
  {
    title: 'Basic Bookkeeping',
    description: 'Invoicing clients, tracking expenses, and preparing basic financial reports using tools like QuickBooks or Excel.',
    icon: BookOpen,
  }
];

export default function Administrative() {
  return (
    <section id="administrative" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Administrative Support</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            The backbone of your <span className="text-gradient">business</span>.
          </h3>
          <p className="text-lg text-slate-600">
            Every successful business requires solid administrative execution. I take pride in handling the repetitive, time-consuming tasks with precision and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adminTasks.map((task, index) => {
            const Icon = task.icon;
            return (
              <motion.div
                key={task.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-primary-100 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-200 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{task.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {task.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

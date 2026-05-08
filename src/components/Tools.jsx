import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Google Workspace', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'Microsoft Office', icon: 'public/Microsoft-Office.png' },
  { name: 'Slack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
  { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
  { name: 'Asana', icon: 'https://cdn.worldvectorlogo.com/logos/asana-1.svg' },
  { name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Canva', icon: 'public/canva-icon.png' },
  { name: 'Google flight', icon: 'public/airplane-flight.png' },
  { name: 'Outlook', icon: 'public/ms-outlook.svg' },
  { name: 'Calendly', icon: 'public/calendly.png' },
  { name: 'Zoom', icon: 'public/zoom.png' }
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold text-primary-400 tracking-wider uppercase mb-3">Tech Stack</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Tools I use to get things done.
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I am highly proficient in modern business software and can quickly adapt to any proprietary tools your company uses. I focus on leveraging technology to automate workflows and save you time.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors">
              Don't see your tool? Ask me about it →
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
                >
                  <img src={tool.icon} alt={tool.name} className="h-10 w-auto object-contain drop-shadow-md" />
                  <span className="text-xs font-medium text-slate-300 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

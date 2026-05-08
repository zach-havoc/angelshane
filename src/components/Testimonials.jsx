import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, Brightly Marketing',
    content: 'Angel has been an absolute lifesaver. Before hiring her, I was drowning in administrative tasks and neglecting my core business. She seamlessly took over my inbox and scheduling, giving me back 15 hours a week. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'David Chen',
    role: 'E-commerce Founder',
    content: 'The level of professionalism and attention to detail Angel brings is unmatched. She handles our customer support and social media scheduling flawlessly. She feels like a core part of our team, even from miles away.',
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Real Estate Agent',
    content: 'In real estate, speed and organization are everything. Angel manages my CRM, prepares listing presentations, and handles follow-up emails. Her proactive approach has directly contributed to my increased sales this year.',
    image: 'https://i.pravatar.cc/150?img=5'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900">
              Hear what my clients have to say.
            </h3>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 font-bold text-slate-800 text-lg">5.0 / 5.0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-100 rotate-180" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary-100" />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

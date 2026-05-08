import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';

const designs = [
  {
    title: 'Social Media Campaign',
    category: 'Instagram / Facebook',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Brand Identity Concept',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Webinar Presentation',
    category: 'Pitch Deck',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Promotional Flyer',
    category: 'Print Media',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'E-commerce Sale Graphics',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Lead Magnet E-book',
    category: 'Document Design',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export default function Portfolio() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // Calculate the total width of the carousel so we can set drag constraints
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-primary-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-primary-600" />
              <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase">Canva Portfolio</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900">
              Creative designs that <span className="text-gradient">convert</span>.
            </h3>
            <p className="text-lg text-slate-600 mt-4">
              A showcase of my recent design work using Canva. From social media graphics to professional presentations, I create visual content that aligns with your brand identity. Swipe slowly to view them all.
            </p>
          </div>
        </div>

      </div>

      <motion.div 
        ref={carousel} 
        className="cursor-grab overflow-hidden px-4 sm:px-6 lg:px-8 pb-8"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          dragElastic={0.05}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
          className="flex gap-6 w-max"
        >
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[85vw] sm:w-[350px] md:w-[450px] lg:w-[550px] shrink-0 group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100 pointer-events-none">
                <img 
                  src={design.image} 
                  alt={design.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 bg-primary-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    {design.category}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{design.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
    </section>
  );
}

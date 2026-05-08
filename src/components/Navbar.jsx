import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Tools', href: '#tools' },
  { name: 'Administrative', href: '#administrative' },
  { name: 'Portfolio', href: '#portfolio' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-500 transition-colors duration-300">
              <Sparkles className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors">
              Angel Shane<span className="text-primary-500"> VA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass absolute top-full left-0 w-full py-4 px-4 shadow-lg border-t border-slate-200"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-primary-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 bg-slate-900 text-white font-medium rounded-xl mt-2"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

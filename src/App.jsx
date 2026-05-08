import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import Administrative from './components/Administrative';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Tools />
        <Administrative />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans border-b border-white/10 ${isScrolled ? 'bg-deep-slate/80 backdrop-blur-sm h-20 flex items-center' : 'bg-deep-slate/80 backdrop-blur-sm h-20 flex items-center'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-safety-orange flex items-center justify-center font-black text-white">K</div>
              <span className={`text-xl font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-white' : 'text-white'}`}>
                Kondreen
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-blueprint-blue px-1 border border-blueprint-blue ml-2 uppercase">Civil Engineering</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest items-center">
              <a href="#projects" className="text-safety-orange">Projects</a>
              <a href="#" className="hover:text-safety-orange transition-colors">Expertise</a>
              <a href="#" className="hover:text-safety-orange transition-colors">Compliance</a>
              <a href="#" className="hover:text-safety-orange transition-colors">Company</a>
              <button 
                onClick={handleQuoteClick}
                className="bg-safety-orange px-6 py-2 text-xs font-black uppercase tracking-tighter hover:bg-orange-600 transition-all text-white ml-4"
              >
                Request Technical Consult
              </button>
            </nav>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-deep-slate pt-24 px-6 flex flex-col gap-6 md:hidden">
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-4"
          >
            Standards Portfolio
          </a>
          
          <button 
            onClick={handleQuoteClick}
            className="w-full bg-safety-orange text-white font-bold py-4 text-center mt-auto mb-8 uppercase tracking-widest"
          >
            Request Consult
          </button>
        </div>
      )}
    </>
  );
}

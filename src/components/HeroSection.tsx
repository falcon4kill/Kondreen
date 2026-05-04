import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-deep-slate text-white flex items-center justify-center overflow-hidden">
      {/* Background with abstract grid and real drone shot photo */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#0056B3 1px, transparent 1px), linear-gradient(90deg, #0056B3 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-0 pt-20">
        <div className="md:col-span-12 lg:col-span-8 flex flex-col justify-center">
          <div className="mb-4 font-mono text-blueprint-blue text-sm uppercase tracking-widest font-bold">
            // Precision-Grade Execution
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-left">
            Engineering <br/> <span className="text-safety-orange">the Future</span> <br/> on Trust
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md text-left">
            End-to-end civil construction solutions engineered to surpass rigorous compliance standards and operational lifecycles.
          </p>

          <div className="flex gap-4">
            <div className="border-l-2 border-safety-orange pl-4 text-left">
              <div className="text-2xl font-bold">99.8%</div>
              <div className="text-[10px] font-mono uppercase text-gray-500">Timeline Precision</div>
            </div>
            <div className="border-l-2 border-safety-orange pl-4 text-left">
              <div className="text-2xl font-bold">C40+</div>
              <div className="text-[10px] font-mono uppercase text-gray-500">Concrete Standards</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center z-10 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-safety-orange to-transparent"></div>
      </div>
    </section>
  );
}

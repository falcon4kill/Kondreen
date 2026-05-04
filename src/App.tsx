/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectDetail from './components/ProjectDetail';
import StructureTemplates from './components/StructureTemplates';
import TrustSignals from './components/TrustSignals';
import TeamSection from './components/TeamSection';
import SmartQuoteForm from './components/SmartQuoteForm';

export default function App() {
  return (
    <div className="min-h-screen bg-blueprint-bg font-sans selection:bg-safety-orange selection:text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectDetail />
      <StructureTemplates />
      <TrustSignals />
      <TeamSection />
      <SmartQuoteForm />
      
      <footer className="h-20 bg-black/80 text-white backdrop-blur-md border-t border-white/5 flex items-center px-4 md:px-10 relative z-20">
        <div className="text-[10px] font-mono text-blueprint-blue mr-8 whitespace-nowrap">CERTIFICATION_LOG:</div>
        <div className="flex flex-1 justify-around items-center opacity-50 overflow-x-auto gap-8 hide-scrollbar">
          <div className="flex items-center gap-2 border-r border-white/10 pr-8 md:pr-12 whitespace-nowrap">
            <div className="w-5 h-5 border border-white flex items-center justify-center text-[8px] font-bold">ISO</div>
            <span className="text-[10px] font-bold uppercase tracking-widest">9001:2015 REGISTERED</span>
          </div>
          <div className="flex items-center gap-2 border-r border-white/10 pr-8 md:pr-12 whitespace-nowrap">
            <div className="w-5 h-5 border border-white flex items-center justify-center text-[8px] font-bold">ACI</div>
            <span className="text-[10px] font-bold uppercase tracking-widest">STRUCTURAL COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2 border-r border-white/10 pr-8 md:pr-12 whitespace-nowrap">
            <div className="w-5 h-5 border border-white flex items-center justify-center text-[8px] font-bold">BS</div>
            <span className="text-[10px] font-bold uppercase tracking-widest">1192 BIM STANDARDS</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-5 h-5 border border-white flex items-center justify-center text-[8px] font-bold">QC</div>
            <span className="text-[10px] font-bold uppercase tracking-widest">ZERO-DEFECT PROTOCOL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


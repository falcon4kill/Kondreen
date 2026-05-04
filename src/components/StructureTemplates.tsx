import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ruler, Layers, Home, CheckCircle2, ArrowRight } from 'lucide-react';

const homeTemplates = [
  {
    id: 'TPL-APEX-01',
    name: 'The Apex Series',
    type: 'Modern Urban Villa',
    area: '250 m²',
    beds: 3,
    baths: 2.5,
    elevation: '+7.5M',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    desc: 'An engineered urban home featuring cantilevered upper floors and an open-plan structural core. Built with C40 high-strength concrete for superior seismic resistance.',
    features: ['Reinforced Concrete Shell', 'Floor-to-Ceiling Thermal Glazing', 'Pre-cast Modular Slabs'],
  },
  {
    id: 'TPL-HRZ-04',
    name: 'The Horizon Modular',
    type: 'Prairie Estate',
    area: '420 m²',
    beds: 5,
    baths: 4,
    elevation: '+4.2M',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    desc: 'Expansive single-story estate utilizing wide-span steel beams to eliminate interior load-bearing walls. Designed for seamless indoor-outdoor structural transitions.',
    features: ['Wide-Span Steel Framing', 'Continuous Foundation Wall', 'Passive Cooling Layout'],
  },
  {
    id: 'TPL-COR-09',
    name: 'The Core Loft',
    type: 'Industrial Residential',
    area: '180 m²',
    beds: 2,
    baths: 2,
    elevation: '+12.0M',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2053&auto=format&fit=crop',
    desc: 'A rugged, loft-style residential blueprint capitalizing on exposed brickwork and structural steel elements. Perfect for robust, low-maintenance living.',
    features: ['Exposed I-Beam Construction', 'Polished Concrete Slabs', 'Acoustic Insulated Decking'],
  }
];

export default function StructureTemplates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTemplate = homeTemplates[activeIndex];

  const handleSelectTemplate = () => {
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
    // In a real app, this would also pass the template ID to the form context
  };

  return (
    <section className="py-24 bg-white relative text-deep-slate border-b border-gray-200" id="home-templates">
      {/* Subtle blueprint grid for the background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#0056B3 1px, transparent 1px), linear-gradient(90deg, #0056B3 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-safety-orange" />
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-safety-orange font-bold">Residential Frameworks</h2>
          </div>
          <p className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Pre-Engineered Home Templates
          </p>
          <div className="w-24 h-1 bg-blueprint-blue mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Select a structural blueprint baseline. Our engineers will adapt the foundation and superstructure to your specific geotechnical conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Template List */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {homeTemplates.map((template, idx) => (
              <button
                key={template.id}
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-6 border-l-4 transition-all duration-300 font-sans ${activeIndex === idx ? 'bg-deep-slate text-white border-safety-orange shadow-lg' : 'bg-gray-50 border-transparent hover:border-gray-300 text-deep-slate hover:bg-gray-100'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-mono tracking-widest font-bold uppercase px-2 py-0.5 ${activeIndex === idx ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {template.id}
                  </span>
                </div>
                <h3 className={`text-xl font-black uppercase tracking-tight mb-1`}>{template.name}</h3>
                <p className={`text-xs font-mono uppercase tracking-widest ${activeIndex === idx ? 'text-safety-orange' : 'text-gray-500'}`}>{template.type}</p>
              </button>
            ))}
          </div>

          {/* Right Column: Template Detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTemplate.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white border-t-8 border-deep-slate shadow-2xl relative"
              >
                {/* Visual Section */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden group">
                  <img 
                    src={activeTemplate.image} 
                    alt={activeTemplate.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Mock Drafting Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-deep-slate/80 to-transparent pointer-events-none"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="bg-white/90 backdrop-blur-sm p-4 border-l-4 border-safety-orange shadow-lg">
                      <div className="font-mono text-xs text-gray-500 mb-1 tracking-widest uppercase">Structural Model</div>
                      <div className="font-black text-xl uppercase tracking-tight text-deep-slate">{activeTemplate.name}</div>
                    </div>
                    
                    <div className="hidden sm:flex bg-deep-slate/90 backdrop-blur-sm text-white font-mono text-[10px] p-2 gap-4 border border-white/20">
                      <div><span className="text-safety-orange">W:</span> 1920</div>
                      <div><span className="text-safety-orange">H:</span> 1080</div>
                      <div><span className="text-safety-orange">DPI:</span> 300</div>
                    </div>
                  </div>
                </div>

                {/* Specs Section */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {activeTemplate.desc}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 border border-gray-100">
                      <Ruler className="w-5 h-5 text-blueprint-blue mb-2" />
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Total Area</div>
                      <div className="font-bold text-lg">{activeTemplate.area}</div>
                    </div>
                    <div className="bg-gray-50 p-4 border border-gray-100">
                      <Home className="w-5 h-5 text-blueprint-blue mb-2" />
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Bedrooms</div>
                      <div className="font-bold text-lg">{activeTemplate.beds}</div>
                    </div>
                    <div className="bg-gray-50 p-4 border border-gray-100">
                      <Layers className="w-5 h-5 text-blueprint-blue mb-2" />
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Bathrooms</div>
                      <div className="font-bold text-lg">{activeTemplate.baths}</div>
                    </div>
                    <div className="bg-gray-50 p-4 border border-gray-100">
                      <div className="font-mono text-blueprint-blue font-black text-xl mb-1 mt-1 leading-none">Z</div>
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Apex Elev.</div>
                      <div className="font-bold text-lg">{activeTemplate.elevation}</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-mono text-sm font-bold tracking-widest uppercase mb-4 text-safety-orange">Key Engineering Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeTemplate.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-blueprint-blue flex-shrink-0" />
                          <span className="text-sm font-bold text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={handleSelectTemplate}
                    className="mt-10 w-full bg-safety-orange hover:bg-[#e56000] text-white font-bold py-4 px-6 flex items-center justify-between transition-colors uppercase tracking-widest text-sm group"
                  >
                    <span>Request Quote for {activeTemplate.name}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

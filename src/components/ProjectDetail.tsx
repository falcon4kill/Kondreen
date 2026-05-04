import React, { useState, useEffect } from 'react';
import { Map, Ruler, CheckCircle, ArrowRight, ArrowLeftRight, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const projectsData = [
  {
     id: 'KND-774-B',
     name: "Khartoum Industrial Complex",
     type: "Industrial",
     status: "In Progress",
     coverage: "125,000 m²",
     grade: "C40 / High-Strength",
     timeline: "99.8% On-Schedule",
     elevation: "+45.2M",
     load: "12.4 kN/m²",
     image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  },
  {
     id: 'KND-102-A',
     name: "Alpha Port Expansion",
     type: "Infrastructure",
     status: "Completed",
     coverage: "450,000 m²",
     grade: "C50 / Marine",
     timeline: "100% Delivered",
     elevation: "+12.0M",
     load: "25.0 kN/m²",
     image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
  },
  {
     id: 'KND-889-C',
     name: "Skyway Commercial Hub",
     type: "Commercial",
     status: "In Progress",
     coverage: "85,000 m²",
     grade: "C35 / Standard",
     timeline: "95.5% On-Schedule",
     elevation: "+120.5M",
     load: "8.5 kN/m²",
     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
     id: 'KND-442-D',
     name: "Verdant Core Phase III",
     type: "Residential",
     status: "Completed",
     coverage: "25,000 m²",
     grade: "C30 / Standard",
     timeline: "99.2% Delivered",
     elevation: "+35.0M",
     load: "4.5 kN/m²",
     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
  }
];

export default function ProjectDetail() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [filterType, setFilterType] = useState('All Types');
  const [filterStatus, setFilterStatus] = useState('All Statuses');
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);

  const filteredProjects = projectsData.filter(p => {
    if (filterType !== 'All Types' && p.type !== filterType) return false;
    if (filterStatus !== 'All Statuses' && p.status !== filterStatus) return false;
    return true;
  });

  const activeProject = projectsData.find(p => p.id === activeProjectId) || projectsData[0];

  useEffect(() => {
    if (filteredProjects.length > 0 && !filteredProjects.find(p => p.id === activeProjectId)) {
      setActiveProjectId(filteredProjects[0].id);
      setSliderPosition(50);
    }
  }, [filterType, filterStatus, filteredProjects, activeProjectId]);

  const handleProjectSelect = (id: string) => {
    setActiveProjectId(id);
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] text-deep-slate font-sans py-24 overflow-hidden" id="projects">
      {/* Architectural Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#0056B3 1px, transparent 1px), linear-gradient(90deg, #0056B3 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Setup & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-12 bg-safety-orange"></div>
              <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-safety-orange font-bold">The Kondreen Standards</h2>
            </div>
            <p className="text-4xl md:text-5xl font-black uppercase tracking-tight text-deep-slate mb-2">
              Project Portfolio
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 bg-white p-2 border border-gray-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-3 text-gray-500 hidden sm:flex">
                <Filter className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest">Filter:</span>
            </div>
            
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-deep-slate text-white text-xs font-mono uppercase font-bold tracking-widest px-4 py-3 outline-none cursor-pointer w-full sm:w-auto"
            >
              <option value="All Types">Type: All</option>
              <option value="Industrial">Industrial</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Commercial">Commercial</option>
              <option value="Residential">Residential</option>
            </select>

            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-deep-slate text-white text-xs font-mono uppercase font-bold tracking-widest px-4 py-3 outline-none cursor-pointer w-full sm:w-auto"
            >
              <option value="All Statuses">Status: All</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </motion.div>
        </div>

        {/* Selected Project Full Layout */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-16 border border-dashed border-gray-300 text-center flex flex-col items-center justify-center bg-white"
            >
              <p className="text-xl font-bold uppercase tracking-tight text-gray-400">No projects match the selected specification.</p>
              <button 
                onClick={() => { setFilterType('All Types'); setFilterStatus('All Statuses'); }}
                className="mt-4 text-safety-orange font-mono text-sm underline underline-offset-4"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
               key={activeProject.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
             >
                <div className="mb-8">
                  <p className="text-3xl font-black uppercase tracking-tight text-deep-slate mb-3">
                    {activeProject.name}
                  </p>
                  <div className="flex gap-3 items-center">
                    <span className="font-mono text-[10px] bg-deep-slate text-white px-2 py-0.5 inline-block uppercase tracking-widest font-bold">REF: {activeProject.id}</span>
                    <span className="font-mono text-[10px] border border-gray-300 text-gray-600 px-2 py-0.5 inline-block uppercase tracking-widest font-bold">{activeProject.status}</span>
                  </div>
                </div>

                {/* Broken Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
                  
                  {/* Main Structural Visual (Spans 8 cols) */}
                  <div className="md:col-span-8 relative bg-deep-slate aspect-[16/10] sm:aspect-video border-l-4 border-safety-orange shadow-2xl overflow-hidden group select-none touch-none">
                    
                    {/* Before / After Slider */}
                    <div className="absolute inset-0 w-full h-full">
                      {/* After Image (Engineering Plan / Blueprint style) */}
                      <div className="absolute inset-0 w-full h-full bg-blueprint-blue flex items-center justify-center p-8">
                        <div className="w-full h-full border border-white/20 relative">
                          <div className="absolute top-4 left-4 font-mono text-xs text-white/50 border border-white/20 px-2">PLAN R-01</div>
                          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/20"></div>
                          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/20"></div>
                          <div className="absolute inset-x-8 top-12 bottom-12 border-2 border-dashed border-white/30 flex items-center justify-center">
                            <span className="text-white/40 font-mono text-lg tracking-widest hidden sm:block">STRUCTURAL FRAME DRAFT</span>
                          </div>
                          {/* Decorative drafting lines */}
                          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" />
                            <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="1" />
                          </svg>
                        </div>
                      </div>

                      {/* Before Image (Real Photo) */}
                      <div 
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                      >
                        <img 
                          src={activeProject.image} 
                          alt={activeProject.name} 
                          className="object-cover w-full h-full"
                          draggable={false}
                        />
                      </div>

                      {/* Slider Control */}
                      <div 
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center -ml-0.5"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="w-8 h-8 bg-safety-orange rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing text-white">
                          <ArrowLeftRight className="w-4 h-4" />
                        </div>
                      </div>
                      
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={sliderPosition} 
                        onChange={handleSliderChange}
                        className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                        aria-label="Before vs After Slider"
                      />
                    </div>
                    
                    {/* SVG Overlay snippet placeholder */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-deep-slate/90 p-3 sm:p-4 border border-safety-orange/50 font-mono text-xs text-white z-30 pointer-events-none backdrop-blur-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-safety-orange block mb-1">ELEVATION:</span>
                          <span className="text-lg font-bold">{activeProject.elevation}</span>
                        </div>
                        <div>
                          <span className="text-safety-orange block mb-1">LOAD:</span>
                          <span className="text-lg font-bold">{activeProject.load}</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 z-30 pointer-events-none gap-2 font-mono text-[10px] sm:text-xs">
                      <span className="bg-deep-slate/80 text-white px-2 py-1 mr-2 border border-white/20">REALITY</span>
                      <span className="bg-blueprint-blue/80 text-white px-2 py-1 border border-white/20">BLUEPRINT</span>
                    </div>
                  </div>

                  {/* Overlapping Spec Card (Spans 5 cols, negative margin to break grid) */}
                  <div className="md:col-span-5 md:-ml-12 mt-4 md:mt-16 bg-white border-t-8 border-safety-orange shadow-2xl p-8 lg:p-10 relative z-20 flex flex-col justify-center min-h-[400px]">
                    <h3 className="font-mono text-xl lg:text-2xl font-black mb-8 border-b-2 border-deep-slate pb-4 uppercase">Engineering Specs</h3>
                    
                    <ul className="space-y-8 flex-grow">
                      <li className="flex items-start group">
                        <div className="p-2 bg-gray-50 border border-gray-200 group-hover:border-safety-orange transition-colors mr-5">
                          <Map className="w-6 h-6 text-safety-orange" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Total Coverage</p>
                          <p className="font-bold text-xl text-deep-slate tracking-tight">{activeProject.coverage}</p>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="p-2 bg-gray-50 border border-gray-200 group-hover:border-safety-orange transition-colors mr-5">
                          <Ruler className="w-6 h-6 text-safety-orange" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Concrete Grade</p>
                          <p className="font-bold text-xl text-deep-slate tracking-tight">{activeProject.grade}</p>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="p-2 bg-gray-50 border border-gray-200 group-hover:border-safety-orange transition-colors mr-5">
                          <CheckCircle className="w-6 h-6 text-safety-orange" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Timeline Precision</p>
                          <p className="font-bold text-xl text-blueprint-blue tracking-tight">{activeProject.timeline}</p>
                        </div>
                      </li>
                    </ul>

                    <button className="mt-10 w-full bg-deep-slate hover:bg-black text-white font-bold py-4 px-6 flex items-center justify-between transition-all group border-t-2 border-transparent">
                      <span className="uppercase text-xs tracking-widest">Technical Specifications</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Thumbnail Selector Grid */}
        {filteredProjects.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <AnimatePresence>
              {filteredProjects.map((proj) => (
                <motion.div 
                  key={proj.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, width: 0 }}
                  onClick={() => handleProjectSelect(proj.id)}
                  className={`group relative overflow-hidden cursor-pointer border-t-[3px] transition-all duration-300 bg-white ${activeProjectId === proj.id ? 'border-safety-orange shadow-md' : 'border-gray-200 hover:border-deep-slate opacity-70 hover:opacity-100'}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={proj.image} 
                      alt={proj.name} 
                      className={`w-full h-full object-cover transition-transform duration-700 ${activeProjectId === proj.id ? 'scale-105 filter-none' : 'grayscale group-hover:grayscale-0'}`} 
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[9px] text-gray-400 mb-1 tracking-widest uppercase">{proj.type}</p>
                    <p className="font-bold text-xs uppercase tracking-tight text-deep-slate line-clamp-1">{proj.name}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}

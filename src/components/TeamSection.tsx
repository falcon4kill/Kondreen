import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Hassan El-Sayed",
    role: "Chief Structural Engineer",
    certifications: ["PhD Structural Eng.", "PE", "SE"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    bio: "20+ years specializing in high-load industrial superstructures and seismic retrofitting."
  },
  {
    name: "Amira Rahman",
    role: "VP Operations & Lifecycle",
    certifications: ["PMP", "MBA", "ISO 9001 Lead"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Expert in heavy infrastructure logistics, zero-downtime execution, and cross-border compliance."
  },
  {
    name: "Marcus Chen",
    role: "Lead Geotechnical Engineer",
    certifications: ["PE", "M.ASCE"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    bio: "Pioneered the deep foundation systems for Kondreen's largest port and coastal expansion projects."
  },
  {
    name: "Sarah Dubois",
    role: "BIM Integration Director",
    certifications: ["BS 1192 Cert", "Autodesk Arch"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Drives zero-clash engineering through advanced structural modeling and spatial analytics."
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-deep-slate text-white relative overflow-hidden" id="team">
      {/* Abstract Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#0056B3 1px, transparent 1px), linear-gradient(90deg, #0056B3 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-safety-orange" />
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-safety-orange font-bold">Certified Leadership</h2>
          </div>
          <p className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            The Engineering Authority
          </p>
          <div className="w-24 h-1 bg-blueprint-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#1A1A1A] border text-left border-gray-800 group hover:border-safety-orange transition-colors duration-300 shadow-2xl relative overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden relative border-b-4 border-safety-orange">
                <div className="absolute inset-0 bg-deep-slate/40 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-deep-slate text-white text-[10px] font-mono font-bold px-2 py-1 uppercase tracking-widest border border-white/20">
                    ID: {1024 + idx}-KND
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-xl uppercase tracking-tighter mb-1">{member.name}</h3>
                <p className="text-safety-orange font-mono text-[10px] uppercase tracking-widest font-bold mb-4">{member.role}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.certifications.map((cert, cIdx) => (
                    <span key={cIdx} className="bg-deep-slate border border-gray-700 text-[10px] font-mono text-gray-300 px-2 py-1 font-bold">
                      {cert}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4 mt-auto">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Shield, FileCheck, HardHat, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustSignals() {
  const specs = [
    {
      title: "ISO 9001:2015",
      desc: "Certified Quality Management Systems across all active sites.",
      icon: <Shield className="w-8 h-8 text-safety-orange" />
    },
    {
      title: "BS 1192 BIM",
      desc: "Full structural modeling compliance for zero-clash engineering.",
      icon: <FileCheck className="w-8 h-8 text-safety-orange" />
    },
    {
      title: "ACI Certified",
      desc: "Concrete pour standards exceed American Concrete Institute requirements.",
      icon: <HardHat className="w-8 h-8 text-safety-orange" />
    },
    {
      title: "0.01% Variant",
      desc: "Millimeter-perfect precision tracking on all load-bearing structures.",
      icon: <TrendingUp className="w-8 h-8 text-safety-orange" />
    }
  ];

  return (
    <section className="py-24 bg-white text-deep-slate relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Precision & Compliance</h2>
          <div className="w-24 h-1 bg-blueprint-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 border border-gray-200 hover:border-safety-orange transition-colors group bg-blueprint-bg"
            >
              <div className="mb-6 p-4 bg-white inline-block shadow-sm group-hover:scale-110 transition-transform">
                {spec.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 font-mono tracking-tight">{spec.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

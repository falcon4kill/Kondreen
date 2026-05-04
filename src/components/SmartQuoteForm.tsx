import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Calculator } from 'lucide-react';

const quoteSchema = z.object({
  constructionType: z.enum(['Industrial', 'Infrastructure', 'Commercial', 'Residential'], {
    message: "Please select a construction type."
  }),
  sqFootage: z.string().min(1, "Estimated area is required."),
  complianceStandard: z.enum(['ACI', 'BS-1192', 'ISO-9001', 'Local-Municipal', 'Other'], {
    message: "Please select a compliance standard."
  }),
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().min(2, "Company name is required."),
  email: z.string().email("Invalid corporate email address.")
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function SmartQuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, trigger, formState: { errors } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    mode: "onChange"
  });

  const nextStep = async () => {
    const isStepValid = await trigger(['constructionType', 'sqFootage', 'complianceStandard']);
    if (isStepValid) setStep(2);
  };

  const onSubmit = (data: QuoteFormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Lead Captured:", data);
      setIsSubmitting(false);
      setStep(3); 
    }, 1200);
  };

  return (
    <section className="bg-deep-slate py-24 relative" id="quote-section">
      <div className="absolute top-0 rotate-180 left-0 w-full overflow-hidden leading-none transform">
        <svg fill="#FAFAFA" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px]">
          <path d="M1200 120L0 16.48V0h1200v120z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-safety-orange font-mono text-sm mb-6">
              <Calculator className="w-4 h-4" />
              <span>SMART QUOTE SYSTEM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Initiate Technical <br/><span className="text-safety-orange">Consultation.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md font-light leading-relaxed">
              Input your project parameters. A registered PE will review compliance requirements and issue a structural feasibility report within 24 hours.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Direct review by licensed structural engineers",
                "Sub-3-second submission process",
                "ISO-certified data handling"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                  <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-[#1A1A1A] p-8 border-t-4 border-safety-orange shadow-2xl text-white font-sans relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <div className="mb-8 relative z-10">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-bold uppercase tracking-wide">Project Initiation</h3>
                <span className="text-gray-500 font-mono text-sm">STEP {Math.min(step, 2)}/2</span>
              </div>
              <div className="w-full bg-gray-800 h-1 mb-2">
                <div 
                  className="bg-safety-orange h-1 transition-all duration-500 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10 min-h-[300px]">
              <AnimatePresence mode="wait">
                {/* STEP 1: Project Scope */}
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-mono text-safety-orange mb-2">01. Construction Classification</label>
                      <select {...register("constructionType")} className="w-full bg-[#2D2D2D] border border-gray-600 p-4 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange outline-none transition-all appearance-none cursor-pointer hover:bg-[#333]">
                        <option value="">Select Sector...</option>
                        <option value="Infrastructure">Heavy Infrastructure</option>
                        <option value="Industrial">Industrial / Manufacturing</option>
                        <option value="Commercial">Commercial Superstructure</option>
                        <option value="Residential">Residential Development</option>
                      </select>
                      {errors.constructionType && <p className="text-red-400 font-mono tracking-tighter text-xs mt-2">{errors.constructionType.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-safety-orange mb-2">02. Est. Coverage (Sq. Meters)</label>
                      <input type="text" placeholder="e.g., 50,000" {...register("sqFootage")} className="w-full bg-[#2D2D2D] border border-gray-600 p-4 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange outline-none transition-all placeholder:text-gray-600 font-mono" />
                      {errors.sqFootage && <p className="text-red-400 font-mono tracking-tighter text-xs mt-2">{errors.sqFootage.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-safety-orange mb-2">03. Target Compliance Standard</label>
                      <select {...register("complianceStandard")} className="w-full bg-[#2D2D2D] border border-gray-600 p-4 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange outline-none transition-all appearance-none cursor-pointer hover:bg-[#333]">
                        <option value="">Select Primary Code...</option>
                        <option value="ACI">ACI (American Concrete Institute)</option>
                        <option value="BS-1192">BS 1192 (British Standards BIM)</option>
                        <option value="ISO-9001">ISO 9001 Quality Management</option>
                        <option value="Local-Municipal">Local Municipal Codes</option>
                        <option value="Other">Other / Unsure</option>
                      </select>
                      {errors.complianceStandard && <p className="text-red-400 font-mono tracking-tighter text-xs mt-2">{errors.complianceStandard.message}</p>}
                    </div>

                    <button type="button" onClick={nextStep} className="w-full mt-8 bg-safety-orange hover:bg-[#e56000] text-white font-bold py-4 font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2 group">
                      Proceed to Contact <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: Contact Info */}
                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-mono text-safety-orange mb-2">04. Project Lead Name</label>
                      <input type="text" {...register("fullName")} className="w-full bg-[#2D2D2D] border border-gray-600 p-4 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange outline-none transition-all" />
                      {errors.fullName && <p className="text-red-400 font-mono tracking-tighter text-xs mt-2">{errors.fullName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-safety-orange mb-2">05. Contracting Organization</label>
                      <input type="text" {...register("company")} className="w-full bg-[#2D2D2D] border border-gray-600 p-4 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange outline-none transition-all" />
                      {errors.company && <p className="text-red-400 font-mono tracking-tighter text-xs mt-2">{errors.company.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-safety-orange mb-2">06. Corporate Email</label>
                      <input type="email" {...register("email")} className="w-full bg-[#2D2D2D] border border-gray-600 p-4 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange outline-none font-mono transition-all" />
                      {errors.email && <p className="text-red-400 font-mono tracking-tighter text-xs mt-2">{errors.email.message}</p>}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button type="button" onClick={() => setStep(1)} className="w-[30%] bg-transparent border border-gray-500 hover:border-white hover:text-white text-gray-400 font-mono font-bold py-4 transition-colors">
                        BACK
                      </button>
                      <button type="submit" disabled={isSubmitting} className="w-[70%] bg-white text-deep-slate hover:bg-gray-200 font-bold font-mono tracking-widest uppercase py-4 transition-colors disabled:opacity-70 flex justify-center items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-deep-slate" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Transmitting...
                          </>
                        ) : "Initialize Consult"}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Success State */}
                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="py-12 text-center flex flex-col items-center justify-center min-h-[350px]"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider text-white">Transmission Received</h3>
                    <p className="text-gray-400 max-w-xs mx-auto leading-relaxed">
                      A senior engineer will review your parameters and contact you within 24 hours.
                    </p>
                    
                    <button 
                      onClick={() => setStep(1)}
                      className="mt-10 text-safety-orange font-mono text-sm border-b border-safety-orange/30 hover:border-safety-orange pb-1"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

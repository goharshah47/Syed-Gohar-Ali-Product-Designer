import { motion, useScroll } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Clock, User } from "lucide-react";
import { CaseStudy } from "../data";

interface CaseStudyViewProps {
  project: CaseStudy;
  onBack: () => void;
}

export default function CaseStudyView({ project, onBack }: CaseStudyViewProps) {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-primary min-h-screen"
    >
      {/* Immersive Hero */}
      <section className="relative h-[90vh] bg-black overflow-hidden group">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={project.heroImage} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-brand-primary" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.button 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={onBack}
            className="absolute top-12 left-6 md:left-12 flex items-center gap-2 text-white/40 hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-[10px] bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
          >
            <ArrowLeft size={14} />
            Back to Case Studies
          </motion.button>

          <div className="max-w-5xl space-y-8">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "1em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-accent font-black uppercase text-xs block"
            >
              {project.category}
            </motion.span>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85]"
            >
              {project.title.split(' ')[0]} <br />
              <span className="italic text-brand-secondary/30">{project.title.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-white/50 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light"
            >
              {project.shortDescription}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Metadata Bar */}
      <div className="sticky top-0 z-40 bg-brand-primary/80 backdrop-blur-xl border-y border-border py-6 px-6 md:px-24">
        {/* Scroll Progress Line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-accent z-50 origin-[0%]" 
          style={{ scaleX: scrollYProgress }}
        />
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          <div className="flex gap-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary block mb-1">Role</span>
              <p className="text-sm font-bold text-brand-text">{project.role}</p>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary block mb-1">Duration</span>
              <p className="text-sm font-bold text-brand-text">{project.timeline}</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-primary bg-surface overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i + 20}/32/32`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
             <span className="text-[10px] font-bold text-brand-secondary tracking-widest uppercase">Collaborative Effort</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 space-y-48 py-32">
        
        {/* Chapter 1: The Context & Problem */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Chapter 01</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none text-brand-text">The Challenge</h2>
              <p className="text-xl text-brand-secondary leading-relaxed">
                {project.context}
              </p>
            </div>
            
            <div className="p-10 bg-red-500/5 border border-red-500/10 rounded-[40px] space-y-6">
              <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Problem Statement
              </h3>
              <p className="text-2xl font-medium text-brand-text leading-tight">
                {project.problem}
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[60px] overflow-hidden bg-surface border border-border shadow-2xl"
          >
            <img src="https://picsum.photos/seed/problem-viz/1200/1200" alt="Problem visualization" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-x-8 bottom-8 p-8 bg-brand-primary/40 backdrop-blur-md rounded-3xl border border-white/10">
               <span className="text-white/50 text-[10px] font-black uppercase tracking-widest block mb-2">Target Metric</span>
               <p className="text-white text-xl font-bold leading-none tracking-tight">Reduce cognitive load by 40%</p>
            </div>
          </motion.div>
        </section>

        {/* Chapter 2: Key Insight - Big Typography WOW Moment */}
        <section className="py-24 text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto space-y-8"
           >
             <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px]">The "Aha" Moment</span>
             <blockquote className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-brand-text">
                "Users weren't failing because of features, they were <span className="text-brand-secondary italic">exhausted by choice.</span>"
             </blockquote>
             <div className="w-24 h-[1px] bg-accent mx-auto mt-12" />
           </motion.div>
        </section>

        {/* Chapter 3: Research - Alternating Layout */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, order: 1 }}
            whileInView={{ opacity: 1, order: 2 }}
            viewport={{ once: true }}
            className="lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Chapter 02</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-text">Finding Clarity</h2>
              <p className="text-lg text-brand-secondary leading-relaxed">
                Strategic research allowed us to strip away the noise. We prioritized three core themes that emerged from over 40 hours of user interviews.
              </p>
            </div>
            
            <div className="space-y-4">
              {project.researchInsights.map((insight, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-surface border border-border rounded-3xl"
                >
                  <span className="text-accent font-bold text-xs mt-1 tabular-nums">0{idx + 1}</span>
                  <p className="text-brand-text font-medium leading-relaxed">{insight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30, order: 2 }}
            whileInView={{ opacity: 1, x: 0, order: 1 }}
            viewport={{ once: true }}
            className="lg:order-1 relative h-[600px] rounded-[60px] overflow-hidden shadow-xl"
          >
            <img src="https://picsum.photos/seed/research/800/1200" alt="Research phase" className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* WOW Moment: Before & After Comparison */}
        {project.beforeImage && project.afterImage && (
          <section className="py-24 space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-4xl font-bold tracking-tight text-brand-text">The Evolution</h2>
               <p className="text-brand-secondary max-w-xl mx-auto">From a cluttered legacy system to a streamlined, performance-oriented interface.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="space-y-6"
               >
                 <span className="text-[10px] font-black uppercase text-brand-secondary py-1 px-3 border border-border rounded-full">Legacy State</span>
                 <div className="aspect-video rounded-3xl overflow-hidden border border-border bg-surface grayscale opacity-50 contrast-125">
                    <img src={project.beforeImage} alt="Before" className="w-full h-full object-cover" />
                 </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="space-y-6"
               >
                 <span className="text-[10px] font-black uppercase text-accent py-1 px-3 border border-accent/20 bg-accent/5 rounded-full">Redesign Solution</span>
                 <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-accent/30 ring-4 ring-accent/5">
                    <img src={project.afterImage} alt="After" className="w-full h-full object-cover" />
                 </div>
               </motion.div>
            </div>
          </section>
        )}

        {/* Chapter 4: Decision Matrix */}
        <section className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-border pb-12">
            <div className="max-w-xl space-y-4">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Chapter 03</span>
              <h2 className="text-4xl font-bold tracking-tight text-brand-text">Design Thinking in Action</h2>
              <p className="text-brand-secondary leading-relaxed">
                Every design choice was weighed against its business impact and user friction.
              </p>
            </div>
            <div className="text-right">
               <span className="text-brand-secondary text-xs uppercase tracking-widest font-bold">Approach: Logic over trends</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {project.uxDecisions.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 border border-border bg-surface rounded-[40px] space-y-8 group hover:border-accent transition-colors duration-500"
              >
                <h4 className="text-2xl font-bold tracking-tight text-accent group-hover:translate-x-2 transition-transform duration-500">
                  {item.decision}
                </h4>
                <div className="h-px bg-border" />
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary">Reasoning</span>
                  <p className="text-brand-secondary text-lg leading-relaxed">{item.reasoning}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Chapter 5: UI Showcase - Full Width Carousel Pattern */}
        <section className="py-24 space-y-24">
          <div className="text-center space-y-4 border-t border-border pt-24">
             <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px]">The Final Frontier</span>
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-text">Visual Excellence</h2>
          </div>
          
          <div className="space-y-48">
            {project.finalUI.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center px-4 md:px-0`}
              >
                <div className="w-full lg:w-[70%] rounded-[40px] overflow-hidden shadow-2xl border border-border group bg-surface">
                  <img 
                    src={img} 
                    alt={`Screen ${idx + 1}`} 
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="w-full lg:w-[30%] space-y-8">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Module 0{idx + 1}</span>
                    <h4 className="text-3xl font-bold text-brand-text tracking-tight">
                      {idx === 0 ? "Global Navigation" : idx === 1 ? "Data Intelligence" : "Precision Control"}
                    </h4>
                    <p className="text-lg text-brand-secondary leading-relaxed font-medium">
                      {idx === 0 
                        ? "A centralized ecosystem that connects all core modules while maintaining context for power users during heavy data entry."
                        : idx === 1
                        ? "Surfacing critical insights through proprietary algorithms, reducing time-to-decision by highlighting deviations in real-time."
                        : "High-fidelity control surfaces designed for rapid manipulation of complex datasets with zero-latency visual feedback."}
                    </p>
                  </div>
                  <div className="pt-8 border-t border-border flex items-center gap-4 text-brand-secondary text-[10px] font-black uppercase tracking-widest">
                     <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                     Accessibility Passed
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Chapter 6: Impact - High Impact Stats */}
        <section className="py-32 bg-black text-white rounded-[80px] px-8 md:px-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 blur-[120px] rounded-full -z-0" />
          
          <div className="relative z-10 grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 space-y-8">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Chapter 05</span>
              <h2 className="text-5xl font-bold tracking-tighter leading-none">Measured <br /> Success</h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Design is only successful if it solves the underlying business problem. Post-launch analytics showed significant improvements across all key performance indicators.
              </p>
            </div>
            
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.impact.map((metric, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm"
                >
                  <div className="text-5xl font-bold text-accent mb-4 italic tracking-tighter">{metric.split(' ')[0]}</div>
                  <p className="text-white font-medium text-sm leading-relaxed tracking-wide uppercase">{metric.split(' ').slice(1).join(' ')}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Project / Back CTA */}
        <section className="py-24 text-center border-t border-border">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-brand-text">Thank you for exploring.</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <button 
                onClick={onBack}
                className="group flex items-center gap-3 bg-brand-text text-brand-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-accent hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Selected Work
              </button>
              <button 
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 border border-border text-brand-text px-10 py-5 rounded-full text-lg font-bold hover:bg-surface transition-all duration-300"
              >
                Let's discuss impact
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
}


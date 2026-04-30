import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden bg-brand-primary text-brand-text">
      {/* Subtle Animated Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/4 right-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent blur-[160px] rounded-full -z-0" 
      />
      
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-accent text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6">
            Designing for Business Results
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-10 text-balance italic"
          id="hero-headline"
        >
          Building Digital <br />
          Products That <br />
          <span className="text-accent not-italic">Matter.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl text-brand-secondary max-w-2xl leading-relaxed mb-12 text-balance"
        >
          I partner with growth-stage startups and enterprise teams to solve complex problems through strategic research-driven design and high-end UI execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4"
        >
          <button 
            className="bg-accent text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/80 transition-all duration-300 shadow-lg shadow-accent/20 cursor-pointer"
            id="hero-cta"
            onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Work
          </button>
          <button 
            className="border border-brand-text/20 hover:bg-brand-text/5 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 backdrop-blur-sm cursor-pointer"
            id="hero-secondary-cta"
            onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            My Vision
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-text/30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to see impact</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact-section" className="bg-brand-primary py-24 md:py-40 px-6 md:px-24">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-text text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            Ready to evolve <br /> 
            <span className="italic text-accent underline decoration-brand-text/20 underline-offset-8">your product?</span>
          </h2>
        </motion.div>

        <p className="text-brand-secondary text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Currently taking on new projects for 2026. Whether it's a new MVP or a platform overhaul, let's talk about how design can drive your growth.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-12">
          <a 
            href="mailto:design@evolve.com" 
            className="group flex items-center gap-3 bg-brand-text text-brand-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-xl"
            id="contact-cta-primary"
          >
            Start a Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <div className="flex items-center gap-3 text-brand-secondary font-mono text-sm tracking-widest bg-surface px-6 py-5 rounded-full border border-border">
            <Mail size={16} />
            HELLO@EVOLVE.DESIGN
          </div>
        </div>

        <div className="pt-24 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-brand-secondary/40 text-xs font-bold tracking-widest uppercase">
          <div>© 2026 Evolve Design Studio</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">LinkedIn</a>
          </div>
          <div>Brooklyn, NY — Worldwide</div>
        </div>
      </div>
    </footer>
  );
}

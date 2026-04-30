import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function About() {
  return (
    <section id="about-section" className="py-24 md:py-32 bg-surface px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl z-10 border border-border"
            >
              <img 
                src="https://picsum.photos/seed/designer-face/800/800" 
                alt="Product Designer Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-3xl -z-10" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-brand-text">
              Hello, I'm Evolve. <br />
              Digital Architect. <br />
              <span className="italic text-brand-secondary">Product Thinker.</span>
            </h3>
          </div>

          <p className="text-lg text-brand-secondary leading-relaxed">
            With over 8 years of experience in the design trenches, I've led projects ranging from high-stakes fintech dashboards to consumer health platforms. My obsession is clarity—stripping away the noise to find the most elegant solution for both users and the bottom line.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-brand-text mb-3">Core Skills</h4>
              <ul className="text-sm text-brand-secondary space-y-1">
                <li>Design Strategy</li>
                <li>User Research</li>
                <li>Design Systems</li>
                <li>Interaction Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-brand-text mb-3">Tools</h4>
              <ul className="text-sm text-brand-secondary space-y-1">
                <li>Figma</li>
                <li>Framer / Motion</li>
                <li>Adobe Suite</li>
                <li>Protopie</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6 pt-8">
            <a href="#" className="p-3 bg-brand-primary border border-border text-brand-text rounded-full hover:shadow-lg transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-brand-primary border border-border text-brand-text rounded-full hover:shadow-lg transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-brand-primary border border-border text-brand-text rounded-full hover:shadow-lg transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-brand-primary border border-border text-brand-text rounded-full hover:shadow-lg transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Lightbulb, Target, Users, Zap } from "lucide-react";

const processSteps = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Discovery & Empathy",
    description: "Deep-diving into user pain points and business goals through stakeholder interviews and user workshops."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Strategy & Ideation",
    description: "Synthesizing research into actionable insights and exploring multiple low-fidelity solutions to test hypothesis."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Iterative Design",
    description: "Building high-fidelity prototypes and refining UX through constant user feedback and usability testing."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Delivery & Impact",
    description: "Collaborating with developers for pixel-perfect implementation and tracking metrics post-launch."
  }
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-brand-primary px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-brand-text">
              Impact-driven design <br /> 
              is more than just <br />
              <span className="text-brand-secondary italic">looking good.</span>
            </h3>
          </div>
          <div className="md:max-w-md">
            <p className="text-lg text-brand-secondary leading-relaxed">
              I believe the most successful products are born at the intersection of user needs, business viability, and technical feasibility. My process is rigorous, transparent, and always focused on the "Why."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="p-8 rounded-3xl border border-border bg-surface hover:border-accent transition-all duration-500 group hover:-translate-y-2"
              id={`process-step-${index}`}
            >
              <div className="w-12 h-12 bg-brand-primary border border-border rounded-2xl flex items-center justify-center text-brand-text mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-brand-text">{step.title}</h4>
              <p className="text-brand-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

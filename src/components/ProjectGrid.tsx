import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "../data";

export interface ProjectCardProps {
  project: CaseStudy;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group cursor-pointer"
      id={`project-${project.id}`}
    >
      <div className="relative overflow-hidden aspect-[4/3] rounded-3xl mb-6 bg-surface border border-border shadow-sm group-hover:shadow-xl group-hover:-translate-y-1.5 transition-all duration-500 ease-out">
        <motion.img 
          src={project.thumbnail} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white text-black p-4 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            {project.category}
          </span>
          <div className="h-[1px] flex-1 bg-border" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-brand-text group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-brand-secondary text-sm leading-relaxed max-w-sm">
          {project.shortDescription}
        </p>
      </div>
    </motion.div>
  );
}

export const FeaturedProject: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      onClick={onClick}
      className="relative w-full h-[70vh] md:h-[80vh] cursor-pointer group overflow-hidden bg-black"
      id={`featured-${project.id}`}
    >
      <img 
        src={project.heroImage} 
        alt={project.title}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-24 z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-2xl space-y-4 text-white">
          <div className="flex items-center gap-3">
            <span className="bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
              Featured Case Study
            </span>
            <span className="text-white/50 text-sm font-medium tracking-wide">
              {project.category}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
            {project.title}
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <div className="w-20 h-20 md:w-32 md:h-32 border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-all duration-500">
            <ArrowRight className="w-8 h-8 md:w-12 md:h-12 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}


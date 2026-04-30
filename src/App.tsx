import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import { FeaturedProject, ProjectCard } from './components/ProjectGrid';
import CaseStudyView from './components/CaseStudyView';
import { projects } from './data';

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from system preference or local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeProjectId]);

  const handleProjectClick = (id: string) => {
    setActiveProjectId(id);
  };

  const handleBackToWork = () => {
    setActiveProjectId(null);
  };

  const currentProject = projects.find(p => p.id === activeProjectId);

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <div className="relative">
      <Navbar 
        isDark={isDark}
        toggleTheme={toggleTheme}
        onHomeClick={handleBackToWork} 
        onContactClick={() => {
          handleBackToWork();
          setTimeout(() => {
            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      <AnimatePresence mode="wait">
        {!activeProjectId ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero />
            
            <section id="featured-work">
              <FeaturedProject 
                project={featuredProject} 
                onClick={() => handleProjectClick(featuredProject.id)} 
              />
            </section>

            <section className="py-24 md:py-40 bg-white px-6 md:px-24">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
                  <div className="max-w-2xl">
                    <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Selected Work</h2>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
                      Case studies of <br /> 
                      <span className="italic text-brand-secondary/40">strategic excellence.</span>
                    </h3>
                  </div>
                  <p className="text-brand-secondary text-lg font-medium max-w-xs md:text-right">
                    Explore detailed breakdowns of problems solved and metrics moved.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-24">
                  {otherProjects.map(project => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      onClick={() => handleProjectClick(project.id)} 
                    />
                  ))}
                </div>
              </div>
            </section>

            <Process />
            <About />
            <Contact />
          </motion.main>
        ) : (
          <motion.div
            key="case-study"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentProject && (
              <CaseStudyView 
                project={currentProject} 
                onBack={handleBackToWork} 
              />
            )}
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


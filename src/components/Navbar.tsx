import { motion } from "motion/react";
import { ArrowRight, Moon, Sun } from "lucide-react";

interface NavbarProps {
  onHomeClick: () => void;
  onContactClick: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ onHomeClick, onContactClick, isDark, toggleTheme }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-8 mix-blend-difference"
    >
      <button 
        onClick={onHomeClick}
        className="group flex flex-col cursor-pointer"
        id="nav-logo"
      >
        <span className="text-white text-xl font-bold tracking-tighter leading-none italic">EVOLVE</span>
        <span className="text-white/50 text-[10px] uppercase tracking-widest font-medium group-hover:text-white transition-colors duration-300">
          Product Designer
        </span>
      </button>

      <div className="flex items-center gap-4 md:gap-8">
        <button 
          onClick={toggleTheme}
          className="p-2 md:p-3 text-white/70 hover:text-white transition-colors duration-300 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md cursor-pointer"
          aria-label="Toggle Theme"
          id="theme-toggle"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        <button 
          onClick={onHomeClick}
          className="text-white text-sm uppercase tracking-widest font-medium hover:opacity-50 transition-opacity duration-300 hidden md:block"
          id="nav-work"
        >
          Work
        </button>
        <button 
          onClick={onContactClick}
          className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-300"
          id="nav-contact"
        >
          Let's Talk
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </motion.nav>
  );
}

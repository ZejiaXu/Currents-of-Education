import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import foucaultImage from "../assets/images/foucault_portrait_1781641408298.jpg";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 mb-24 text-center md:text-left">
        <div className="flex-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-6 block">A Living Map of Western Educational Thought</span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-navy mb-6">
            Currents of<br /><span className="text-brand-gold-muted italic">Education</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-text/70 mb-8 font-sans leading-relaxed">
            Western educational thought is not a list of famous names. It is a long conversation about what human beings are, how children learn, what society should become, and who has the authority to shape the next generation.
          </p>
        </div>
        
        {/* Foucault Image */}
        <div className="flex flex-col items-center mt-8 md:mt-0">
          <Link to="/thinker/foucault" className="group flex flex-col items-center transition-transform hover:scale-[1.02]">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#C9A227] shadow-xl shadow-brand-navy/10 relative">
               <img 
                 src={foucaultImage} 
                 alt="Portrait of Michel Foucault, educational and social theorist associated with power, knowledge, and discipline." 
                 className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                 referrerPolicy="no-referrer"
               />
            </div>
            <span className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-[#C9A227] max-w-[220px] text-center leading-relaxed">
              Michel Foucault — power, knowledge, and the hidden architecture of discipline
            </span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link to="/map" className="group rounded-sm border border-brand-border bg-brand-surface p-8 hover:bg-brand-surface-muted hover:border-brand-gold-muted transition-all text-left shadow-sm">
          <h2 className="text-2xl font-serif text-brand-navy mb-3 flex items-center justify-between">
            Historical Map <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold-muted" />
          </h2>
          <p className="text-brand-text/70 text-sm leading-relaxed">Explore the interactive network of influences, oppositions, and inheritances among major educational thinkers.</p>
        </Link>

        <Link to="/vs" className="group rounded-sm border border-brand-border bg-brand-surface p-8 hover:bg-brand-surface-muted hover:border-brand-gold-muted transition-all text-left shadow-sm">
          <h2 className="text-2xl font-serif text-brand-navy mb-3 flex items-center justify-between">
            VS Mode <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold-muted" />
          </h2>
          <p className="text-brand-text/70 text-sm leading-relaxed">Compare thinkers side-by-side to make intellectual tensions and profound philosophical disagreements visible.</p>
        </Link>

        <Link to="/library" className="group rounded-sm border border-brand-border bg-brand-surface p-8 hover:bg-brand-surface-muted hover:border-brand-gold-muted transition-all text-left shadow-sm">
          <h2 className="text-2xl font-serif text-brand-navy mb-3 flex items-center justify-between">
            Thinker Library <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold-muted" />
          </h2>
          <p className="text-brand-text/70 text-sm leading-relaxed">Browse detailed profiles spanning from Antiquity to Contemporary times. Search, filter, and learn.</p>
        </Link>
        
        <Link to="/rankings" className="group rounded-sm border border-brand-border bg-brand-surface p-8 hover:bg-brand-surface-muted hover:border-brand-gold-muted transition-all text-left shadow-sm">
          <h2 className="text-2xl font-serif text-brand-navy mb-3 flex items-center justify-between">
            Giants Ranking <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold-muted" />
          </h2>
          <p className="text-brand-text/70 text-sm leading-relaxed">Sorting thinkers by historical influence, originality, practice impact, and contemporary relevance.</p>
        </Link>
      </div>
    </div>
  );
}

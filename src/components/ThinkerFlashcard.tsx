import { useState } from "react";
import { Thinker } from "../data/thinkers";
import { X, Calendar, MapPin, BookText } from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

interface FlashcardProps {
  thinker: Thinker;
  onClose: () => void;
}

export function ThinkerFlashcard({ thinker, onClose }: FlashcardProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-brand-surface border border-brand-border rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-brand-border bg-brand-surface-muted flex justify-between items-start sticky top-0 z-10">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold-muted font-bold block mb-1">Profile / {thinker.period}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-navy mb-2">{thinker.name}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-brand-text-muted italic">
              <span className="flex items-center gap-1"><Calendar size={16} /> {thinker.lifeDates}</span>
              <span className="flex items-center gap-1"><MapPin size={16} /> {thinker.region}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <Link to={`/thinker/${thinker.id}`} className="bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-brand-navy hover:bg-brand-surface hover:text-brand-navy transition-colors hidden sm:block shadow-sm">
                Read Full Dossier
             </Link>
             <button onClick={onClose} className="p-2 text-brand-text hover:bg-brand-border transition-colors border border-transparent shadow-sm">
               <X size={24} />
             </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 bg-brand-surface">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column */}
            <div className="space-y-8">
              <section>
                <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-surface-muted pb-1 mb-3 text-brand-muted">Core Educational Ideas</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-brand-text/90">
                  {thinker.coreIdeas.map(id => <li key={id}>{id}</li>)}
                </ul>
              </section>

              <section>
                <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-surface-muted pb-1 mb-3 text-brand-muted">Key Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  {thinker.keyConcepts.map(c => (
                    <span key={c} className="bg-brand-surface-muted border border-brand-border px-3 py-1 text-[10px] font-medium uppercase tracking-wider rounded-sm text-brand-text">{c}</span>
                  ))}
                </div>
              </section>
              
              <section className="bg-brand-surface-muted p-5 border border-brand-border border-dashed rounded-sm space-y-4">
                 <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#B59410] mb-2">View of the Child/Student</h4>
                    <p className="text-sm leading-relaxed text-brand-text/90">{thinker.viewOfChild}</p>
                 </div>
                 <div className="pt-2 border-t border-brand-border/50">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#B59410] mb-2 mt-2">View of the Teacher</h4>
                    <p className="text-sm leading-relaxed text-brand-text/90">{thinker.viewOfTeacher}</p>
                 </div>
              </section>

               <section>
                <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-surface-muted pb-1 mb-3 text-brand-muted">View of Knowledge & Society</h4>
                <p className="text-sm mb-3 leading-relaxed text-brand-text/90"><strong>Knowledge:</strong> {thinker.viewOfKnowledge}</p>
                <p className="text-sm leading-relaxed text-brand-text/90"><strong>Society:</strong> {thinker.viewOfSociety}</p>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
               <section>
                <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-surface-muted pb-1 mb-3 flex items-center gap-2 text-brand-muted"><BookText size={14}/> Key Works</h4>
                <p className="text-sm italic text-brand-text/80 leading-relaxed">{thinker.keyWorks.join(", ")}</p>
              </section>

              <section>
                <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-surface-muted pb-1 mb-3 text-brand-muted">Main Criticisms</h4>
                <ul className="list-disc pl-5 space-y-2 text-brand-text/80 text-sm leading-relaxed">
                  {thinker.mainCriticisms.map(id => <li key={id}>{id}</li>)}
                </ul>
              </section>

              <section className="bg-brand-bg border border-brand-gold-muted p-5 rounded-sm">
                <h3 className="text-lg font-serif text-brand-navy mb-2">Contemporary Relevance</h3>
                <p className="text-sm leading-relaxed text-brand-text/90">{thinker.contemporaryRelevance}</p>
              </section>

              <section className="bg-[#FDFCF8] p-5 border border-dashed border-[#E5E1D6] rounded-sm relative">
                <div className="absolute top-0 right-0 p-3 flex animate-pulse">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#B59410] mb-2 inline-flex items-center gap-2">
                  The AI-Age Reflection
                </h4>
                <p className="text-[11px] leading-relaxed italic text-gray-700">"If {thinker.name} were alive today, {thinker.aiAgeReflection.toLowerCase().startsWith('he') || thinker.aiAgeReflection.toLowerCase().startsWith('she') || thinker.aiAgeReflection.toLowerCase().startsWith('they') ? thinker.aiAgeReflection : `they ${thinker.aiAgeReflection}`}"</p>
              </section>
            </div>
          </div>
          
          {/* Mobile Footer Link */}
          <div className="sm:hidden mt-8 pt-6 border-t border-brand-border">
             <Link to={`/thinker/${thinker.id}`} className="bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest px-4 py-3 w-full block text-center border border-brand-navy hover:bg-brand-surface hover:text-brand-navy transition-colors shadow-sm">
                Read Full Dossier
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

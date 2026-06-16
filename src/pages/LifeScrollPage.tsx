import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { thinkers } from "../data/thinkers";
import { ArrowLeft, BookOpen, Brain, Users, Sparkles, AlertTriangle, Quote } from "lucide-react";

export default function LifeScrollPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const thinker = thinkers.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!thinker) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-serif text-[#0F172A] bg-[#FDFCF8]">
        <h1 className="text-3xl mb-4">Dossier Not Found</h1>
        <button onClick={() => navigate(-1)} className="text-[#B59410] uppercase tracking-widest text-xs font-bold">Return</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] font-sans pb-32">
      {/* Top sticky nav */}
      <div className="sticky top-[64px] z-40 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-[#E5E1D6] px-8 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8C8471] hover:text-[#B59410] transition-colors">
          <ArrowLeft size={16} /> Back
        </button>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#B59410] hidden md:block">The Life Scroll • Historical Dossier</span>
      </div>

      <div className="max-w-4xl mx-auto mt-16 px-8 relative">
        {/* Aesthetic vertical anchor line passing entirely through behind content */}
        <div className="absolute top-0 bottom-0 left-[31px] md:left-[39px] w-px bg-[#E5E1D6] -z-10 hidden sm:block"></div>

        {/* Header Section */}
        <header className="mb-24 text-center items-center flex flex-col relative bg-[#FDFCF8]">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-[#0F172A] flex items-center justify-center text-white font-serif italic text-4xl sm:text-6xl shadow-xl mt-8 mb-6 relative z-10 transition-transform hover:scale-105">
            {thinker.name.charAt(0)}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B59410] mb-3">{thinker.period} • {thinker.region}</span>
          <h1 className="text-5xl sm:text-7xl font-serif text-[#0F172A] mb-4 tracking-tight leading-none">{thinker.name}</h1>
          <p className="text-lg sm:text-xl text-[#8C8471] italic font-serif relative z-10 bg-[#FDFCF8] px-4">{thinker.lifeDates}</p>
        </header>

        {/* The Scroll Sections */}
        <div className="space-y-24 sm:pl-12 relative">

          {/* Intro Quote / Core Idea */}
          <section className="relative">
             <div className="hidden sm:flex absolute -left-[51px] top-4 bg-[#FDFCF8] p-1 relative z-10">
               <div className="w-4 h-4 rounded-full bg-[#1A1A1A] border-4 border-white shadow-sm"></div>
             </div>
             <div className="mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8471]">Defining Principle</span>
             </div>
             <p className="text-3xl font-serif text-[#0F172A] leading-snug italic text-brand-gold-muted border-l-2 border-[#D4AF37] pl-6 py-2 bg-gradient-to-r from-[#D4AF37]/5 to-transparent">
               "{thinker.coreIdeas[0]}"
             </p>
          </section>

          {/* Core Ideas Checkbox format */}
          <section className="relative">
             <div className="hidden sm:flex absolute -left-[61px] top-1 bg-[#FDFCF8] p-2 rounded-full relative z-10">
               <Brain className="text-[#B59410]" size={20}/>
             </div>
             <h2 className="text-3xl font-serif text-[#0F172A] mb-8">Conceptual Lexicon</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {thinker.keyConcepts.map((concept, i) => (
                 <div key={i} className="bg-[#F4F1E9] border border-[#E5E1D6] p-4 rounded-sm text-center shadow-sm">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">{concept}</h3>
                 </div>
               ))}
               {thinker.keyWorks.map((work, i) => (
                 <div key={i} className="bg-[#0F172A] border border-[#0F172A] p-4 rounded-sm text-center shadow-sm">
                   <h3 className="text-sm font-serif italic text-[#D4AF37]">{work}</h3>
                 </div>
               ))}
             </div>
          </section>

          {/* 4 Pillars of Educational View */}
          <section className="relative">
             <div className="hidden sm:flex absolute -left-[61px] top-1 bg-[#FDFCF8] p-2 rounded-full relative z-10">
               <BookOpen className="text-[#B59410]" size={20}/>
             </div>
             <h2 className="text-3xl font-serif text-[#0F172A] mb-8">The Four Pillars</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F4F1E9]/50 p-6 sm:p-8 rounded-sm border border-[#E5E1D6]">
                <div className="border border-[#E5E1D6] p-6 rounded-sm bg-white hover:border-[#B59410]/50 transition-colors shadow-sm">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#B59410] mb-3">Vision of the Child</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{thinker.viewOfChild}</p>
                </div>
                <div className="border border-[#E5E1D6] p-6 rounded-sm bg-white hover:border-[#B59410]/50 transition-colors shadow-sm">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#B59410] mb-3">Role of the Teacher</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{thinker.viewOfTeacher}</p>
                </div>
                <div className="border border-[#E5E1D6] p-6 rounded-sm bg-white hover:border-[#B59410]/50 transition-colors shadow-sm">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#B59410] mb-3">Nature of Knowledge</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{thinker.viewOfKnowledge}</p>
                </div>
                <div className="border border-[#E5E1D6] p-6 rounded-sm bg-white hover:border-[#B59410]/50 transition-colors shadow-sm">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#B59410] mb-3">Structure of Society</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{thinker.viewOfSociety}</p>
                </div>
             </div>
          </section>

          {/* Network & Lineage */}
          <section className="relative">
             <div className="hidden sm:flex absolute -left-[61px] top-1 bg-[#FDFCF8] p-2 rounded-full relative z-10">
               <Users className="text-[#B59410]" size={20}/>
             </div>
             <h2 className="text-3xl font-serif text-[#0F172A] mb-8">Intellectual Lineage</h2>
             
             <div className="flex flex-col gap-10">
               {thinker.influencedBy.length > 0 && (
                 <div>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8471] border-b border-[#E5E1D6] pb-2 mb-4">Inherited From</h3>
                   <div className="flex flex-wrap gap-3">
                     {thinker.influencedBy.map(id => {
                       const t = thinkers.find(x => x.id === id);
                       return t ? <Link to={`/thinker/${t.id}`} key={id} className="bg-white border text-[#1A1A1A] border-[#E5E1D6] px-4 py-2 rounded-sm text-sm font-semibold hover:border-[#B59410] hover:text-[#B59410] transition-colors shadow-sm">{t.name}</Link> : null;
                     })}
                   </div>
                 </div>
               )}
               
               {thinker.influenced.length > 0 && (
                 <div>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8471] border-b border-[#E5E1D6] pb-2 mb-4">Pedagogical Legacy (Influenced)</h3>
                   <div className="flex flex-wrap gap-3">
                     {thinker.influenced.map(id => {
                       const t = thinkers.find(x => x.id === id);
                       return t ? <Link to={`/thinker/${t.id}`} key={id} className="bg-[#0F172A] text-white border border-[#0F172A] px-4 py-2 rounded-sm text-sm font-semibold hover:bg-[#1E293B] hover:text-[#D4AF37] transition-colors shadow-sm">{t.name}</Link> : null;
                     })}
                   </div>
                 </div>
               )}

               {thinker.opposedTo.length > 0 && (
                 <div>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-red-700 border-b border-[#E5E1D6] pb-2 mb-4">Intellectual Opposition</h3>
                   <div className="flex flex-wrap gap-3">
                     {thinker.opposedTo.map(id => {
                       const t = thinkers.find(x => x.id === id);
                       return t ? <Link to={`/thinker/${t.id}`} key={id} className="bg-white text-red-800 border border-red-200 px-4 py-2 hover:bg-red-50 rounded-sm text-sm font-semibold hover:border-red-400 transition-colors shadow-sm">{t.name}</Link> : null;
                     })}
                   </div>
                 </div>
               )}
             </div>
          </section>

          {/* Controversies & Tensions */}
          <section className="relative">
             <div className="hidden sm:flex absolute -left-[61px] top-1 bg-[#FDFCF8] p-2 rounded-full relative z-10">
               <AlertTriangle className="text-[#B59410]" size={20}/>
             </div>
             <h2 className="text-3xl font-serif text-[#0F172A] mb-6">Historical Controversies</h2>
             <div className="bg-white border-l-4 border-red-800 p-6 shadow-sm">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm leading-relaxed max-w-2xl">
                {thinker.mainCriticisms.map((crit, i) => (
                    <li key={i}>{crit}</li>
                ))}
                </ul>
             </div>
          </section>

          {/* The AI-Age Reflection */}
          <section className="relative">
             <div className="hidden sm:flex absolute -left-[61px] top-1 bg-[#FDFCF8] p-2 rounded-full relative z-10">
               <Sparkles className="text-[#B59410]" size={20}/>
             </div>
             <h2 className="text-3xl font-serif text-[#0F172A] mb-8">What They Might Say Today</h2>
             <div className="bg-[#0F172A] p-8 sm:p-12 border-b-4 border-[#D4AF37] rounded-sm text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 rotate-12 opacity-10">
                  <Quote size={160} />
                </div>
                <p className="text-xl sm:text-2xl font-serif italic leading-relaxed relative z-10 w-[90%] md:w-4/5 text-[#E5E1D6]">
                  "{thinker.aiAgeReflection}"
                </p>
                
                <div className="mt-12 pt-6 border-t border-white/20 relative z-10">
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-3">Enduring Relevance</h3>
                   <p className="text-sm text-white/90 leading-relaxed font-sans">{thinker.contemporaryRelevance}</p>
                </div>
             </div>
          </section>

        </div>

      </div>
    </div>
  );
}

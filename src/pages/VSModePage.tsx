import { useState } from "react";
import { thinkers, Thinker } from "../data/thinkers";

export default function VSModePage() {
  const [thinker1Id, setThinker1Id] = useState<string>("rousseau");
  const [thinker2Id, setThinker2Id] = useState<string>("dewey");

  const t1 = thinkers.find(t => t.id === thinker1Id);
  const t2 = thinkers.find(t => t.id === thinker2Id);

  if (!t1 || !t2) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <span className="text-[10px] uppercase tracking-widest text-brand-gold-muted font-bold block mb-2">Comparative Analysis</span>
        <h1 className="text-4xl font-serif text-brand-navy mb-4">The Intellectual Battlefield</h1>
        <p className="text-brand-text/70 max-w-2xl mx-auto font-sans">Compare philosophies side-by-side to expose profound tensions in how humans should be educated.</p>
      </div>

      {/* Selectors */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 max-w-4xl mx-auto">
        <select 
          className="w-full md:w-64 bg-brand-surface border border-brand-border rounded-sm py-3 px-4 text-brand-text focus:outline-none focus:border-brand-gold-muted appearance-none text-lg font-serif italic shadow-sm"
          value={thinker1Id}
          onChange={(e) => setThinker1Id(e.target.value)}
        >
          {thinkers.map(t => <option key={t.id} value={t.id} disabled={t.id === thinker2Id}>{t.name}</option>)}
        </select>

        <div className="flex flex-col items-center">
           <div className="w-12 h-12 rounded-full bg-brand-navy border-4 border-white text-white flex items-center justify-center font-bold font-serif italic shadow-xl text-sm">
             VS
           </div>
        </div>

        <select 
          className="w-full md:w-64 bg-brand-surface border border-brand-border rounded-sm py-3 px-4 text-brand-text focus:outline-none focus:border-brand-gold-muted appearance-none text-lg font-serif italic shadow-sm"
          value={thinker2Id}
          onChange={(e) => setThinker2Id(e.target.value)}
        >
          {thinkers.map(t => <option key={t.id} value={t.id} disabled={t.id === thinker1Id}>{t.name}</option>)}
        </select>
      </div>

      {/* Comparison Grid */}
      <div className="max-w-5xl mx-auto border border-brand-border rounded-sm overflow-hidden bg-brand-surface shadow-sm outline-[1px] outline-brand-surface-muted outline-offset-4 outline">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-border bg-brand-surface-muted border-b border-brand-border">
          <div className="p-8 text-center bg-gradient-to-br from-brand-surface to-brand-surface-muted">
             <h2 className="text-3xl font-serif text-brand-navy mb-2">{t1.name}</h2>
             <p className="text-brand-text-muted text-[10px] font-bold uppercase tracking-widest">{t1.period}</p>
          </div>
          <div className="p-8 text-center bg-gradient-to-bl from-brand-surface to-brand-surface-muted">
             <h2 className="text-3xl font-serif text-brand-navy mb-2">{t2.name}</h2>
             <p className="text-brand-text-muted text-[10px] font-bold uppercase tracking-widest">{t2.period}</p>
          </div>
        </div>

        {/* Content Rows */}
        <div className="divide-y border-brand-border divide-brand-border">
          <ComparisonRow title="View of the Child" t1Text={t1.viewOfChild} t2Text={t2.viewOfChild} />
          <ComparisonRow title="Role of the Teacher" t1Text={t1.viewOfTeacher} t2Text={t2.viewOfTeacher} />
          <ComparisonRow title="View of Knowledge" t1Text={t1.viewOfKnowledge} t2Text={t2.viewOfKnowledge} />
          <ComparisonRow title="View of Society" t1Text={t1.viewOfSociety} t2Text={t2.viewOfSociety} />
          <ComparisonRow title="Key Concepts" t1Text={t1.keyConcepts.join(" • ")} t2Text={t2.keyConcepts.join(" • ")} />
        </div>

      </div>
    </div>
  );
}

function ComparisonRow({ title, t1Text, t2Text }: { title: string; t1Text: string; t2Text: string; }) {
  return (
    <div className="flex flex-col">
       <div className="bg-[#FDFCF8] py-3 border-b border-brand-border border-dashed">
         <h3 className="text-center text-[10px] font-bold uppercase tracking-widest text-[#B59410]">{title}</h3>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-border">
         <div className="p-6 md:p-8 text-sm leading-relaxed text-brand-text/90 hover:bg-brand-surface-muted/30 transition-colors">
            {t1Text}
         </div>
         <div className="p-6 md:p-8 text-sm leading-relaxed text-brand-text/90 hover:bg-brand-surface-muted/30 transition-colors">
            {t2Text}
         </div>
       </div>
    </div>
  )
}

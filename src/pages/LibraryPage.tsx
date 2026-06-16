import { useState, useMemo } from "react";
import { thinkers, Thinker } from "../data/thinkers";
import { ThinkerFlashcard } from "../components/ThinkerFlashcard";
import { Search } from "lucide-react";

export default function LibraryPage() {
  const [search, setSearch] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("All");
  const [selectedThinker, setSelectedThinker] = useState<Thinker | null>(null);

  const periods = ["All", "Antiquity", "Middle Ages", "Enlightenment", "19th Century", "20th Century", "Contemporary"];

  const filteredThinkers = useMemo(() => {
    return thinkers.filter(t => {
      const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                          t.coreIdeas.some(i => i.toLowerCase().includes(search.toLowerCase())) ||
                          t.keyConcepts.some(c => c.toLowerCase().includes(search.toLowerCase()));
      const matchPeriod = selectedPeriod === "All" || t.period === selectedPeriod;
      return matchSearch && matchPeriod;
    });
  }, [search, selectedPeriod]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-brand-border pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#B59410] font-bold block mb-2">Directory</span>
          <h1 className="text-4xl font-serif text-brand-navy mb-2">Thinker Library</h1>
          <p className="text-brand-text/60 italic text-sm">Browse the architects of educational philosophy.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text/40" size={16} />
            <input 
              type="text" 
              placeholder="Search by name or concept..."
              className="w-full sm:w-64 bg-brand-surface border border-brand-border rounded-sm py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-brand-gold-muted transition-colors placeholder:text-brand-text-muted"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select 
            className="bg-brand-surface border border-brand-border rounded-sm py-2 px-4 text-sm focus:outline-none focus:border-brand-gold-muted transition-colors appearance-none text-brand-text cursor-pointer"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            {periods.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredThinkers.map(thinker => (
          <button 
            key={thinker.id}
            onClick={() => setSelectedThinker(thinker)}
            className="group flex flex-col items-start p-6 bg-brand-surface border border-brand-border rounded-sm hover:-translate-y-1 hover:shadow-md transition-all text-left h-full"
          >
            <div className="mb-4 w-full pb-3 border-b border-brand-surface-muted">
              <span className="text-[9px] uppercase tracking-widest text-brand-text/50 font-bold block mb-1">{thinker.period}</span>
              <h3 className="text-2xl font-serif text-brand-navy group-hover:text-brand-gold-muted transition-colors flex justify-between items-center">{thinker.name}</h3>
              <p className="text-xs text-brand-text/60 italic mt-1">{thinker.lifeDates}</p>
            </div>
            
            <div className="flex-1">
              <p className="text-sm text-brand-text/80 line-clamp-3 mb-4 leading-relaxed">
                {thinker.coreIdeas[0]}
              </p>
            </div>
            
            <div className="mt-auto flex flex-wrap gap-2">
               {thinker.keyConcepts.slice(0, 2).map((concept, i) => (
                 <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-brand-surface-muted rounded-sm text-brand-text border border-brand-border/50 truncate max-w-[150px]">
                   {concept}
                 </span>
               ))}
               {thinker.keyConcepts.length > 2 && <span className="text-[10px] uppercase tracking-wider px-2 py-1 text-brand-text/40">+{thinker.keyConcepts.length - 2}</span>}
            </div>
          </button>
        ))}
      </div>

      {filteredThinkers.length === 0 && (
        <div className="text-center py-24 text-brand-text/50 italic">
          No thinkers found matching your criteria.
        </div>
      )}

      {selectedThinker && (
        <ThinkerFlashcard thinker={selectedThinker} onClose={() => setSelectedThinker(null)} />
      )}
    </div>
  );
}

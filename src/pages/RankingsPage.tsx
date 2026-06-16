import { useState, useMemo } from "react";
import { thinkers, Thinker, RankingScores } from "../data/thinkers";
import { ThinkerFlashcard } from "../components/ThinkerFlashcard";

type RankCategory = keyof RankingScores;

export default function RankingsPage() {
  const [activeCategory, setActiveCategory] = useState<RankCategory>('historicalInfluence');
  const [selectedThinker, setSelectedThinker] = useState<Thinker | null>(null);

  const categories: { key: RankCategory; label: string; desc: string }[] = [
    { key: "historicalInfluence", label: "Most Historically Influential", desc: "Shaped entire centuries of subsequent thought and school systems." },
    { key: "contemporaryRelevance", label: "Most Relevant Today", desc: "Whose ideas feel most painfully urgent in the 21st century." },
    { key: "practiceImpact", label: "Most Practice-Oriented", desc: "Actually changed what teachers do on a Tuesday morning." },
    { key: "politicalImpact", label: "Most Politically Transformative", desc: "Framed education as a battleground for justice and power." },
    { key: "originality", label: "Most Formally Original", desc: "Broke entirely with the common sense of their era." },
    { key: "controversy", label: "Most Controversial", desc: "Inspires fierce devotion or utter revulsion among educators." }
  ];

  const sortedThinkers = useMemo(() => {
    return [...thinkers].sort((a, b) => b.rankingScores[activeCategory] - a.rankingScores[activeCategory]);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
      
      {/* Sidebar List */}
      <div className="w-full md:w-1/4 flex-shrink-0">
        <span className="text-[10px] uppercase tracking-widest text-[#B59410] font-bold block mb-2">Hierarchies</span>
        <h1 className="text-3xl font-serif text-brand-navy mb-6">Giants Ranking</h1>
        <div className="text-sm text-gray-500 mb-8 p-4 bg-[#F4F1E9] border border-[#E5E1D6] rounded-sm leading-relaxed italic">
          Influence is not objective. It depends on whether you value political liberation, precise instructional design, or deep developmental psychology. Choose a lens below.
        </div>

        <div className="flex flex-col space-y-2">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`text-left px-4 py-3 border-l-2 transition-all ${
                activeCategory === cat.key 
                  ? "border-brand-navy bg-brand-surface-muted text-brand-navy font-bold" 
                  : "border-transparent text-brand-text-muted hover:bg-brand-bg hover:text-brand-text"
              }`}
            >
              <div className="text-xs uppercase tracking-wider">{cat.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main List */}
      <div className="w-full md:w-3/4">
        <div className="mb-8 border-b border-brand-border pb-4">
           <h2 className="text-2xl font-serif text-brand-navy">{categories.find(c => c.key === activeCategory)?.label}</h2>
           <p className="text-gray-500 mt-1 italic text-sm">{categories.find(c => c.key === activeCategory)?.desc}</p>
        </div>

        <div className="space-y-4">
          {sortedThinkers.map((thinker, index) => (
            <div 
              key={thinker.id}
              onClick={() => setSelectedThinker(thinker)}
              className="flex items-center gap-6 bg-brand-surface border border-brand-border p-4 hover:bg-brand-surface-muted transition-all group cursor-pointer shadow-sm rounded-sm"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-brand-navy text-white flex items-center justify-center font-serif text-xl italic shadow-md border-2 border-white rounded-full">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-serif text-brand-navy group-hover:text-brand-gold-muted transition-colors">{thinker.name}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-1">{thinker.coreIdeas[0]}</p>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                 <div className="w-32 h-1 bg-brand-border overflow-hidden">
                    <div 
                      className="h-full bg-brand-gold-muted transition-all duration-1000 ease-out" 
                      style={{ width: `${(thinker.rankingScores[activeCategory] / 10) * 100}%` }}
                    />
                 </div>
                 <span className="text-xs font-bold text-brand-navy w-6 text-right font-sans">
                   {thinker.rankingScores[activeCategory]}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedThinker && (
        <ThinkerFlashcard thinker={selectedThinker} onClose={() => setSelectedThinker(null)} />
      )}
    </div>
  );
}

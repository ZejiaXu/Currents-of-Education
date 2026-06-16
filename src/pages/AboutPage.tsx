export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <span className="text-[10px] uppercase tracking-widest text-[#B59410] font-bold block mb-2">Project Overview</span>
      <h1 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-12">About the Project</h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-sans leading-relaxed">
        <p>
          <strong className="text-[#1A1A1A] font-semibold">Western Educators: A Historical Map of Educational Thought</strong> is designed to visually map the profound, multi-millennium conversation about how humans learn and how they should be taught.
        </p>
        <p>
          Too often, educational philosophy is taught as a disconnected series of isolated biographies. Thinkers appear seemingly out of nowhere, are reduced to a few buzzwords (e.g., "tabula rasa," "ZPD," "scaffolding"), and are memorized for exams.
        </p>
        <p>
          This project reconstructs the <em className="text-[#1A1A1A]">network</em>. It makes visible who was responding to whom, who built upon a predecessor’s work, and who vehemently opposed the prevailing paradigm.
        </p>
        
        <div className="my-12 p-6 bg-[#F4F1E9] border-l-2 border-[#D4AF37] text-sm text-gray-600 italic">
          "Educational thought is not a list of names. It is a long conversation about what human beings are."
        </div>

        <h2 className="text-2xl font-serif text-[#0F172A] mt-16 mb-6">Why This Matters</h2>
        <p>
          We are currently in an era dominated by rapid technological change, standardized metrics, and heated debates over curriculum. Understanding our historical lineage doesn't just give us trivia; it gives us the conceptual tools to navigate today's problems. Whether the issue is AI in the classroom, the testing regime, or critical pedagogy, a past thinker has laid the groundwork for the debate.
        </p>
        <h2 className="text-2xl font-serif text-[#0F172A] mt-16 mb-6">Selected Bibliography & Inspiration</h2>
        <ul className="text-sm space-y-3 text-gray-700 border-t border-[#E5E1D6] pt-6 list-disc pl-5">
          <li>Bowen, J. (1981). <em>A History of Western Education</em>. St Martin's Press.</li>
          <li>Palmer, J. A. (Ed.). (2001). <em>Fifty Major Thinkers on Education: From Confucius to Dewey</em>. Routledge.</li>
          <li>Noddings, N. (2015). <em>Philosophy of Education</em>. Westview Press.</li>
          <li>Biesta, G. (2006). <em>Beyond Learning: Democratic Education for a Human Future</em>. Paradigm Publishers.</li>
          <li>Freire, P. (1970). <em>Pedagogy of the Oppressed</em>. Continuum.</li>
          <li>Dewey, J. (1916). <em>Democracy and Education</em>. Macmillan.</li>
        </ul>
      </div>
    </div>
  );
}

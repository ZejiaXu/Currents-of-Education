export interface RankingScores {
  historicalInfluence: number;
  originality: number;
  practiceImpact: number;
  politicalImpact: number;
  contemporaryRelevance: number;
  controversy: number;
}

export interface Thinker {
  id: string;
  name: string;
  lifeDates: string;
  period: string;
  era?: string;
  region: string;
  shortDescription?: string;
  historicalContext?: string;
  keyWorks: string[];
  coreIdeas: string[];
  keyConcepts: string[];
  viewOfChild: string;
  viewOfTeacher: string;
  viewOfKnowledge: string;
  viewOfSociety: string;
  influencedBy: string[];
  influenced: string[];
  opposedTo: string[];
  relatedThinkers: string[];
  mainCriticisms: string[];
  contemporaryRelevance: string;
  aiAgeReflection: string;
  unresolvedQuestion?: string;
  rankingScores: RankingScores;
}

export const thinkers: Thinker[] = [
  {
    id: "socrates",
    name: "Socrates",
    lifeDates: "c. 470 – 399 BC",
    period: "Antiquity",
    region: "Greece",
    keyWorks: ["(None, known through Plato)"],
    coreIdeas: ["Knowledge as virtue", "Learning through questioning (Socratic method)"],
    keyConcepts: ["Elenchus", "Aporia", "Maieutics (Midwifery of thought)"],
    viewOfChild: "An individual possessing innate eternal truths that must be drawn out, rather than an empty vessel to be filled.",
    viewOfTeacher: "A 'midwife' who helps the student give birth to their own understanding; a gadfly who stings the mind into awareness.",
    viewOfKnowledge: "Innate and objective, attained through rigorous dialectic and self-examination.",
    viewOfSociety: "Often corrupt and misguided by unexamined assumptions; in need of constant philosophical questioning.",
    influencedBy: [],
    influenced: ["plato", "aristotle", "isocrates"],
    opposedTo: [], // Sophists intuitively
    relatedThinkers: ["plato"],
    mainCriticisms: ["Method can be manipulative or overly aggressive", "Assumes innate knowledge which modern psychology rejects"],
    contemporaryRelevance: "The foundation of all critical thinking, seminar-based learning, and inquiry-led education.",
    aiAgeReflection: "He would likely see AI as the ultimate 'Sophist'—capable of generating plausible answers without true understanding. He would encourage using AI as an interlocutor to test one's own underlying assumptions.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 10,
      practiceImpact: 7,
      politicalImpact: 8,
      contemporaryRelevance: 8,
      controversy: 9
    }
  },
  {
    id: "plato",
    name: "Plato",
    lifeDates: "c. 428 – 348 BC",
    period: "Antiquity",
    region: "Greece",
    keyWorks: ["The Republic", "Meno", "Laws"],
    coreIdeas: ["Education as statecraft", "The Theory of Forms", "Differentiation by ability"],
    keyConcepts: ["Philosopher King", "Allegory of the Cave", "Recollection"],
    viewOfChild: "Born with inherent capacities that determine their role in society (bronze, silver, gold souls).",
    viewOfTeacher: "A guide who directs the soul’s gaze toward the 'Good' and the 'True'.",
    viewOfKnowledge: "Eternal, unchanging Forms. Learning is anamnesis (remembering what the soul already knows).",
    viewOfSociety: "A rigid, perfectly ordered republic maintained by educational sorting; anti-democratic.",
    influencedBy: ["socrates"],
    influenced: ["aristotle", "augustine"],
    opposedTo: ["isocrates"],
    relatedThinkers: ["socrates"],
    mainCriticisms: ["Deeply elitist and anti-democratic", "Rigid tracking of students", "Totalitarian implications in education"],
    contemporaryRelevance: "His questions about who should be educated, for what purpose, and how to sort students remain central to debates on tracking and meritocracy.",
    aiAgeReflection: "Plato might fear AI as a 'shadow on the cave wall,' a simulation that distracts students from seeking eternal, non-computable truths.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 9,
      practiceImpact: 6,
      politicalImpact: 10,
      contemporaryRelevance: 7,
      controversy: 8
    }
  },
  {
    id: "aristotle",
    name: "Aristotle",
    lifeDates: "384 – 322 BC",
    period: "Antiquity",
    region: "Greece",
    keyWorks: ["Nicomachean Ethics", "Politics"],
    coreIdeas: ["Education for eudaimonia (flourishing)", "Cultivation of virtue through habit", "Empirical observation"],
    keyConcepts: ["Eudaimonia", "Phronesis (Practical Wisdom)", "Golden Mean", "Habituation"],
    viewOfChild: "A creature of habit; initially driven by emotion, must be habituated into virtuous action before achieving rational maturity.",
    viewOfTeacher: "A moral exemplar who structures the environment so students practice virtuous habits.",
    viewOfKnowledge: "Derived from empirical observation and categorized logically, alongside moral knowledge gained through practice.",
    viewOfSociety: "A polis where citizens actively participate; education is the primary duty of the state to ensure civic virtue.",
    influencedBy: ["plato"],
    influenced: ["quintilian", "augustine", "aquinas"],
    opposedTo: ["plato"],
    relatedThinkers: ["plato"],
    mainCriticisms: ["Justified natural slavery", "Education restricted to free-born males", "Over-emphasis on habituation over early rational autonomy"],
    contemporaryRelevance: "Character education, moral psychology, and the concept of 'human flourishing' owe their foundations to him.",
    aiAgeReflection: "He would emphasize that AI cannot possess 'phronesis' (practical wisdom) or moral virtue, arguing that education must focus on cultivating human judgment rather than mere data processing.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 9,
      practiceImpact: 8,
      politicalImpact: 8,
      contemporaryRelevance: 9,
      controversy: 6
    }
  },
  {
    id: "quintilian",
    name: "Quintilian",
    lifeDates: "c. 35 – 100 AD",
    period: "Antiquity",
    region: "Rome",
    keyWorks: ["Institutio Oratoria (Institutes of Oratory)"],
    coreIdeas: ["Education of the perfect orator", "Early childhood education", "Rejection of corporal punishment"],
    keyConcepts: ["Vir bonus dicendi peritus (The good man skilled in speaking)"],
    viewOfChild: "Naturally inclined to learn; early impressions are lasting. Children differ in ability and need individualized instruction.",
    viewOfTeacher: "Should be a parental figure, recognizing individual differences, using praise rather than physical punishment.",
    viewOfKnowledge: "Rhetoric is the apex of knowledge, integrating philosophy, morality, and practical eloquence.",
    viewOfSociety: "A civic space where eloquent, moral individuals guide public affairs.",
    influencedBy: ["aristotle"],
    influenced: ["comenius"],
    opposedTo: [],
    relatedThinkers: [],
    mainCriticisms: ["Focused strictly on the elite", "Overly narrowed on public speaking"],
    contemporaryRelevance: "Early advocate for recognizing individual learning styles and opposing corporal punishment.",
    aiAgeReflection: "He would warn that AI-generated text undermines the moral core of communication—that true persuasion must come from a 'good person.'",
    rankingScores: {
      historicalInfluence: 7,
      originality: 6,
      practiceImpact: 7,
      politicalImpact: 4,
      contemporaryRelevance: 5,
      controversy: 2
    }
  },
  {
    id: "augustine",
    name: "Augustine",
    lifeDates: "354 – 430",
    period: "Middle Ages",
    region: "Roman Africa",
    keyWorks: ["De Magistro (The Teacher)", "Confessions"],
    coreIdeas: ["Illumination theory", "The limits of human teaching"],
    keyConcepts: ["Inner Light", "Divine Illumination", "Original Sin"],
    viewOfChild: "Tainted by Original Sin, willfully disobedient, needing discipline to tame desires.",
    viewOfTeacher: "Merely a prompter; cannot truly 'teach' but only direct the student to look inward to the divine light.",
    viewOfKnowledge: "True knowledge comes only from God (the Inner Teacher); words are merely signs.",
    viewOfSociety: "A fallen world; education's purpose is spiritual salvation, not earthly success.",
    influencedBy: ["plato"],
    influenced: ["comenius"],
    opposedTo: [],
    relatedThinkers: [],
    mainCriticisms: ["Pessimistic view of human nature and childhood", "Devalues secular knowledge"],
    contemporaryRelevance: "His semiotics (theory of signs) and questioning of whether we can truly 'transfer' knowledge to another mind remain philosophically profound.",
    aiAgeReflection: "He would see AI as exchanging mere 'signs' devoid of light. True understanding, he would argue, requires a soul.",
    rankingScores: {
      historicalInfluence: 8,
      originality: 8,
      practiceImpact: 4,
      politicalImpact: 5,
      contemporaryRelevance: 4,
      controversy: 7
    }
  },
  {
    id: "comenius",
    name: "Comenius",
    lifeDates: "1592 – 1670",
    period: "Enlightenment",
    region: "Moravia",
    keyWorks: ["Didactica Magna", "Orbis Pictus"],
    coreIdeas: ["Universal education (Pansophism)", "Education according to nature", "Visual learning"],
    keyConcepts: ["Pansophia", "Sensory learning", "Stages of development"],
    viewOfChild: "A creature of God endowed with natural growth stages. Should be taught gently, moving from the concrete to the abstract.",
    viewOfTeacher: "A gardener who nurtures natural growth rather than forcing knowledge into the mind.",
    viewOfKnowledge: "Should be interconnected; teaching everything to everyone (Pansophism).",
    viewOfSociety: "Can be reformed and made peaceful through universal, egalitarian education.",
    influencedBy: ["quintilian"],
    influenced: ["rousseau", "pestalozzi"],
    opposedTo: [],
    relatedThinkers: [],
    mainCriticisms: ["Overly optimistic about human perfectibility", "Systemic rigidity in his encyclopedic approach"],
    contemporaryRelevance: "Often called the father of modern education for his advocacy of universal schooling, illustrated textbooks, and developmentally appropriate teaching.",
    aiAgeReflection: "He would be thrilled by the Internet and AI as tools for 'Pansophia'—making all knowledge available to all people visually and interactively.",
    rankingScores: {
      historicalInfluence: 9,
      originality: 9,
      practiceImpact: 9,
      politicalImpact: 7,
      contemporaryRelevance: 6,
      controversy: 2
    }
  },
  {
    id: "locke",
    name: "John Locke",
    lifeDates: "1632 – 1704",
    period: "Enlightenment",
    region: "England",
    keyWorks: ["Some Thoughts Concerning Education", "An Essay Concerning Human Understanding"],
    coreIdeas: ["The mind as a blank slate", "Importance of habit and character", "Physical hardening"],
    keyConcepts: ["Tabula Rasa", "Empiricism", "Character over curriculum"],
    viewOfChild: "A blank slate (tabula rasa) shaped entirely by experience, environment, and education.",
    viewOfTeacher: "A gentle architect of the child's environment, guiding habits and character through praise and esteem, not the rod.",
    viewOfKnowledge: "Derived entirely from sensory experience and reflection; there are no innate ideas.",
    viewOfSociety: "Composed of rational, self-governing individuals; education prepares gentlemen for civic responsibility.",
    influencedBy: [],
    influenced: ["rousseau", "skinner", "wollstonecraft"],
    opposedTo: ["plato", "augustine"], // Opposed innate ideas
    relatedThinkers: ["rousseau"],
    mainCriticisms: ["Overstated the 'blank slate' (ignoring genetics)", "Focus was largely on the aristocratic gentleman"],
    contemporaryRelevance: "Foundational to learning psychology, behaviorism, and the shift away from corporal punishment toward psychological guidance.",
    aiAgeReflection: "He would view AI models as ultimate empirical proof of learning via massive exposure to inputs, though lacking the moral reflection he valued.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 8,
      practiceImpact: 7,
      politicalImpact: 8,
      contemporaryRelevance: 7,
      controversy: 4
    }
  },
  {
    id: "rousseau",
    name: "Jean-Jacques Rousseau",
    lifeDates: "1712 – 1778",
    period: "Enlightenment",
    region: "Geneva / France",
    keyWorks: ["Emile, or On Education"],
    coreIdeas: ["Natural education", "Childhood as a distinct phase", "Protecting the child from corrupt society"],
    keyConcepts: ["Negative Education", "Natural Man vs. Civil Man", "Noble Savage"],
    viewOfChild: "Inherently good, corrupted by society. Childhood has a value in itself, not just as preparation for adulthood.",
    viewOfTeacher: "A subtle orchestrator of the environment (the tutor) who allows the child to learn from the natural consequences of their actions.",
    viewOfKnowledge: "Must be discovered through direct experience and necessity, not imposed through books before the child is ready.",
    viewOfSociety: "Deeply corrupt, artificial, and unequal. True education requires temporary isolation from societal vices.",
    influencedBy: ["comenius", "locke"],
    influenced: ["pestalozzi", "froebel", "dewey", "montessori", "piaget", "wollstonecraft", "addams"],
    opposedTo: ["locke"], // Opposed Locke's focus on early social conformity
    relatedThinkers: ["locke", "pestalozzi"],
    mainCriticisms: ["Deeply sexist (e.g., the education of Sophie in Book V)", "Utopian and highly impractical", "The 'hidden' control of the tutor is manipulative"],
    contemporaryRelevance: "The absolute foundation of child-centered education, play-based learning, and developmental psychology.",
    aiAgeReflection: "He would despise AI in education, seeing screens and algorithms as the ultimate artificial corruption, completely alienating the child from unmediated nature.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 10,
      practiceImpact: 8,
      politicalImpact: 9,
      contemporaryRelevance: 8,
      controversy: 9
    }
  },
  {
    id: "pestalozzi",
    name: "Johann Heinrich Pestalozzi",
    lifeDates: "1746 – 1827",
    period: "19th Century",
    region: "Switzerland",
    keyWorks: ["How Gertrude Teaches Her Children", "Leonard and Gertrude"],
    coreIdeas: ["Education of head, heart, and hands", "Object lessons", "Love as the foundation of teaching"],
    keyConcepts: ["Anschauung (Object teaching)", "Head, Heart, Hands"],
    viewOfChild: "A naturally pure being who learns best through sensory experience, love, and emotional security.",
    viewOfTeacher: "A warm, loving parent-figure who gently guides learning starting from the concrete to the abstract.",
    viewOfKnowledge: "Begins with sensory perception of objects, moving to clear ideas; moral knowledge comes from lived community experience.",
    viewOfSociety: "Can be alleviated of poverty and moral degradation through holistic, loving education for all classes.",
    influencedBy: ["rousseau"],
    influenced: ["froebel", "herbart"],
    opposedTo: [],
    relatedThinkers: ["rousseau", "froebel"],
    mainCriticisms: ["Lacked systematization in his methods", "His schools were notoriously chaotic administratively"],
    contemporaryRelevance: "Pioneered 'whole child' education, holistic learning (head, heart, hands), and the pedagogy of care.",
    aiAgeReflection: "He would argue that AI can teach the 'head', but lacks the 'heart' and 'hands'—the emotional bond and physical making essential to human development.",
    rankingScores: {
      historicalInfluence: 9,
      originality: 7,
      practiceImpact: 9,
      politicalImpact: 6,
      contemporaryRelevance: 7,
      controversy: 2
    }
  },
  {
    id: "froebel",
    name: "Friedrich Froebel",
    lifeDates: "1782 – 1852",
    period: "19th Century",
    region: "Germany",
    keyWorks: ["The Education of Man"],
    coreIdeas: ["The Kindergarten", "Play as the highest expression of human development", "Educational gifts"],
    keyConcepts: ["Kindergarten", "Gifts and Occupations", "Self-activity"],
    viewOfChild: "A plant in a garden, possessing an innate divine design that must be allowed to unfold through play.",
    viewOfTeacher: "A 'gardener' who provides the right environment, materials (gifts), and guidance for natural unfolding.",
    viewOfKnowledge: "Spiritual and interconnected. Play is not distraction, but the child's most serious work to understand the universe.",
    viewOfSociety: "Should protect and nurture the spirituality of early childhood. Education leads to a harmonious human community.",
    influencedBy: ["pestalozzi", "rousseau"],
    influenced: ["montessori", "dewey"],
    opposedTo: [], // Strict disciplinarians
    relatedThinkers: ["pestalozzi", "montessori"],
    mainCriticisms: ["Heavily mystical and somewhat rigid in the exact sequence of 'gifts'", "Overly romanticized childhood"],
    contemporaryRelevance: "Inventor of the Kindergarten. His idea that play is the work of children is a foundational axiom of early childhood education.",
    aiAgeReflection: "He would likely create wooden, manipulable logic blocks (new 'gifts') rather than screen-based AI, insisting that physical handling of the world is necessary to grasp its underlying unity.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 9,
      practiceImpact: 10,
      politicalImpact: 5,
      contemporaryRelevance: 8,
      controversy: 1
    }
  },
  {
    id: "herbart",
    name: "Johann Friedrich Herbart",
    lifeDates: "1776 – 1841",
    period: "19th Century",
    region: "Germany",
    keyWorks: ["General Pedagogy"],
    coreIdeas: ["Education as a science", "Apperception (connecting new knowledge to old)", "Moral character via instruction"],
    keyConcepts: ["Apperception mass", "Five formal steps of teaching", "Instructional pedagogy"],
    viewOfChild: "A mind to be structured. The mind has no innate faculties, only ideas gained from experience.",
    viewOfTeacher: "A scientific professional who carefully plans and structures the presentation of ideas to build the student's mind.",
    viewOfKnowledge: "Ideas compete for consciousness. Teaching is the art of connecting new ideas to the student's existing 'apperception mass.'",
    viewOfSociety: "Requires highly moral citizens, shaped precisely through a rigorous, sequenced, structured curriculum.",
    influencedBy: ["pestalozzi"], // Though he critiqued him
    influenced: ["dewey", "skinner", "bloom"], // Influenced standard instructional design
    opposedTo: ["rousseau"], // Disliked unstructured naturalism
    relatedThinkers: ["pestalozzi", "bloom"],
    mainCriticisms: ["Led to overly rigid, formalized, teacher-centered 'lesson plans' (Herbartianism)", "Viewed the child too mechanically"],
    contemporaryRelevance: "The grandfather of the modern lesson plan, instructional design, and the cognitive science concept of 'prior knowledge.'",
    aiAgeReflection: "He would embrace AI as a perfect tool for diagnosing a student's 'apperception mass' and delivering precisely tailored instructional steps.",
    rankingScores: {
      historicalInfluence: 9,
      originality: 8,
      practiceImpact: 10,
      politicalImpact: 4,
      contemporaryRelevance: 6,
      controversy: 3
    }
  },
  {
    id: "montessori",
    name: "Maria Montessori",
    lifeDates: "1870 – 1952",
    period: "20th Century",
    region: "Italy",
    keyWorks: ["The Montessori Method", "The Absorbent Mind"],
    coreIdeas: ["Prepared environment", "Auto-education", "Sensory materials"],
    keyConcepts: ["Absorbent Mind", "Sensitive Periods", "Planes of Development"],
    viewOfChild: "Possesses an 'absorbent mind' and natural drive to work, concentrate, and perfect themselves if given the right environment.",
    viewOfTeacher: "An unobtrusive observer and guide (a 'director') who prepares the environment and connects the child to the materials.",
    viewOfKnowledge: "Discovered internally through concentrated physical work with specifically designed, self-correcting materials.",
    viewOfSociety: "Should respect the child as the builder of man; true education is the foundation for global peace.",
    influencedBy: ["rousseau", "froebel"],
    influenced: ["piaget"],
    opposedTo: ["dewey"], // Disliked Dewey's focus on make-believe and pure social interaction over concentrated work
    relatedThinkers: ["froebel", "piaget"],
    mainCriticisms: ["Her method can be dogmatic and rigid regarding the use of materials", "Critics argue it lacks focus on collaborative social play"],
    contemporaryRelevance: "Montessori schools are a massive global presence. Her focus on self-directed, tactile learning remains a major alternative to traditional schooling.",
    aiAgeReflection: "She would restrict early access to AI screens, arguing they disrupt the physical connection between hand and brain, though she might appreciate AI's capacity for individualized pacing.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 9,
      practiceImpact: 10,
      politicalImpact: 6,
      contemporaryRelevance: 9,
      controversy: 4
    }
  },
  {
    id: "dewey",
    name: "John Dewey",
    lifeDates: "1859 – 1952",
    period: "20th Century",
    region: "USA",
    keyWorks: ["Democracy and Education", "Experience and Education"],
    coreIdeas: ["Learning by doing", "Education as life, not preparation for life", "Education as the fundamental method of democratic progress"],
    keyConcepts: ["Experiential learning", "Pragmatism", "Inquiry"],
    viewOfChild: "An active, social organism, already occupied with interests. The child learns through interacting with and resolving problems in their environment.",
    viewOfTeacher: "A facilitator and co-learner who organizes experiences and projects that channel the child's native interests into meaningful social inquiries.",
    viewOfKnowledge: "Not static truth, but the successful resolution of a problem ('what works'). Knowledge is action testing.",
    viewOfSociety: "A democracy is not just a government, but a mode of associated living. Education is the engine of democratic socialization and reform.",
    influencedBy: ["rousseau", "herbart"],
    influenced: ["vygotsky", "freire", "bruner", "addams", "freinet", "tyler", "schon"],
    opposedTo: ["herbart", "locke"], // Opposed rigid traditionalism and empty progressivism
    relatedThinkers: ["rousseau", "piaget", "vygotsky"],
    mainCriticisms: ["Often misunderstood and misapplied (leading to empty 'project-based' fluff)", "Accused of abandoning rigor for socialization"],
    contemporaryRelevance: "The titan of progressive education. Project-based learning, inquiry, and the civic purpose of schooling all orbit Dewey's ideas.",
    aiAgeReflection: "He would see AI as a powerful tool for inquiry, but warn against it rendering human problem-solving obsolete. 'Experience' requires human struggle; if AI removes the struggle, it removes the learning.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 9,
      practiceImpact: 9,
      politicalImpact: 9,
      contemporaryRelevance: 10,
      controversy: 6
    }
  },
  {
    id: "vygotsky",
    name: "Lev Vygotsky",
    lifeDates: "1896 – 1934",
    period: "20th Century",
    region: "Russia (USSR)",
    keyWorks: ["Thought and Language", "Mind in Society"],
    coreIdeas: ["Social constructivism", "The role of language in thought", "Learning precedes development"],
    keyConcepts: ["Zone of Proximal Development (ZPD)", "Scaffolding", "Cultural tools"],
    viewOfChild: "An active meaning-maker whose cognitive development is fundamentally shaped by social interaction and cultural context.",
    viewOfTeacher: "A crucial collaborative partner who scaffolds learning, enabling the child to achieve collectively what they cannot yet do alone.",
    viewOfKnowledge: "Co-constructed socially before it is internalized individually. Human thought is mediated by cultural tools, primarily language.",
    viewOfSociety: "Culture and society are not just contexts for learning; they are the literal building blocks of consciousness.",
    influencedBy: ["dewey"], // indirectly, and Marx
    influenced: ["bruner", "wenger", "lave"],
    opposedTo: ["piaget"], // Opposed Piaget's idea that development strictly precedes learning
    relatedThinkers: ["piaget", "bruner"],
    mainCriticisms: ["Vague about the exact mechanisms of internalization", "Theories were left unfinished due to his early death"],
    contemporaryRelevance: "ZPD and scaffolding are universal concepts in education today. The foundational thinker for how culture and social interaction drive cognition.",
    aiAgeReflection: "He would frame AI fundamentally as a new 'cultural tool'—like writing or arithmetic—that will fundamentally reorganize human cognitive architecture and how we socialize learning.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 10,
      practiceImpact: 10,
      politicalImpact: 6,
      contemporaryRelevance: 10,
      controversy: 2
    }
  },
  {
    id: "piaget",
    name: "Jean Piaget",
    lifeDates: "1896 – 1980",
    period: "20th Century",
    region: "Switzerland",
    keyWorks: ["The Origins of Intelligence in Children", "The Moral Judgment of the Child"],
    coreIdeas: ["Genetic epistemology", "Constructivism", "Stages of cognitive development"],
    keyConcepts: ["Assimilation", "Accommodation", "Equilibration", "Sensorimotor / Preoperational / Concrete / Formal stages"],
    viewOfChild: "A 'lone scientist' building their own understanding of the world through logical-mathematical interactions with the physical environment.",
    viewOfTeacher: "A provider of materials and situations that create cognitive dissonance (disequilibrium) to provoke stage advancement.",
    viewOfKnowledge: "Actively constructed by the learner through a biological-driven unfolding of cognitive structures, not transmitted directly.",
    viewOfSociety: "Secondary to biological maturation and peer interaction in driving cognitive development.",
    influencedBy: ["rousseau", "montessori"],
    influenced: ["papert", "bruner", "bloom", "gardner", "taba"], // Papert (Constructionism)
    opposedTo: ["skinner", "vygotsky"], // Opposed behaviorism; debated Vygotsky on development preceding learning vs vice versa
    relatedThinkers: ["vygotsky", "dewey"],
    mainCriticisms: ["Underestimated the cognitive abilities of young children", "Ignored the profound impact of culture and social context (unlike Vygotsky)", "Stages are too rigid"],
    contemporaryRelevance: "Created the paradigm of cognitive constructivism. Every teacher learns his stages of development.",
    aiAgeReflection: "He would study how interacting with AI from infancy alters a child's processes of assimilation and accommodation, questioning if AI disrupts natural stage progression.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 10,
      practiceImpact: 9,
      politicalImpact: 4,
      contemporaryRelevance: 8,
      controversy: 5
    }
  },
  {
    id: "freire",
    name: "Paulo Freire",
    lifeDates: "1921 – 1997",
    period: "20th Century",
    region: "Brazil",
    keyWorks: ["Pedagogy of the Oppressed"],
    coreIdeas: ["Critical pedagogy", "Education as an act of freedom", "Dialogic learning"],
    keyConcepts: ["Banking Model of Education", "Conscientization", "Praxis"],
    viewOfChild: "The student is a historical subject, capable of critical consciousness and transforming the world.",
    viewOfTeacher: "A teacher-student and student-teacher; a co-investigator in dialogue with learners, avoiding authoritarianism.",
    viewOfKnowledge: "Not neutral; it is entirely political. True knowledge comes from 'praxis' (reflection and action upon the world to transform it).",
    viewOfSociety: "Divided into oppressors and oppressed; traditional education serves to domesticate the oppressed to maintain the status quo.",
    influencedBy: ["dewey"], // Marx, Fanon
    influenced: ["giroux", "hooks", "biesta", "apple", "mclaren", "ladson-billings"],
    opposedTo: ["skinner", "bloom"], // The banking model, behaviorism, standard testing
    relatedThinkers: ["giroux", "hooks", "dewey", "foucault"],
    mainCriticisms: ["Language is notoriously dense and abstract", "Can become highly ideological and dogmatic if applied poorly", "Often co-opted into empty buzzwords ('student voice')"],
    contemporaryRelevance: "The saint of critical pedagogy. Indispensable for understanding education related to race, class, decolonization, and social justice.",
    aiAgeReflection: "Freire would see AI as the ultimate 'banking' mechanism—depositing pre-packaged, ideologically loaded data into students while alienating them from authentic human dialogue and critical praxis.",
    rankingScores: {
      historicalInfluence: 10,
      originality: 9,
      practiceImpact: 7,
      politicalImpact: 10,
      contemporaryRelevance: 10,
      controversy: 9
    }
  },
  {
    id: "illich",
    name: "Ivan Illich",
    lifeDates: "1926 – 2002",
    period: "20th Century",
    region: "Austria / Mexico",
    keyWorks: ["Deschooling Society"],
    coreIdeas: ["Abolition of formal schooling", "Learning webs", "Anti-institutionalism"],
    keyConcepts: ["Deschooling", "Hidden Curriculum", "Convivial Tools"],
    viewOfChild: "A naturally curious being imprisoned, quantified, and commodified by the institution of the school.",
    viewOfTeacher: "Often an institutional bureaucrat monopolizing knowledge; people should learn from skilled peers and masters, not professional 'teachers.'",
    viewOfKnowledge: "Something to be freely shared in communities, not packaged as a commodity and certified by experts.",
    viewOfSociety: "Over-industrialized and over-institutionalized, turning humans into passive consumers of 'services' (including learning).",
    influencedBy: ["rousseau"],
    influenced: ["neill", "ranciere"], // Unschooling movement
    opposedTo: ["dewey", "bloom"], // Opposed the very concept of the school, progressive or otherwise
    relatedThinkers: ["freire", "foucault", "lave"],
    mainCriticisms: ["Utopian and highly impractical", "Dismantling schools would vastly increase inequality for vulnerable populations"],
    contemporaryRelevance: "A profound prophet for the internet age; his idea of 'learning webs' perfectly predicted open-source learning, YouTube tutorials, and digital un-schooling.",
    aiAgeReflection: "He would initially celebrate AI as a 'convivial tool' enabling self-directed 'learning webs,' but would fiercely critique corporate monopolies attempting to control and charge for AI access.",
    rankingScores: {
      historicalInfluence: 7,
      originality: 10,
      practiceImpact: 3,
      politicalImpact: 8,
      contemporaryRelevance: 8,
      controversy: 10
    }
  },
  {
    id: "bruner",
    name: "Jerome Bruner",
    lifeDates: "1915 – 2016",
    period: "20th Century / Contemporary",
    region: "USA",
    keyWorks: ["The Process of Education", "Toward a Theory of Instruction"],
    coreIdeas: ["Discovery learning", "Spiral curriculum", "Narrative construction of reality"],
    keyConcepts: ["Spiral Curriculum", "Enactive/Iconic/Symbolic modes", "Scaffolding (popularized the term)"],
    viewOfChild: "Any subject can be taught effectively in some intellectually honest form to any child at any stage of development.",
    viewOfTeacher: "A guide who structures material conceptually and scaffolds learning to encourage discovery.",
    viewOfKnowledge: "Best learned through grasping the underlying structure of a discipline rather than memorizing facts.",
    viewOfSociety: "Relies on education to transmit culture; culture provides the 'toolkit' for human meaning-making.",
    influencedBy: ["piaget", "vygotsky", "dewey"],
    influenced: [],
    opposedTo: ["skinner"], // Opposed behaviorism, sparked the cognitive revolution
    relatedThinkers: ["piaget", "vygotsky"],
    mainCriticisms: ["Discovery learning can frustrate learners if not sufficiently guided", "Abstractly challenging for under-resourced schools to deploy"],
    contemporaryRelevance: "The 'spiral curriculum' (revisiting concepts at increasing complexity) is standard pedagogical architecture today.",
    aiAgeReflection: "Bruner would view AI critically but constructively, exploring how generative narrative tools affect the fundamental human drive to construct meaning through storytelling.",
    rankingScores: {
      historicalInfluence: 9,
      originality: 8,
      practiceImpact: 9,
      politicalImpact: 4,
      contemporaryRelevance: 8,
      controversy: 2
    }
  },
  {
    id: "skinner",
    name: "B.F. Skinner",
    lifeDates: "1904 – 1990",
    period: "20th Century",
    region: "USA",
    keyWorks: ["The Technology of Teaching", "Beyond Freedom and Dignity"],
    coreIdeas: ["Behaviorism in education", "Teaching machines", "Programmed instruction"],
    keyConcepts: ["Operant Conditioning", "Positive Reinforcement", "Teaching Machines"],
    viewOfChild: "An organism whose behavior is entirely shaped by the environmental consequences (reinforcements) of their actions.",
    viewOfTeacher: "An environmental engineer who designs precise schedules of reinforcement and programmed steps to install desired behaviors.",
    viewOfKnowledge: "A repertoire of behaviors. Understanding inside the black box of the 'mind' is irrelevant; observable behavior is what matters.",
    viewOfSociety: "Must move 'beyond freedom and dignity' to rationally scientifically engineer a peaceful, productive society via behavioral control.",
    influencedBy: ["locke", "herbart"], // Thorndike, Watson
    influenced: ["bloom"], // Direct instruction
    opposedTo: ["dewey", "piaget", "bruner", "freire", "rousseau"], // Opposed naturalism, constructivism, and cognitive psychology entirely
    relatedThinkers: ["bloom"],
    mainCriticisms: ["Strips away human agency, intentionality, and creativity", "Treats students effectively as pigeons to be trained", "Authoritarian implications"],
    contemporaryRelevance: "Despite being theoretically unfashionable, Skinner's ghost haunts every educational app, gamified points system, token economy, and piece of adaptive software used today.",
    aiAgeReflection: "Skinner would be ecstatic. AI adaptive learning systems are the ultimate realization of his 'Teaching Machines,' providing instant, individualized operant reinforcement.",
    rankingScores: {
      historicalInfluence: 9,
      originality: 8,
      practiceImpact: 10,
      politicalImpact: 6,
      contemporaryRelevance: 9,
      controversy: 10
    }
  },
  {
    id: "bloom",
    name: "Benjamin Bloom",
    lifeDates: "1913 – 1999",
    period: "20th Century",
    region: "USA",
    keyWorks: ["Taxonomy of Educational Objectives"],
    coreIdeas: ["Mastery learning", "Classification of learning goals"],
    keyConcepts: ["Bloom's Taxonomy", "Mastery Learning", "2-Sigma Problem"],
    viewOfChild: "Almost all students can learn almost anything if provided with appropriately paced, high-quality instruction and time.",
    viewOfTeacher: "An instructional designer focused on explicitly aligning objectives, teaching, and formative assessment to ensure mastery.",
    viewOfKnowledge: "Structured hierarchically: from basic recall (lower-order) to analysis, synthesis, and evaluation (higher-order).",
    viewOfSociety: "Benefits heavily from an education system that rejects the 'bell curve' of inherent genius and engineers universal high achievement.",
    influencedBy: ["herbart", "skinner", "piaget"],
    influenced: [],
    opposedTo: ["plato"], // Opposed treating intelligence as a fixed, innate trait
    relatedThinkers: ["skinner", "herbart"],
    mainCriticisms: ["The taxonomy is often applied rigidly, treating cognitive processes as neatly stacked boxes rather than intertwined webs.", "Focuses heavily on measurable objectives."],
    contemporaryRelevance: "It is nearly impossible to draft a modern lesson plan or curriculum standard without referencing Bloom's Taxonomy verbs.",
    aiAgeReflection: "Bloom might see AI as the solution to his famous '2-Sigma Problem'—providing 1-to-1 personalized tutoring at scale to achieve mastery learning for all.",
    rankingScores: {
      historicalInfluence: 9,
      originality: 7,
      practiceImpact: 10,
      politicalImpact: 5,
      contemporaryRelevance: 9,
      controversy: 3
    }
  },
  {
    id: "bourdieu",
    name: "Pierre Bourdieu",
    lifeDates: "1930 – 2002",
    period: "20th Century",
    region: "France",
    keyWorks: ["Reproduction in Education, Society and Culture"],
    coreIdeas: ["Education as social reproduction", "The hidden cultural curriculum"],
    keyConcepts: ["Cultural Capital", "Habitus", "Symbolic Violence"],
    viewOfChild: "Enters school not as a blank slate, but carrying the 'habitus' (dispositions) and 'cultural capital' of their social class.",
    viewOfTeacher: "Often unconscious agents of 'symbolic violence', rewarding elite culture disguised as objective 'merit' and naturally failing working-class students.",
    viewOfKnowledge: "School knowledge is arbitrary; it privileges the linguistic and cultural codes of the dominant class.",
    viewOfSociety: "A site of struggle over capital. Schools are the primary engine for locking in inequality while making it look like a fair meritocracy.",
    influencedBy: [], // Marx, Weber, Durkheim
    influenced: ["apple", "mclaren"],
    opposedTo: ["bloom", "skinner"], // Opposed the naive belief that simple instruction overrides deep class structures
    relatedThinkers: ["bernstein", "foucault", "freire"],
    mainCriticisms: ["Highly deterministic; leaves very little room for student agency or transformative teaching", "Dense, impenetrable sociology terminology"],
    contemporaryRelevance: "Any discussion of why standardized testing or elite college admissions favor wealthy students relies heavily on Bourdieu's 'Cultural Capital.'",
    aiAgeReflection: "Bourdieu would warn that AI will inevitably encode and amplify the cultural capital and linguistic habits of the dominant class, further disguising systemic bias as 'objective' algorithmic truth.",
    rankingScores: {
      historicalInfluence: 8,
      originality: 9,
      practiceImpact: 5,
      politicalImpact: 9,
      contemporaryRelevance: 9,
      controversy: 6
    }
  },
  {
    id: "bernstein",
    name: "Basil Bernstein",
    lifeDates: "1924 – 2000",
    period: "20th Century",
    region: "UK",
    keyWorks: ["Class, Codes and Control"],
    coreIdeas: ["Sociolinguistics and education", "How pedagogy reinforces class structures"],
    keyConcepts: ["Elaborated Code", "Restricted Code", "Pedagogic Device", "Framing and Classification"],
    viewOfChild: "Socialized into specific linguistic and interactional codes based on class background, which clash or align with the school's code.",
    viewOfTeacher: "Relays power structures through how strongly they 'frame' or structure the curriculum and interaction.",
    viewOfKnowledge: "Divided by boundaries. How knowledge is structured ('classification') dictates power relations.",
    viewOfSociety: "Class relations are relayed incredibly subtly through the microscopic structures of language and classroom talk.",
    influencedBy: [], // Durkheim, Vygotsky
    influenced: [],
    opposedTo: [],
    relatedThinkers: ["bourdieu", "vygotsky"],
    mainCriticisms: ["Complex terminology", "His concept of 'restricted code' was sometimes misread as a deficit model of working-class language."],
    contemporaryRelevance: "Crucial for understanding how 'invisible pedagogies' (like progressive, open classrooms) can actually disadvantage marginalized students who need explicit structure.",
    aiAgeReflection: "He would focus on how AI's default output represents an 'elaborated code'—accessible to the elite but potentially alienating or culturally mismatched for working-class learners without explicit pedagogical framing.",
    rankingScores: {
      historicalInfluence: 7,
      originality: 9,
      practiceImpact: 4,
      politicalImpact: 8,
      contemporaryRelevance: 7,
      controversy: 5
    }
  },
  {
    id: "foucault",
    name: "Michel Foucault",
    lifeDates: "1926 – 1984",
    period: "20th Century",
    region: "France",
    keyWorks: ["Discipline and Punish"],
    coreIdeas: ["Education as disciplinary power", "Normalization", "The micro-physics of power"],
    keyConcepts: ["Panopticon", "Disciplinary Power", "Docile Bodies", "Biopower"],
    viewOfChild: "A 'docile body' objectified, measured, observed, and shaped by the disciplinary architecture, exams, and timetables of the school.",
    viewOfTeacher: "A technician of behavior, part of the apparatus of surveillance and normalization, categorizing children into 'normal' and 'abnormal.'",
    viewOfKnowledge: "Power and knowledge are inextricably linked. Schools produce 'truths' about students (grades, diagnoses) to control them.",
    viewOfSociety: "A disciplinary society where power is not just top-down oppression, but a matrix of surveillance operating everywhere, especially in schools, prisons, and hospitals.",
    influencedBy: [], // Nietzsche
    influenced: ["apple", "giroux"],
    opposedTo: ["dewey", "rousseau"], // Opposed the progressive idea that schools could ever be purely 'liberating'
    relatedThinkers: ["bourdieu", "illich"],
    mainCriticisms: ["Offers extreme critique without any positive vision for how teachers should act", "Pessimistic and cynical"],
    contemporaryRelevance: "Foucault is the ultimate lens for critiquing standardized testing, behavioral tracking, zero-tolerance policies, and the physical layout of schools.",
    aiAgeReflection: "Foucault would view AI-driven ed-tech, learning analytics, and webcam proctoring as the ultimate realization of the panopticon—invisible, constant, computational surveillance creating perfectly 'docile bodies.'",
    rankingScores: {
      historicalInfluence: 9,
      originality: 10,
      practiceImpact: 3,
      politicalImpact: 10,
      contemporaryRelevance: 10,
      controversy: 9
    }
  },
  {
    id: "noddings",
    name: "Nel Noddings",
    lifeDates: "1929 – 2022",
    period: "Contemporary",
    region: "USA",
    keyWorks: ["Caring: A Feminine Approach to Ethics and Moral Education"],
    coreIdeas: ["The ethic of care", "Relational ethics over principles"],
    keyConcepts: ["Ethic of Care", "The One-Caring and the Cared-For", "Engrossment"],
    viewOfChild: "A relational being. Children learn best when they are received in a caring relationship, not just treated as a cognitive receptacle.",
    viewOfTeacher: "Must prioritize the relationship. The teacher's first job is 'engrossment'—listening and responding to the specific expressed needs of the student.",
    viewOfKnowledge: "Should be organized around centers of care (care for self, intimate others, associates, global strangers, plants/animals, ideas).",
    viewOfSociety: "An overly masculine, liberal-justice-oriented society needs to be rebalanced by an ethics of relational care.",
    influencedBy: ["dewey", "addams", "greene", "schon"], // Gilligan
    influenced: [],
    opposedTo: ["aristotle"], // Opposed rule-based/principle-based traditional ethics, and heavy standardization
    relatedThinkers: ["pestalozzi", "dewey"],
    mainCriticisms: ["Can place immense emotional burnout burdens on teachers", "Viewed by some feminists as reinforcing traditional gender roles (nurturing woman)"],
    contemporaryRelevance: "A profound counter-weight to the ruthless accountability, data-obsessed era. Foundational to modern SEL (Social Emotional Learning) architectures.",
    aiAgeReflection: "Noddings would insist AI can never teach. AI can provide information, but it cannot authentically 'care' about a student, and true moral development only happens inside a human relationship.",
    rankingScores: {
      historicalInfluence: 7,
      originality: 8,
      practiceImpact: 8,
      politicalImpact: 6,
      contemporaryRelevance: 9,
      controversy: 4
    }
  },
  {
    id: "hooks",
    name: "bell hooks",
    lifeDates: "1952 – 2021",
    period: "Contemporary",
    region: "USA",
    keyWorks: ["Teaching to Transgress"],
    coreIdeas: ["Education as the practice of freedom", "Intersectionality in pedagogy"],
    keyConcepts: ["Engaged Pedagogy", "Imperialist White Supremacist Capitalist Patriarchy"],
    viewOfChild: "Students are whole beings (mind, body, soul) who bring their complex intersecting identities and traumas into the classroom.",
    viewOfTeacher: "Must be a healer that engages in self-actualization. A teacher must be vulnerable and reject the illusion of 'safe spaces' for brave, uncomfortable dialogue.",
    viewOfKnowledge: "Often deeply linked to structures of dominance; dismantling this requires passion, emotion, and transgression of boundaries.",
    viewOfSociety: "An interlocking matrix of domination. The classroom is a radical space where this domination can be challenged collectively.",
    influencedBy: ["freire"],
    influenced: [],
    opposedTo: ["skinner", "bourdieu"], // Resisted sterile academic jargon and hopeless determinism
    relatedThinkers: ["freire", "giroux"],
    mainCriticisms: ["Requires incredibly high emotional agility from teachers", "Often difficult to institutionalize without losing its radical edge"],
    contemporaryRelevance: "Essential reading for feminist pedagogy, anti-racist teaching, and attempts to make classrooms spaces of healing and joy.",
    aiAgeReflection: "She would highlight how AI masks the 'white supremacist capitalist patriarchy' in code. She would urge educators to use the classroom defensively as a space of soulful, embodied, human solidarity against algorithmic alienation.",
    rankingScores: {
      historicalInfluence: 8,
      originality: 8,
      practiceImpact: 7,
      politicalImpact: 9,
      contemporaryRelevance: 10,
      controversy: 5
    }
  },
  {
    id: "giroux",
    name: "Henry Giroux",
    lifeDates: "1943 – Present",
    period: "Contemporary",
    region: "USA / Canada",
    keyWorks: ["Theory and Resistance in Education"],
    coreIdeas: ["Teachers as transformative intellectuals", "Critique of neoliberalism in education"],
    keyConcepts: ["Border Pedagogy", "Neoliberalism", "Public Pedagogy"],
    viewOfChild: "A youth under siege by market forces, consumerism, and the militarization of culture.",
    viewOfTeacher: "A 'transformative intellectual', not a standardized test technician. Teachers must engage in the political struggle of society.",
    viewOfKnowledge: "Increasingly corporatized and instrumentalized. Critical pedagogy must reclaim knowledge for democratic struggle.",
    viewOfSociety: "Under neoliberalism, everything is commodified, driving the collapse of the social state and the public purpose of education.",
    influencedBy: ["freire", "foucault", "dewey"], // Frankfurt School
    influenced: [],
    opposedTo: ["bloom"], // Opposed the corporate testing regime and standardization
    relatedThinkers: ["freire", "hooks", "bourdieu"],
    mainCriticisms: ["Notoriously dense, aggressive writing style", "Often focuses intensely on political critique rather than day-to-day classroom methods"],
    contemporaryRelevance: "The leading voice fiercely criticizing the privatization of education, charter schools, and the corporate takeover of public pedagogy.",
    aiAgeReflection: "He would see AI ed-tech platforms as the ultimate neoliberal privatization grab—replacing democratic, unionized teachers with corporate, privately-owned black-box algorithms extracting data from youth.",
    rankingScores: {
      historicalInfluence: 7,
      originality: 7,
      practiceImpact: 5,
      politicalImpact: 9,
      contemporaryRelevance: 9,
      controversy: 7
    }
  },
  {
    id: "biesta",
    name: "Gert Biesta",
    lifeDates: "1957 – Present",
    period: "Contemporary",
    region: "Netherlands / UK",
    keyWorks: ["The Beautiful Risk of Education", "Good Education in an Age of Measurement"],
    coreIdeas: ["Critique of 'Learnification'", "The distinct domains of education"],
    keyConcepts: ["Learnification", "Qualification/Socialization/Subjectification", "The Beautiful Risk"],
    viewOfChild: "Should not just be treated as a 'learner' or consumer, but supported to appear into the world as a unique, responsible subject.",
    viewOfTeacher: "Not a facilitator of 'learning outcomes,' but an educator taking the 'beautiful risk' of teaching, speaking to the freedom of the student.",
    viewOfKnowledge: "Only part of the picture (Qualification). Education must also deal with entering culture (Socialization) and individual freedom (Subjectification).",
    viewOfSociety: "Obsessed with measuring outcomes (PISA, targets) and treating education like a quantifiable economic transaction.",
    influencedBy: ["foucault", "dewey", "rousseau"], // Hannah Arendt, Levinas
    influenced: [],
    opposedTo: ["bloom", "skinner"], // Opposed the hyper-focus on measurable learning outcomes
    relatedThinkers: ["dewey", "foucault", "freire"],
    mainCriticisms: ["Highly philosophical; teachers looking for practical toolkits often find him abstract."],
    contemporaryRelevance: "He is perhaps the most influential contemporary educational philosopher, articulating why the relentless focus on 'learning data' feels wrong to teachers.",
    aiAgeReflection: "Biesta would argue AI is entirely trapped in 'Learnification'—it optimizes qualification smoothly, but is utterly blind to 'Subjectification,' taking away the fragile, beautiful, human risk of actual education.",
    rankingScores: {
      historicalInfluence: 6,
      originality: 9,
      practiceImpact: 6,
      politicalImpact: 7,
      contemporaryRelevance: 10,
      controversy: 4
    }
  }
,

  {
    id: "isocrates",
    name: "Isocrates",
    lifeDates: "436 – 338 BC",
    period: "Antiquity",
    era: "Ancient Greek and Roman Foundations",
    region: "Greece",
    shortDescription: "Greek rhetorician who established liberal education as preparation for civic leadership.",
    historicalContext: "Operating during the decline of Athenian democracy, he sought to rebuild society through ethical civic discourse.",
    keyWorks: ["Against the Sophists", "Antidosis"],
    coreIdeas: ["Rhetoric as civic education", "Practical wisdom over abstract philosophy"],
    keyConcepts: ["Logos", "Civic humanism", "Paideia"],
    viewOfChild: "Requires natural ability, practical training, and extensive practice to become an effective citizen.",
    viewOfTeacher: "A model of eloquence and moral character who trains students for public life.",
    viewOfKnowledge: "Practical and probable rather than absolute; truth is found in effectively participating in civic discourse.",
    viewOfSociety: "Depends on educated, articulate citizens to sustain democracy and civic virtue.",
    influencedBy: ["socrates"],
    influenced: ["quintilian", "erasmus"],
    opposedTo: ["plato"],
    relatedThinkers: ["quintilian"],
    mainCriticisms: ["Focused too much on rhetoric at the expense of deep philosophical inquiry."],
    contemporaryRelevance: "His emphasis on practical communication and civic engagement prefigures modern debates on the purpose of higher education.",
    aiAgeReflection: "He would emphasize that AI might write well, but it cannot possess the character (ethos) required for true civic persuasion.",
    unresolvedQuestion: "Can rhetoric and communication skills truly act as a substitute for rigorous philosophical truth in leading a nation?",
    rankingScores: {
      historicalInfluence: 8, originality: 7, practiceImpact: 7, politicalImpact: 6, contemporaryRelevance: 6, controversy: 3
    }
  },
  {
    id: "aquinas",
    name: "Thomas Aquinas",
    lifeDates: "1225 – 1274",
    period: "Middle Ages",
    era: "Early Christian and Medieval Education",
    region: "Italy",
    shortDescription: "Scholastic theologian who synthesized Aristotle with Christian doctrine.",
    historicalContext: "The rise of the first European universities and the rediscovery of Aristotle's lost texts in the West.",
    keyWorks: ["Summa Theologica", "De Magistro (On the Teacher)"],
    coreIdeas: ["Synthesis of faith and reason", "Teacher as an instrumental cause of learning"],
    keyConcepts: ["Scholasticism", "Active intellect", "Instrumental causality"],
    viewOfChild: "Possesses a rational soul and an innate capacity to know, but requires sensory experience and guidance to actualize potential knowledge.",
    viewOfTeacher: "Cannot directly transfer knowledge, but acts as a minister or 'doctor' helping the student's intellect to heal and grow.",
    viewOfKnowledge: "Derived from sensory experience and rational abstraction, ultimately leading to knowledge of God.",
    viewOfSociety: "A hierarchically ordered community guided by natural law and divine providence.",
    influencedBy: ["aristotle", "augustine"],
    influenced: ["vives", "comenius"],
    opposedTo: [],
    relatedThinkers: ["augustine", "aristotle"],
    mainCriticisms: ["Heavy reliance on deductive logic and theological premises excluded empirical inquiry.", "Scholastic method became notoriously rigid."],
    contemporaryRelevance: "His concept of the teacher as a facilitator (instrumental cause) rather than an imposer of knowledge remains philosophically relevant.",
    aiAgeReflection: "He would argue that AI can provide sensory phantasms and logically ordered data, but only the active human intellect can abstract true meaning.",
    unresolvedQuestion: "Is it possible to completely harmonize rational, empirical inquiry with dogmatic faith?",
    rankingScores: {
      historicalInfluence: 9, originality: 8, practiceImpact: 6, politicalImpact: 7, contemporaryRelevance: 5, controversy: 4
    }
  },
  {
    id: "erasmus",
    name: "Desiderius Erasmus",
    lifeDates: "1466 – 1536",
    period: "Middle Ages",
    era: "Renaissance and Humanist Education",
    region: "Netherlands",
    shortDescription: "Christian humanist who argued for the revival of classical learning and moral education.",
    historicalContext: "The Northern Renaissance and the eve of the Protestant Reformation.",
    keyWorks: ["On Education for Children", "The Praise of Folly"],
    coreIdeas: ["Christian humanism", "Early childhood education", "Rejection of corporal punishment"],
    keyConcepts: ["Pietas literata", "Humanist curriculum", "Moral education"],
    viewOfChild: "Infinitely malleable; essentially good but requires careful early molding through gentle instruction, not fear.",
    viewOfTeacher: "A learned, patient guide who uses play, stories, and praise to cultivate piety and eloquence.",
    viewOfKnowledge: "Found in classical literature and scripture; learning must be combined with moral virtue.",
    viewOfSociety: "Corrupt but perfectible through the widespread humanist education of its youth.",
    influencedBy: ["quintilian"],
    influenced: ["comenius", "vives"],
    opposedTo: ["aquinas"], // Opposed rigid scholasticism
    relatedThinkers: ["vives", "quintilian"],
    mainCriticisms: ["Curriculum was heavily restricted to classical languages and literature (Latin and Greek)."],
    contemporaryRelevance: "A foundational figure in the liberal arts tradition and the humane, child-centered approach to learning.",
    aiAgeReflection: "He would likely critique AI's potential to produce 'empty words' without the accompanying moral formation and wisdom of classical study.",
    unresolvedQuestion: "Can returning to classical texts genuinely cure society's modern political and moral corruptions?",
    rankingScores: {
      historicalInfluence: 8, originality: 7, practiceImpact: 6, politicalImpact: 6, contemporaryRelevance: 6, controversy: 3
    }
  },
  {
    id: "vives",
    name: "Juan Luis Vives",
    lifeDates: "1493 – 1540",
    period: "Middle Ages",
    era: "Renaissance and Humanist Education",
    region: "Spain",
    shortDescription: "Humanist scholar and pioneer of empirical psychology in education.",
    historicalContext: "Working across Europe during the peak of humanist reform and dealing with widespread poverty.",
    keyWorks: ["De tradendis disciplinis (On Education)"],
    coreIdeas: ["Empirical psychology in education", "Education of women", "Practical application of knowledge"],
    keyConcepts: ["Inductive method", "Observation", "Social welfare"],
    viewOfChild: "Children have different native aptitudes; learning depends fundamentally on the conditions of memory and emotion.",
    viewOfTeacher: "Must observe students closely to determine their unique capacities and adjust methods accordingly.",
    viewOfKnowledge: "Not just classical texts, but empirical observation of the natural world and practical skills.",
    viewOfSociety: "Needs practical, educated citizens (including women) who contribute to social welfare and alleviate poverty.",
    influencedBy: ["erasmus", "aristotle"],
    influenced: ["comenius", "locke"],
    opposedTo: [],
    relatedThinkers: ["erasmus", "comenius"],
    mainCriticisms: ["Largely overshadowed by contemporaries despite his pioneering psychology."],
    contemporaryRelevance: "An early advocate for empirical psychology, matching instruction to individual differences, and state support for education.",
    aiAgeReflection: "He would welcome AI as a tool for empirical observation and organizing practical knowledge, while studying its psychological effects on the learner.",
    unresolvedQuestion: "How do we balance an individualized, psychological approach to education with the need for a universally shared curriculum?",
    rankingScores: {
      historicalInfluence: 7, originality: 8, practiceImpact: 6, politicalImpact: 5, contemporaryRelevance: 5, controversy: 2
    }
  },
  {
    id: "wollstonecraft",
    name: "Mary Wollstonecraft",
    lifeDates: "1759 – 1797",
    period: "Enlightenment",
    era: "Enlightenment and Natural Education",
    region: "England",
    shortDescription: "Early feminist philosopher who argued passionately for the equal rational education of women.",
    historicalContext: "The French Revolution and the profound questioning of traditional authority and rights.",
    keyWorks: ["A Vindication of the Rights of Woman"],
    coreIdeas: ["Co-education", "Rational education for women", "Equality of the sexes"],
    keyConcepts: ["Rationality", "Egalitarianism", "Civic independence"],
    viewOfChild: "Boys and girls are born with equal rational capacity and should be educated together in the same manner.",
    viewOfTeacher: "Must foster independent thought and reason, rather than encouraging vanity and subservience in girls.",
    viewOfKnowledge: "Reason is universal; knowledge is not gendered. It is the basis for personal independence and moral virtue.",
    viewOfSociety: "Deeply unjust because it denies half the population the education required to be rational, independent citizens.",
    influencedBy: ["locke", "rousseau"],
    influenced: ["addams", "greene", "noddings"],
    opposedTo: ["rousseau"], // Fiercely opposed Rousseau's view of women's education (Sophie)
    relatedThinkers: ["locke", "rousseau"],
    mainCriticisms: ["Her focus on rationality sometimes downplayed the role of emotion and care.", "Initially applied mostly to the middle class."],
    contemporaryRelevance: "The bedrock of feminist educational theory and the argument for universal co-education.",
    aiAgeReflection: "She would demand that AI algorithms be rigorously audited to ensure they do not perpetuate historical gender biases or enforce subservient societal roles.",
    unresolvedQuestion: "Does emphasizing strict rationality and logic in education inadvertently validate historically male-coded ways of thinking?",
    rankingScores: {
      historicalInfluence: 9, originality: 9, practiceImpact: 8, politicalImpact: 10, contemporaryRelevance: 9, controversy: 8
    }
  },
  {
    id: "kant",
    name: "Immanuel Kant",
    lifeDates: "1724 – 1804",
    period: "Enlightenment",
    era: "Enlightenment and Natural Education",
    region: "Germany",
    shortDescription: "Enlightenment philosopher who tied education directly to the achievement of moral autonomy.",
    historicalContext: "The peak of the German Enlightenment, focusing on reason, duty, and human liberation from self-incurred tutelage.",
    keyWorks: ["On Pedagogy", "What is Enlightenment?"],
    coreIdeas: ["Education for moral autonomy", "Discipline leading to freedom", "Categorical imperative"],
    keyConcepts: ["Autonomy", "Maxims", "Moral duty", "Enlightenment"],
    viewOfChild: "Has a radical need for education because humans are the only creatures that must be educated to become human.",
    viewOfTeacher: "Must balance instilling discipline (to curb wildness) with cultivating the child's freedom and rational autonomy.",
    viewOfKnowledge: "Consists of understanding the world through rational categories, but true knowledge culminates in moral self-determination.",
    viewOfSociety: "Progresses historically toward an ideal cosmopolitan future, driven by individuals trained to act on autonomous moral duties.",
    influencedBy: ["rousseau"],
    influenced: ["piaget", "pestalozzi"],
    opposedTo: ["locke"], // Opposed purely empirical basis for morality
    relatedThinkers: ["rousseau", "herbart"],
    mainCriticisms: ["Highly abstract and formalistic", "Can appear deeply rigid regarding discipline and duty"],
    contemporaryRelevance: "The foundation of moral education, focusing on helping students develop their own rational, universal moral principles rather than just conforming.",
    aiAgeReflection: "He would emphasize that AI, lacking free will and moral autonomy, can never replace the human teacher's role in cultivating a student's moral character.",
    unresolvedQuestion: "How can discipline truly lead to freedom without becoming merely a different form of conditioning?",
    rankingScores: {
      historicalInfluence: 9, originality: 9, practiceImpact: 5, politicalImpact: 7, contemporaryRelevance: 8, controversy: 4
    }
  },
  {
    id: "mann",
    name: "Horace Mann",
    lifeDates: "1796 – 1859",
    period: "19th Century",
    era: "Modern Pedagogy and Schooling",
    region: "USA",
    shortDescription: "Architect of the American public school system and advocate for universal, state-funded education.",
    historicalContext: "The industrial revolution and mass immigration in the US, requiring a unified national identity.",
    keyWorks: ["Annual Reports to the Massachusetts Board of Education"],
    coreIdeas: ["The Common School", "Free public education", "Education as the great equalizer"],
    keyConcepts: ["Common School Movement", "Professionalization of teaching", "Civic virtue"],
    viewOfChild: "Should not be divided by class or religion; all children belong in a shared public classroom to build a unified nation.",
    viewOfTeacher: "A formally trained, moral professional (advocated for 'Normal Schools' to train primarily women as teachers).",
    viewOfKnowledge: "Must include civic morality and a standardized curriculum to prepare citizens for a democratic republic.",
    viewOfSociety: "Democracy is fragile and requires an educated populace; education reduces poverty and prevents class warfare.",
    influencedBy: ["pestalozzi"],
    influenced: ["dewey"],
    opposedTo: [],
    relatedThinkers: ["dewey"],
    mainCriticisms: ["Used the school to enforce Protestant, middle-class values upon immigrants.", "Systematization led to industrial-era school bureaucracy."],
    contemporaryRelevance: "The founding father of the American public school system and the enduring myth of education as social equalizer.",
    aiAgeReflection: "He would likely embrace AI if it could be provided freely to all citizens equitably, fearing a digital divide that would fracture the 'common' experience.",
    unresolvedQuestion: "Does public schooling truly act as 'the great equalizer,' or does it unconsciously reproduce the class structure it claims to dismantle?",
    rankingScores: {
      historicalInfluence: 10, originality: 6, practiceImpact: 10, politicalImpact: 10, contemporaryRelevance: 8, controversy: 6
    }
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    lifeDates: "1844 – 1900",
    period: "19th Century",
    era: "Modern Pedagogy and Schooling",
    region: "Germany",
    shortDescription: "Fierce critic of state-mandated education, advocating for radical self-overcoming.",
    historicalContext: "The rise of the heavily bureaucratized Prussian state and mass industrialization.",
    keyWorks: ["Schopenhauer as Educator", "On the Future of Our Educational Institutions"],
    coreIdeas: ["Education as self-overcoming", "Critique of state education", "The creation of genius"],
    keyConcepts: ["Self-overcoming (Übermensch)", "Will to power", "Philistine culture"],
    viewOfChild: "Institutional schooling crushes the unique spirit; the individual must fight against mass culture to become who they are.",
    viewOfTeacher: "A provocateur or 'liberator' who helps the few exceptional individuals peel away the conditioning of society.",
    viewOfKnowledge: "Not objective, but a manifestation of perspective and power. True education is cultivating one's own values.",
    viewOfSociety: "The modern state uses education merely to produce obedient, specialized workers ('cultural philistines'), fearing true genius.",
    influencedBy: [],
    influenced: ["foucault", "ranciere"],
    opposedTo: ["kant", "mann", "herbart"], // Opposed mass public schooling and universal morality
    relatedThinkers: ["foucault"],
    mainCriticisms: ["Deeply elitist and anti-egalitarian", "Dismissive of education for the majority of the population"],
    contemporaryRelevance: "A powerful critique of instrumental, state-mandated education and a defense of radical self-determination and existential learning.",
    aiAgeReflection: "He would view AI-driven personalized learning as the ultimate 'herd' mechanism—using algorithms to enforce averageness and crush dangerous, original genius.",
    unresolvedQuestion: "Is formal education fundamentally a tool of the state to domesticate people, and is true genius only forged against it?",
    rankingScores: {
      historicalInfluence: 8, originality: 10, practiceImpact: 2, politicalImpact: 7, contemporaryRelevance: 8, controversy: 10
    }
  },
  {
    id: "humboldt",
    name: "Wilhelm von Humboldt",
    lifeDates: "1767 – 1835",
    period: "19th Century",
    era: "Modern Pedagogy and Schooling",
    region: "Germany",
    shortDescription: "Architect of the modern research university and the concept of 'Bildung' (self-cultivation).",
    historicalContext: "Prussian restructuring following the Napoleonic wars; the rise of the modern research university.",
    keyWorks: ["Limits of State Action", "Theory of Bildung"],
    coreIdeas: ["Bildung (self-cultivation)", "Academic freedom", "Unity of research and teaching"],
    keyConcepts: ["Bildung", "Lernfreiheit (Freedom to learn)", "Lehrfreiheit (Freedom to teach)"],
    viewOfChild: "Should grow harmoniously, integrating intellect, emotion, and morality into a fully rounded, total personality.",
    viewOfTeacher: "In universities, professors exist not to transmit facts, but to embark on shared inquiry and research with students.",
    viewOfKnowledge: "A living process of inquiry. Higher education must connect research to teaching, free from state coercion.",
    viewOfSociety: "The state should provide negative liberty; it must limit its interference in education to allow true individual self-cultivation.",
    influencedBy: ["kant", "rousseau"],
    influenced: ["dewey"],
    opposedTo: [],
    relatedThinkers: ["kant"],
    mainCriticisms: ["The Humboldtian university ideal became an elitist institution disconnected from practical societal needs."],
    contemporaryRelevance: "The architect of the modern research university and the enduring concept of academic freedom and holistic self-development ('Bildung').",
    aiAgeReflection: "He would fiercely defend the 'slow' human process of 'Bildung' against the rapid, instrumental knowledge extraction offered by AI models.",
    unresolvedQuestion: "Can the ideal of pure 'Bildung' survive in a university system increasingly dominated by commercial and corporate pressures?",
    rankingScores: {
      historicalInfluence: 9, originality: 8, practiceImpact: 8, politicalImpact: 7, contemporaryRelevance: 7, controversy: 3
    }
  },
  {
    id: "addams",
    name: "Jane Addams",
    lifeDates: "1860 – 1935",
    period: "20th Century",
    era: "Progressive Education and Developmental Psychology",
    region: "USA",
    shortDescription: "Pioneer of the settlement house movement, focusing on immigrant education and social democracy.",
    historicalContext: "The era of rapid industrialization, massive urban immigration, and dire poverty in cities like Chicago.",
    keyWorks: ["Democracy and Social Ethics", "Twenty Years at Hull-House"],
    coreIdeas: ["Socialized education", "Community-based learning", "Settlement house movement"],
    keyConcepts: ["Sympathetic knowledge", "Social democracy", "Hull House"],
    viewOfChild: "A social being whose education is inseparable from the health, culture, and economic survival of their local community and immigrant roots.",
    viewOfTeacher: "A social worker and community member who learns alongside the marginalized, addressing structural poverty alongside intellectual needs.",
    viewOfKnowledge: "Meaningless if abstract; it must be applied to solve real social problems and cross class and ethnic divides.",
    viewOfSociety: "Cannot be a true democracy unless educational and social resources are shared equitably in interdependent, diverse urban communities.",
    influencedBy: ["dewey", "wollstonecraft"],
    influenced: ["freire", "noddings", "hooks"],
    opposedTo: [], // Capitalist individualism
    relatedThinkers: ["dewey", "noddings"],
    mainCriticisms: ["Sometimes critiqued for subtle paternalism in the settlement house model, though she strove for reciprocal relationships."],
    contemporaryRelevance: "A pioneer of social work, community schooling, mutually reciprocal adult education, and the ethics of care.",
    aiAgeReflection: "She would insist that AI must be developed locally and democratically, to solve specific, immediate community problems, rather than imposed by distant tech monopolies.",
    unresolvedQuestion: "How do we balance preserving the native cultural identity of students with the need to assimilate them into a dominant economy?",
    rankingScores: {
      historicalInfluence: 8, originality: 8, practiceImpact: 9, politicalImpact: 9, contemporaryRelevance: 9, controversy: 2
    }
  },
  {
    id: "steiner",
    name: "Rudolf Steiner",
    lifeDates: "1861 – 1925",
    period: "20th Century",
    era: "Progressive Education and Developmental Psychology",
    region: "Austria",
    shortDescription: "Founder of Anthroposophy and the Waldorf education movement.",
    historicalContext: "A period of post-WWI social rethinking, engaging deeply with European esoteric and mystical traditions.",
    keyWorks: ["The Child's Changing Consciousness", "The Study of Man"],
    coreIdeas: ["Waldorf Education", "Anthroposophy", "Holistic spiritual development"],
    keyConcepts: ["Eurythmy", "Seven-year cycles", "Head, heart, hands"],
    viewOfChild: "A spiritual being passing through distinct seven-year developmental cycles (doing, feeling, thinking).",
    viewOfTeacher: "A spiritual authority who stays with the same class for years, crafting aesthetically rich, imaginative lessons without textbooks.",
    viewOfKnowledge: "Deeply connected to the arts, nature, and the spiritual world. Intellectual learning is delayed until the child's emotional and physical capacities are secure.",
    viewOfSociety: "Requires individuals who are creatively and spiritually free to build a balanced 'threefold social order.'",
    influencedBy: ["froebel", "pestalozzi"], // Goethe
    influenced: [],
    opposedTo: ["dewey", "skinner", "herbart"], // Opposed materialism, rigid testing, and early academic pressure
    relatedThinkers: ["montessori", "froebel"],
    mainCriticisms: ["The esoteric/occult foundations of Anthroposophy are highly controversial.", "Delay in teaching reading worries some modern parents."],
    contemporaryRelevance: "Waldorf schools are a major global alternative network, prized for their emphasis on art, nature, and minimizing early technology exposure.",
    aiAgeReflection: "He would absolutely ban AI in early schooling, arguing that screens and machine logic prematurely awaken and deaden the child's imaginative spiritual forces.",
    unresolvedQuestion: "Does modern education fundamentally damage childhood by forcing cognitive intellect before the body and heart are fully formed?",
    rankingScores: {
      historicalInfluence: 7, originality: 10, practiceImpact: 8, politicalImpact: 4, contemporaryRelevance: 7, controversy: 9
    }
  },
  {
    id: "neill",
    name: "A. S. Neill",
    lifeDates: "1883 – 1973",
    period: "20th Century",
    era: "Progressive Education and Developmental Psychology",
    region: "Scotland",
    shortDescription: "Radical pioneer of democratic, anti-authoritarian schooling and founder of Summerhill.",
    historicalContext: "Rebelling against the harsh, punitive Scottish schooling of his youth in the early 20th century.",
    keyWorks: ["Summerhill: A Radical Approach to Child Rearing"],
    coreIdeas: ["Democratic schooling", "Absolute freedom in education", "Emotional well-being over academics"],
    keyConcepts: ["Self-governance", "Voluntary attendance", "Anti-authoritarianism"],
    viewOfChild: "Inherently good and capable of self-regulation; academic pressure and adult authority create neurosis.",
    viewOfTeacher: "An equal member of the community who has no more power than a child; offers classes but never requires them.",
    viewOfKnowledge: "Entirely secondary to emotional happiness. If a child is happy and free, they will learn what they need when they need it.",
    viewOfSociety: "Will be naturally peaceful if we stop raising children in authoritarian, punitive school environments.",
    influencedBy: ["rousseau"], // Freud, Wilhelm Reich
    influenced: [], // Modern unschooling
    opposedTo: ["skinner", "herbart", "bloom"], // Opposed all compulsory schooling and behaviorism
    relatedThinkers: ["illich", "rousseau"],
    mainCriticisms: ["Summerhill model works only for highly privileged or specific types of children.", "Neglects duty to transmit cultural knowledge."],
    contemporaryRelevance: "The most famous advocate for radical democratic schooling and the philosophical grandfather of the 'unschooling' movement.",
    aiAgeReflection: "Neill wouldn't care if students used AI or ignored it, so long as it was their own free choice and not imposed by a curriculum.",
    unresolvedQuestion: "Is absolute freedom simply another form of adult neglect if children choose not to prepare for a demanding capitalist world?",
    rankingScores: {
      historicalInfluence: 6, originality: 9, practiceImpact: 4, politicalImpact: 6, contemporaryRelevance: 5, controversy: 10
    }
  },
  {
    id: "parkhurst",
    name: "Helen Parkhurst",
    lifeDates: "1887 – 1973",
    period: "20th Century",
    era: "Progressive Education and Developmental Psychology",
    region: "USA",
    shortDescription: "Creator of the Dalton Plan, moving away from bells and timetables to self-paced learning contracts.",
    historicalContext: "Expanding high school attendance in America required new ways to handle diverse abilities.",
    keyWorks: ["Education on the Dalton Plan"],
    coreIdeas: ["The Dalton Plan", "Self-paced learning", "Abolishing the traditional timetable"],
    keyConcepts: ["Contracts", "Laboratories", "Student agency"],
    viewOfChild: "Should not be interrupted by bells; children learn best when given trust, freedom, and an individualized path through the material.",
    viewOfTeacher: "Not a lecturer, but a consultant and specialist in a subject 'laboratory' who helps students fulfill their unique learning 'contracts.'",
    viewOfKnowledge: "A set of manageable goals negotiated between student and teacher, mastered independently.",
    viewOfSociety: "Requires individuals who can manage their own time, collaborate socially, and take responsibility for their own goals.",
    influencedBy: ["montessori", "dewey"],
    influenced: [], // Modern personalized learning systems
    opposedTo: ["herbart"], // Traditional lock-step classrooms
    relatedThinkers: ["montessori", "dewey", "skinner"],
    mainCriticisms: ["The 'contract' system can become just a different kind of rigid worksheet factory if implemented poorly.", "Requires highly self-motivated students."],
    contemporaryRelevance: "The absolute precursor to contemporary 'personalized learning,' asynchronous coursework, and competency-based education.",
    aiAgeReflection: "She would view AI as an excellent tool for the 'Dalton Plan,' allowing students to pursue their chosen 'contracts' at their own pace with an infinitely patient tutor.",
    unresolvedQuestion: "Does eliminating the classroom timetable unintentionally isolate learners from the collective energy of direct instruction?",
    rankingScores: {
      historicalInfluence: 6, originality: 8, practiceImpact: 8, politicalImpact: 3, contemporaryRelevance: 8, controversy: 2
    }
  },
  {
    id: "freinet",
    name: "Célestin Freinet",
    lifeDates: "1896 – 1966",
    period: "20th Century",
    era: "Progressive Education and Developmental Psychology",
    region: "France",
    shortDescription: "Creator of the Modern School movement, emphasizing student-created media and cooperative labor.",
    historicalContext: "Working in rural France post-WWI, striving to bring meaningful, radical reform to impoverished peasant classrooms.",
    keyWorks: ["Education Through Work", "The Modern French School"],
    coreIdeas: ["The printing press in the school", "Cooperative learning", "Work-play (tâtonnement expérimental)"],
    keyConcepts: ["School printing press", "Free text", "Experimental groping"],
    viewOfChild: "A worker and creator whose natural curiosity flourishes when they can produce real, meaningful objects (like printed newspapers) for a real audience.",
    viewOfTeacher: "A fellow worker who organizes the classroom as a cooperative workshop rather than an authoritarian lecture hall.",
    viewOfKnowledge: "Constructed through trial and error ('experimental groping') and validated by sharing it with a real community.",
    viewOfSociety: "Schools should be organized as democratic cooperatives to prepare working-class children to build a socialist, cooperative society.",
    influencedBy: ["dewey", "pestalozzi", "rousseau"], // Marx
    influenced: ["illich", "giroux"],
    opposedTo: [], // Capitalist, authoritarian schooling
    relatedThinkers: ["dewey", "freire", "montessori"],
    mainCriticisms: ["Highly dependent on specific materials (the press) which were time-consuming.", "Overshadowed internationally by Dewey and Montessori."],
    contemporaryRelevance: "A massive influence in Europe and Latin America. His use of the school newspaper is the direct ancestor of students writing blogs, podcasts, and digital portfolios for authentic audiences.",
    aiAgeReflection: "Freinet would embrace digital tools and AI as modern extensions of the 'printing press'—provided they are controlled by students to publish their own voices, not by corporations to surveil them.",
    unresolvedQuestion: "How do we maintain the radical, emancipatory nature of student 'work' without it becoming just another required school chore?",
    rankingScores: {
      historicalInfluence: 7, originality: 8, practiceImpact: 8, politicalImpact: 7, contemporaryRelevance: 7, controversy: 4
    }
  },
  {
    id: "bandura",
    name: "Albert Bandura",
    lifeDates: "1925 – 2021",
    period: "Contemporary",
    era: "Developmental Psychology and Learning Theory",
    region: "Canada / USA",
    shortDescription: "Psychologist known for social learning theory and the impact of modeling on behavior.",
    historicalContext: "Transitioning behavioral psychology beyond Skinner to include internal cognitive processes.",
    keyWorks: ["Social Learning Theory", "Self-Efficacy: The Exercise of Control"],
    coreIdeas: ["Observational learning", "Modeling", "Self-efficacy"],
    keyConcepts: ["Social Cognitive Theory", "Bobo doll experiment", "Vicarious reinforcement"],
    viewOfChild: "An active agent who learns vast amounts of behavior simply by observing and imitating others, without needing direct reinforcement.",
    viewOfTeacher: "A powerful model; the teacher's attitudes, emotional responses, and coping mechanisms are learned by students just as much as the curriculum.",
    viewOfKnowledge: "A combination of cognitive, behavioral, and environmental influences acting continuously upon one another (reciprocal determinism).",
    viewOfSociety: "Media and societal models wield immense power over behavior, aggression, and beliefs.",
    influencedBy: ["skinner", "vygotsky"],
    influenced: ["schon", "gardner"],
    opposedTo: ["skinner"], // Opposed strict behaviorism's denial of internal cognitive states
    relatedThinkers: ["vygotsky", "skinner"],
    mainCriticisms: ["Initially struggled to account for sudden leaps of complex conceptual understanding.", "Sometimes seen as too mechanical regarding social modeling."],
    contemporaryRelevance: "His concept of 'self-efficacy' (a student's belief in their ability to succeed) is one of the most predictive psychological metrics used in education today.",
    aiAgeReflection: "He would be deeply concerned with AI avatars; if students view them as valid models, they will unconsciously imitate the AI's biases, tone, and behavioral scripts.",
    unresolvedQuestion: "If humans learn primarily by observing human models, how does spending vast amounts of time with non-human synthetic agents alter our social psychology?",
    rankingScores: {
      historicalInfluence: 9, originality: 8, practiceImpact: 9, politicalImpact: 5, contemporaryRelevance: 9, controversy: 2
    }
  },
  {
    id: "gardner",
    name: "Howard Gardner",
    lifeDates: "1943 – present",
    period: "Contemporary",
    era: "Developmental Psychology and Learning Theory",
    region: "USA",
    shortDescription: "Psychologist who challenged the unified concept of IQ with his Theory of Multiple Intelligences.",
    historicalContext: "Reacting against the dominance of psychometric testing and the narrow definitions of intelligence in the late 20th century.",
    keyWorks: ["Frames of Mind: The Theory of Multiple Intelligences"],
    coreIdeas: ["Multiple Intelligences (MI)"],
    keyConcepts: ["Linguistic, Logical-Mathematical, Spatial, Bodily-Kinesthetic, Musical, Interpersonal, Intrapersonal, Naturalist"],
    viewOfChild: "Should not be judged by a single metric (IQ); every child possesses a unique profile of varying intellectual strengths.",
    viewOfTeacher: "Must diversify teaching methods and assessments to reach and recognize different types of minds.",
    viewOfKnowledge: "Not a singular general 'g-factor'; it is distributed across different, relatively autonomous neurological pathways and cultural domains.",
    viewOfSociety: "Should value diverse talents rather than artificially elevating logical-mathematical and linguistic skills above all others.",
    influencedBy: ["bruner", "piaget"],
    influenced: [],
    opposedTo: [], // Psychometricians advocating for a single 'IQ'
    relatedThinkers: ["bruner", "eisner"],
    mainCriticisms: ["Often critiqued by neuroscientists and psychometricians as lacking empirical evidence; 'intelligences' are often just 'talents' or 'styles.'", "Frequently misapplied in classrooms as rigid 'learning styles.'"],
    contemporaryRelevance: "Though debated scientifically, MI changed the cultural conversation, empowering teachers to view students holistically and diversify pedagogical approaches.",
    aiAgeReflection: "He would point out that AI is incredibly strong in Linguistic and Logical-Mathematical domains, making human education in the Interpersonal, Kinesthetic, and Naturalist intelligences more vital than ever.",
    unresolvedQuestion: "Is it scientifically valid to label every human competence an 'intelligence', or does it dilute the concept of cognition?",
    rankingScores: {
      historicalInfluence: 9, originality: 9, practiceImpact: 10, politicalImpact: 5, contemporaryRelevance: 8, controversy: 8
    }
  },
  {
    id: "tyler",
    name: "Ralph Tyler",
    lifeDates: "1902 – 1994",
    period: "20th Century",
    era: "Modern Pedagogy and Schooling",
    region: "USA",
    shortDescription: "Grandfather of modern curriculum evaluation and instructional objectives.",
    historicalContext: "The mid-20th century push to make educational evaluation more rational, scientific, and aligned with outcomes.",
    keyWorks: ["Basic Principles of Curriculum and Instruction"],
    coreIdeas: ["The Tyler Rationale", "Objective-based curriculum mapping"],
    keyConcepts: ["Educational Objectives", "Formative evaluation", "Curriculum alignment"],
    viewOfChild: "A learner whose needs and interests, alongside societal needs and subject matter, must form the basis of educational objectives.",
    viewOfTeacher: "A planner who must define clear, measurable behavioral objectives and select learning experiences specifically to meet them.",
    viewOfKnowledge: "Needs to be organized systematically and evaluated continuously to determine if students are actually learning what the school intends.",
    viewOfSociety: "Provides the context and the needs that a school's curriculum must analyze and serve.",
    influencedBy: ["dewey", "herbart"],
    influenced: ["taba", "bloom"],
    opposedTo: [],
    relatedThinkers: ["bloom", "dewey"],
    mainCriticisms: ["Created the hyper-rationalized, overly bureaucratic approach to curriculum that dominates public schooling today.", "Can stifle teacher creativity and emergent learning."],
    contemporaryRelevance: "The grandfather of modern curriculum design. Any teacher who writes 'Students will be able to...' is using the Tyler Rationale.",
    aiAgeReflection: "He would appreciate AI's ability to perfectly align objectives, instructional content, and assessments, but might warn that it risks ignoring the local needs of the learner.",
    unresolvedQuestion: "If we only teach what we can precisely measure, what vital, immeasurable aspects of human flourishing are we leaving out of schooling?",
    rankingScores: {
      historicalInfluence: 10, originality: 7, practiceImpact: 10, politicalImpact: 6, contemporaryRelevance: 9, controversy: 6
    }
  },
  {
    id: "taba",
    name: "Hilda Taba",
    lifeDates: "1902 – 1967",
    period: "20th Century",
    era: "Modern Pedagogy and Schooling",
    region: "Estonia / USA",
    shortDescription: "Advocate for teacher-led, grassroots curriculum development via an inductive learning model.",
    historicalContext: "Reacting against top-down administrative mandates, elevating the intellectual role of the frontline teacher.",
    keyWorks: ["Curriculum Development: Theory and Practice"],
    coreIdeas: ["Grassroots curriculum development", "Inductive teaching"],
    keyConcepts: ["Teacher as curriculum maker", "Inductive concept formation"],
    viewOfChild: "Learns best inductively, by gathering data and organizing it into concepts, rather than having abstractions handed down.",
    viewOfTeacher: "The ultimate authority on curriculum. Curriculum should be built 'grassroots' up by teachers, not top-down by administrators.",
    viewOfKnowledge: "Concepts must be formed by the learner through a structured, inductive cognitive process.",
    viewOfSociety: "Requires an education system that values democratic participation, starting with trusting teachers.",
    influencedBy: ["dewey", "tyler", "piaget"],
    influenced: ["stenhouse"],
    opposedTo: ["tyler"], // Opposed the top-down nature of Tyler's rationale
    relatedThinkers: ["tyler", "stenhouse"],
    mainCriticisms: ["Her inductive methods required high levels of teacher training and time, often abandoned for faster deductive methods."],
    contemporaryRelevance: "A champion for teacher autonomy and the architect of strategies for teaching critical thinking and concept formation.",
    aiAgeReflection: "Taba would fiercely resist AI generating top-down curricula, arguing that the deeply contextual 'grassroots' expertise of the teacher is non-computable.",
    unresolvedQuestion: "Can large-scale public school systems truly tolerate the democratic autonomy of grassroots teacher curriculum development?",
    rankingScores: {
      historicalInfluence: 8, originality: 8, practiceImpact: 8, politicalImpact: 6, contemporaryRelevance: 7, controversy: 3
    }
  },
  {
    id: "stenhouse",
    name: "Lawrence Stenhouse",
    lifeDates: "1926 – 1982",
    period: "20th Century",
    era: "Progressive Education and Developmental Psychology",
    region: "UK",
    shortDescription: "Championed 'teachers as researchers' and a humanities curriculum based on inquiry, not behavioral objectives.",
    historicalContext: "Pushed against the rising tide of behavioral objectives and accountability logic entering schools in the UK.",
    keyWorks: ["An Introduction to Curriculum Research and Development"],
    coreIdeas: ["Teacher as researcher", "Process model of curriculum", "Critique of behavioral objectives"],
    keyConcepts: ["Action research", "Humanities Curriculum Project", "Process model"],
    viewOfChild: "Should encounter controversial and complex human issues in the classroom, learning to form independent judgments.",
    viewOfTeacher: "Not an imparter of truth, but a neutral chairperson in discussions. Furthermore, teachers must be 'extended professionals' researching their own practice.",
    viewOfKnowledge: "Dynamic and provisional. Education is an induction into knowledge, not a training in behaviors.",
    viewOfSociety: "Democracy requires students who can handle controversy independently, protected from teacher bias.",
    influencedBy: ["taba", "bruner"],
    influenced: ["eisner"],
    opposedTo: ["tyler", "bloom", "skinner"], // Fiercely opposed behavioral objectives
    relatedThinkers: ["taba", "eisner"],
    mainCriticisms: ["Demanding role for teachers to act as neutral chairpersons.", "Process model lacks the easy measurability that governments demand."],
    contemporaryRelevance: "The pioneer of 'action research' in schools and the strongest critic of the obsession with observable, measurable learning outcomes.",
    aiAgeReflection: "Stenhouse would argue that AI is excellent for 'training' (behavioral outcomes) but useless for 'education'—the unpredictable process of inducting a student into humanistic understanding.",
    unresolvedQuestion: "Can educational systems ever completely separate 'process-based learning' from the political demand for standardized tests?",
    rankingScores: {
      historicalInfluence: 7, originality: 9, practiceImpact: 7, politicalImpact: 5, contemporaryRelevance: 8, controversy: 5
    }
  },
  {
    id: "eisner",
    name: "Elliot Eisner",
    lifeDates: "1933 – 2014",
    period: "Contemporary",
    era: "Contemporary Educational Theory",
    region: "USA",
    shortDescription: "Advocated for the cognitive value of arts and developed the concept of the 'null curriculum'.",
    historicalContext: "Fighting back against the extreme measurement, standardization, and marginalization of the arts in late 20th-century schooling.",
    keyWorks: ["The Educational Imagination", "The Arts and the Creation of Mind"],
    coreIdeas: ["Cognitive value of the arts", "Educational connoisseurship", "The null curriculum"],
    keyConcepts: ["Null curriculum", "Educational criticism", "Expressive outcomes"],
    viewOfChild: "Meaning is made not just through words and numbers, but visually, musically, and physically. Standardized testing flattens the child's mind.",
    viewOfTeacher: "An artist and 'connoisseur' who qualitatively assesses the nuanced, emergent events of a classroom, rather than just ticking off rubrics.",
    viewOfKnowledge: "Not all knowledge is propositional or measurable. Aesthetic experience is a primary form of human cognition.",
    viewOfSociety: "Impoverishes itself when it marginalizes the arts in favor of technocratic, data-driven academic standardization.",
    influencedBy: ["dewey", "stenhouse", "gardner"],
    influenced: ["noddings", "greene"],
    opposedTo: ["tyler", "bloom", "skinner"], // Opposed the scientific-management model of schooling
    relatedThinkers: ["gardner", "stenhouse", "greene"],
    mainCriticisms: ["'Educational connoisseurship' is highly subjective and difficult to implement in large public systems requiring accountability."],
    contemporaryRelevance: "Coined the term 'null curriculum' (what schools choose NOT to teach). A vital defender of arts education against the STEM/testing obsession.",
    aiAgeReflection: "He would point out that AI evaluates via quantitative algorithms, making it blind to the qualitative 'aesthetic' dimensions of human learning that a master teacher intuitively grasps.",
    unresolvedQuestion: "How do we legitimize intuitive, aesthetic human judgment in an educational era obsessed with data science?",
    rankingScores: {
      historicalInfluence: 8, originality: 9, practiceImpact: 6, politicalImpact: 6, contemporaryRelevance: 8, controversy: 5
    }
  },
  {
    id: "shulman",
    name: "Lee Shulman",
    lifeDates: "1938 – present",
    period: "Contemporary",
    era: "Contemporary Educational Theory",
    region: "USA",
    shortDescription: "Coined 'Pedagogical Content Knowledge' to explain the unique expertise required of teachers.",
    historicalContext: "Challenged the assumption that teaching was merely delivering content or managing behavior.",
    keyWorks: ["Those Who Understand: Knowledge Growth in Teaching"],
    coreIdeas: ["Pedagogical Content Knowledge (PCK)", "Signature pedagogies", "Teaching as a profession"],
    keyConcepts: ["Pedagogical Content Knowledge (PCK)", "Signature pedagogies"],
    viewOfChild: "Varies; requires teachers who know how to translate complex subjects into analogies, demonstrations, and models the child can grasp.",
    viewOfTeacher: "Not just someone who knows subject matter, nor just someone who knows general teaching strategies, but an expert possessing a unique hybrid: PCK.",
    viewOfKnowledge: "Subject matter must be totally reorganized by the teacher from 'content knowledge' into 'teachable knowledge.'",
    viewOfSociety: "Must recognize teaching as a deeply complex intellectual profession on par with medicine or law.",
    influencedBy: ["bruner", "dewey"],
    influenced: [],
    opposedTo: [], // Opposed the phrase 'Those who can, do; those who can't, teach.'
    relatedThinkers: ["bruner"],
    mainCriticisms: ["PCK can be difficult to measure or standardize in teacher training programs."],
    contemporaryRelevance: "PCK is the foundation of modern teacher education. It explains why a brilliant mathematician might be a terrible math teacher.",
    aiAgeReflection: "Shulman would note that AI LLMs possess massive 'Content Knowledge,' but currently lack 'Pedagogical Content Knowledge'—the empathy and insight to know *how* to represent a concept to a specific confused 10-year-old.",
    unresolvedQuestion: "Is teaching an art that depends on intuition, or a science with an explicit, codifiable knowledge base?",
    rankingScores: {
      historicalInfluence: 9, originality: 9, practiceImpact: 10, politicalImpact: 5, contemporaryRelevance: 9, controversy: 1
    }
  },
  {
    id: "apple",
    name: "Michael Apple",
    lifeDates: "1942 – present",
    period: "Contemporary",
    era: "Critical Pedagogy, Power, and Social Reproduction",
    region: "USA",
    shortDescription: "Critical theorist unpacking how the 'official knowledge' in schools reproduces capitalist inequality.",
    historicalContext: "The rise of neo-liberalism, standardized testing regimens, and the push to privatize public education.",
    keyWorks: ["Ideology and Curriculum", "Educating the 'Right' Way"],
    coreIdeas: ["The politics of the curriculum", "Neo-liberal critique", "Democratic schooling"],
    keyConcepts: ["Official knowledge", "Hidden curriculum", "Neo-liberalism in education"],
    viewOfChild: "A subject situated inside a deeply unequal political and economic structure; their school experience is saturated with capitalist ideology.",
    viewOfTeacher: "Must recognize that curriculum is never neutral and work to democratize the classroom and resist the corporatization of schooling.",
    viewOfKnowledge: "The curriculum is 'official knowledge'—it is defined by those with power to legitimize their own culture and marginalize others.",
    viewOfSociety: "Currently dominated by a 'conservative restoration' (neo-liberals, neo-conservatives, authoritarian populists) actively working to privatize and commodify education.",
    influencedBy: ["freire", "foucault", "bourdieu", "dewey"], // Marx, Gramsci
    influenced: ["mclaren", "giroux"],
    opposedTo: ["tyler", "skinner"], // Opposed standardized testing and school privatization
    relatedThinkers: ["giroux", "freire", "bourdieu"],
    mainCriticisms: ["Can be overly deterministic regarding the power of capitalist hegemony.", "Sometimes seen as lacking concrete pedagogical strategies."],
    contemporaryRelevance: "A vital voice for understanding how curriculum choices, textbook publishing, and school funding are intensely political struggles over 'official knowledge.'",
    aiAgeReflection: "He would warn that Ed-Tech AI represents the ultimate privatization of 'official knowledge,' transferring pedagogical authority from democratic public institutions to black-box corporate monopolies.",
    unresolvedQuestion: "How do teachers resist the ideological pressures of 'official knowledge' when they rely on the state for their employment?",
    rankingScores: {
      historicalInfluence: 8, originality: 8, practiceImpact: 5, politicalImpact: 9, contemporaryRelevance: 9, controversy: 8
    }
  },
  {
    id: "mclaren",
    name: "Peter McLaren",
    lifeDates: "1948 – present",
    period: "Contemporary",
    era: "Critical Pedagogy, Power, and Social Reproduction",
    region: "Canada / USA",
    shortDescription: "Marxist educational theorist arguing that schools function largely as rituals of class reproduction.",
    historicalContext: "Formulated theories in response to the aggressive capitalism of the late 20th and early 21st centuries.",
    keyWorks: ["Life in Schools", "Che Guevara, Paulo Freire, and the Pedagogy of Revolution"],
    coreIdeas: ["Marxist critical pedagogy", "Revolutionary pedagogy", "Ritual in schooling"],
    keyConcepts: ["Revolutionary critical pedagogy", "School rituals", "Class struggle"],
    viewOfChild: "Trapped within the brutal logic of global capitalism; schools act as rituals solidifying their class position.",
    viewOfTeacher: "Must move beyond liberal 'reform' and act as a revolutionary agent committed to dismantling capitalist logic and imperialism.",
    viewOfKnowledge: "Deeply entwined with global capitalism. Knowledge should serve the liberation of the working class and marginalized.",
    viewOfSociety: "Defined by class struggle and the savage inequalities of globalized neoliberal capitalism.",
    influencedBy: ["freire", "giroux", "apple"], // Marx
    influenced: [],
    opposedTo: [], // Capitalist reformists
    relatedThinkers: ["giroux", "freire", "apple"],
    mainCriticisms: ["Language is incredibly dense and jargon-heavy.", "His explicit Marxist revolutionary stance alienates mainstream educators."],
    contemporaryRelevance: "One of the founders of critical pedagogy. Offers an uncompromising, radical critique of how schools reproduce economic inequality.",
    aiAgeReflection: "McLaren would view AI entirely through the lens of labor and capital—as a tool deployed by tech oligarchs to de-skill teachers, bust unions, and commodify student data.",
    unresolvedQuestion: "Can reforming the education system ever lead to true justice, or is full economic revolution required first?",
    rankingScores: {
      historicalInfluence: 7, originality: 7, practiceImpact: 3, politicalImpact: 9, contemporaryRelevance: 7, controversy: 10
    }
  },
  {
    id: "greene",
    name: "Maxine Greene",
    lifeDates: "1917 – 2014",
    period: "Contemporary",
    era: "Critical Pedagogy, Power, and Social Reproduction", // Actually feminist/aesthetic
    region: "USA",
    shortDescription: "Philosopher of aesthetic education advocating for the 'social imagination'.",
    historicalContext: "Bringing existentialism to American teacher education, emphasizing personal freedom over systemic compliance.",
    keyWorks: ["The Dialectic of Freedom", "Releasing the Imagination"],
    coreIdeas: ["The social imagination", "Existentialism in education", "Wide-awakeness"],
    keyConcepts: ["Wide-awakeness", "Social imagination", "Aesthetic education"],
    viewOfChild: "An individual in process. The child must be awakened from the anesthesia of daily routine to see the world as it could be.",
    viewOfTeacher: "Should use the arts and literature to provoke 'wide-awakeness,' helping students look at things as if they could be otherwise.",
    viewOfKnowledge: "Meaning is made, not found. The arts are crucial because they break our habitual ways of perceiving the world.",
    viewOfSociety: "Plagued by conformity, consumerism, and apathy. Requires activated imaginations to envision a more just, democratic world.",
    influencedBy: ["dewey", "eisner"], // Sartre, Camus, Arendt
    influenced: ["noddings"],
    opposedTo: ["tyler", "skinner"], // Opposed the reduction of schooling to metrics
    relatedThinkers: ["eisner", "noddings", "dewey"],
    mainCriticisms: ["Highly philosophical; practical implementation is subjective.", "Too focused on the individual existential experience for some critical theorists."],
    contemporaryRelevance: "The philosopher queen of aesthetic education and the role of imagination in social justice. She inspires teachers who feel suffocated by standardized testing.",
    aiAgeReflection: "She would view AI-generated art and writing as a threat to 'wide-awakeness'—a machine smoothing over the human friction and existential struggle required to truly 'create' and imagine.",
    unresolvedQuestion: "How do we teach the 'imagination' in a system structured entirely around standardized measurable outcomes?",
    rankingScores: {
      historicalInfluence: 8, originality: 9, practiceImpact: 6, politicalImpact: 7, contemporaryRelevance: 8, controversy: 3
    }
  },
  {
    id: "ladson-billings",
    name: "Gloria Ladson-Billings",
    lifeDates: "1947 – present",
    period: "Contemporary",
    era: "Contemporary Educational Theory",
    region: "USA",
    shortDescription: "Pioneered Culturally Relevant Pedagogy and introduced Critical Race Theory to education.",
    historicalContext: "Working to identify successful pedagogical practices for African American students being failed by traditional systems.",
    keyWorks: ["The Dreamkeepers", "Toward a Theory of Culturally Relevant Pedagogy"],
    coreIdeas: ["Culturally Relevant Pedagogy", "Education debt vs. achievement gap", "Critical Race Theory in education"],
    keyConcepts: ["Culturally Relevant Pedagogy", "Education Debt", "Cultural competence", "Critical consciousness"],
    viewOfChild: "Brings profound cultural wealth and linguistic knowledge to the classroom which must be honored, not treated as a deficit to be 'fixed.'",
    viewOfTeacher: "Must foster academic success, maintain students' cultural competence, and develop their critical consciousness to challenge the socio-political status quo.",
    viewOfKnowledge: "Not culturally neutral. Traditional schooling marginalizes black students' ways of knowing; education must be explicitly anti-racist.",
    viewOfSociety: "We do not have an 'achievement gap'; we have an 'education debt'—a historical, economic, and sociopolitical debt owed to marginalized communities.",
    influencedBy: ["freire"], // Du Bois, Carter G. Woodson
    influenced: [],
    opposedTo: [], // Deficit theories of education
    relatedThinkers: ["freire", "hooks", "apple"],
    mainCriticisms: ["'Culturally Relevant' is often co-opted into superficial 'celebrating diversity' activities by schools, losing its critical/political edge."],
    contemporaryRelevance: "Introduced Critical Race Theory to educational research. Her framework of Culturally Relevant Pedagogy is the foundational text for modern equity in education.",
    aiAgeReflection: "She would scrutinize the training data of AI models, warning that they encode the grammatical, cultural, and historical biases of the dominant power structure, threatening to automate the 'education debt.'",
    unresolvedQuestion: "Can schools run by the state ever genuinely implement pedagogy designed to critique and dismantle the state's own power structures?",
    rankingScores: {
      historicalInfluence: 9, originality: 9, practiceImpact: 10, politicalImpact: 10, contemporaryRelevance: 10, controversy: 9
    }
  },
  {
    id: "nussbaum",
    name: "Martha Nussbaum",
    lifeDates: "1947 – present",
    period: "Contemporary",
    era: "Contemporary Educational Theory",
    region: "USA",
    shortDescription: "Philosopher defending the humanities and liberal arts via the 'capabilities approach'.",
    historicalContext: "A response to global governments defining educational success purely by GDP and economic productivity.",
    keyWorks: ["Cultivating Humanity", "Not For Profit: Why Democracy Needs the Humanities"],
    coreIdeas: ["The capabilities approach", "Defense of the humanities", "Education for global citizenship"],
    keyConcepts: ["Capabilities approach", "Narrative imagination", "Cosmopolitanism"],
    viewOfChild: "Requires the cultivation of empathy, critical thought, and the capacity to imagine the lives of others to flourish.",
    viewOfTeacher: "Practices Socratic pedagogy to develop the student's critical capacity and uses literature/arts to build a 'narrative imagination.'",
    viewOfKnowledge: "The humanities are not luxuries; they are essential for democratic survival because they teach us how to deal with complexity and difference.",
    viewOfSociety: "Globalized and highly interdependent; democracies are committing 'suicide' by prioritizing technical, profit-driven education over humanistic inquiry.",
    influencedBy: ["socrates", "aristotle", "kant"], // Dewey, Tagore
    influenced: ["biesta"],
    opposedTo: ["tyler", "skinner"], // Opposed purely economistic models of human capital in education
    relatedThinkers: ["biesta", "socrates", "aristotle"],
    mainCriticisms: ["Her defense of the humanities sometimes leans heavily on Western classical traditions.", "Viewed by some critical theorists as rooted too deeply in liberal individualism."],
    contemporaryRelevance: "The most eloquent contemporary defender of the liberal arts against the global drift toward purely STEM-focused, vocational schooling.",
    aiAgeReflection: "She would view the rise of AI and the defunding of the humanities as an existential crisis for democracy, losing our capacity for 'narrative imagination' and critical empathy.",
    unresolvedQuestion: "Can narrative imagination alone motivate individuals to cross boundaries of profound partisan difference?",
    rankingScores: {
      historicalInfluence: 8, originality: 8, practiceImpact: 5, politicalImpact: 8, contemporaryRelevance: 9, controversy: 4
    }
  },
  {
    id: "ranciere",
    name: "Jacques Rancière",
    lifeDates: "1940 – present",
    period: "Contemporary",
    era: "Contemporary Educational Theory",
    region: "France",
    shortDescription: "Radical philosopher who argued that all intelligence is equal and that teaching 'stultifies' learning.",
    historicalContext: "Following May 1968, rethinking the power dynamics in all institutions, breaking with traditional Marxist structuralism.",
    keyWorks: ["The Ignorant Schoolmaster"],
    coreIdeas: ["The equality of intelligence", "Intellectual emancipation", "Critique of explanation"],
    keyConcepts: ["Equality of intelligences", "Emancipation vs. Stultification", "The ignorant schoolmaster"],
    viewOfChild: "Anyone is capable of learning anything. Intelligence is equal; it is the *will* to use it that varies.",
    viewOfTeacher: "The traditional teacher 'stultifies' the student by convincing them they need the teacher's explanation to understand. The true teacher emancipates the student's will without transmitting knowledge.",
    viewOfKnowledge: "Not something that passes from a full head to an empty head. The act of explanation is a myth that reinforces inequality.",
    viewOfSociety: "The pedagogical myth of explanation (that the ignorant need the learned) mirrors and justifies the social inequality of society.",
    influencedBy: ["nietzsche"], // Joseph Jacotot, Althusser (whom he broke with)
    influenced: ["biesta"],
    opposedTo: ["bourdieu"], // Vehemently opposed Bourdieu's sociological determinism
    relatedThinkers: ["illich", "foucault"],
    mainCriticisms: ["His thesis ('equality of intelligence') is highly theoretical and defies cognitive science and practical classroom reality.", "Viewed largely as a philosophical provocation rather than a pedagogical method."],
    contemporaryRelevance: "A radical, mind-bending inversion of pedagogy. He demands we start with the *assumption* that the student is already equal, rescuing education from paternalism.",
    aiAgeReflection: "Rancière would view the 'tutor' persona of AI as the ultimate stultifying 'explainer'—a machine designed to convince humans they need its endless explanations to decipher the world.",
    unresolvedQuestion: "Does assuming an 'equality of intelligence' ignore the real material constraints children face?",
    rankingScores: {
      historicalInfluence: 7, originality: 10, practiceImpact: 2, politicalImpact: 8, contemporaryRelevance: 7, controversy: 9
    }
  },
  {
    id: "wenger",
    name: "Etienne Wenger",
    period: "Contemporary",
    era: "Contemporary Educational Theory",
    lifeDates: "1952 – present",
    region: "Switzerland / USA",
    shortDescription: "Co-creator of the 'Communities of Practice' theory, redefining learning as social participation.",
    historicalContext: "Moving away from individual cognitive modeling of the brain toward examining learning in actual workspaces and social networks.",
    keyWorks: ["Communities of Practice", "Situated Learning (with Jean Lave)"],
    coreIdeas: ["Communities of Practice (CoP)", "Learning as social participation", "Identity and learning"],
    keyConcepts: ["Communities of Practice", "Legitimate Peripheral Participation", "Meaning, Practice, Community, Identity"],
    viewOfChild: "A newcomer trying to move from the periphery of a community to its center by adopting its practices and language.",
    viewOfTeacher: "An old-timer or master practitioner who invites the novice into the community and legitimizes their participation.",
    viewOfKnowledge: "Not a thing stored in the brain; it is a lived, socially negotiated practice inside a specific community.",
    viewOfSociety: "A constellation of overlapping communities of practice. We learn constantly by moving between them (work, hobbies, school).",
    influencedBy: ["vygotsky", "bruner"], // Anthropological studies
    influenced: [],
    opposedTo: ["skinner", "piaget"], // Opposed the idea that learning is an isolated, internal cognitive process
    relatedThinkers: ["lave", "vygotsky"],
    mainCriticisms: ["The CoP model is descriptive, not prescriptive; it's hard to force or mandate a true 'community of practice' in formal schooling.", "Sometimes ignores power dynamics within communities."],
    contemporaryRelevance: "Revolutionized how learning is viewed in workplaces, online communities, and apprenticeships. Shifted focus from cognitive psychology to social anthropology.",
    aiAgeReflection: "He would focus on how interacting with AI disrupts or mimics 'communities of practice,' asking if a machine can ever provide 'legitimate peripheral participation' since it has no human identity.",
    unresolvedQuestion: "Can online, globally dispersed groups ever form the kinds of deep 'communities of practice' that traditional apprenticeships did?",
    rankingScores: {
      historicalInfluence: 8, originality: 9, practiceImpact: 8, politicalImpact: 3, contemporaryRelevance: 9, controversy: 2
    }
  },
  {
    id: "lave",
    name: "Jean Lave",
    lifeDates: "1939 – present",
    period: "Contemporary",
    era: "Contemporary Educational Theory",
    region: "USA",
    shortDescription: "Anthropologist who demonstrated that learning is inherently situated in cultural practice.",
    historicalContext: "Researching tailoring apprenticeships in Liberia, noticing learning happens without direct 'instruction'.",
    keyWorks: ["Situated Learning: Legitimate Peripheral Participation (with Wenger)", "Cognition in Practice"],
    coreIdeas: ["Situated cognition", "Apprenticeship learning", "Critique of knowledge transfer"],
    keyConcepts: ["Situated learning", "Legitimate Peripheral Participation", "Everyday cognition"],
    viewOfChild: "Learns best not in an abstracted classroom, but situated in the context where the knowledge is actually used (like an apprentice).",
    viewOfTeacher: "A practitioner who allows novices to engage in low-risk, authentic tasks, gradually increasing their responsibility.",
    viewOfKnowledge: "Fundamentally situated. Math done by a shopper in a grocery store is entirely different from math done on a test. 'Transfer' of abstract school knowledge to real life is a myth.",
    viewOfSociety: "Schools artificially separate learning from doing. Society effectively learns through apprenticeship, not formal schooling.",
    influencedBy: ["vygotsky", "illich"],
    influenced: ["wenger"],
    opposedTo: ["piaget", "bruner"], // Opposed abstract, decontextualized cognitive science
    relatedThinkers: ["wenger", "illich", "vygotsky"],
    mainCriticisms: ["If abstract transfer is impossible, the entire rationale for formal, generalized schooling collapses.", "Apprenticeships scale poorly."],
    contemporaryRelevance: "A profound challenge to the modern classroom setup. Foundational to experiential education, project-based learning, and adult workplace learning.",
    aiAgeReflection: "She would point out that AI provides highly decontextualized, abstracted information, reinforcing the illusion that 'knowledge' can be separated from situated human practice.",
    unresolvedQuestion: "If all learning is context-specific, how can education ever prepare humans for truly novel, unencountered futures?",
    rankingScores: {
      historicalInfluence: 8, originality: 9, practiceImpact: 7, politicalImpact: 4, contemporaryRelevance: 8, controversy: 5
    }
  },
  {
    id: "schon",
    name: "Donald Schön",
    lifeDates: "1930 – 1997",
    period: "Contemporary",
    era: "Contemporary Educational Theory",
    region: "USA",
    shortDescription: "Challenged 'technical rationality' to elevate the 'reflective practice' of teaching.",
    historicalContext: "Arguing against the dominance of purely scientific, objective-based research in professional education programs.",
    keyWorks: ["The Reflective Practitioner"],
    coreIdeas: ["Reflective practice", "Critique of technical rationality", "Learning in the professions"],
    keyConcepts: ["Reflection-in-action", "Reflection-on-action", "Technical rationality"],
    viewOfChild: "Education should model the messy, indeterminate 'swamp' of real-world problems, where the student acts like a reflective designer.",
    viewOfTeacher: "Not a pure technician applying science, but a 'reflective practitioner' who thinks on their feet, adjusting constantly to the unique complexities of the classroom.",
    viewOfKnowledge: "Professional knowledge is tacit—an artistry learned through doing. 'Technical rationality' (applying theory directly to practice) fails in real, complex human situations.",
    viewOfSociety: "Dominated by the myth of objective scientific expertise; needs a shift toward recognizing the artistry and reflective tacit knowledge of practitioners.",
    influencedBy: ["dewey"],
    influenced: ["noddings"],
    opposedTo: ["tyler", "herbart"], // Opposed standardized, technical, objective-based teacher training
    relatedThinkers: ["dewey", "shulman"],
    mainCriticisms: ["The concept is somewhat vague and difficult to 'teach' to novices.", "Reflection can become a buzzword lacking rigorous critique."],
    contemporaryRelevance: "His concepts of 'reflection-in-action' and 'reflection-on-action' are universally used in teacher training, nursing, and design education.",
    aiAgeReflection: "Schön would argue that AI operates purely on 'technical rationality' (probabilistic mapping). The human 'reflection-in-action'—intuitive artistry in a messy context—remains fundamentally human.",
    unresolvedQuestion: "Can the tacit 'art' of reflective teaching ever be adequately recognized in systems that demand uniform metrics of success?",
    rankingScores: {
      historicalInfluence: 8, originality: 8, practiceImpact: 10, politicalImpact: 4, contemporaryRelevance: 9, controversy: 2
    }
  }

];

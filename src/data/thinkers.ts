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
  region: string;
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
    influenced: ["plato", "aristotle"],
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
    opposedTo: [],
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
    influenced: ["quintilian", "augustine"],
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
    influenced: ["rousseau", "skinner"],
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
    influenced: ["pestalozzi", "froebel", "dewey", "montessori", "piaget"],
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
    influenced: ["vygotsky", "freire", "bruner"],
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
    influenced: ["bruner"],
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
    influenced: ["papert", "bruner", "bloom"], // Papert (Constructionism)
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
    influenced: ["giroux", "hooks", "biesta"],
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
    influenced: [], // Unschooling movement
    opposedTo: ["dewey", "bloom"], // Opposed the very concept of the school, progressive or otherwise
    relatedThinkers: ["freire", "foucault"],
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
    influenced: ["freire", "giroux"],
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
    influenced: ["biesta", "giroux"],
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
    influencedBy: ["dewey", "pestalozzi"], // Gilligan
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
];

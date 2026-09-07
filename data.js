const BOOK = {
  title: "Discrete Mathematics: An Open Introduction",
  edition: "4th Edition",
  author: "Oscar Levin",
  license: "CC BY-NC-SA 4.0",
  sourceUrl: "https://discrete.openmathbooks.org/",
  licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
};

const chapters = [
  {
    id: "ch0", number: "0", title: "Introduction & Preliminaries",
    summary: "What discrete mathematics studies and the basic structures used throughout the book.",
    sections: [
      { id:"0.1", title:"What is Discrete Mathematics?", page:1, summary:"A first look at mathematical objects that are separate and distinct, and how discrete structures model problems.", keywords:["discrete","modeling","combinatorics","logic","graphs","sequences"] },
      { id:"0.2", title:"Discrete Structures", page:5, summary:"Introduces sets, functions, sequences, relations, and graphs as recurring mathematical structures.", keywords:["sets","functions","sequences","relations","graphs"] }
    ]
  },
  {
    id: "ch1", number: "1", title: "Logic & Proofs",
    summary: "Statements, implications, logical rules, proof methods, and proofs about discrete structures.",
    sections: [
      { id:"1.1", title:"Mathematical Statements", page:13, summary:"Atomic and molecular statements, connectives, predicates, and quantifiers.", keywords:["statement","proposition","and","or","not","biconditional","predicate","quantifier"] },
      { id:"1.2", title:"Implications", page:30, summary:"How conditional statements work, including converse, inverse, and contrapositive forms.", keywords:["implication","conditional","converse","inverse","contrapositive","necessary","sufficient"] },
      { id:"1.3", title:"Rules of Logic", page:44, summary:"Truth tables, logical equivalence, quantified equivalences, and deductions.", keywords:["truth table","logical equivalence","tautology","De Morgan","deduction"] },
      { id:"1.4", title:"Proofs", page:62, summary:"Direct proof, proof by contrapositive, proof by contradiction, and choosing a proof style.", keywords:["proof","direct proof","contrapositive","contradiction"] },
      { id:"1.5", title:"Proofs about Discrete Structures", page:83, summary:"Applying definitions and proof techniques to sets, functions, relations, and graphs.", keywords:["proofs sets","proofs functions","proofs relations","proofs graphs"] }
    ]
  },
  {
    id: "ch2", number: "2", title: "Graph Theory",
    summary: "Graphs, trees, planarity, Euler trails, coloring, relations, and bipartite matching.",
    sections: [
      { id:"2.1", title:"Problems and Definitions", page:99, summary:"Vertices, edges, adjacency, degree, paths, cycles, connectedness, and common graph types.", keywords:["graph","vertex","edge","degree","path","cycle","connected","bipartite"] },
      { id:"2.2", title:"Trees", page:117, summary:"Tree properties, spanning trees, rooted trees, and traversal ideas.", keywords:["tree","spanning tree","rooted tree","breadth first","depth first"] },
      { id:"2.3", title:"Planar Graphs", page:129, summary:"Planar drawings, Euler's formula, non-planar graphs, and polyhedra.", keywords:["planar","Euler formula","non-planar","polyhedra"] },
      { id:"2.4", title:"Euler Trails and Circuits", page:141, summary:"Conditions for Euler trails and circuits, with a comparison to Hamilton paths.", keywords:["Euler trail","Euler circuit","Hamilton path","degree"] },
      { id:"2.5", title:"Coloring", page:150, summary:"Vertex coloring, edge coloring, chromatic ideas, and graph-coloring problems.", keywords:["coloring","chromatic number","vertex coloring","edge coloring"] },
      { id:"2.6", title:"Relations and Graphs", page:163, summary:"Relations, their properties, equivalence relations, and equivalence classes.", keywords:["relation","reflexive","symmetric","transitive","equivalence relation","partition"] },
      { id:"2.7", title:"Matching in Bipartite Graphs", page:181, summary:"Matching problems in bipartite graphs and the structure behind pairing two sets.", keywords:["matching","bipartite","vertex cover"] }
    ]
  },
  {
    id: "ch3", number: "3", title: "Counting",
    summary: "Counting outcomes, permutations and combinations, inclusion-exclusion, probability, and combinatorial proof.",
    sections: [
      { id:"3.1", title:"Pascal's Arithmetical Triangle", page:191, summary:"Pascal's triangle through lattice paths, bit strings, subsets, and algebraic patterns.", keywords:["Pascal","lattice paths","bit strings","subsets","binomial"] },
      { id:"3.2", title:"Combining Outcomes", page:205, summary:"The sum and product principles for combining possibilities.", keywords:["sum principle","product principle","outcomes"] },
      { id:"3.3", title:"Non-Disjoint Outcomes", page:218, summary:"Counting overlapping sets using Venn diagrams and inclusion-exclusion.", keywords:["inclusion exclusion","Venn","overlap"] },
      { id:"3.4", title:"Combinations and Permutations", page:230, summary:"Counting ordered sequences versus unordered selections.", keywords:["permutation","combination","nPr","nCr","factorial"] },
      { id:"3.5", title:"Counting Multisets", page:244, summary:"Counting selections when repetition is allowed, including bit-string representations.", keywords:["multiset","repetition","stars and bars","sticks and stones"] },
      { id:"3.6", title:"Combinatorial Proofs", page:256, summary:"Proving identities by showing two expressions count the same set in different ways.", keywords:["combinatorial proof","identity","Pascal"] },
      { id:"3.7", title:"Applications to Probability", page:273, summary:"Computing probabilities, probability rules, and conditional probability.", keywords:["probability","conditional probability","sample space"] },
      { id:"3.8", title:"Advanced Counting Using PIE", page:290, summary:"More involved applications of the Principle of Inclusion-Exclusion.", keywords:["PIE","inclusion exclusion","derangement","functions"] }
    ]
  },
  {
    id: "ch4", number: "4", title: "Sequences",
    summary: "Ways to describe sequences, rates of growth, recurrence ideas, and induction.",
    sections: [
      { id:"4.1", title:"Describing Sequences", page:311, summary:"Closed formulas, partial sums, differences, and computational descriptions of sequences.", keywords:["sequence","closed formula","partial sum","difference","sigma"] },
      { id:"4.2", title:"Rate of Growth", page:327, summary:"Arithmetic, geometric, and other patterns of growth.", keywords:["arithmetic sequence","geometric sequence","growth"] },
      { id:"4.3", title:"Polynomial Sequences", page:338, summary:"Finite differences, polynomial patterns, and formulas for polynomial sequences.", keywords:["polynomial sequence","finite differences","sum"] },
      { id:"4.4", title:"Exponential Sequences", page:353, summary:"Geometric sums and characteristic-root techniques for recurrence relations.", keywords:["exponential","geometric","characteristic root","recurrence"] },
      { id:"4.5", title:"Proof by Induction", page:363, summary:"Recursive reasoning, formal induction proofs, and examples.", keywords:["induction","base case","inductive hypothesis","inductive step"] },
      { id:"4.6", title:"Strong Induction", page:377, summary:"Strong induction and divide-and-conquer reasoning.", keywords:["strong induction","divide and conquer"] }
    ]
  },
  {
    id: "ch5", number: "5", title: "Discrete Structures Revisited",
    summary: "A deeper treatment of sets and functions.",
    sections: [
      { id:"5.1", title:"Sets", page:389, summary:"Set notation, relationships, operations, and Venn diagrams.", keywords:["set","subset","union","intersection","difference","complement","Venn"] },
      { id:"5.2", title:"Functions", page:403, summary:"Describing functions, injections, surjections, bijections, images, and inverse images.", keywords:["function","domain","codomain","range","injective","surjective","bijective","inverse image"] }
    ]
  },
  {
    id: "ch6", number: "6", title: "Additional Topics",
    summary: "Generating functions and an introduction to number theory.",
    sections: [
      { id:"6.1", title:"Generating Functions", page:421, summary:"Encoding sequences as coefficients of power series and using algebra on those series.", keywords:["generating function","power series","recurrence"] },
      { id:"6.2", title:"Introduction to Number Theory", page:432, summary:"Divisibility, remainder classes, congruences, and linear Diophantine equations.", keywords:["number theory","divisibility","modular arithmetic","congruence","Diophantine"] }
    ]
  }
];

const quickReference = [
  { title:"Implication", group:"Logic", formula:"P → Q ≡ ¬P ∨ Q", note:"An implication is false only when P is true and Q is false.", tags:["logic","implication","truth table"] },
  { title:"Contrapositive", group:"Logic", formula:"P → Q ≡ ¬Q → ¬P", note:"An implication and its contrapositive are logically equivalent.", tags:["logic","contrapositive","proof"] },
  { title:"De Morgan — Statements", group:"Logic", formula:"¬(P ∧ Q) ≡ ¬P ∨ ¬Q\n¬(P ∨ Q) ≡ ¬P ∧ ¬Q", note:"Negating a conjunction/disjunction swaps the connective and negates each part.", tags:["logic","De Morgan","equivalence"] },
  { title:"Negating Quantifiers", group:"Logic", formula:"¬∀x P(x) ≡ ∃x ¬P(x)\n¬∃x P(x) ≡ ∀x ¬P(x)", note:"Negating a quantified statement swaps ∀ and ∃ and negates the predicate.", tags:["quantifier","predicate","logic"] },
  { title:"Set Operations", group:"Sets", formula:"A ∪ B  union\nA ∩ B  intersection\nA \\ B  difference\nAᶜ  complement", note:"Core notation for combining and comparing sets.", tags:["sets","union","intersection","complement"] },
  { title:"Functions", group:"Functions", formula:"f : X → Y", note:"X is the domain and Y is the codomain. A function assigns each input exactly one output.", tags:["function","domain","codomain"] },
  { title:"Permutation", group:"Counting", formula:"P(n,r) = n! / (n-r)!", note:"Use when order matters and items are selected without replacement.", tags:["counting","permutation","factorial"] },
  { title:"Combination", group:"Counting", formula:"C(n,r) = n! / (r!(n-r)!)", note:"Use when order does not matter and items are selected without replacement.", tags:["counting","combination","binomial"] },
  { title:"Inclusion–Exclusion (2 sets)", group:"Counting", formula:"|A ∪ B| = |A| + |B| - |A ∩ B|", note:"Subtract the overlap because it was counted twice.", tags:["counting","inclusion exclusion","sets"] },
  { title:"Arithmetic Sequence", group:"Sequences", formula:"aₙ = a₀ + nd", note:"Each term changes by a constant difference d when indexed from 0.", tags:["sequence","arithmetic"] },
  { title:"Geometric Sequence", group:"Sequences", formula:"aₙ = a₀rⁿ", note:"Each term is obtained by multiplying by a constant ratio r when indexed from 0.", tags:["sequence","geometric"] },
  { title:"Induction Skeleton", group:"Proofs", formula:"1. Base case\n2. Inductive hypothesis\n3. Inductive step", note:"Show the starting case, assume the claim for an arbitrary stage, then prove the next stage.", tags:["proof","induction"] },
  { title:"Handshake Lemma", group:"Graphs", formula:"Σ deg(v) = 2|E|", note:"Every edge contributes 2 to the total degree count.", tags:["graph","degree","edge"] },
  { title:"Euler Formula (connected planar graph)", group:"Graphs", formula:"V - E + F = 2", note:"Relates vertices, edges, and faces in a connected planar embedding.", tags:["graph","planar","Euler"] },
  { title:"Congruence", group:"Number Theory", formula:"a ≡ b (mod n) ⇔ n | (a-b)", note:"a and b are congruent modulo n when they have the same remainder mod n.", tags:["number theory","modular arithmetic","congruence"] }
];

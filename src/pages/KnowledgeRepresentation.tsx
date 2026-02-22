import { MathJax } from "better-react-mathjax";

import ContentTable from "@components/ContentTable/ContentTable";

const tocItems = [
	{ id: "scripts-frames", label: "1. Early Knowledge Rep." },
	{ id: "formal-system", label: "2. Formal System" },
	{ id: "propositional-logic", label: "3. Propositional Logic" },
	{ id: "first-order-logic", label: "4. First-Order Logic" },
	{ id: "semantics", label: "5. Semantics" },
	{ id: "validity", label: "6. Valid & Satisfiable" },
	{ id: "syntax", label: "7. Syntax" },
];

function KnowledgeRepresentation() {
	return (
		<div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-200 selection:text-blue-900 min-h-screen">
			<ContentTable items={tocItems} />

			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Header */}
				<header className="mb-12 border-b border-slate-200 pb-8">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
						Knowledge Representation & Logic
					</h1>
					<p className="text-lg text-slate-600">
						A comprehensive guide to formal languages, propositional logic, and
						first-order logic.
					</p>
				</header>

				{/* Main Content */}
				<main className="space-y-16">
					{/* Section: Early KR */}
					<section
						id="scripts-frames"
						className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
					>
						<h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-4">
							1. Early Knowledge Representation
						</h2>
						<p className="mb-4 text-slate-600">
							<em>
								(Added context to complete the top of your original notes)
							</em>
						</p>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
								<h3 className="font-bold text-lg mb-2 text-slate-800">
									Frames
								</h3>
								<p className="text-slate-700 text-sm">
									Think of a frame like an object-oriented class in programming.
									It represents a stereotypical situation or object. A "Chair"
									frame might have "slots" (attributes) for the number of legs,
									material, and backrest.
								</p>
							</div>
							<div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
								<h3 className="font-bold text-lg mb-2 text-slate-800">
									Scripts
								</h3>
								<p className="text-slate-700 text-sm">
									A script is a specific type of frame that describes a sequence
									of events. Think of a "Restaurant Script": it contains
									standard expected events like walking in, looking at a menu,
									ordering, eating, and paying the bill.
								</p>
							</div>
						</div>
					</section>

					{/* Section: Formal Language */}
					<section
						id="formal-system"
						className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
					>
						<h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-500 pl-4">
							2. Formal Language and Formal System
						</h2>
						<div className="space-y-4 text-slate-700">
							<p>
								A <strong>formal language</strong> is like a strict programming
								language. It contains the following:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									<strong>A set of symbols:</strong> The "alphabet" or allowed
									vocabulary of the language.
								</li>
								<li>
									<strong>Formation rules:</strong> The "grammar" rules
									determining which sequences of symbols are grammatically
									correct. A correct sequence is called a{" "}
									<strong>well-formed formula (WFF)</strong>.
								</li>
							</ul>
							<div className="bg-indigo-50 text-indigo-900 p-4 rounded-lg mt-4 text-sm">
								<strong>Plain English translation:</strong> If English was a
								formal language, the alphabet is A-Z. The formation rules
								dictate that "The cat sat" is a WFF, but "Sat cat the" is just a
								random sequence of symbols, not a WFF.
							</div>

							<p className="mt-4">
								A formal language combined with a{" "}
								<strong>deductive apparatus</strong> becomes a{" "}
								<strong>formal system</strong>. A deductive apparatus consists
								of:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									<strong>Axioms:</strong>{" "}
									<MathJax>
										Starting facts we just assume are universally true (e.g., $X
										= X$).
									</MathJax>
								</li>
								<li>
									<strong>Rules of inference:</strong> The "engine" used to
									derive new facts (theorems) from axioms.
								</li>
							</ul>
						</div>
					</section>

					{/* Section: Propositional Logic */}
					<section
						id="propositional-logic"
						className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
					>
						<h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-green-500 pl-4">
							3. Propositional Logic
						</h2>
						<div className="space-y-4 text-slate-700">
							<p>
								Propositional logic is the simplest form of logic. It deals
								entirely with <strong>propositions</strong> — statements that
								evaluate to strictly TRUE or FALSE. It treats sentences as
								single, indivisible blocks.
							</p>

							<h3 className="font-semibold text-lg text-slate-800 mt-6">
								The Alphabet includes:
							</h3>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									<strong>Propositional symbols:</strong>{" "}
									<MathJax>
										$p, q, \dots$ (e.g., $p$ could stand for "It is raining").
									</MathJax>
								</li>
								<li>
									<strong>Connectives:</strong>
									<ul className="list-none pl-4 mt-2 space-y-1 text-sm bg-slate-50 p-3 rounded border border-slate-200">
										<li>
											<MathJax>$\neg$ (NOT) - Negation</MathJax>
										</li>
										<li>
											<MathJax>$\vee$ (OR) - Disjunction</MathJax>
										</li>
										<li>
											<MathJax>$\wedge$ (AND) - Conjunction</MathJax>
										</li>
										<li>
											<MathJax>
												$\to$ (IMPLIES / IF-THEN) - Material implication
											</MathJax>
										</li>
									</ul>
								</li>
								<li>
									<strong>Punctuation:</strong>{" "}
									<MathJax>Parentheses $( )$ to group things.</MathJax>
								</li>
							</ul>

							<h3 className="font-semibold text-lg text-slate-800 mt-6">
								Formation Rules (What makes a formula "Well-Formed"):
							</h3>
							<ol className="list-decimal pl-6 space-y-2">
								<li>
									<MathJax>
										A standalone proposition ($p$) is a formula.
									</MathJax>
								</li>
								<li>
									<MathJax>
										If $A$ and $B$ are formulas, then $(\neg A)$, $(A\vee B)$,
										$(A\wedge B)$, and $(A\to B)$ are valid formulas.
									</MathJax>
								</li>
							</ol>
						</div>
					</section>

					{/* Section: First Order Logic */}
					<section
						id="first-order-logic"
						className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
					>
						<h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-amber-500 pl-4">
							4. First-Order Logic (FOL)
						</h2>
						<div className="space-y-4 text-slate-700">
							<p>
								First-order logic solves the expressiveness problem of
								propositional logic. Instead of treating sentences as
								indivisible blocks, FOL zooms in and breaks them down into{" "}
								<strong>objects, properties, and relationships</strong>.
							</p>

							<h3 className="font-semibold text-lg text-slate-800 mt-6">
								The FOL Alphabet includes:
							</h3>
							<div className="grid md:grid-cols-2 gap-4 text-sm mt-2">
								<div className="bg-slate-50 p-4 rounded border border-slate-200">
									<strong>Variables</strong>{" "}
									<MathJax>($X, Y$): Stand-ins for unknown objects.</MathJax>
								</div>
								<div className="bg-slate-50 p-4 rounded border border-slate-200">
									<strong>Constants</strong>{" "}
									<MathJax>($a, b$, "John"): Specific, named objects.</MathJax>
								</div>
								<div className="bg-slate-50 p-4 rounded border border-slate-200">
									<strong>Function symbols</strong>{" "}
									<MathJax>
										($f, g$): Maps objects to other objects (e.g.,{" "}
										<code>fatherOf(John)</code> maps to a specific person).
									</MathJax>
								</div>
								<div className="bg-slate-50 p-4 rounded border border-slate-200">
									<strong>Predicate symbols</strong>{" "}
									<MathJax>
										($p, q$): Asks a true/false question about objects (e.g.,{" "}
										<code>isHuman(John)</code> is TRUE or FALSE).
									</MathJax>
								</div>
								<div className="bg-slate-50 p-4 rounded border border-slate-200">
									<strong>Quantifiers:</strong> <br />
									<MathJax>$\forall$ (For All / Every)</MathJax>
									<br />
									<MathJax>$\exists$ (There Exists / At least one)</MathJax>
								</div>
								<div className="bg-slate-50 p-4 rounded border border-slate-200">
									<strong>Connectives & Punctuation:</strong> Same as
									propositional logic.
								</div>
							</div>

							<h3 className="font-semibold text-lg text-slate-800 mt-8 mb-4 border-b pb-2">
								Building Blocks of FOL:
							</h3>

							<div className="space-y-6">
								<div>
									<h4 className="font-bold text-slate-800">1. Term</h4>
									<p className="text-sm mb-2">
										A term is an expression that represents an <em>object</em>.
										It is either:
									</p>
									<ul className="list-disc pl-6 text-sm">
										<li>
											A constant (e.g., <code>John</code>)
										</li>
										<li>
											<MathJax>A variable (e.g., $X$)</MathJax>
										</li>
										<li>
											<MathJax>
												A function applied to terms: $f(X_1, X_2,\dots,X_n)$
												(e.g., <code>bestFriendOf(John)</code>)
											</MathJax>
										</li>
									</ul>
								</div>

								<div>
									<h4 className="font-bold text-slate-800">2. Atom</h4>
									<p className="text-sm mb-2">
										<MathJax>
											An atom is the smallest true/false statement. If $p$ is a
											predicate and $X_1,\dots,X_n$ are terms, then $p(X_1,
											\dots, X_n)$ is an atom.
										</MathJax>
									</p>
									<p className="text-sm text-slate-500 bg-slate-100 p-2 rounded">
										<em>Example:</em> <code>isOlder(fatherOf(John), John)</code>
									</p>
								</div>

								<div>
									<h4 className="font-bold text-slate-800">3. Literal</h4>
									<p className="text-sm">
										An atom (positive literal) or the negation of an atom
										(negative literal).
										<br />
										<em>Example:</em> <MathJax>$\neg$ </MathJax>
										<code>isOlder(John, fatherOf(John))</code>
									</p>
								</div>
							</div>

							<h3 className="font-semibold text-lg text-slate-800 mt-6">
								Formation rules (Well-formed formulas in FOL):
							</h3>
							<ol className="list-decimal pl-6 space-y-1">
								<li>An atom is a formula.</li>
								<li>
									<MathJax>
										If $A$ is a formula, then $(\forall X)A$ and $(\exists X)A$
										are formulas.
									</MathJax>
								</li>
								<li>
									<MathJax>
										If $A$ and $B$ are formulas, then $(\neg A)$, $(A\vee B)$,
										$(A\wedge B)$, and $(A\to B)$ are formulas.
									</MathJax>
								</li>
							</ol>
						</div>
					</section>

					{/* Section: Semantics */}
					<section
						id="semantics"
						className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
					>
						<h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-purple-500 pl-4">
							5. Semantics (Meaning & Truth)
						</h2>
						<div className="space-y-4 text-slate-700">
							<p>
								Syntax is about moving symbols around.{" "}
								<strong>Semantics</strong> (or model theory) is about what those
								symbols actually <em>mean</em> in the real world.
							</p>

							<h3 className="font-semibold text-lg text-slate-800 mt-6">
								<MathJax>Interpretation ($I$)</MathJax>
							</h3>
							<p>
								An interpretation assigns meaning to our abstract symbols. It
								requires 4 things:
							</p>
							<ol className="list-decimal pl-6 space-y-2">
								<li>
									<MathJax>
										<strong>Domain ($D$):</strong> A non-empty set of objects we
										are talking about (e.g., the set of all living humans).
									</MathJax>
								</li>
								<li>
									<MathJax>
										Assigning <strong>constants</strong> to specific objects in
										$D$ (e.g., $a$ = Alice).
									</MathJax>
								</li>
								<li>
									<MathJax>
										Assigning <strong>functions</strong> ($f:D^n\to D$) (e.g.,
										mapping a person to their biological mother).
									</MathJax>
								</li>
								<li>
									<MathJax>
										Assigning <strong>predicates</strong> to return TRUE/FALSE (
										{"$p:D^n\\to \\{T, F\\}$"}) (e.g., is $a$ taller than $b$?).
									</MathJax>
								</li>
							</ol>

							<div className="bg-purple-50 border border-purple-100 p-5 rounded-lg mt-6">
								<h4 className="font-bold text-purple-900 mb-2">
									Example of Interpretations
								</h4>
								<p className="text-sm mb-3 text-purple-800">
									Consider the abstract formulas:
								</p>
								<ul className="font-mono text-sm text-purple-900 space-y-1 mb-4 pl-4 math-block">
									<li>
										<MathJax>$p(a,b)$</MathJax>
									</li>
									<li>
										<MathJax>$p(b,c)$</MathJax>
									</li>
									<li>
										<MathJax>
											$\forall X \forall Y \forall Z \ (p(X,Z) \wedge p(Z,Y) \to
											p(X,Y))${" "}
										</MathJax>
										<em>(Note: Quantifiers added for strict FOL accuracy)</em>
									</li>
								</ul>

								<div className="grid md:grid-cols-2 gap-4">
									<div className="bg-white p-3 rounded shadow-sm">
										<strong className="text-red-600 block mb-1">
											Interpretation 1: "Parent"
										</strong>
										<p className="text-xs">
											<MathJax>Domain = Humans. $p$ = "is parent of".</MathJax>
										</p>
										<p className="text-xs mt-2 italic text-slate-600">
											If Alice is the parent of Bob, and Bob is the parent of
											Charlie... is Alice the parent of Charlie?{" "}
											<strong>No, she is the grandparent.</strong> The third
											formula fails.
										</p>
									</div>
									<div className="bg-white p-3 rounded shadow-sm">
										<strong className="text-green-600 block mb-1">
											Interpretation 2: "Greater Than"
										</strong>
										<p className="text-xs">
											<MathJax>Domain = Integers. $p$ = "&gt;".</MathJax>
										</p>
										<p className="text-xs mt-2 italic text-slate-600">
											<MathJax>
												If 5 &gt; 3, and 3 &gt; 1, is 5 &gt; 1?{" "}
												<strong>Yes.</strong> This perfectly aligns with the
												transitive property in the third formula.
											</MathJax>
										</p>
									</div>
								</div>
							</div>

							<h3 className="font-semibold text-lg text-slate-800 mt-8 mb-2">
								Definition of Truth in an Interpretation
							</h3>
							<ul className="list-disc pl-6 space-y-1 text-sm bg-slate-50 p-4 rounded border border-slate-200">
								<li>
									<MathJax>
										$A$ is true for $I \iff I$ assigns TRUE value to $A$
									</MathJax>
								</li>
								<li>
									<MathJax>
										$\neg A$ is true for $I \iff I$ assigns FALSE to $A$
									</MathJax>
								</li>
								<li>
									<MathJax>
										$A \wedge B$ is true for $I \iff I$ assigns TRUE to{" "}
										<strong>both</strong> $A$ and $B$
									</MathJax>
								</li>
								<li>
									<MathJax>
										$A \vee B$ is true for $I \iff I$ assigns TRUE to{" "}
										<strong>either</strong> $A$ or $B$
									</MathJax>
								</li>
								<li>
									<MathJax>
										$A \to B$ is true for $I \iff I$ either assigns FALSE to
										$A$, or TRUE to $B${" "}
										<em>
											(If the premise is false, the implication is vacuously
											true)
										</em>
									</MathJax>
								</li>
							</ul>

							<h3 className="font-semibold text-lg text-slate-800 mt-6">
								Models
							</h3>
							<p>
								<MathJax>
									An interpretation $I$ is a <strong>Model</strong> of a formula
									$F$ (denoted $M_F$) <strong>IF AND ONLY IF (IFF)</strong> $F$
									evaluates to TRUE under $I$.
								</MathJax>
							</p>
							<p>
								<em>From our example above:</em> The "greater_than"
								interpretation IS a model for our formulas. The "parent"
								interpretation is NOT a model.
							</p>
						</div>
					</section>

					{/* Section: Valid, Satisfiable, Unsatisfiable */}
					<section
						id="validity"
						className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
					>
						<h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-teal-500 pl-4">
							6. Valid, Satisfiable & Unsatisfiable
						</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="bg-teal-50 p-5 rounded border border-teal-100">
								<h3 className="font-bold text-teal-900 mb-2">
									Valid (Tautology)
								</h3>
								<p className="text-sm text-teal-800">
									<MathJax>
										$\models F$
										<br />
										True under <strong>EVERY</strong> possible interpretation.
										It is an absolute, unavoidable truth.
									</MathJax>
								</p>
								<p className="text-xs mt-2 italic bg-white p-2 rounded">
									<MathJax>
										Example: "It is raining OR it is not raining." ($A \vee \neg
										A$)
									</MathJax>
								</p>
							</div>
							<div className="bg-blue-50 p-5 rounded border border-blue-100">
								<h3 className="font-bold text-blue-900 mb-2">Satisfiable</h3>
								<p className="text-sm text-blue-800">
									True under <strong>AT LEAST ONE</strong> interpretation. It
									has at least one Model.
								</p>
								<p className="text-xs mt-2 italic bg-white p-2 rounded">
									Example: "It is raining." (True in some worlds, false in
									others).
								</p>
							</div>
							<div className="bg-rose-50 p-5 rounded border border-rose-100">
								<h3 className="font-bold text-rose-900 mb-2">
									Unsatisfiable (Contradiction)
								</h3>
								<p className="text-sm text-rose-800">
									True under <strong>NO</strong> interpretation. It is
									impossible.
								</p>
								<p className="text-xs mt-2 italic bg-white p-2 rounded">
									<MathJax>
										Example: "It is raining AND it is not raining." ($A \wedge
										\neg A$)
									</MathJax>
								</p>
							</div>
						</div>

						<div className="mt-8 space-y-4">
							<h3 className="font-semibold text-lg text-slate-800">
								Logical Consequences (Entailment: $\models$)
							</h3>
							<p className="text-slate-700">
								Entailment means one statement guarantees another. If our
								starting facts are true, our conclusion is absolutely forced to
								be true along with them.
							</p>
							<ul className="list-disc pl-6 text-slate-700 text-sm space-y-2">
								<li>
									<MathJax>
										$G \models F$ : If we know $G$ is true in a world, $F$ is{" "}
										<strong>guaranteed</strong> to be true in that same world.
									</MathJax>
								</li>
								<li>
									<MathJax>
										$\Gamma \models F$ : If every formula in a set of formulas
										($\Gamma$) is true, $F$ is forced to be true.
									</MathJax>
								</li>
							</ul>

							<h3 className="font-semibold text-lg text-slate-800 mt-6">
								Consistency
							</h3>
							<p className="text-slate-700">
								A set of formulas is <strong>consistent</strong> if it has at
								least one model. (Meaning, the facts don't contradict each other
								and can logically co-exist in some universe).
							</p>
						</div>
					</section>

					{/* Section: Syntax */}
					<section
						id="syntax"
						className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
					>
						<h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-rose-500 pl-4">
							7. Syntax (Proof Theory)
						</h2>
						<div className="space-y-4 text-slate-700">
							<p>
								Syntax is the mechanical study of the deductive apparatus. It
								doesn't care about "meaning" or "truth" (that's semantics); it
								only cares about whether you followed the rules to generate
								symbols.
							</p>

							<h3 className="font-semibold text-lg text-slate-800 mt-6">
								Modus Ponens Rule
							</h3>
							<p>
								<MathJax>
									The core deductive argument form. If $A$ is true, and $A \to
									B$ is true, then $B$ is the immediate consequence.
								</MathJax>
							</p>
							<div className="bg-slate-50 p-3 rounded border border-slate-200 text-sm font-mono inline-block">
								1. A<br />
								2. A &rarr; B<br />
								--------
								<br />
								&there4; B
							</div>

							<div className="grid md:grid-cols-2 gap-6 mt-6">
								<div>
									<h3 className="font-bold text-slate-800 border-b pb-1 mb-2">
										<MathJax>Proof & Theorem ($\vdash$)</MathJax>
									</h3>
									<p className="text-sm">
										<MathJax>
											A <strong>proof</strong> is a finite sequence of formulas
											where each step is either an axiom or derived via Modus
											Ponens. If a formula $F$ is the final line of a valid
											proof, $F$ is a <strong>Theorem</strong> (denoted $\vdash
											F$).
										</MathJax>
									</p>
								</div>
								<div>
									<h3 className="font-bold text-slate-800 border-b pb-1 mb-2">
										<MathJax>Derivation ($\Gamma \vdash F$)</MathJax>
									</h3>
									<p className="text-sm">
										<MathJax>
											Similar to a proof, but you are also allowed to use a
											given set of formulas ($\Gamma$) as starting facts. $F$ is
											a consequence of $\Gamma$ in syntax.
										</MathJax>
									</p>
								</div>
							</div>

							<div className="bg-rose-50 border border-rose-200 p-6 rounded-lg mt-8 text-center">
								<h3 className="font-bold text-rose-900 text-xl mb-4">
									The Bridge: Soundness & Completeness
								</h3>
								<p className="text-sm text-rose-800 mb-4">
									The most beautiful part of logic is how Syntax (symbol
									manipulation) and Semantics (real-world truth) connect
									perfectly in First-Order Logic.
								</p>

								<div className="grid sm:grid-cols-2 gap-4 text-left">
									<div className="bg-white p-4 rounded shadow-sm border border-rose-100">
										<strong className="text-slate-800 block mb-1">
											Soundness
										</strong>
										<span className="font-mono text-xs text-slate-500 mb-2 block">
											<MathJax>
												If $\Gamma \vdash F$ then $\Gamma \models F$
											</MathJax>
										</span>
										<p className="text-xs text-slate-600">
											"The proof system doesn't lie." If you can mathematically
											prove something using syntax, it is guaranteed to be true
											in the semantic world.
										</p>
									</div>
									<div className="bg-white p-4 rounded shadow-sm border border-rose-100">
										<strong className="text-slate-800 block mb-1">
											Completeness
										</strong>
										<span className="font-mono text-xs text-slate-500 mb-2 block">
											<MathJax>
												If $\Gamma \models F$ then $\Gamma \vdash F$
											</MathJax>
										</span>
										<p className="text-xs text-slate-600">
											"The proof system is powerful enough." If something is
											universally true in semantics, there absolutely exists a
											syntactic proof for it.
										</p>
									</div>
								</div>
								<p className="text-sm font-bold mt-4 text-rose-900 bg-white inline-block px-4 py-2 rounded-full border border-rose-200 shadow-sm">
									<MathJax>
										Syntax Consistent $\iff$ Semantics Consistent
									</MathJax>
								</p>
							</div>
						</div>
					</section>
				</main>

				<footer className="mt-16 border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
					<p>
						Generated based on user-provided Knowledge Representation notes.
					</p>
				</footer>
			</div>
		</div>
	);
}

export default KnowledgeRepresentation;

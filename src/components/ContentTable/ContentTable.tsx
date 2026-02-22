import { useState } from "react";

function ContentTable() {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	return (
		<>
			{/* Toggle Button */}
			<button
				onClick={onOpen}
				className={`fixed top-6 left-6 z-40 p-2.5 bg-white rounded-lg shadow-md border border-slate-200 text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-opacity duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
				aria-label="Open Table of Contents"
				aria-expanded={isOpen}
				aria-controls="drawer-content"
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>

			{/* Overlay - Now applies to all screens since the component manages its own state */}
			<div
				className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
				onClick={onClose}
			/>

			<aside
				id="drawer-content"
				inert={!isOpen}
				className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.05)] border-r border-slate-200 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div className="p-6">
					<div className="flex items-center justify-between mb-8">
						<h3 className="font-bold text-slate-800 text-lg">
							Table of Contents
						</h3>
						<button
							onClick={onClose}
							className="text-slate-400 hover:text-slate-600 focus:outline-none p-1.5 rounded-md hover:bg-slate-100 transition-colors"
							aria-label="Close Table of Contents"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<nav className="space-y-2 text-sm text-slate-600 font-medium">
						<a
							href="#scripts-frames"
							onClick={onClose}
							className="block hover:text-blue-600 transition-colors p-2 -mx-2 rounded hover:bg-blue-50"
						>
							1. Early Knowledge Rep.
						</a>
						<a
							href="#formal-system"
							onClick={onClose}
							className="block hover:text-indigo-600 transition-colors p-2 -mx-2 rounded hover:bg-indigo-50"
						>
							2. Formal System
						</a>
						<a
							href="#propositional-logic"
							onClick={onClose}
							className="block hover:text-green-600 transition-colors p-2 -mx-2 rounded hover:bg-green-50"
						>
							3. Propositional Logic
						</a>
						<a
							href="#first-order-logic"
							onClick={onClose}
							className="block hover:text-amber-600 transition-colors p-2 -mx-2 rounded hover:bg-amber-50"
						>
							4. First-Order Logic
						</a>
						<a
							href="#semantics"
							onClick={onClose}
							className="block hover:text-purple-600 transition-colors p-2 -mx-2 rounded hover:bg-purple-50"
						>
							5. Semantics
						</a>
						<a
							href="#validity"
							onClick={onClose}
							className="block hover:text-teal-600 transition-colors p-2 -mx-2 rounded hover:bg-teal-50"
						>
							6. Valid & Satisfiable
						</a>
						<a
							href="#syntax"
							onClick={onClose}
							className="block hover:text-rose-600 transition-colors p-2 -mx-2 rounded hover:bg-rose-50"
						>
							7. Syntax
						</a>
					</nav>
				</div>
			</aside>
		</>
	);
}

export default ContentTable;

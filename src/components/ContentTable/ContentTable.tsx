import type { ContentTableProps } from "./types";

const HOVER_COLORS = [
	"hover:text-blue-600 hover:bg-blue-50",
	"hover:text-indigo-600 hover:bg-indigo-50",
	"hover:text-green-600 hover:bg-green-50",
	"hover:text-amber-600 hover:bg-amber-50",
	"hover:text-purple-600 hover:bg-purple-50",
	"hover:text-teal-600 hover:bg-teal-50",
	"hover:text-rose-600 hover:bg-rose-50",
];

function ContentTable({ items, isOpen, onOpen, onClose }: ContentTableProps) {
	return (
		<>
			{/* Toggle Button */}
			<button
				onClick={onOpen}
				className={`fixed top-6 left-6 z-40 p-2.5 bg-white rounded-lg shadow-md border border-slate-200 text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-opacity duration-300 cursor-pointer ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
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
							className="text-slate-400 hover:text-slate-600 focus:outline-none p-1.5 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
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
						{items.map((item, index) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								onClick={onClose}
								className={`block transition-colors p-2 -mx-2 rounded ${
									HOVER_COLORS[index % HOVER_COLORS.length]
								}`}
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</aside>
		</>
	);
}

export default ContentTable;

import { MathJaxContext } from "better-react-mathjax";

import MathJaxConfig from "@/config/mathJax";
import KnowledgeRepresentation from "@/pages/KnowledgeRepresentation";

function App() {
	return (
		<MathJaxContext config={MathJaxConfig}>
			<KnowledgeRepresentation />
		</MathJaxContext>
	);
}

export default App;

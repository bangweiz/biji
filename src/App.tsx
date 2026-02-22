import { MathJaxContext } from "better-react-mathjax";

import MathJaxConfig from "@/config/mathJax";

function App() {
	return <MathJaxContext config={MathJaxConfig}></MathJaxContext>;
}

export default App;

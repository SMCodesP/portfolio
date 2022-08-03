import ReactMarkdown from "react-markdown";

import CodeBlock from "../Markdown/CodeBlock";
import InlineCode from "../Markdown/InlineCode";

const RenderMarkdown = ({ children }) => {
	return (
		<ReactMarkdown
			children={children}
			components={{ code: CodeBlock, inlineCode: InlineCode }}
		/>
	);
};

export default RenderMarkdown;

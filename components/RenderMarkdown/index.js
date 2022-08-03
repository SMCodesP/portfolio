import ReactMarkdown from "react-markdown";

import CodeBlock from "../Markdown/CodeBlock";
import InlineCode from "../Markdown/InlineCode";

const RenderMarkdown = ({ children }) => {
	return (
		<ReactMarkdown
			children={children}
			components={{
				code({ inline, className, children, language, ...props }) {
					const match = /language-(\w+)/.exec(className || "");
					return !inline && match ? (
						<CodeBlock
							children={String(children).replace(/\n$/, "")}
							language={match[1]}
							PreTag="div"
							{...props}
						/>
					) : (
						<InlineCode children={children} {...props} />
					);
				},
			}}
		/>
	);
};

export default RenderMarkdown;

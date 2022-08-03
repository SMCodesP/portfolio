import { useTheme } from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";

import docco from "../../../styles/SyntaxHighlightingThemes/docco";
import dracula from "../../../styles/SyntaxHighlightingThemes/dracula";

import { Container } from "./styles";

const CodeBlock = ({ children, language }) => {
	const { title } = useTheme();
	console.log(title);

	return (
		<Container>
			<SyntaxHighlighter
				language={language}
				style={title.toLowerCase() === "dark" ? dracula : docco}
			>
				{children}
			</SyntaxHighlighter>
		</Container>
	);
};

export default CodeBlock;

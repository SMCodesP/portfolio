import {useContext} from 'react'

import {ThemeContext} from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter';

import docco from '../../../styles/SyntaxHighlightingThemes/docco';
import dracula from '../../../styles/SyntaxHighlightingThemes/dracula';

import {
	Container
} from './styles'

const CodeBlock = ({value, language}) => {
	const {title} = useContext(ThemeContext)
	const codeString = '(num) => num + 1 + 2';
	return (
		<Container>
			<SyntaxHighlighter language={language} style={(title.toLowerCase() === "dark") ? dracula : docco}>
				{value}
			</SyntaxHighlighter>
		</Container>
	);
};

export default CodeBlock;
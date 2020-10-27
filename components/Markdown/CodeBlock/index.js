import SyntaxHighlighter from 'react-syntax-highlighter';

import docco from '../../../styles/SyntaxHighlightingThemes/docco';
import dracula from '../../../styles/SyntaxHighlightingThemes/dracula';

import styles from './CodeBlock.module.css'

const CodeBlock = ({value, language}) => {
	const title = getComputedStyle(document.body).getPropertyValue('--title')
	const codeString = '(num) => num + 1 + 2';

	return (
		<div className={styles.container}>
			<SyntaxHighlighter language={language} style={(title.toLowerCase() === "dark") ? dracula : docco}>
				{value}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeBlock;
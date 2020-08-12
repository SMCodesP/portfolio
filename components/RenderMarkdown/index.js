import ReactMarkdown from 'react-markdown';

import CodeBlock from '../Markdown/CodeBlock'
import InlineCode from '../Markdown/InlineCode'

export default ({text}) => {
	return <ReactMarkdown
		source={text}
		renderers={{ code: CodeBlock, inlineCode: InlineCode }}
	/>
}
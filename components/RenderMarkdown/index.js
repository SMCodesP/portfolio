import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown';

const CodeBlock = dynamic(() => import('../Markdown/CodeBlock'))
const InlineCode = dynamic(() =>  import('../Markdown/InlineCode'))

export default ({text}) => {
	return <ReactMarkdown
		source={text}
		renderers={{ code: CodeBlock, inlineCode: InlineCode }}
	/>
}
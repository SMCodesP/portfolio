import CodeBlock from '../CodeBlock'
import ReactMarkdown from 'react-markdown';

export default ({text}) => {
	return <ReactMarkdown
		source={text}
		renderers={{ code: CodeBlock }}
	/>
}
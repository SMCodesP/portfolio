import {useState, useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import {
	Container,
	ContainerSuccess,
} from './styles'

export default ({text, children, success}) => {
	const [actived, setActived] = useState(false)
	const [opacity, setOpacity] = useState(false)

	useEffect(() => {
		if (actived === true) {
			setTimeout(() => {
				setActived(false)
			}, 5000)
		}
	}, [actived])

	return (
		<>
			<CopyToClipboard
				text={text}
				onCopy={() => setActived(true)}
			>
				{children}
			</CopyToClipboard>

			<Container actived={actived}>
				<ContainerSuccess>
					{success}
					{actived && (<span></span>)}
				</ContainerSuccess>
			</Container>
		</>
	)
}

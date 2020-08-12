import {useState, useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import {
	Container,
	ContainerSuccess,
} from './styles'

export default ({text, children, success}) => {
	const [actived, setActived] = useState(false)
	const [display, setDisplay] = useState(false)

	useEffect(() => {
		if (actived) {
			setTimeout(() => {
				setActived(false)
				clearTimeout()
				setTimeout(() => {
					setDisplay(false)
					clearTimeout()
				}, 500)
			}, 5000)
		}
	}, [actived])

	return (
		<>
			<CopyToClipboard
				text={text}
				onCopy={() => {
					setActived(true)
					setDisplay(true)
				}}
			>
				{children}
			</CopyToClipboard>

			{display && (
				<Container actived={actived}>
					<ContainerSuccess>
						{success}
						{actived && (<span></span>)}
					</ContainerSuccess>
				</Container>
			)}
		</>
	)
}

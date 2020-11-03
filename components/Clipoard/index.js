import {useState, useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import { darken } from 'polished'

import styles from './styles'

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
				<div
					className={styles.container}
					style={{
						opacity: actived ? 1 : 0
					}}>
					<div
						className={styles.container_success}
						style={{
							backgroundColor: darken(0.07, getComputedStyle(document.body).getPropertyValue('--background'))
						}}
					>
 						{success}
						{actived && (
							<span style={{
								backgroundColor: darken(0.4, getComputedStyle(document.body).getPropertyValue('--background')),
								backgroundImage: `linear-gradient(to bottom, ${darken(0.08, getComputedStyle(document.body).getPropertyValue('--background'))}, ${darken(0.5, getComputedStyle(document.body).getPropertyValue('--background'))})`,
							}}></span>
						)}
					</div>
				</div>
			)}
		</>
	)
}

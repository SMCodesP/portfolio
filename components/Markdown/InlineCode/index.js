import {useEffect, useState} from 'react'

import copyTextToClipboard from '../../../utils/copyTextToClipboard'

import styles_clipoard from '../../Clipoard/styles'

export default ({value}) => {
	const [actived, setActived] = useState(false)
	const [display, setDisplay] = useState(false)
	const [text, setText] = useState('')

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

	async function codeCopyText() {
		if (actived === true || display === true)
			return;

		const res = await copyTextToClipboard(value)

		setText(res)

		setActived(true)
		setDisplay(true)
	}

	return (
		<>
			<code onClick={codeCopyText}>{value}</code>

			{display && (
				<div
					className={styles_clipoard.container}
					style={{
						opacity: actived ? 1 : 0
					}}>
					<div
						className={styles_clipoard.container_success}
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

      <style jsx>{`
      	code {
					background: ${({theme}) => theme.colors.background};
					padding: 5px;
					margin: 0 2px;
					border-radius: 5px;
					cursor: pointer;
					transition: filter .4s;
      	}
				code:hover {
					filter: brightness(65%);
				}
      `}</style>
		</>
	)
}
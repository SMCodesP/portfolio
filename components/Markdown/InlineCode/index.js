import {useEffect, useState} from 'react'
import styled from 'styled-components'

import copyTextToClipboard from '../../../utils/copyTextToClipboard'

import {
	Container as ContainerClipboard,
	ContainerSuccess,
} from '../../Clipoard/styles'

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
				<ContainerClipboard actived={actived}>
					<ContainerSuccess>
						{text}
						{actived && (<span></span>)}
					</ContainerSuccess>
				</ContainerClipboard>
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
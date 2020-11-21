import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import {
	ContainerDropDownMenu,
	Page,
	ListDropPage,
	DropPage,
} from './styles'

function DropDownMenu({ children, items, ...props}) {
	const {colors} = useContext(ThemeContext)
	const [showMenuHover, setShowMenuHover] = useState(false)

	function showDropMenuHover() {
		setShowMenuHover(true)
	}

	function closeDropMenuHover() {
		setShowMenuHover(false)
	}

	return (
		<ContainerDropDownMenu showMenuHover={showMenuHover}>
			<div style={{
				display: 'flex',
				margin: 'auto 0',
			}}>
				<Page
					onMouseEnter={showDropMenuHover}
					onMouseLeave={closeDropMenuHover}
					{...props}
				>
					{children}
				</Page>
				<FiChevronDown
					size={20}
					color={colors.text}
				/>
			</div>

			{showMenuHover && (
				<ListDropPage
					onMouseEnter={showDropMenuHover}
					onMouseLeave={closeDropMenuHover}
				>
					{items.map(({name, displayed}) => (
						<Link key={displayed.toString()} href={name}>
							<a>
								<DropPage>{displayed}</DropPage>
							</a>
						</Link>
					))}
				</ListDropPage>
			)}
		</ContainerDropDownMenu>
	)
}

export default DropDownMenu
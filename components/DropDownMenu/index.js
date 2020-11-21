import Link from 'next/link'
import {useState, useEffect} from 'react'

import {
	ContainerDropDownMenu,
	Page,
	ListDropPage,
	DropPage,
} from './styles'

function DropDownMenu({ children, items, ...props}) {
	const [showMenuHover, setShowMenuHover] = useState(false)

	function showDropMenuHover() {
		setShowMenuHover(true)
	}

	function closeDropMenuHover() {
		setShowMenuHover(false)
	}

	return (
		<ContainerDropDownMenu>
			<Page
				onMouseEnter={showDropMenuHover}
				onMouseLeave={closeDropMenuHover}
				{...props}
			>{children}</Page>

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
import {useContext} from 'react';

import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends, FaGlobeAmericas } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { CgLogOut } from 'react-icons/cg';
import { MdSettings } from 'react-icons/md';
import { ThemeContext } from 'styled-components'

import {
	MenuBar,
	ListPages,
	Page,
} from './styles';

export default function MenuBarDashboard() {
	const theme = useContext(ThemeContext)

	return (
		<MenuBar>
			<GiHamburgerMenu
				size={32}
				color={theme.colors.text}
				style={{
					margin: 12,
					cursor: 'pointer'
				}}
			/>
			<ListPages>
				<Page>
					<AiFillHome
						size={28}
						color={theme.colors.text}
					/>
				</Page>
				<Page>
					<FaUserFriends
						size={28}
						color={theme.colors.text}
					/>
				</Page>
				<Page>
					<VscDebugDisconnect
						size={28}
						color={theme.colors.text}
					/>
				</Page>
				<Page>
					<FaGlobeAmericas
						size={28}
						color={theme.colors.text}
					/>
				</Page>
				<Page>
					<MdSettings
						size={28}
						color={theme.colors.text}
					/>
				</Page>
			</ListPages>
			<Page>
				<CgLogOut
					size={32}
					color="#e02041"
					styled={{
						marginBottom: 25
					}}
				/>
			</Page>
		</MenuBar>
	);
}

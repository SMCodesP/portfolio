import Link from 'next/link';
import {useContext, useState} from 'react';

import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends, FaGlobeAmericas } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { CgLogOut } from 'react-icons/cg';
import { MdSettings } from 'react-icons/md';
import { ThemeContext } from 'styled-components'

import ModalSetting from '../ModalSetting'

import {
	MenuBar,
	ListPages,
	Page,
} from './styles';

export default function MenuBarDashboard({location}) {
	const theme = useContext(ThemeContext)
	const [showModal, setShowModal] = useState(false);

	return (
		<MenuBar>
			<GiHamburgerMenu
				size={32}
				color={theme.colors.text}
				style={{
					textAlign: 'center',
					alignSelf: 'center',
					cursor: 'pointer'
				}}
			/>
			<ListPages>
				<Link href="/dashboard">
					<a>
						<Page selected={(location === "dashboard")}>
							<AiFillHome
								size={28}
								color={theme.colors.text}
							/>
						</Page>
					</a>
				</Link>
				<Link href="/dashboard/friends">
					<a>
						<Page selected={(location === "friends")}>
							<FaUserFriends
								size={28}
								color={theme.colors.text}
							/>
						</Page>
					</a>
				</Link>
				<Link href="/dashboard/plugins">
					<a>
						<Page selected={(location === "plugins")}>
							<VscDebugDisconnect
								size={28}
								color={theme.colors.text}
							/>
						</Page>
					</a>
				</Link>
				<Page selected={(location === "explorer")}>
					<FaGlobeAmericas
						size={28}
						color={theme.colors.text}
					/>
				</Page>
			</ListPages>
			<Page
				onClick={() => setShowModal(true)}
			>
				<MdSettings
					size={32}
					color={theme.colors.text}
					styled={{
						marginBottom: 25
					}}
				/>
			</Page>
			<Link href="/signin">
				<a>
					<Page>
						<CgLogOut
							size={32}
							color="#e02041"
							styled={{
								marginBottom: 25
							}}
						/>
					</Page>
				</a>
			</Link>
			<ModalSetting showModal={showModal} setShowModal={setShowModal} />
		</MenuBar>
	);
}

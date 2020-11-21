import {useContext} from 'react'
import { ThemeContext } from 'styled-components'
import Modal from 'react-modal';
import { shade } from "polished";

import ThemesContext from '../../contexts/themes'

import {
	IconMenu,
	Line,
	ListOptions,
	Option,
	OptionSelect,
	OptionTitle,
	UserIcon,
	UserMenu,
	Username,
} from './styles'

export default function ModalSetting({ setShowModal, showModal }) {
	const theme = useContext(ThemeContext)
	const {toggleTheme} = useContext(ThemesContext)

	const customStyles = {
		content: {
			top: '50vh',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '98%',
			background: shade(0.4, theme.colors.background),
			border: 0,
			padding: '3px',
			borderRadius: '5px',
			zIndex: 999
		},
		overlay: {
			backgroundColor: `${theme.colors.secundaryBackground}aa`,
			zIndex: 9999
		}
	};

	return (
		<Modal
			closeTimeoutMS={50}
			isOpen={showModal}
			onRequestClose={() => setShowModal(false)}
			contentLabel="Minimal Modal Example"
			style={customStyles}
		>
			<UserMenu>
				<IconMenu
					onClick={() => setShowModal(false)}
					closed={true}
					style={{
						alignSelf: 'flex-end',
						display: 'block'
					}}
				>
					<span></span>
				</IconMenu>
				<UserIcon
					src="/unknown.webp"
				/>
				<Username>Unknown</Username>
				<Line />
				<ListOptions>
					<Option>
						<OptionTitle>Dracula theme</OptionTitle>
						<OptionSelect
							onChange={toggleTheme}
							checked={(theme.title.toLowerCase() == 'dark')}
						/>
					</Option>
				</ListOptions>
			</UserMenu>
		</Modal>
	);
}

import { useContext, useState, useEffect } from 'react'

import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { BsCheckAll } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'

import styles from './Friend.module.css'

const DEFAULT_STATES = {
	permissionView: false,
	licenseView: false,
	managersUsers: false,
	configurateInformations: false,
}

const FriendComponent = () => {
	const theme = useContext(ThemeContext)
	const [permissionView, setPermissionView] = useState(false)
	const [licenseView, setLicenseView] = useState(false)
	const [managersUsers, setManagersUsers] = useState(false)
	const [configurateInformations, setConfigurateInformations] = useState(false)
	const [confirmStates, setConfirmStates] = useState(false)

	useEffect(() => {
		if (permissionView !== false
			|| licenseView !== false
			|| managersUsers !== false
			|| configurateInformations !== false) {
			setConfirmStates(true)
		} else {
			setConfirmStates(false)
		}
	}, [permissionView, licenseView, managersUsers, configurateInformations])

	return (
		<>
			<li className={styles.friend}>
				<div className={styles.user_header}>
					<img
						src="/favicon.jpg"
						alt="User avatar"
						className={styles.user_avatar}
					/>
					<h2 className={styles.username}>SMCodes</h2>
					<FiTrash2
						size={24}
						color="#e02041"
						className={styles.trash}
					/>
				</div>
				<ul className={styles.list_permissions}>
					<li className={styles.permission}>
						<p style={{
							margin: '0 7px 0 0'
						}}>Ver produtos comprados</p>
						<Switch
							checked={permissionView}
							onChange={() => setPermissionView(!permissionView)}
							offHandleColor={theme.colors.tertiary}
							onHandleColor={theme.colors.tertiary}
							offColor={theme.colors.background}
							onColor={theme.colors.primary}
							handleDiameter={20}
							boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
							activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
							height={17}
							width={35}
						/>
					</li>
					<li className={styles.permission}>
						<p style={{
							margin: '0 7px 0 0'
						}}>Ver licenças</p>
						<Switch
							checked={licenseView}
							onChange={() => setLicenseView(!licenseView)}
							offHandleColor={theme.colors.tertiary}
							onHandleColor={theme.colors.tertiary}
							offColor={theme.colors.background}
							onColor={theme.colors.primary}
							handleDiameter={20}
							boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
							activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
							height={17}
							width={35}
						/>
					</li>
					<li className={styles.permission}>
						<p style={{
							margin: '0 7px 0 0'
						}}>Gerenciar utilizadores</p>
						<Switch
							checked={managersUsers}
							onChange={() => setManagersUsers(!managersUsers)}
							offHandleColor={theme.colors.tertiary}
							onHandleColor={theme.colors.tertiary}
							offColor={theme.colors.background}
							onColor={theme.colors.primary}
							handleDiameter={20}
							boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
							activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
							height={17}
							width={35}
						/>
					</li>
					<li className={styles.permission}>
						<p style={{
							margin: '0 7px 0 0'
						}}>Configurar informações</p>
						<Switch
							checked={configurateInformations}
							onChange={() => setConfigurateInformations(!configurateInformations)}
							offHandleColor={theme.colors.tertiary}
							onHandleColor={theme.colors.tertiary}
							offColor={theme.colors.background}
							onColor={theme.colors.primary}
							handleDiameter={20}
							boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
							activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
							height={17}
							width={35}
						/>
					</li>
				</ul>
				{confirmStates && (
					<div className={styles.confirm_configure}>
						<BsCheckAll
							color="#20e066"
							size={26}
						/>
						<FiX
							color="#e02041"
							size={26}
						/>
					</div>
				)}
			</li>
		</>
	)
}

export default FriendComponent

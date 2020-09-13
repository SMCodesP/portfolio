import { useState } from 'react'

import Switch from 'react-switch'

import {
	Friend,
	UserHeader,
	Username,
	UserAvatar,
	ListPermissions,
	Permission,
	Trash,
} from './styles'

const FriendComponent = () => {
	const [permissionView, setPermissionView] = useState(false)
	const [licenseView, setLicenseView] = useState(false)
	const [managersUsers, setManagersUsers] = useState(false)
	const [configurateMessages, setConfigurateMessages] = useState(false)

	return (
		<Friend>
			<UserHeader>
				<UserAvatar src="/favicon.jpg" alt="User avatar" />
				<Username>SMCodes</Username>
				<Trash
					size={24}
					color="#e02041"
				/>
			</UserHeader>
			<ListPermissions>
				<Permission>
					<p style={{
						margin: '0 7px 0 0'
					}}>Ver produtos comprados</p>
					<Switch
						checked={permissionView}
						onChange={() => setPermissionView(!permissionView)}
					    handleDiameter={20}
					    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					    activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
					    height={17}
					    width={35}
					/>
				</Permission>
				<Permission>
					<p style={{
						margin: '0 7px 0 0'
					}}>Ver licenças</p>
					<Switch
						checked={licenseView}
						onChange={() => setLicenseView(!licenseView)}
					    handleDiameter={20}
					    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					    activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
					    height={17}
					    width={35}
					/>
				</Permission>
				<Permission>
					<p style={{
						margin: '0 7px 0 0'
					}}>Gerenciar utilizadores</p>
					<Switch
						checked={managersUsers}
						onChange={() => setManagersUsers(!managersUsers)}
					    handleDiameter={20}
					    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					    activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
					    height={17}
					    width={35}
					/>
				</Permission>
				<Permission>
					<p style={{
						margin: '0 7px 0 0'
					}}>Configurar mensagens</p>
					<Switch
						checked={configurateMessages}
						onChange={() => setConfigurateMessages(!configurateMessages)}
					    handleDiameter={20}
					    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					    activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
					    height={17}
					    width={35}
					/>
				</Permission>
			</ListPermissions>
		</Friend>
	)
}

export default FriendComponent

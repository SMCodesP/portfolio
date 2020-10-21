import { useState } from 'react'
import Loader from 'react-loader-spinner'

import {
	ContainerOptionsManagment,
	OptionManagment as OptionManagmentComponent,
	ContainerManagment,
} from './styles'

function OptionManagment({ theme }) {
	const [optionManagment, setOptionManagment] = useState('configs')

	return (
		<>
			<ContainerOptionsManagment>
				<OptionManagmentComponent
					selected={(optionManagment === 'configs')}
					onClick={() => setOptionManagment('configs')}
					style={{
						marginRight: 2.5
					}}
				>
					<h1>Configuração</h1>
				</OptionManagmentComponent>
				<OptionManagmentComponent
					selected={(optionManagment === 'logs')}
					onClick={() => setOptionManagment('logs')}
					style={{
						marginLeft: 2.5
					}}
				>
					<h1>Logs</h1>
				</OptionManagmentComponent>
			</ContainerOptionsManagment>


			<ContainerManagment>
				<Loader
					type="Rings"
					color={theme.colors.fifthText}
					secondaryColor="#00BFFF"
					height={160}
					width={160}
				/>
				<h3>Carregando...</h3>
			</ContainerManagment>
		</>
	)
}

export default OptionManagment
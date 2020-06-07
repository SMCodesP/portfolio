import { useState } from 'react'
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Legend,
	Cell
} from 'recharts'

import {
	ContainerItem,
	ItemTitle,
	ItemDescription,
	ItemListTechs,
	ItemTech
} from './style'

export default function Graph() {
	const [activeIndex, setActiveIndex] = useState(null)

	const data = [
		{
			name: 'Back-end',
			description: 'Meus projetos back-end abrange »',
			itens: [
				'PHP',
				'JavaScript/Node.js'
			],
			Projetos: 14,
			max: 100,
		},
		{
			name: 'Front-end',
			description: 'Meus projetos de front-end abrange as seguintes tecnologias »',
			itens: [
				'React.js',
				'ReactNative',
				'JQuery & Boostrap'
			],
			Projetos: 9,
			max: 100,
		},
		{
			name: 'APIs',
			description: 'Meus projetos que abrage APIs de uso específico engloba »',
			itens: [
				'SpigoMC',
				'BukkitMC',
				'NPM',
				'GitLab'
			],
			Projetos: 7,
			max: 100,
		},
		{
			name: 'Mobile',
			description: 'Meus projetos que teve uso de app mobile »',
			itens: [
				'ReactNative'
			],
			Projetos: 2,
			max: 100,
		},
	]

	function CustomTooltip({ payload, label, active }) {
		const product = data.find((product) => product.name === label)
		if (active) {
			return (
				<ContainerItem>
					<ItemTitle>
						{`${label}: ${payload[0].value}`}
					</ItemTitle>
					<ItemDescription>
						{product.description || ''}
					</ItemDescription>
					<ItemListTechs>
						{product.itens.map((itemPage, index) => (
							<ItemTech key={index}>
								{itemPage}
							</ItemTech>
						))}
					</ItemListTechs>
				</ContainerItem>
			);
		}

		return null;
	}

	function mouseEnterInCategory(_, index = null) {
		setActiveIndex(index)
	}

	function mouseLeaveInCategory() {
		setActiveIndex(null)
	}

	return (
		<BarChart id='client-graph' width={600} height={350} data={data}>
			<XAxis dataKey='name' />
			<YAxis />
			<Tooltip content={<CustomTooltip />}/>
			<CartesianGrid stroke='#fff' strokeDasharray='9 9' />
			<Legend
				width={100}
				wrapperStyle={{
					top: 20,
					right: 20,
					backgroundColor: '#f0f0f0',
					border: '1px solid #a5a5a5',
					borderRadius: 5,
					lineHeight: '40px'
				}}
			/>
			<Bar
				dataKey='Projetos'
				stackId='a'
				onMouseEnter={mouseEnterInCategory}
				onMouseLeave={mouseLeaveInCategory}
			>
				{
					data.map((_, index) => (
						<Cell
							cursor='pointer'
							fill={index === activeIndex ? '#333333' : '#33333355'}
							key={`cell-${index}`}
						/>
					))
				}
			</Bar>
		</BarChart>
	)
}

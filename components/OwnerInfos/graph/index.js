import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Legend
} from 'recharts';

import {
	ContainerItem,
	ItemTitle,
	ItemDescription,
	ItemListTechs,
	ItemTech
} from './style'

export default function Graph() {
	function getIntroOfPage(label) {
		const pages = {
			'back-end': 'Meus conhecimentos no back-end abrange »',
			'front-end': 'Meus conhecimentos no front-end abrange as seguintes tecnologias »',
			'apis': 'Meus conhecimentos em APIs de uso específico engloba »',
		}

		return pages[label.toLowerCase()]
	}

	function getListItem(label) {
		const lists = {
			'back-end': [
				'Java',
				'Python',
				'JavaScript/Node.js'
			],
			'front-end': [
				'React.js',
				'ReactNative',
				'JQuery & Boostrap'
			],
			'apis': [
				'SpigoMC',
				'BukkitMC'
			]
		}
		return lists[label.toLowerCase()] || []
	}

	function CustomTooltip({ payload, label, active }) {
		if (active) {
			return (
				<ContainerItem>
					<ItemTitle>
						{`${label} : ${payload[0].value}`}
					</ItemTitle>
					<ItemDescription>
						{getIntroOfPage(label)}
					</ItemDescription>
					<ItemListTechs>
						{getListItem(label).map((itemPage) => (
							<ItemTech>
								{itemPage}
							</ItemTech>
						))}
					</ItemListTechs>
				</ContainerItem>
			);
		}

		return null;
	}
	const data = [
		{
			name: 'Back-end',
			exp: 69,
			pv: 2400,
			amt: 2400
		},
		{
			name: 'APIs',
			exp: 40,
			pv: 2400,
			amt: 2400
		},
		{
			name: 'Front-end',
			exp: 56,
			pv: 2400,
			amt: 2400
		},
	]
	return (
		<BarChart width={600} height={350} data={data}>
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip content={<CustomTooltip />}/>
			<CartesianGrid stroke="#fff" strokeDasharray="9 9" />
	    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
			<Bar dataKey="exp" fill="#8884d8"
				barSize={30} />
		</BarChart>
	)
}

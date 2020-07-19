import { useState, useEffect, memo } from 'react';
import ContentLoader from 'react-content-loader';
import { getColor } from 'get-color-sm';

import {
	Container,
	ContainerImage,
	Image,
	NewInfo,
	Title,
	DescriptionList,
	DescriptionItem,
	BottomBorder,
	ContainerPurchase,
	PriceTitle,
	PurchaseButton,
} from './styles';

function Product() {
	const [loading, setLoading] = useState(true);
	const color = getColor();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 10000)
	}, [])

	return (
		<Container color={color}>
			{loading ? (
				<div style={{ cursor: 'pointer' }}>
					<ContentLoader
						speed={1}
						viewBox="0 0 160 175"
						backgroundColor="#EDEDED"
						foregroundColor="#e7daff"
					>
						<circle cx="77" cy="40" r="22" />
						<rect x="22" y="75" rx="0" ry="0" width="113" height="12" />
						<rect x="38" y="90" rx="0" ry="0" width="82" height="10" />
						<rect x="22" y="112" rx="0" ry="0" width={Math.floor(Math.random() * 70 + 5)} height="8" />
						<rect x="22" y="126" rx="0" ry="0" width={Math.floor(Math.random() * 70 + 5)} height="8" />
						<rect x="22" y="140" rx="0" ry="0" width={Math.floor(Math.random() * 70 + 5)} height="8" />
						<rect x="22" y="154" rx="0" ry="0" width={Math.floor(Math.random() * 70 + 5)} height="8" />
					</ContentLoader>
				</div>
			) : (
				<>
					<ContainerImage>
						<Title>DDL-Furnace</Title>
						<Image src='/splash.png' />
						<NewInfo>Novo</NewInfo>
					</ContainerImage>
					<ContainerPurchase>
						<BottomBorder>
							<PurchaseButton>Comprar</PurchaseButton>
						</BottomBorder>
						<PriceTitle>R$ 4,99</PriceTitle>
					</ContainerPurchase>
					<DescriptionList>
						<DescriptionItem>Minecraft version » 1.8.x</DescriptionItem>
						<DescriptionItem>API » Bukkit Spigot</DescriptionItem>
						<DescriptionItem>Funcionalidade » Esquentar minérios</DescriptionItem>
						<DescriptionItem>Inovação » Construir fornalhas com dificuldade</DescriptionItem>
						<DescriptionItem>Criador » SMCodes</DescriptionItem>
						<DescriptionItem>A pedido de » Ninguém</DescriptionItem>
					</DescriptionList>
				</>
			)}
		</Container>
	);
}

export default Product;

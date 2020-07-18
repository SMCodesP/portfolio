import React from 'react';

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
	return (
		<Container>
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
		</Container>
	);
}

export default Product;

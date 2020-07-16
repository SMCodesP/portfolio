import React from 'react';

import {
	Container,
	ContainerImage,
	Image,
	NewInfo,
	Title,
	DescriptionList,
	DescriptionItem,
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
				<PurchaseButton>Comprar</PurchaseButton>
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

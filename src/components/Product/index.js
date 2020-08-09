import Link from 'next/link';
import { memo } from 'react';
import { getColor } from 'get-color-sm';
import ProgressiveImage from 'react-progressive-graceful-image';
import moment from 'moment';

import RenderMarkdown from '../RenderMarkdown/'

import {
	Container,
	ContainerImage,
	Image as ImageLogo,
	NewInfo,
	Title,
	DescriptionList,
	ContainerPurchase,
	PriceTitle,
	PurchaseButton,
	TitleSkeleton,
	ImageSkeleton,
	DescriptionSkeleton,
	ButtonSkeleton,
	DetailsContainer,
	Details
} from './styles'

function Product({loading, product, productIndex}) {
	const color = getColor();

	return (
		<Container color={color} loading={loading.toString()}>
			{loading ? (
				<>
					<ContainerImage>
						<TitleSkeleton />
						<ImageSkeleton />
					</ContainerImage>
					<DescriptionList>
						<DescriptionSkeleton width={Math.floor(Math.random() * 225) + 15} />
						<DescriptionSkeleton width={Math.floor(Math.random() * 225) + 15} />
						<DescriptionSkeleton width={Math.floor(Math.random() * 225) + 15} />
						<DescriptionSkeleton width={Math.floor(Math.random() * 225) + 15} />
						<DescriptionSkeleton width={Math.floor(Math.random() * 225) + 15} />
						<DescriptionSkeleton width={Math.floor(Math.random() * 225) + 15} />
					</DescriptionList>
					<ContainerPurchase>
						<ButtonSkeleton />
					</ContainerPurchase>
				</>
			) : (
				<>
					<ContainerImage>
						<Title>{product.title}</Title>
						<ProgressiveImage
							src={product.image.large}
							placeholder={product.image.small}
						>
							{(src, loading) => product.image.size ? (
								<ImageLogo
									style={{
										width: product.image.size.width || 128,
										height: product.image.size.height || 128,
										filter: loading ? 'blur(5px)' : ''
									}}
									not_auto={true}
									src={src}
									alt={`${product.title} logo image`}
								/>
							) : (
								<ImageLogo
									style={{
										width: loading ? 128 : 'auto',
										height: loading ? 128 : 'auto',
										filter: loading ? 'blur(5px)' : ''
									}}
									not_auto={false}
									src={src}
									alt={`${product.title} logo image`}
								/>
							)}
						</ProgressiveImage>
						{(moment.unix(moment().unix()).diff(moment.unix(product.timestamp), 'days') <= 7) && (
							<NewInfo title="Esse produto teve seu lançamento em menos de uma semana, então foi categorizado como novo.">Novo</NewInfo>
						)}
					</ContainerImage>
					<DescriptionList>
						{product.descriptionList.map((description, index) => (
							<RenderMarkdown key={index} text={description} />
						))}
					</DescriptionList>
					<ContainerPurchase>
						{(product.price <= 0) ? (
							<a href={product.button_link} tartget="_blank" style={{ width: '100%' }} download>
								<PurchaseButton>Baixar</PurchaseButton>
							</a>
						) : (
							<>
								<PurchaseButton>Comprar</PurchaseButton>
								<PriceTitle>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</PriceTitle>
							</>
						)}
					</ContainerPurchase>
					<DetailsContainer>
						<Link href={`/${product.category}/[id]`} as={`/${product.category}/${productIndex}`}>
							<a>
								<Details>Detalhes</Details>
							</a>
						</Link>
						<span />
					</DetailsContainer>
				</>
			)}
		</Container>
	);
}

export default memo(Product);

import Link from 'next/link'
import {memo, useContext} from 'react'
import {getColor} from 'get-color-sm'
import ProgressiveImage from 'react-progressive-graceful-image'
import {ThemeContext} from 'styled-components'

import RenderMarkdown from '../RenderMarkdown/'

import {
	Container,
	ContainerImage,
	ImageLogo,
	NewInfo,
	Title,
	DescriptionList,
	ContainerPurchase,
	PriceTitle,
	PurchaseButton,
	DetailsContainer,
	Details,
	TitleSkeleton,
	ImageSkeleton,
	DescriptionSkeleton,
	ButtonSkeleton,
} from './styles'

function Product({loading, product, category, productIndex}) {
	const color = getColor()

	const ImageIconProduct = () => (
		<ProgressiveImage
			src={product.image_large}
			placeholder={product.image_small}
		>
			{(src, loadingImage) => (
				<ImageLogo
					style={{
						width: 128,
						height: 128,
						filter: loading ? 'blur(5px)' : 'blur(0px)'
					}}
					not_auto="false"
					src={src}
					alt={`${product.title} logo image`}
				/>
			)}
		</ProgressiveImage>
	)

	return (
		<Container color={color}>
			<>
				<ContainerImage>
					{loading
						? <TitleSkeleton />
						: <Title>{product.title}</Title>}
					{loading
						? <ImageSkeleton />
						: <ImageIconProduct />}
					{(loading && product.isNew) && <NewInfo title="Esse produto teve seu lançamento em menos de uma semana, então foi categorizado como novo.">Novo</NewInfo>}
				</ContainerImage>
				<DescriptionList>
					{loading ? (
						<>
							<DescriptionSkeleton width={225} />
							<DescriptionSkeleton width={180} />
							<DescriptionSkeleton width={50} />
							<DescriptionSkeleton width={150} />
							<DescriptionSkeleton width={20} />
							<DescriptionSkeleton width={200} />
						</>
					) : <RenderMarkdown text={product.description} />}
				</DescriptionList>
				<ContainerPurchase>
					{loading ? <ButtonSkeleton />
						: (product.money <= 0) ? (
							<a href={product.button_link} tartget="_blank" style={{ width: '100%' }} download>
								<PurchaseButton>Baixar</PurchaseButton>
							</a>
						) : (
							<>
								<PurchaseButton>Comprar</PurchaseButton>
								<PriceTitle>{new Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: 'BRL'
									})
									.format(product.money)}
								</PriceTitle>
							</>
						)
					}
				</ContainerPurchase>
				{(!loading) && (
					<DetailsContainer>
						<Link href={`${category.link}/[id]`} as={`${category.link}/${productIndex}`}>
							<a>
								<Details>Detalhes</Details>
							</a>
						</Link>
						<span />
					</DetailsContainer>
				)}
			</>
		</Container>
	);
}

export default memo(Product);

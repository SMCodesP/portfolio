import Link from 'next/link'
import {memo, useContext} from 'react'
import {getColor} from 'get-color-sm'
import ProgressiveImage from 'react-progressive-graceful-image'
import {ThemeContext} from 'styled-components'
import moment from 'moment'
import {shade} from 'polished'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

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

function Product({loading, product, productIndex}) {
	const color = getColor()
	const {colors} = useContext(ThemeContext)

	const ImageIconProduct = () => (
		<ProgressiveImage
			src={product.image.large}
			placeholder={product.image.small}
		>
			{(src, loading) => product.image.size ? (
				<ImageLogo
					width={product.image.size.width || 128}
					height={product.image.size.height || 128}
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
					width={128}
					height={128}
					style={{
						width: loading ? 128 : 'auto',
						height: loading ? 128 : 'auto',
						filter: loading ? 'blur(10px)' : ''
					}}
					not_auto={false}
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
					{(loading && moment.unix(moment().unix()).diff(moment.unix(product.timestamp), 'days') <= 7) && <NewInfo title="Esse produto teve seu lançamento em menos de uma semana, então foi categorizado como novo.">Novo</NewInfo>}
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
					) : product.descriptionList.map((description, index) => <RenderMarkdown key={index} text={description} />)}
				</DescriptionList>
				<ContainerPurchase>
					{loading ? <ButtonSkeleton />
						: (product.price <= 0) ? (
							<a href={product.button_link} tartget="_blank" style={{ width: '100%' }} download>
								<PurchaseButton>Baixar</PurchaseButton>
							</a>
						) : (
							<>
								<PurchaseButton>Comprar</PurchaseButton>
								<PriceTitle>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</PriceTitle>
							</>
						)
					}
				</ContainerPurchase>
				{(!loading) && (
					<DetailsContainer>
						<Link href={`/${product.category}/[id]`} as={`/${product.category}/${productIndex}`}>
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

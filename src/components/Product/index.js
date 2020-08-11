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
	const color = getColor()
	const {colors} = useContext(ThemeContext)

	return (
		<Container color={color}>
			{loading ? (
				<SkeletonTheme color={shade(0.1, colors.secundaryBackground)} highlightColor={shade(0.1, colors.background)}>
					<ContainerImage>
						<Skeleton width={200} height={30} duration={2} style={{
							position: 'relative',
							top: '25px',
						}} />
						<Skeleton circle={true} width={128} height={128} duration={2} />
					</ContainerImage>
					<DescriptionList>
						<Skeleton width={189} height={25} duration={2} style={{
							margin: '5px 0'
						}} />
						<br />

							<Skeleton width={100} height={25} duration={2} style={{
								margin: '5px 0 5px 10px'
							}} />
							<Skeleton width={56} height={25} duration={2} style={{
								margin: '5px 0 5px 5px'
							}} />
							<br />

								<Skeleton width={56} height={25} duration={2} style={{
									margin: '5px 0 5px 20px'
								}} />
								<Skeleton width={100} height={25} duration={2} style={{
									margin: '5px 0 5px 5px'
								}} />
								<br />

								<Skeleton width={162} height={25} duration={2} style={{
									margin: '5px 0 5px 20px'
								}} />
								<Skeleton width={50} height={25} duration={2} style={{
									margin: '5px 0 5px 5px'
								}} />
								<br />

								<Skeleton width={72} height={25} duration={2} style={{
									margin: '5px 0 5px 20px'
								}} />
								<Skeleton width={32} height={25} duration={2} style={{
									margin: '5px 0 5px 5px'
								}} />
								<br />

							<Skeleton width={151} height={25} duration={2} style={{
								margin: '5px 0 5px 10px'
							}} />
							<br />

						<Skeleton width={202} height={25} duration={2} style={{
							margin: '5px 0'
						}} />
						<br />
					</DescriptionList>
					<ContainerPurchase>
						<Skeleton width={224} height={45} duration={2} />
					</ContainerPurchase>
				</SkeletonTheme>
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

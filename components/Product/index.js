import Link from 'next/link'
import {memo} from 'react'
import {getColor} from 'get-color-sm'
import ProgressiveImage from 'react-progressive-graceful-image'
import moment from 'moment'
import { shade, getLuminance } from 'polished';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

import RenderMarkdown from '../RenderMarkdown/'

import styles from './Product.module.css'

function Product({loading, product, productIndex}) {
	const color = `#${getColor()}`

	console.log((getLuminance(color) < 0.4)
		? getComputedStyle(document.body).getPropertyValue('--light')
		: getComputedStyle(document.body).getPropertyValue('--dark'))

	const ImageIconProduct = () => (
		<ProgressiveImage
			src={product.image.large}
			placeholder={product.image.small}
		>
			{(src, loading) => product.image.size ? (
				<img
					className={styles.imageLogo}
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
				<img
					className={styles.imageLogo}
					style={{
						width: loading ? 128 : 'auto',
						height: loading ? 128 : 'auto',
						filter: loading ? 'blur(10px)' : '',
						maxWidth: 132,
						maxHeight: 132,
					}}
					not_auto={false}
					src={src}
					alt={`${product.title} logo image`}
				/>
			)}
		</ProgressiveImage>
	)

	return (
		<div
			className={styles.container}
			style={{
				color,
				borderTop: `4px solid ${color}`,
			}}
		>
			<>
				<div className={styles.containerImage}>
					{loading
						? <div
								className={styles.titleSkeleton}
								style={{
									background: shade(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')) || "#333",
								}}
							/>
						: <p className={styles.title} style={{
							background: color,
							color: `${(getLuminance(color) < 0.4)
								? getComputedStyle(document.body).getPropertyValue('--light')
								: getComputedStyle(document.body).getPropertyValue('--dark')}`
						}}>{product.title}</p>}
					{loading
						? <div
								className={styles.imageSkeleton}
								style={{
									background: shade(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')) || "#333",
								}}
							/>
						: <ImageIconProduct />}
				{(loading && moment.unix(moment().unix()).diff(moment.unix(product.timestamp), 'days') <= 7) && <p className={styles.newInfo} title="Esse produto teve seu lançamento em menos de uma semana, então foi categorizado como novo.">Novo</p>}
				</div>
				<ul className={styles.descriptionList}>
					{loading ? (
						<>
							<div className={styles.descriptionSkeleton} style={{
								background: shade(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')) || "#333",
								width: 225
							}} />
							<div className={styles.descriptionSkeleton} style={{
								background: shade(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')) || "#333",
								width: 180
							}} />
							<div className={styles.descriptionSkeleton} style={{
								background: shade(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')) || "#333",
								width: 50
							}} />
							<div className={styles.descriptionSkeleton} style={{
								background: shade(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')) || "#333",
								width: 150
							}} />
							<div className={styles.descriptionSkeleton} style={{
								background: shade(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')) || "#333",
								width: 20
							}} />
							<div className={styles.descriptionSkeleton} style={{
								background: shade(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')) || "#333",
								width: 200
							}} />
						</>
					) : product.descriptionList.map((description, index) => <RenderMarkdown key={index} text={description} />)}
				</ul>
				<div className={styles.containerPurchase}>
					{loading
						? <div
								className={styles.buttonSkeleton}
								style={{
									background: shade(0.2, getComputedStyle(document.body).getPropertyValue('--secundaryBackground')) || "#333",
								}}
							/>
						: (product.price <= 0) ? (
							<a href={product.button_link} tartget="_blank" style={{ width: '100%' }} download>
								<button className={styles.purchaseButton} >Baixar</button>
							</a>
						) : (
							<>
								<button className={styles.purchaseButton} >Comprar</button>
								<p className={styles.priceTitle}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
							</>
						)
					}
				</div>
				{(!loading) && (
					<div className={styles.detailsContainer}>
						<Link href={`/${product.category}/[id]`} as={`/${product.category}/${productIndex}`}>
							<a>
								<p className={styles.details}>Detalhes</p>
							</a>
						</Link>
						<span />
					</div>
				)}
			</>
		</div>
	);
}

export default memo(Product);

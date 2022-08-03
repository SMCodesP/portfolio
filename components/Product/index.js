import Link from "next/link";
import { memo } from "react";
import { getColor } from "get-color-sm";
import ProgressiveImage from "react-progressive-graceful-image";

import RenderMarkdown from "../RenderMarkdown/";

import { useCart } from "../../contexts/cart";

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
} from "./styles";

function Product({ loading, product, category, productIndex }) {
	const { addCart, products } = useCart();
	const color = getColor();

	const ImageIconProduct = () => (
		<ProgressiveImage
			src={product.image_large}
			placeholder={product.image_small}
		>
			{(src, loadingImage) => (
				<ImageLogo
					style={{
						height: "135px",
						filter: loadingImage ? "blur(5px)" : "blur(0px)",
					}}
					not_auto="false"
					src={src}
					alt={`${product.title} logo image`}
				/>
			)}
		</ProgressiveImage>
	);

	return (
		<div
			style={{
				padding: "5px",
				display: "flex",
				breakInside: "avoid",
			}}
		>
			<Container color={color}>
				<>
					<ContainerImage>
						{loading ? (
							<TitleSkeleton />
						) : (
							<Title color={color}>{product.title}</Title>
						)}
						{loading ? <ImageSkeleton /> : <ImageIconProduct />}
						{loading && product.isNew && (
							<NewInfo title="Esse produto teve seu lançamento em menos de uma semana, então foi categorizado como novo.">
								Novo
							</NewInfo>
						)}
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
						) : (
							<RenderMarkdown children={product.description} />
						)}
					</DescriptionList>
					<ContainerPurchase>
						{loading ? (
							<ButtonSkeleton />
						) : product.money <= 0 ? (
							<a
								href={product.button_link}
								tartget="_blank"
								style={{ width: "100%" }}
								download
							>
								<PurchaseButton>Baixar</PurchaseButton>
							</a>
						) : (
							<>
								{products.find(
									(productPred) =>
										productPred.id === product.id
								) ? (
									<Link href="/cart">
										<a
											style={{
												width: "100%",
											}}
										>
											<PurchaseButton>
												No carrinho
											</PurchaseButton>
										</a>
									</Link>
								) : (
									<PurchaseButton
										onClick={() => addCart(product)}
									>
										Comprar
									</PurchaseButton>
								)}
								<PriceTitle>
									{new Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(product.money)}
								</PriceTitle>
							</>
						)}
					</ContainerPurchase>
					{!loading && (
						<DetailsContainer>
							<Link
								href={`/products${category.link}/[id]`}
								as={`/products${category.link}/${product.id}`}
							>
								<a>
									<Details>Detalhes</Details>
								</a>
							</Link>
							<span />
						</DetailsContainer>
					)}
				</>
			</Container>
		</div>
	);
}

export default memo(Product);

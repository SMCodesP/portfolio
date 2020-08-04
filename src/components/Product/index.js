import Link from 'next/link';
import { memo } from 'react';
import { getColor } from 'get-color-sm';
import ProgressiveImage from 'react-progressive-graceful-image';
import Markdown from 'react-mark';

import {
  Container,
  ContainerImage,
  Image as ImageLogo,
  NewInfo,
  Title,
  DescriptionList,
  DescriptionItem,
  BottomBorder,
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
              {(src, loading) => (
                <ImageLogo
                  style={{
                    width: loading ? 128 : 'auto',
                    height: loading ? 128 : 'auto',
                    filter: loading ? 'blur(4px)' : ''
                  }}
                  src={src}
                  alt={`${product.title} logo image`}
                />
              )}
            </ProgressiveImage>
            <NewInfo>Novo</NewInfo>
          </ContainerImage>
          <DescriptionList>
						{product.descriptionList.map((description, index) => (
            	<Markdown key={index}>{description}</Markdown>
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
            <Link href="/plugin/[id]" as={`/plugin/${productIndex}`}>
							<Details>Detalhes</Details>
						</Link>
						<span />
					</DetailsContainer>
        </>
      )}
    </Container>
  );
}

export default memo(Product);

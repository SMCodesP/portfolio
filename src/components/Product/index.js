import { memo } from 'react';
import { getColor } from 'get-color-sm';
import ProgressiveImage from "react-progressive-graceful-image";
import ContentLoader from 'react-content-loader';

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
} from './styles'

function Product({loading, product}) {
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
            	<DescriptionItem key={index}>{description}</DescriptionItem>
						))}
          </DescriptionList>
          <ContainerPurchase>
            <BottomBorder>
              <PurchaseButton>Comprar</PurchaseButton>
            </BottomBorder>
            <PriceTitle>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</PriceTitle>
          </ContainerPurchase>
        </>
      )}
    </Container>
  );
}

export default memo(Product);

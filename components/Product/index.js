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

function Product({loading}) {
  const color = getColor();

  return (
    <Container color={color} loading={loading}>
      {loading ? (
        <>
          <ContainerImage>
            <TitleSkeleton />
            <ImageSkeleton />
          </ContainerImage>
          <DescriptionList>
            <DescriptionSkeleton width={Math.floor(Math.random() * 242) + 15} />
            <DescriptionSkeleton width={Math.floor(Math.random() * 242) + 15} />
            <DescriptionSkeleton width={Math.floor(Math.random() * 242) + 15} />
            <DescriptionSkeleton width={Math.floor(Math.random() * 242) + 15} />
            <DescriptionSkeleton width={Math.floor(Math.random() * 242) + 15} />
            <DescriptionSkeleton width={Math.floor(Math.random() * 242) + 15} />
          </DescriptionList>
          <ContainerPurchase>
            <ButtonSkeleton />
          </ContainerPurchase>
        </>
      ) : (
        <>
          <ContainerImage>
            <Title>DDL-Furnace</Title>
            <ProgressiveImage
              src="/splash.png"
              placeholder="/splash_min.png"
            >
              {(src, loading) => (
                <ImageLogo
                  style={{
                    width: loading ? 128 : 'auto',
                    height: loading ? 128 : 'auto',
                    filter: loading ? 'blur(4px)' : ''
                  }}
                  src={src}
                  alt="DDL-Furnace logo image"
                />
              )}
            </ProgressiveImage>
            <NewInfo>Novo</NewInfo>
          </ContainerImage>
          <DescriptionList>
            <DescriptionItem>Minecraft version » 1.8.x</DescriptionItem>
            <DescriptionItem>API » Bukkit Spigot</DescriptionItem>
            <DescriptionItem>Funcionalidade » Esquentar minérios</DescriptionItem>
            <DescriptionItem>Inovação » Construir fornalhas com dificuldade</DescriptionItem>
            <DescriptionItem>Criador » SMCodes</DescriptionItem>
            <DescriptionItem>A pedido de » Ninguém</DescriptionItem>
          </DescriptionList>
          <ContainerPurchase>
            <BottomBorder>
              <PurchaseButton>Comprar</PurchaseButton>
            </BottomBorder>
            <PriceTitle>R$ 4,99</PriceTitle>
          </ContainerPurchase>
        </>
      )}
    </Container>
  );
}

export default memo(Product);

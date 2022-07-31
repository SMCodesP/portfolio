import Image from 'next/image';
import {
  Container,
  ProductContent,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductViewMore,
} from './styles';

import { TiChevronRight } from 'react-icons/ti';
import { useTheme } from 'styled-components';

const Product: React.FC<{
  product: TProduct;
  inverse: boolean;
}> = ({ product, inverse }) => {
  const theme = useTheme();

  return (
    <Container
      style={{
        flexDirection: inverse ? `row-reverse` : `row`,
      }}
    >
      <ProductImage>
        <Image
          src={product.image_large}
          blurDataURL={product.image_small}
          placeholder="blur"
          alt="Product image"
          layout="fill"
        />
      </ProductImage>
      <ProductContent>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductViewMore>
          Ver mais
          <TiChevronRight color={theme.purple} />
        </ProductViewMore>
      </ProductContent>
    </Container>
  );
};

export default Product;

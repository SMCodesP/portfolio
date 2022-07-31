import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 25px;
  padding: 30px 65px;
`;

export const ProductImage = styled.div`
  position: relative;
  width: 128px;
  height: 128px;
  margin: 0 15px 70px 15px;
  border-radius: 25px;
  box-shadow: 0 0 12px ${({ theme }) => theme.comment}33;
  overflow: hidden;
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 0 0 24px ${({ theme }) => theme.comment}33;
  }

  & img {
    filter: brightness(80%);
    cursor: pointer;
    transition: transform 0.4s, filter 0.4s;
  }

  &:hover img {
    filter: brightness(120%);
    transform: scale(1.3);
  }
`;

export const ProductContent = styled.div`
  width: 60%;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  gap: 5px;
`;

export const ProductTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.currentLine};
`;

export const ProductDescription = styled.div`
  color: ${({ theme }) => theme.selection};
  letter-spacing: 2px;
  padding-left: 20px;
  text-indent: 1em;
  font-size: 18px;
`;

export const ProductViewMore = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  align-self: flex-end;
  cursor: pointer;
  color: ${({ theme }) => theme.purple};
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  transition: filter 0.4s;
  filter: brightness(75%);

  & svg {
    transition: margin-left 0.4s;
  }

  &:hover {
    filter: brightness(125%);

    & svg {
      margin-left: 10px;
    }
  }
`;

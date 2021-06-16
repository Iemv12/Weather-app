import styled from "styled-components";

export const CardClimeDay = styled.h1`
  font-weight: 500;
  font-size: 16px;
`;

export const CardClimeImage = styled.img`
  width: 56.44px;
  height: 62px;
  margin: 25px 0;
`;

export const CardClimeMinMaxTemp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 15px;
  }
`;

export const MaxTemp = styled.p`
  margin-right: 18px;
`;

export const MinTemp = styled.p`
  color: var(--color-primary-font-dark-one);
`;

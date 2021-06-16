import styled from "styled-components";

export const CardContainer = styled.div`
  background: var(--color-secondary-bg);
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    width: ${({ fullSize }) => (fullSize ? "360px" : "max-content")};
  }

  &:hover {
    outline: 1px solid #e7e7eb;
    opacity: 0.8;
  }
`;

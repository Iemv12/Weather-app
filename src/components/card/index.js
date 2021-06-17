import styled from "styled-components";

export const CardContainer = styled.div`
  background: var(--color-secondary-bg);
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 60px;

  &:hover {
    outline: 1px solid #e7e7eb;
    opacity: 0.8;
  }
`;

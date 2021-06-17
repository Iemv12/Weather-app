import styled from "styled-components";

export const HumidityPercentage = styled.div`
  line-height: 30px;
`;

export const PercentageValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PercentageBar = styled.div`
  width: 200px;
  background-color: #e7e7eb;
  height: 10px;
  border-radius: 2rem;

  .value {
    background-color: #ffec65;
    height: 10px;
    border-radius: 2rem;
  }
`;

export const Percentage = styled.div`
  display: flex;
  justify-content: flex-end;
`;

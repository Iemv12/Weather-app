import styled from "styled-components";

export const SidebarsearchContainer = styled.div`
  position: absolute;
  background-color: var(--color-secondary-bg);
  padding: 35px;
  color: var(--color-primary-font);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 3;
  transition: 0.5s ease-in-out;

  @media screen and (min-width: 768px) {
    height: 100vh;
    flex: 0.6;
  }
  @media screen and (min-width: 1024px) {
    flex: 0.4;
  }
`;

export const SidebarsearchClose = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  span {
    cursor: pointer;
    font-size: 30px;
  }
`;

export const SidebarsearchInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const SearchInput = styled.div`
  width: 100%;
  height: 48px;
  margin-right: 12px;
  border: 1px solid var(--color-primary-button);
  font-weight: 500;
  padding: 0 5px;
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
    color: var(--color-primary-font-dark-two);
  }

  input {
    width: 100%;
    height: 100%;
    outline: none;
    background: transparent;
    border: none;
    font-size: 16px;
    color: var(--color-primary-font-dark-two);
    text-overflow: ellipsis;

    &:focus {
      color: var(--color-primary-font);
    }
  }
`;

export const SearchButton = styled.button`
  background-color: #3c47e9;
  outline: none;
  border: none;
  padding: 0 10px;
  height: 100%;
  color: var(--color-primary-font);
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const SidebarsearchCountriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 5px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #100e1d;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: gray;
  }
`;

export const Country = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 15px 10px;

  &:hover {
    outline: 1px solid #e7e7eb;
    cursor: pointer;
  }

  span {
    color: var(--color-primary-font-dark-two);
  }
`;

export const CountryName = styled.h3`
  font-weight: 500;
  font-size: 16px;
`;

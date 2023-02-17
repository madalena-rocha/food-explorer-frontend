import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 96px;
  width: 100%;
  padding: 24px 123px;

  display: flex;
  gap: 32px;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  
  > button:first-of-type {
    max-width: 216px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 197px;
    height: 39px;
  }
`;

export const Search = styled.div`
  display: flex;
  padding: 12px 14px;
  flex-grow: 1;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  input {
    max-width: 282px;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  > svg {
    width: 32px;
    height: 32px;
  }
`;
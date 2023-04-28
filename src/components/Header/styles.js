import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 114px;
  width: 100%;
  padding: 56px 28px 24px;
  display: flex;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  
  button:last-child {
    width: auto;
    background: none;
  }
  
  @media (min-width: 1024px) {
    height: 96px;
    padding: 24px 123px;

    justify-content: space-between;
    gap: 32px;
    
    > button:first-of-type {
      max-width: 216px;
    }
  }
`;

export const Menu = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  gap: 16px;
  
  color: ${({ theme }) => theme.COLORS.WHITE};

  .fi-menu-icon {
    width: 24px;
    height: 18px;
  }

  span {
    font-size: 21.16px;
  }
`;

export const Brand = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 160.61px;
    height: 26px;
  }

  @media (min-width: 1024px) {
    width: auto;

    > img {
      width: 197px;
      height: 39px;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
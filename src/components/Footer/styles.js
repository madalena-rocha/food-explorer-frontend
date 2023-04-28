import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 77px;
  width: 100%;
  padding: 29.33px 27.76px;

  display: flex;
  justify-content: space-between;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  @media (min-width: 1024px) {
    padding: 24px 123px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 142.47px;
    height: 18.34px;
  }

  @media (min-width: 1024px) {
    > img {
      width: 186px;
      height: 30px;
    }
  }
`;

export const Copyright = styled.span`
  display: flex;
  align-items: center;

  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
  
  @media (min-width: 1024px) {
    font-size: 14px;
    line-height: 160%;
  }
`;
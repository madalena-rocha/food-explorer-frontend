import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 77px;
  width: 100%;
  padding: 24px 123px;

  display: flex;
  justify-content: space-between;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 186px;
    height: 30px;
  }
`;

export const Copyright = styled.span`
  display: flex;
  align-items: center;

  font-size: 14px;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
`;
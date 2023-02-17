import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    margin-bottom: 16px;
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;
    font-size: 16px;
  }
`;
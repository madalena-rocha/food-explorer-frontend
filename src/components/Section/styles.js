import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    margin-bottom: 1.6rem;
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;
    font-size: 1.6rem;
  }
`;
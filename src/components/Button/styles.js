import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  border: 0;
  padding: 12px 32px;
  border-radius: 5px;
  
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 24px;
  
  &:disabled {
    opacity: 0.5;
  }
`;
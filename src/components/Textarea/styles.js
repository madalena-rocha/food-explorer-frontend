import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  border: none;
  resize: none;
  
  border-radius: 8px;
  padding: 14px;
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`;
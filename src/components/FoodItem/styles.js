import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.GRAY_400};
  outline: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  
  margin-right: 8px;
  border-radius: 8px;
  padding-right: 16px;
  
  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
    
    color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
  }
  
  > input {
    height: 32px;
    width: 100%;
    
    padding: 8px 8px 8px 16px;
    border: none;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
  border-radius: 5px;
  
  > input {
    height: 48px;
    width: 100%;
    
    padding: 12px 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-left: 14px;
  flex-grow: 1;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
  
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  input {
    max-width: 282px;

    &:focus {
      border: none;
    }
  }
`;
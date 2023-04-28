import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  background: none;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 24px;

  position: relative;

  > span {
    position: absolute;
    top: -4px;
    right: -5.54px;

    background-color: ${({ theme }) => theme.COLORS.DARK_RED};
    border-radius: 99px;
    padding-inline: 5.5px;
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 1024px) {
    gap: 8px;
    padding: 12px 32px;
    
    > span {
      position: initial;
      padding-inline: 0;
    }
  }
`;
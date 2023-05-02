import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  background: none;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  padding: 1.2rem 2.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  line-height: 2.4rem;

  position: relative;

  > span {
    position: absolute;
    top: -0.4rem;
    right: -0.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_RED};
    border-radius: 99px;
    padding-inline: 0.6rem;
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 1024px) {
    gap: 0.8rem;
    padding: 1.2rem 3.2rem;
    
    > span {
      position: initial;
      padding-inline: 0;
    }
  }
`;
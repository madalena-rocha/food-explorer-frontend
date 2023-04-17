import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin-inline: 65px 47px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 73px;

  @media (min-width: 1024px) {
    margin-inline: 154px 108px;

    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const Brand = styled.div`
  display: flex;
  margin-inline: auto;
  
  > svg {
    width: 278.05px;
    height: 44px;
  }

  @media (min-width: 1024px) {
    margin-inline: 0;

    > svg {
      width: 324px;
      height: 48px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 316px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > h2 {
    display: none;
  }

  > section h2 {
    margin-bottom: 8px;
  }

  > section input {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 8px;
  }
  
  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 24px;
  }
  
  @media (min-width: 1024px) {
    min-width: 476px;
    padding: 64px;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h2 {
      display: initial;

      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;
      text-align: center;
    }

    > section input {
      background-color: transparent;

      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 5px;
    }
  }
`;

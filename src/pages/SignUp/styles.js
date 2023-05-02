import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin-inline: 5.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7.3rem;

  @media (min-width: 1024px) {
    margin-inline: 13.1rem;

    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-inline: auto;

  > img {
    width: 100%;
    max-width: 27.8rem;
  }

  @media (min-width: 1024px) {
    justify-content: initial;
    margin-inline: 0;

    > img {
      max-width: 32.4rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h2 {
    display: none;
  }

  > section h2 {
    margin-bottom: 0.8rem;
  }

  > section input {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 0.8rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
  
  @media (min-width: 1024px) {
    padding: 6.4rem;
    border-radius: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h2 {
      display: initial;

      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
      text-align: center;
    }
  }
`;

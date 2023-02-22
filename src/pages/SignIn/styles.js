import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin-inline: 154px 108px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  display: flex;
  
  > svg {
    width: 324px;
    height: 48px;
  }
`;

export const Form = styled.form`
  min-width: 476px;
  padding: 64px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    text-align: center;
  }

  > section h2 {
    margin-bottom: 8px;
  }

  > section input {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }
  
  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 24px;
  }
`;

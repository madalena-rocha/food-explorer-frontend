import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-areas:
    "header"
    "content"
    "footer";
  
  > main {
    grid-area: content;
    justify-self: center;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    
    padding: 8px;
    border-radius: 8px;
    
    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }

    input {
      background-color: transparent;
    }
  }

  .price {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 32px;
    
    > button {
      padding: 12px 24px;
    }

    .delete {
      max-width: 160px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    .save {
      &:disabled {
        opacity: 1;
        background-color: ${({ theme }) => theme.COLORS.LIGHT_RED};
      }
    }
  }
  
  @media (min-width: 1024px) {
    height: 100vh;
    grid-template-rows: 96px auto 77px;

    > main {
      width: 100%;
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        border-radius: 8px;
      }
    }

    .buttons {
      justify-content: flex-end;

      .delete {
        max-width: 135px;
      }

      .save {
        max-width: 172px;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  max-width: 364px;
  margin: 10.92px auto 53.08px;
  margin-inline: max(32px, calc((100% - 364px) / 2));

  > header {
    display: flex;
    flex-direction: column;

    h1 {
      margin-top: 24px;

      font-family: "Poppins", sans-serif;
      font-weight: 500;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;

    section {
      width: 100%;
    }

    section input {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      border-radius: 8px;
    }
  }

  @media (min-width: 1024px) {
    gap: 32px;

    max-width: 1120px;
    margin: 40px auto 116px;
    margin-inline: max(124px, calc((100% - 1120px) / 2));

    > div {
      flex-direction: row;
      gap: 32px;

      :first-of-type {
        section:nth-of-type(1) {
          max-width: 229px;
        }
        
        section:nth-of-type(2) {
          max-width: 463px;
        }

        section:nth-of-type(3) {
          max-width: 364px;
        }
      }

      :nth-of-type(2) {
        section:nth-of-type(1) {
          max-width: 837px;
        }
        
        section:nth-of-type(2) {
          max-width: 251px;
        }
      }
    }
  }
`;

export const Image = styled.div`
  padding: 12px 32px;
  border-radius: 8px;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  > label {
    display: flex;
    gap: 8px;
    cursor: pointer;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      line-height: 24px;
    }

    input {
      position: absolute;
      right: 0;
      z-index: -1;

      width: 100%;
    }

    svg, span {
      transition: filter 0.2s;
    }

    &:hover {
      svg, span {
        filter: brightness(0.9);
      }
    }
  }

  @media (min-width: 1024px) {
    input {
      max-width: 229px;
    }
  }
`;

export const Category = styled.div`
  > label {
    position: relative;

    select {
      border: none;
      -webkit-appearance: none;
      cursor: pointer;
      
      width: 100%;
      padding: 12px 16px;
      border-radius: 8px;
      
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
    }
    
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      position: absolute;
      top: 0;
      right: 16px;

      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }

    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`;

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

    > div {
      max-width: 316px;
      margin: 31.85px auto 49.43px;
      margin-inline: max(56px, calc((100% - 316px) / 2));
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;
    
    div svg, 
    div span {
      font-weight: 700;
      font-size: 22.63px;
      line-height: 160%;
    }
  }

  .edit {
    padding: 12px 24px;
  }

  .include {
    max-width: 188px;
    gap: 5.41px;
    border-radius: 3.38px;
    padding: 8.11px 43.98px;

    font-size: 9.46px;
    line-height: 16px;

    svg {
      width: 21.63px;
      height: 21.63px;
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

      > div {
        max-width: 1124px;
        margin: 32px auto 155px;
        margin-inline: max(122px, calc((100% - 1124px) / 2));
      } 
    }

    .buttons {
      justify-content: initial;
      gap: 33px;
    }

    .edit {
      max-width: 131px;
    }

    .include {
      max-width: 162px;
      padding: 12px 24px;

      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 16px;

  > img {
    width: 100%;
    max-width: 264px;
    height: auto;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;

    text-align: center;

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 27.04px;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    p {
      font-family: "Poppins", sans-serif;
      font-size: 16.22px;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    section {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 47px;
    margin-top: 42px;

    > img {
      max-width: 390px;
    }

    > div {
      text-align: left;

      h1 {
        font-size: 40px;
      }

      p {
        font-size: 24px;
      }

      section {
        justify-content: initial;
        gap: 12px;
      }
    }
  }
`;
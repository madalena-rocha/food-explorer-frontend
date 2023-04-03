import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 96px auto 77px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    overflow-y: auto;

    max-width: 1124px;
    margin: 32px auto 155px;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border-radius: 8px;
    }
  }

  .buttons {
    display: flex;
    gap: 33px;
    margin-top: 24px;

    button {
      padding: 12px 24px;
    }
  }

  .edit {
    max-width: 131px;
  }

  .include {
    max-width: 162px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 47px;
  margin-top: 42px;

  > img {
    width: 390.11px;
    height: 389px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 40px;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    p {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 24px;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
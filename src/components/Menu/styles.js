import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;

  display: grid;
  grid-template-rows: 114px auto;
  grid-template-areas:
    "header"
    "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
  transition: opacity 0.7s ease-out, visibility 0.7s ease-out;

  > main {
    grid-area: content;
    justify-self: center;

    max-width: 372px;
    margin: 36px auto 13.57px;
    margin-inline: max(28px, calc((100% - 372px) / 2));

    > div {
      margin-bottom: 36px;

      input {
        max-width: 100%;
      }
    }

    button {
      width: 100%;
      padding: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
      
      font-weight: 300;
    }
  }
`;

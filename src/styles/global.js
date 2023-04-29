import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    --swiper-navigation-size: 4rem;
    --swiper-theme-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
		-webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
	  font-family: 'Roboto', sans-serif;
	  font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }
  
  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;

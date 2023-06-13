import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 11.4rem;
  width: 100%;
  padding: 5.6rem 2.8rem 2.4rem;
  display: flex;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  
  button:last-child {
    width: auto;
    padding: 0;
    background: none;
  }
  
  @media (min-width: 1024px) {
    height: 9.6rem;
    padding: 2.4rem 12.3rem;

    justify-content: space-between;
    gap: 3.2rem;

    .favorites {
      border: 0;
      background: none;

      line-height: 100%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
    
    .new, .orders {
      max-width: 21.6rem;
    }
  }
`;

export const Menu = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  gap: 1.6rem;
  
  color: ${({ theme }) => theme.COLORS.WHITE};

  .fi-menu-icon {
    width: 2.4rem;
    height: 1.8rem;
  }

  span {
    font-size: 2.1rem;
  }
`;

export const Brand = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 16.1rem;
  }

  @media (min-width: 1024px) {
    width: auto;

    > img {
      width: 19.7rem;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
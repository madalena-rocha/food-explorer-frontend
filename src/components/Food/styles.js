import styled from "styled-components";

export const Container = styled.div`
  max-width: 210px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
  border-radius: 8px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  position: relative;

  svg {
    cursor: pointer;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    position: absolute;
    top: 16px;
    right: 16px;
  }

  > img {
    max-width: 88px;
    margin-top: ${({ isAdmin }) => isAdmin ? "46px" : "none"};
  }

  > span {
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

    margin-bottom: ${({ isAdmin }) => isAdmin ? "46px" : "none"};
  }

  @media (min-width: 1024px) {
    max-width: 304px;

    gap: 15px;

    > svg {
      right: 18px;
    }

    > img {
      max-width: 176px;
      margin-top: ${({ isAdmin }) => isAdmin ? "31.5px" : "none"};
    }
    
    > p {
      font-size: 14px;
      line-height: 160%;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > span {
      font-size: 32px;
      line-height: 160%;

      margin-bottom: ${({ isAdmin }) => isAdmin ? "31.5px" : "none"};
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  @media (min-width: 1024px) {
    > h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
    }
  }
`;

export const Order = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 1024px) {
    width: fit-content;
    flex-direction: row;
  }
`;

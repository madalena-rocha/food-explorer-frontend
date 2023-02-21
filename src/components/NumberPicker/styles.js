import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
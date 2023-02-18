import styled from "styled-components";

export const Container = styled.span`
  padding: 4px 8px;
  border-radius: 5px;
  margin-right: 12px;

  font-size: 14px;
  line-height: 24px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
`;

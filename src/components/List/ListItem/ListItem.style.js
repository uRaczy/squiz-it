import styled from "styled-components";

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 20% 20% 40% 20%;
  background-color: #f8f8f8;
`;

export const StyledText = styled.p`
  text-align: center;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
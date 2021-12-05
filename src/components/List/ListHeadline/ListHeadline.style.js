import styled from "styled-components";

export const StyledHeadline = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 40% 20%;
  background-color: #f0f0f0;
  border-bottom: 1px solid #c0c0c0;
`;

export const StyledColumn = styled.h3`
  text-align: center;
  font-size: 12px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;


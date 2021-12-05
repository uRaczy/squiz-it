import styled from "styled-components";

export const StyledItem = styled.li`
  padding: 20px 0;
  display: grid;
  align-items: center;
  grid-template-columns: 20% 20% 40% 20%;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f8f8f8;
  
  @media (min-width: 768px) {
    padding: 20px 20px;
    font-size: 14px;
  }
`;

export const StyledText = styled.p`
  margin: 0;
  text-align: center;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
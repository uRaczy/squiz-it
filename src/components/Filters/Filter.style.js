import styled from "styled-components";


export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StyledHeadline = styled.li`
  padding: 20px;
  font-weight: bold;
  background-color: #e0e0e0;
`

export const StyledItem = styled.li`
  padding: 10px 10px 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
    transition: all .4s ease;
  }
`;
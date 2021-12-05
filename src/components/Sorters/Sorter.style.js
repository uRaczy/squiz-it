import styled from "styled-components";

export const StyledSorter = styled.div`
  cursor: pointer;
  padding: 20px;
  font-weight: bold;
  background-color: #e0e0e0;

  &:hover {
    background-color: #cacaca;
    transition: all .4s ease;
  }

  &:active {
    background-color: #2b93ba;
  }
`;
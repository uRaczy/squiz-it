import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
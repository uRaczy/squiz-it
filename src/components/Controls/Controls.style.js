import styled from "styled-components"

export const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  width: 100%;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    width: 30%;
    padding: 0;
  }
`;
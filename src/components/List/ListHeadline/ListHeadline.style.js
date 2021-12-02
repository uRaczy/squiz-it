import styled from "styled-components";

export const StyledHeadline = styled.h2`
  display: flex;
  justify-content: space-between;
`;

const setWidth = (numberOfElements) => {
  const width = 100 / numberOfElements;
  return `${width}%`
}

export const StyledSpan = styled.span`
  width: ${props => setWidth(props.length)}
`;


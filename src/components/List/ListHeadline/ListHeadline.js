import { StyledHeadline, StyledColumn } from './ListHeadline.style';

const ListHeadline = ({props}) => (
  <StyledHeadline>
    <StyledColumn>
      name
    </StyledColumn>
    <StyledColumn>
      country
    </StyledColumn>
    <StyledColumn>
      industry
    </StyledColumn>
    <StyledColumn>
      employees
    </StyledColumn>
  </StyledHeadline>
);

export default ListHeadline;
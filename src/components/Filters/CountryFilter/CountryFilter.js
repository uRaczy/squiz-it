import { StyledHeadline, StyledList, StyledItem } from './CountryFilter.style';

const CountryFilter = ({ itemsList, handleClick }) => {

  const createMenuItems = () => {
    let keyNum = 0;
    return itemsList.map(element => {
      keyNum++;
      return (
        <StyledItem key={keyNum} onClick={handleClick} selected={false}>
          {element}
        </StyledItem>
      )
    })
  }

  return (
    <StyledList>
      <StyledHeadline>
        Filter by Countries
      </StyledHeadline>
      {createMenuItems()}
    </StyledList>
  )
}

export default CountryFilter;
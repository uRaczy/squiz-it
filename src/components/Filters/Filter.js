import { StyledHeadline, StyledList, StyledItem } from './Filter.style';

const Filter = ({ itemsList, handleClick, title }) => {

  const createMenuItems = () => {
    let keyNum = 0;
    return itemsList.map(element => {
      keyNum++;
      return (
        <StyledItem key={keyNum} onClick={handleClick}>
          {element}
        </StyledItem>
      )
    })
  }

  return (
    <StyledList>
      <StyledHeadline>
        {title}
      </StyledHeadline>
      {createMenuItems()}
    </StyledList>
  )
}

export default Filter;
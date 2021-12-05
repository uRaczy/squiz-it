import { StyledSorter } from './Sorter.style';

const Sorter = ({ title, handleClick, isToggle }) => {
  return (
    <StyledSorter onClick={handleClick} isToggle={isToggle}>
      {title}
    </StyledSorter>
  )
}

export default Sorter;
import { StyledHeadline, StyledList, StyledItem } from './CountryFilter.style';

import { useOriginalList, useList, useListUpdate, useListReset } from '../../../hooks/useModList';

let toggleList = [];

const updateContextList = (props, updateList, resetList) => {
  const anotherArray = props.filter(({ country }) => toggleList.includes(country));

  console.log('another array', anotherArray);
  if (anotherArray.length > 0) {
    updateList(anotherArray);
  }
  else {
    resetList();
  }
}


const CountryFilter = () => {
  const list = useList();
  const originalList = useOriginalList();
  const updateList = useListUpdate();
  const resetList = useListReset();
  const uniqueList = [...new Set(originalList.map(element => element.country))];
  uniqueList.sort();

  const onClick = (e) => {
    const country = e.target.innerHTML;
    e.target.selected = !e.target.selected;
    e.target.style.background = e.target.selected ? '#45C3F2' : '#f0f0f0';
    e.target.selected ? toggleList.push(country) : toggleList = toggleList.filter(item => item !== country);

    console.log(toggleList);
    updateContextList(originalList, updateList, resetList);
  };

  const createMenuItems = () => {
    let keyNum = 0;
    return uniqueList.map(element => {
      keyNum++;
      return (
        <StyledItem key={keyNum} onClick={onClick} selected={false}>
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
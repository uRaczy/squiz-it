import { useState, useEffect } from 'react';

import { StyledControls } from "./Controls.style"
import CountryFilter from '../Filters/CountryFilter/CountryFilter';
// import IndustryFilter from '../Filters/IndustryFilter/IndustryFilter'

import { useOriginalList, useList, useListUpdate, useListReset } from '../../hooks/useModList';

const Controls = () => {
  const originalList = useOriginalList();
  const countryItemsList = [...new Set(originalList.map(element => element.country))].sort();
  const industryItemsList = [...new Set(originalList.map(element => element.industry))].sort();
  const concatItemsLists = (countryItemsList.concat(industryItemsList));
  const filters = concatItemsLists.map(element => ({ [element]: false }));

  const handleClick = (e) => {
    console.log(e.target)
  }
  return (
    <StyledControls>
      <CountryFilter itemsList={countryItemsList} handleClick={handleClick} />
      {/* <IndustryFilter props={props} /> */}
    </StyledControls>
  )
}


export default Controls;
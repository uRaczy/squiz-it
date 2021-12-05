import { useState } from 'react';

import { StyledControls } from "./Controls.style"
import Sorter from '../Sorters/Sorter';
import Filter from '../Filters/Filter';

import { useOriginalList, useList, useListUpdate, useListReset } from '../../hooks/useModList';

import _ from 'lodash';

const filterCountryList = [];
const filterIndustryList = [];

const Controls = () => {
  const [nameSortToggle, setNameSortToggle] = useState(false);
  const [employeeSortToggle, setEmployeeSortToggle] = useState(false);

  const originalList = useOriginalList();
  const modifiedList = useList();
  const setList = useListUpdate();
  const resetList = useListReset();
  const countryItemsList = [...new Set(originalList.map(element => element.country))].sort();
  const industryItemsList = [...new Set(originalList.map(element => element.industry))].sort();

  const colorToggledFilter = (e) => {
    const clickedItem = e.target;
    clickedItem.value = !clickedItem.value;
    clickedItem.style.background = clickedItem.value === 1 ? '#45C3F2' : '#f0f0f0';
  }

  const handleFiltering = (clickedItemName) => {
    const isClickedCountry = countryItemsList.includes(clickedItemName);
    if (isClickedCountry) {
      filterCountryList.some(element => (element.country === clickedItemName)) ?
        _.remove(filterCountryList, element => (element.country === clickedItemName)) :
        filterCountryList.push(originalList.find(element => (element.country === clickedItemName)));
    }
    else {
      filterIndustryList.some(element => (element.industry === clickedItemName)) ?
        _.remove(filterIndustryList, element => (element.industry === clickedItemName)) :
        filterIndustryList.push(originalList.find(element => element.industry === clickedItemName));
    }
    (filterCountryList.length <= 0) && (filterIndustryList.length <= 0) ? resetList() : setList(_.union(filterCountryList, filterIndustryList));
  }

  const handleClick = (e) => {
    const clickedItemName = e.target.firstChild.nodeValue;

    colorToggledFilter(e);

    handleFiltering(clickedItemName);
  }

  const handleNameSorter = (e) => {
    setNameSortToggle(!nameSortToggle);
    if (!nameSortToggle) {
      setList(_.sortBy(modifiedList, element =>
        element.name
      ));
    }
    if (nameSortToggle) {
      setList(_.sortBy(modifiedList, element =>
        element.name
      ).reverse());
    }
  }

  const handleEmployeeSorter = (e) => {
    setEmployeeSortToggle(!employeeSortToggle);
    if (!employeeSortToggle) {
      setList(_.sortBy(modifiedList, element =>
        element.numberOfEmployees
      ));
    }
    if (employeeSortToggle) {
      setList(_.sortBy(modifiedList, element =>
        element.numberOfEmployees
      ).reverse());
    }
  }

  return (
    <StyledControls>
      <Sorter handleClick={handleNameSorter} title={'Sort by Name'} />
      <Sorter handleClick={handleEmployeeSorter} title={'Sort by Employees'} />
      <Filter itemsList={countryItemsList} handleClick={handleClick} title={'Filter by Countries'} />
      <Filter itemsList={industryItemsList} handleClick={handleClick} title={'Filter by Industries'} />
    </StyledControls>
  )
}


export default Controls;
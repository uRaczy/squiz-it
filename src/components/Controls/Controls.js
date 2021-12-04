import { useState } from 'react';

import { StyledControls } from "./Controls.style"

import CountryFilter from '../Filters/CountryFilter/CountryFilter';
import IndustryFilter from '../Filters/IndustryFilter/IndustryFilter'

const Controls = ({ props }) => {
  const handleClick = () => {

  }
  return (
    <StyledControls>
      <CountryFilter props={props} />
      <IndustryFilter props={props} />
    </StyledControls>
  )
}


export default Controls;
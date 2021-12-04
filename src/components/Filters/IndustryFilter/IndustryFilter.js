// import { StyledHeadline, StyledList, StyledItem } from './IndustryFilter.style';

// import { useListUpdate } from '../../../hooks/useModList';

// let toggleList = [];

// const updateContextList = (props, updateList) => {
//   const anotherArray = props.filter(({ industry }) => toggleList.includes(industry));

//   if (anotherArray.length > 0) {
//     updateList(anotherArray);
//   }
//   else {
//     updateList(props);
//   }
// }


// const IndustryFilter = ({ props }) => {
//   const updateList = useListUpdate();
//   const uniqueList = [...new Set(props.map(element => element.industry !== 'n/a' ? element.industry : null))];
//   uniqueList.sort();


//   const onClick = (e) => {
//     const industry = e.target.innerHTML;
//     e.target.selected = !e.target.selected;
//     e.target.style.background = e.target.selected ? '#45C3F2' : '#f0f0f0';
//     e.target.selected ? toggleList.push(industry) : toggleList = toggleList.filter(item => item !== industry);

//     updateContextList(props, updateList);
//   };

//   const createMenuItems = () => {
//     let keyNum = 0;
//     return uniqueList.map(element => {
//       keyNum++;
//       return (
//         <StyledItem key={keyNum} onClick={onClick} selected={false}>
//           {element}
//         </StyledItem>
//       )
//     })
//   }

//   return (
//     <StyledList>
//       <StyledHeadline>
//         Filter by Industries
//       </StyledHeadline>
//       {createMenuItems()}
//     </StyledList>
//   )
// }

// export default IndustryFilter;
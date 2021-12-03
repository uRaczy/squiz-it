import { StyledItem, StyledText } from "./ListItem.style" 

const ListItem = ({props}) => {
  console.log(props);
  return (
    <StyledItem>
      <StyledText>
        {props.name}
      </StyledText>
      <StyledText>
        {props.country}
      </StyledText>
      <StyledText>
        {props.industry}
      </StyledText>
      <StyledText>
        {props.numberOfEmployees}
      </StyledText>
    </StyledItem>
  );
}

export default ListItem;
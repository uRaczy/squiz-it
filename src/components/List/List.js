import { StyledListComponent, StyledList } from "./List.style"
import ListHeadline from "./ListHeadline/ListHeadline";
import ListItem from './ListItem/ListItem';

const List = ({props}) => {
  return(
    <StyledListComponent>
      <ListHeadline />
      <StyledList>
        {props.map((element) => <ListItem props={element} key={element.id} />)}
      </StyledList>
    </StyledListComponent>
  )
}

export default List;
import { StyledList } from "./List.style"
import ListHeadline from "./ListHeadline/ListHeadline";

const List = ({props}) => {
  console.log('list', props);
  return(
    <StyledList>
      <ListHeadline props={props[0]} />
    </StyledList>

  )
}

export default List;
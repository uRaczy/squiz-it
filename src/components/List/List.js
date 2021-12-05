import { StyledListComponent, StyledList } from "./List.style"
import ListHeadline from "./ListHeadline/ListHeadline";
import ListItem from './ListItem/ListItem';

import { useList } from '../../hooks/useModList';

const List = () => {
  const list = useList();

  return (
    <StyledListComponent>
      <ListHeadline />
      <StyledList>
        {list.map((element) => <ListItem props={element} key={element.id} />)}
      </StyledList>
    </StyledListComponent>
  )
}

export default List;
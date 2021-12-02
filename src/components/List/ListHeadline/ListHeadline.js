import { StyledHeadline } from './ListHeadline.style';

const ListHeadline = ({props}) => {
  const createTitles = () => {
    console.log(typeof(props))
  }
  return (
    <StyledHeadline>
      {createTitles()}
    </StyledHeadline>
  )
}

export default ListHeadline;
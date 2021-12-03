import GlobalStyle from "./theme/global.style";

// import useFetchData from "./hooks/useFetchData";
import { StyledContainer } from "./App.style";
import List from './components/List/List';
import Controls from './components/Controls/Controls';

import tempFetch from './hooks/tempFetch';

const App = () => {
  // const { data } = useFetchData('https://my.api.mockaroo.com/accounts.json?key=3c370320');
  const data = tempFetch;

  return (
    <div className="App">
      <GlobalStyle />
      <StyledContainer>
        <Controls />
        {data.length > 0 ? <List props={data} /> : <div>loading... </div>}
      </StyledContainer>
    </div>
  );
}

export default App;

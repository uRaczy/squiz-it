import GlobalStyle from "./theme/global.style";

import { useEffect } from "react";

import { StyledContainer } from "./App.style";
import List from './components/List/List';
import Controls from './components/Controls/Controls';

// import useFetchData from "./hooks/useFetchData";
import tempFetch from './hooks/tempFetch';
import { useList, useListUpdate } from './hooks/useModList';

const App = () => {
  // const { data } = useFetchData('https://my.api.mockaroo.com/accounts.json?key=3c370320');
  const list = useList();
  const updateList = useListUpdate();

  useEffect(() => {
    updateList(tempFetch);
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <StyledContainer>
        <Controls props={tempFetch} />
        <List />
      </StyledContainer>
    </div>
  );
}

export default App;

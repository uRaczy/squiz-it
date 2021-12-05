import GlobalStyle from "./theme/global.style";

import { useEffect } from "react";

import { StyledContainer } from "./App.style";
import List from './components/List/List';
import Controls from './components/Controls/Controls';

import tempFetch from './hooks/tempFetch';
import useFetchData from "./hooks/useFetchData";
import { useOriginalList, useOriginalListUpdate, useList, useListUpdate } from './hooks/useModList';

const App = () => {
  const useOgList = useOriginalList();
  const setOgList = useOriginalListUpdate();
  const setList = useListUpdate();
  // const { data } = useFetchData('https://my.api.mockaroo.com/squiz.json?key=1e81f470');
  // setOgList(data);
  // setList(useOgList);

  useEffect(() => {
    setOgList(tempFetch);
  }, [tempFetch]);

  useEffect(() => {
    setList(useOgList)
  }, [useOgList]);

  const renderIfFetched = () => {
    if (Array.isArray(useOgList) && useOgList.length > 0) {
      return (
        <>
          <Controls props={useOgList} />
          <List />
        </>
      )
    }
    else {
      return <div>Loading data</div>
    }
  }

  return (
    <div className="App">
      <GlobalStyle />
      <StyledContainer>
        {renderIfFetched()}
      </StyledContainer>
    </div>
  );
}

export default App;

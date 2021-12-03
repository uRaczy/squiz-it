import GlobalStyle from "./theme/global.style";

import List from './components/List/List';
import useFetchData from "./hooks/useFetchData";

const App = () => {
  const { data } = useFetchData('https://my.api.mockaroo.com/accounts.json?key=3c370320');

  return (
    <div className="App">
      <GlobalStyle />
      {data.length > 0 ? <List props={data} /> : <div>loading... </div>}
    </div>
  );
}

export default App;

import GlobalStyle from "./theme/global.style";

import List from './components/List/List';
import useFetchData from "./hooks/useFetchData";

const App = () => {
  const { data } = useFetchData('https://my.api.mockaroo.com/accounts.json?key=3c370320');

  return (
    <div className="App">
      <GlobalStyle />
      <List props={data} />
    </div>
  );
}

export default App;

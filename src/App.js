import GlobalStyles from './components/GlobalStyles'
import CountryList from './components/CountryList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import ActionList from './components/ActionList'

const initState = {
  countryList: [],
  countryListByName: [],
  countryListByRegion: [],
  filterByRegion: '',
}

const store = createStore(reducer, initState)

function App() {
  return (
    <Provider store={store}>
      <i className="far fa-moon"></i>
      <div className="App">
        <ActionList />
        <GlobalStyles />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;

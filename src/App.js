import GlobalStyles from './components/GlobalStyles'
import CountryList from './components/CountryList'
import ActionList from './components/ActionList'
import Header from './components/Header'
import CountryPage from './pages/CountryPage'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/country/:id" component={CountryPage} />
          <Route path="/">
            <ActionList />
            <CountryList />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import GlobalStyles from './components/GlobalStyles'
import CountryList from './components/CountryList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initState = {
  countryList: [],
  countryListByName: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_COUNTRY_LIST': {
      return { ...state, countryList: action.payload }
    }
    default: {
      return { ...state }
    }
    case 'GET_COUNTRY_BY_NAME': {
      const countryListByName = state.countryList.filter((country) => {
        return country.name.toLowerCase().startsWith(action.payload.toLowerCase())
      })
        return { ...state, countryListByName }
    }
  }
}

const store = createStore(reducer, initState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyles />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;

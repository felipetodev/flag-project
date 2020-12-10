export default function reducer(state, action) {
    switch(action.type) {
      case 'SET_COUNTRY_LIST': {
        return { ...state, countryList: action.payload }
      }
      default: {
        return { ...state }
      }
      case 'GET_COUNTRY_BY_NAME': {
        let list
        if(state.filterByRegion !== '') {
          list = state.countryListByRegion
        } else {
          list = state.countryList
        }
        const countryListByName = list.filter((country) => country.name.toLowerCase().startsWith(action.payload.toLowerCase()))
          return { ...state, countryListByName }
        }
      case 'FILTER_BY_REGION': {
        const { regionSelected } = action.payload
  
        if(regionSelected === '') {
          return { ...state, countryListByRegion: [], filterByRegion: '' }
        }
  
        const countryListByRegion = state.countryList.filter((country) => country.region === regionSelected)
        return { ...state, countryListByRegion, filterByRegion: regionSelected }
      }
    }
}
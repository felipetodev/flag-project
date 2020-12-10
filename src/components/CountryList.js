import { useEffect } from 'react'
import Country from './Country'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const CountryList = () => {
    const dispatch = useDispatch()
    
    const countryListByName = useSelector((state) => state.countryListByName)

    const countryList = useSelector((state) => {
        if(state.filterByRegion !== '' && countryListByName.length === 0) {
            return state.countryListByRegion
        }

        if(countryListByName.length > 0) {
            return countryListByName
        }

        return state.countryList
    })
    // console.log(countryList)

    // const [ countryList, setCountryList ] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                // setCountryList(json) <-- Estado Local
                // console.log(json)
                // Redux - Estado global
                dispatch({
                    type: 'SET_COUNTRY_LIST',
                    payload: json
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [dispatch])

    return (
        <CountryListStyled>
            {countryList.map((country) => {
                return (
                    <Country
                        key={country.name}
                        flag={country.flag}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                    />
                )
            })

            }
        </CountryListStyled>
    )
}

const CountryListStyled = styled.div`
    display: grid;
    gap: 2.3em;
    justify-content: center;
    border: 1px solid red;
    background: var(--bg);
    padding: 4em 2em;
`

export default CountryList
import { useEffect, useState } from 'react'
import Country from './Country'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const CountryList = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const countryList = useSelector((state) => state.countryList)
    const countryListByName = useSelector((state) => state.countryListByName)
    // console.log(countryList)

    // const [ countryList, setCountryList ] = useState([])

    const filterByName = (e) => {
        // console.log(e.target.value)
        setInputValue(e.target.value)
        dispatch({
            type: 'GET_COUNTRY_BY_NAME',
            payload: e.target.value,
        })
    }

    const clearInput = () => {
        dispatch({
            type: 'GET_COUNTRY_BY_NAME',
            payload: '',
        })

        setInputValue('')
    }

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                // setCountryList(json) Estado Local
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
            <input type="text" value={inputValue} onChange={filterByName} />
            {inputValue && 
                <button onClick={clearInput}>X</button>
            }
            {countryListByName.length === 0 && inputValue &&
                <p><strong>{inputValue}</strong> Not Found in Countries.</p>
            }
            {(countryListByName.length > 0 ? countryListByName : countryList).map((country) => {
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
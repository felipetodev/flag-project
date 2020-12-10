import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Input from './Input'

const Search = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()
    const countryListByName = useSelector((state) => state.countryListByName)

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

    return (
        <SearchStyled>
            {inputValue && 
                <button onClick={clearInput}>X</button>
            }
            {countryListByName.length === 0 && inputValue &&
                <p><strong>{inputValue}</strong> Not Found in Countries.</p>
            }
            <Input value={inputValue} onChange={filterByName} placeholder="Search for a country..." />
        </SearchStyled>
    )
}

const SearchStyled = styled.div`
    display: flex;
`

export default Search
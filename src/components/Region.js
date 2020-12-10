import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const countryListByRegionAction = (regionSelected) => {
    return {
        type: 'FILTER_BY_REGION',
        payload: { regionSelected },
    }
}

const Region = () => {
    const dispatch = useDispatch()

    const filterByRegion = useSelector((state) => state.filterByRegion)

    const onRegionChange = (e) => {
        const value = e.target.value
        dispatch(countryListByRegionAction(value))
    }

    return (
        <RegionFilterStyled onChange={onRegionChange} value={filterByRegion} >
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </RegionFilterStyled>
    )    
}

const RegionFilterStyled = styled.select`
    padding: 1.3em;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .05);
    cursor: pointer;
`

export default Region
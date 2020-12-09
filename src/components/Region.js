import { useDispatch, useSelector } from 'react-redux'

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
        <select onChange={onRegionChange} value={filterByRegion} >
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )    
}

export default Region
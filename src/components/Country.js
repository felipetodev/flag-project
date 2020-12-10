import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Country = ({ flag, name, population, region, capital }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/country/${name}`)
    }

    return (
        <CountryStyled onClick={handleClick}>
            <img loading="lazy" src={flag} alt={name} />
            <div className="details">
                <h2>{name}</h2>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
            </div>
        </CountryStyled>
    )
}

const CountryStyled = styled.div`
    width: 264px;
    border-radius: 5px;
    overflow: hidden;
    margin: 1em;
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, .03);
    cursor: pointer;

    img {
        width: 100%;
        object-fit: cover;
    }

    .details {
        padding: 1.5em;
    }

    h2 {
        margin: 0;
        margin-bottom: 1rem;
        font-size: 18px;
        font-weight: 700;
    }

    p {
        font-size: .9em;
        margin-bottom: .5em;
    }
`

export default Country
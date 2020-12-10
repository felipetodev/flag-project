import styled from 'styled-components'

const CountryPage = ({ match }) => {
    // console.log(props)

    return(
        <CountryPageStyled>
            {match.params.id}
            {/* country details */}
        </CountryPageStyled>
    )
}

const CountryPageStyled = styled.div`

`

export default CountryPage
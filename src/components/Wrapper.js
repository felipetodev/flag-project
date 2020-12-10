import styled from 'styled-components'

const Wrapper = ({ children }) => {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

const WrapperStyled = styled.div`
    max-width: 1280px;
    margin: auto;
    padding: 0 1rem;
`

export default Wrapper
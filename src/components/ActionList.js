import styled from 'styled-components'
import Search from './Search'
import Region from './Region'
import Wrapper from './Wrapper'

const ActionList = () => {
    return (
        <ActionListStyled>
            <Wrapper>
                <div className="grid">
                    <Search />
                    <Region />
                </div>
            </Wrapper>
        </ActionListStyled>
    )
}

const ActionListStyled = styled.div`
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
    }
`

export default ActionList
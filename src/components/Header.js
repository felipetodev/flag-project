import styled from 'styled-components'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

const Header = () => {

    const handleClick = () => {
        console.log('Troleado p*to')
    }

    return (
        <HeaderStyled>
            <Wrapper>
                <div className="content">
                    <Link to="/">
                        <h1>Where in the world?</h1>
                    </Link>
                    <div className="dark-mode">
                        <p onClick={handleClick}>
                            <i className="moon far fa-moon"></i>
                            Dark Mode
                        </p>
                    </div>
                </div>
            </Wrapper>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    background: white;
    margin-bottom: 1em;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);

    .content {
        display: flex;
        height: 80px;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        font-size: 14px;
    }

    .dark-mode {
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;

        .moon {
            transform: rotate(-25deg);
            margin-right: 10px;
            font-size: 13px;
        }
    }
`

export default Header
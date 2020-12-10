import styled from 'styled-components'

const Input = ({ ...props }) => {
    return (
        <InputStyled>
            <i className="fas fa-search"></i>
            <input type="text" {...props} />
        </InputStyled>
    )
}

const InputStyled = styled.label`
    display: inline-flex;
    background: #fff;
    align-items: center;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .05);
    padding: 0 2rem;
    border-radius: 5px;
    flex: 1;

    i {
        margin-right: 1em;
        color: #c4c4c4;
    }

    input {
        flex: 1;
        border: none;
        height: 48px;
        line-height: 48px;
        font-size: .7em;
        outline: none;
    }

    &::-webkit-input-placeholder {
        color: #c4c4c4;
    }
`

export default Input
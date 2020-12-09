import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 16px;
    }

    :root {
        --black: #115717;
        --white: white;
        --bg: #fafafa;
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        color: var(---black);
    }

    img {
        width: 100%;
        display: block;
    }
`

export default GlobalStyles
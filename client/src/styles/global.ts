import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    }
body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
}
body, input, button {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
} 

#root {
    /* max-width: 960px; */
    /* margin: 0 auto; */
    /* padding: 40px 20px; */
}

button {
    cursor: pointer;
}

`
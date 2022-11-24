import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0px;
    background-color: #EAF2F2;
}
#root{
    display: grid;
    grid-template-columns: 260px auto 260px;
    position: relative;
}
`;

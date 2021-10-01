import { createGlobalStyle } from "styled-components";
import { Pallete } from "./pallete";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0 auto;
        background-color: ${Pallete.mainColor};
    }
`;

export default GlobalStyle;

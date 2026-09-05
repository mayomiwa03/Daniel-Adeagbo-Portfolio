import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
   box-sizing: border-box;

}

  html, body, #root {
   font-family: "Poppins", sans-serif;
   overflow-x: hidden;
   padding: 0;
   margin: 0;
  
  }

  body{
    background: #000;
  }
   
`;
export default GlobalStyle;

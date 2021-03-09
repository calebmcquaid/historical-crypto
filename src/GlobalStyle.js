import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
      background-color: #7ee8fa;
      background-image: linear-gradient(315deg, #7ee8fa 0%, ${(props) => props.priceChange ? "#69fc59" : "#ff72bb"} 74%);  
      background-repeat: no-repeat; 
  }

  body {
      font-family: 'Mulish', sans-serif;
  }
`;
 
export default GlobalStyle;
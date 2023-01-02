import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { DefaultBackground, defaultColor, Green } from "./Styles/colors";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${DefaultBackground};
    color: ${defaultColor};
    line-height: 1.3;
  }

  a:hover{
    color: ${Green}
  }

  a::before {
    content: "0" counter(item) ".";
    margin-right: 5px;
    color: ${Green};
    text-align: right;
  }

  .gptbYI::before {
      content: "0" counter(item) ".";
      margin-right: 5px;
      color: ${Green};
      text-align: right;
  }

  .TNJlq li::before{
    content: "▹";
    color: ${Green}
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </>
  );
}

export default App;

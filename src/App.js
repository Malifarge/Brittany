import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { DefaultBackground, defaultColor, Green } from "./Styles/colors";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${DefaultBackground};
    color: ${defaultColor};
  }

  a:hover{
    color: ${Green}
  }

  a::before {
    content: "0" counter(item) ".";
    margin-right: 5px;
    color: ${Green};
    font-size: var(--fz-xxs);
    text-align: right;
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

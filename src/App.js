import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import Nav from "./Components/Nav";
import { DefaultBackground, defaultColor, Green } from "./Styles/colors";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${DefaultBackground};
    color: ${defaultColor};
  }

  a:hover{
    color: ${Green}
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header>
          <Logo/>
          <Nav/>
      </Header>
    </>
  );
}

export default App;

//####React
import { useContext } from "react";

//####Theming and Styles
import { AppWrapper, GlobalStyles } from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";

//####Context
import GlobalContext from "./context/GlobalContext";
import Header from "./components/Header";
import KeyPad from "./components/KeyPad";
import CalcScreen from "./components/CalcScreen";


function App() {
  const {theme} = useContext(GlobalContext);
  return (
    <ThemeProvider theme ={theme} >
      <GlobalStyles/>
      <AppWrapper>
        <Header/>
        <CalcScreen/>
        <KeyPad/>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

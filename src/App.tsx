import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";
import { GlobalStyle } from "./styles/Global";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Route";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

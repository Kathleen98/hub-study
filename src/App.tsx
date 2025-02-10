import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div></div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

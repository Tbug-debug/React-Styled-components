import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import Bmt from "./Bmt";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Bmt />
    </ThemeProvider>
  );
}

export default App;

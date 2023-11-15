import { ContextProvider } from "./context/ContextProvider";
import { ThemeProvider, createTheme } from "@mui/material";
import Router from "./Router";
import "./App.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7B4F94",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
          <Router />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;

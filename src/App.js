import { ThemeProvider } from "@material-ui/core";
import Routes from "./routes";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

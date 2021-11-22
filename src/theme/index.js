import { createTheme, responsiveFontSizes } from "@material-ui/core";
let theme = createTheme({
  palette: {
        primary: {
        main: "#000000",
        },
        text: {
        secondary: "#fff",
        },
        background: {
        main: "#E6E6E6",
        },
    },
    typography: {
        fontFamily: ["Poppins", "sans"].join(","),
    },
});
theme = responsiveFontSizes(theme);

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

export default theme;

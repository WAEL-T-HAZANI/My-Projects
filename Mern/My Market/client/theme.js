import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, deepOrange, lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FD7014",
      main: "#222831",
      dark: "#393E46",
      contrastText: "#EEEEEE",
    },
    secondary: {
      light: "#EEEEEE",
      main: "#FD7014",
      dark: "#393E46",
      contrastText: "#222831",
    },
    openTitle: blueGrey["400"],
    protectedTitle: deepOrange["400"],
    type: "light",
  },
});

export default theme;

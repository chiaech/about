import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#90caf9',
      light: '#a6d4fa',
      dark: '#648dae',
    },
    secondary: {
      main: '#5d737e',
      light: '#7d8f97',
      dark: '#6e6e6e',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: "#FFF"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        color: '#fff',
        padding: '20px 10px',
        backgroundColor: '#424242', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },

});
export default theme;

import { createTheme} from "@mui/material/styles";

export const themeOptions= {
  palette: {
    type: 'light',
    mode: 'light',
    primary: {
      main: '#2b0504',
    },
    secondary: {
      main: '#f2545b',
    },
    success: {
      main: '#6bd425',
    },
    info: {
      main: '#a7fff6',
    },
    error: {
      main: '#08415c',
    },
    
  },
  
};

export const theme = createTheme(themeOptions);
export default theme
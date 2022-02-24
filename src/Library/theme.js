import {ThemeProvider,responsiveFontSizes,createTheme} from '@material-ui/core';



export const theme = createTheme({
   breakpoints:{
     values:{
       xs:0,
       sm:400,
       md:800,
     }
   },
    palette: {
        primary: {
          main: "#f68b1e",
          blue:'#17A8D6',
        },
        secondary: {
          main: '#fff',
        },
      },
      typography:{
        h6:{
          fontWeight:'bold'
        },
        subtitle1:{
          fontWeight:'600',
        }
      },
      overrides:{
        MuiFormControl:{
          root:{
           backgroundColor:'white !important'
          }
        },
      }
});   


theme.typography.h3 = {
  
  [theme.breakpoints.up("xs")]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '2.5707rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '2.7849rem',
  },
  
};
theme.typography.h4 = {
  
  [theme.breakpoints.up("xs")]: {
    fontSize: '1.5625rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '1.8219rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '2.0243rem',
  },
  
};

theme.typography.h5 = {
  
  [theme.breakpoints.up("xs")]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '1.3118rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '1.4993rem',
  },
  
};

theme.typography.h6 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: '1.05rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '1.0938rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '1.0938rem',
  },
  
};
theme.typography.subtitle1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: '0.88rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '0.95rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '1rem',
  },
  
};




import { createTheme } from '@material-ui/core';



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
        }
      } 
});   
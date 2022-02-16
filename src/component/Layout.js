import React from 'react';
import Footer from './footer/footer';
import Nav from './navbar/nav';
import { theme } from '../Library/theme'
import {ThemeProvider,responsiveFontSizes} from '@material-ui/core';


let Theme = responsiveFontSizes(theme);
export default function Layout({children,show }) {

  return (
      <>
      <ThemeProvider theme={Theme}>
       <Nav show={show}/>
	       {children}
	     <Footer />
      </ThemeProvider> 
      </>
  );
}
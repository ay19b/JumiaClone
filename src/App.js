import React from "react";
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { theme } from './Library/theme';
import {ThemeProvider} from '@material-ui/core';
import Home from "./component/home/home";
import Basket from './component/basket/basket';
import DetailProd from './component/detailProd/detailProd'
import Supermarket from './component/page/supermarket'
import Fashion from './component/page/fashion';
import Appliance from './component/page/appliance';
import Sport from './component/page/sports';
import Computer from './component/page/computer';


function App() {
  
  return (
    
    <ThemeProvider theme={theme}>
    <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
          <>
               
           <Switch>
              <Route exact path={'/'} component={Home}><Home /></Route>
              <Route  path={'/Supermarket'} component={Supermarket}><Supermarket /></Route>
              <Route  path={'/fashion'} component={Fashion}><Fashion /></Route>
              <Route  path={'/appliance'} component={Appliance}><Appliance /></Route>
              <Route  path={'/Sports'} component={Sport}><Sport /></Route>
              <Route  path={'/computing'} component={Computer}><Computer /></Route>
              <Route  path={'/basket'} component={Basket}><Basket /></Route>
              <Route  path={'/product/:id'} component={DetailProd}><DetailProd /></Route>  
           </Switch>
              
          </>
     </BrowserRouter>
    </div>
    </ThemeProvider>
   
  );
}

export default App;

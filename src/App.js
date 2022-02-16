import React from "react";
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from "./component/navbar/nav";
import Footer from "./component/footer/footer";
import { theme } from './Library/theme';
import {ThemeProvider,responsiveFontSizes} from '@material-ui/core';
import Home from "./component/home/home";
import Basket from './component/basket/basket';
import DetailProd from './component/detailProd/detailProd'
import Supermarket from './component/page/supermarket'
import Office from './component/page/office'
import Beauty from './component/page/beauty';
import Fashion from './component/page/fashion';
import Appliance from './component/page/appliance';
import Sport from './component/page/sports';
import Telephone from './component/page/telephone';
import Computer from './component/page/computer';





let Theme = responsiveFontSizes(theme);

function App() {
     
  return (
    <ThemeProvider theme={Theme}>
    <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
          <>
               
           <Switch>
              <Route exact path={'/'} component={Home}><Home /></Route>
              <Route  path={'/Supermarket'} component={Supermarket}><Supermarket /></Route>
              <Route  path={'/office'} component={Office}><Office /></Route>
              <Route  path={'/beauty'} component={Beauty}><Beauty /></Route>
              <Route  path={'/fashion'} component={Fashion}><Fashion /></Route>
              <Route  path={'/appliance'} component={Appliance}><Appliance /></Route>
              <Route  path={'/Sports'} component={Sport}><Sport /></Route>
              <Route  path={'/telephone'} component={Telephone}><Telephone /></Route>
              <Route  path={'/computer'} component={Computer}><Computer /></Route>
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

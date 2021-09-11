import React from "react";
import './App.css';
import Header from "./component/header/header"
import Home from './component/home/home';
import DetailProd from './component/detailProd/detailProd'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './component/footer/footer'
import Basket from './component/basket/basket';
import Supermarket from './component/page/supermarket'
import Office from './component/page/office'
import Beauty from './component/page/beauty';
import Fashion from './component/page/fashion';
import Appliance from './component/page/appliance';
import Sport from './component/page/sport';
import Telephone from './component/page/telephone';
import Computer from './component/page/computer';


function App() {
     
  return (
    <div className="App">
         
               <BrowserRouter basename={process.env.PUBLIC_URL}>
               <>
               
              <Switch>
              
          
              
              <Route exact path={'/'} component={Home}>
                   <Home />
              </Route>
              <Route  path={'/Supermarket'} component={Supermarket}>
                   <Header />
                   <Supermarket />
                   <Footer />
              </Route>
              <Route  path={'/office'} component={Office}>
                   <Header />
                   <Office />
                   <Footer />
              </Route>
          
              <Route  path={'/beauty'} component={Beauty}>
                   <Header />
                   <Beauty />
                   <Footer />
              </Route>
              <Route  path={'/fashion'} component={Fashion}>
                   <Header />
                   <Fashion />
                   <Footer />
              </Route>
          
              <Route  path={'/appliance'} component={Appliance}>
                   <Header />
                   <Appliance />
                   <Footer />
              </Route>
          
              <Route  path={'/Sports'} component={Sport}>
                   <Header />
                   <Sport />
                   <Footer />
              </Route>
          
              <Route  path={'/telephone'} component={Telephone}>
                   <Header />
                   <Telephone />
                   <Footer />
              </Route>
          
              <Route  path={'/computer'} component={Computer}>
                   <Header />
                   <Computer />
                   <Footer />
              </Route>
                  
              
                 <Route path={'/basket'} component={Basket}>
                   <Header />
                   <Basket />
                   <Footer />
                 </Route>
                 <Route path={'/product/:id'} component={DetailProd}>
                   <Header />
                   <DetailProd />
                   <Footer />
                 </Route>
                 
              </Switch>
              
              </>
               </BrowserRouter>
    </div>

  );
}

export default App;

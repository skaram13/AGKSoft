import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import Products from './Main/Products/Products';
import ProductAccessories from './Main/Products/Hardware/Hardware';
import Contact from './Main/Contact/Contact';
import Download from './Home/Home';
import Support from './Main/Support/Support';
import Reports from './Main/Reports/Reports';
import Portable from  './Main/Product/Portable/Portable';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products/software" component={Products}/>
            <Route exact path="/products/accessories/portable" component={Portable}/>
            <Route exact path="/products/accessories" component={ProductAccessories}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/support" component={Support}/>
            <Route exact path="/download" component={Download}/>
            <Route exact path="/reports" component={Reports}/>
        </Switch>
    </BrowserRouter>
),document.getElementById('root'));
registerServiceWorker();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import Products from './Main/Products/Products';
import ProductAccessories from './Main/Products/Hardware/Hardware';
import Contact from './Main/Contact/Contact';
import Download from './Home/Home';
import Demos from './Home/Home';
import Reports from './Home/Home';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products/software" component={Products}/>
            <Route exact path="/products/accessories" component={ProductAccessories}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/download" component={Download}/>
            <Route exact path="/demos" component={Demos}/>
            <Route exact path="/reports" component={Reports}/>
        </Switch>
    </BrowserRouter>
),document.getElementById('root'));
registerServiceWorker();



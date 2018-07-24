import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
),document.getElementById('root'));
registerServiceWorker();



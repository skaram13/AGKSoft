import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import SoftwareProducts from './Main/Products/SoftwareProducts/SoftwareProducts';
import ProductAccessories from './Main/Products/Accessories/Accessories';
import Contact from './Main/Contact/Contact';
import Download from './Home/Home';
import Support from './Main/Support/Support';
import Reports from './Main/Reports/Reports';
import Portable from './Main/Product/Accessory/Portable/Portable';
import MiniPC from './Main/Product/PCs/MiniPC/MiniPC';
import MiniHP from './Main/Product/PCs/MiniHP/MiniHP';
import NanoPC from './Main/Product/PCs/NanoPC/NanoPC';
import MicroPC from './Main/Product/PCs/MicroPC/MicroPC';
import USBScanner from './Main/Product/Accessory/USBScanner/USBScanner';
import BarcodePrinter from './Main/Product/Accessory/BarcodePrinter/BarcodePrinter';
import RegisterScanner from './Main/Product/Accessory/RegisterScanner/RegisterScanner';
import POS from './Main/Product/SoftwareAndPOS/POS/POS';
import HomeOffice from './Main/Product/SoftwareAndPOS/ConversionTool/ConversionTool';
import BackOffice from './Main/Product/SoftwareAndPOS/BackOffice/BackOffice';
import GettingStarted from './Main/Product/SoftwareAndPOS/BackOffice/GettingStarted/GettingStarted';
import DataEntry from './Main/Product/SoftwareAndPOS/DataEntry/DataEntry';
import ConversionTool from './Main/Product/SoftwareAndPOS/ConversionTool/ConversionTool';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products/software" component={SoftwareProducts}/>
            <Route exact path="/products/software/pos" component={POS}/>
            <Route exact path="/products/software/conversionTool" component={ConversionTool}/>
            <Route exact path="/products/software/homeOffice" component={HomeOffice}/>
            <Route exact path="/products/software/backOffice" component={BackOffice}/>
            <Route exact path="/products/software/backOffice/gettingStarted" component={GettingStarted}/>
            <Route exact path="/products/software/dataEntry" component={DataEntry}/>
            <Route exact path="/products/accessories/portable" component={Portable}/>
            <Route exact path="/products/accessories/miniPC" component={MiniPC}/>
            <Route exact path="/products/accessories/miniHP" component={MiniHP}/>
            <Route exact path="/products/accessories/microPC" component={MicroPC}/>
            <Route exact path="/products/accessories/nanoPC" component={NanoPC}/>
            <Route exact path="/products/accessories/usbScanner" component={USBScanner}/>
            <Route exact path="/products/accessories/barcodePrinter" component={BarcodePrinter}/>
            <Route exact path="/products/accessories/registerScanner" component={RegisterScanner}/>
            <Route exact path="/products/accessories" component={ProductAccessories}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/support" component={Support}/>
            <Route exact path="/download" component={Download}/>
            <Route exact path="/reports" component={Reports}/>
        </Switch>
    </BrowserRouter>
),document.getElementById('root'));
registerServiceWorker();



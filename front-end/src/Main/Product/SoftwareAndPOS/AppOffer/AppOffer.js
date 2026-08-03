import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import './AppOffer.css';
import ProductCarousel from '../../../Shared/ProductCarousel/ProductCarousel';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import mainScreen from '../../../../assets/AGKSoftAppMain.jpg';
import createModify from '../../../../assets/AGKSoftAppCreateModify.jpg';
import productWizard from '../../../../assets/AGKSoftAppProductWizard.jpg';
import shortOver from '../../../../assets/AGKSoftAppShortOver.jpg';
import fuelSales from '../../../../assets/AGKSoftAppFuelSales.jpg';

const photos = [mainScreen, createModify, fuelSales, productWizard, shortOver];
const photosCaptions = [
    'AGKSoft App Main Screen',
    'Create or Modify Products',
    'Fuel Sales',
    'Product Wizard',
    'Short/Over'
];

class AppOffer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main-container app-offer-page">
                    <div className="description-text">
                        Use the AGKSoft App to access essential product, shift and fuel-sales features.
                    </div>
                    <ProductCarousel photos={photos} photosCaptions={photosCaptions} imageLink="/appOffer.html"/>
                    <div className="description-text last-element">
                        For more information, please <a href="/contact">contact us</a>.
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AppOffer;

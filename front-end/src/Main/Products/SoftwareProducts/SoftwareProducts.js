import React, { Component } from 'react';
import "./SoftwareProducts.css";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import home from "../../../assets/home.png";
import POS from "../../../assets/POS.png";
import conversion from "../../../assets/conversion.png";
import data from "../../../assets/data.png";
import backoffice from "../../../assets/backoffice.png";

class SoftwareProducts extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="products-container">
                    <div className="product-page-heading row-centered">Software</div>
                    <div className="solutions">
                        <div className="product-entry-software">
                            <a href="/products/software/backOffice">
                                <h3>Back Office</h3>
                                <img className="solution-image" src={backoffice} alt="Scale With Confidence"/>
                                <p>The AGKSoft Home Office allows data from multiple back office locations to be consolidated into one centralized location.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="/products/software/homeOffice">
                                <h3>Home Office</h3>
                                <img className="solution-image" src={home} alt="Scale With Confidence"/>
                                <p>The AGKSoft Home Office allows data from multiple back office locations to be consolidated into one centralized location.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="/products/software/conversionTool">
                                <h3>Conversion Tool</h3>
                                <img className="solution-image" src={conversion} alt="Scale With Confidence"/>
                                <p>Used to convert registers such as a Gilbarco G-Site, Ruby VeriFone, Sapphire, Topaz, the AGKSoft POS System and more.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="/products/software/dataEntry">
                                <h3>Data Entry</h3>
                                <img className="solution-image" src={data} alt="Scale With Confidence"/>
                                <p>Services for maintaining your price book or your complete Sales Download, Shift Balancing, Accounting and Inventory.</p>
                            </a>
                        </div>
                    </div>
                    <div className="product-page-heading row-centered">Point of Sales</div>
                    <div className="solutions">
                        <div className="product-entry-pos">
                            <a href="/products/software/pos">
                                <h3>POS</h3>
                                <img className="solution-image" src={POS} alt="Scale With Confidence"/>
                                <p>For C-Stores, Liquor Stores, Grocery Stores, General Stores, Hardware Stores, Flower shops or any store that requires scanning.</p>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default SoftwareProducts;

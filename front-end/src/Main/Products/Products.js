import React, { Component } from 'react';
import Row from "../../Home/Row/Row";
import "./Products.css";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import home from "../../assets/home.png";
import POS from "../../assets/POS.png";
import conversion from "../../assets/conversion.png";
import data from "../../assets/data.png";
import backoffice from "../../assets/backoffice.png";

class Products extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="products-container">
                    <Row title="Software"/>
                    <div className="solutions">
                        <div className="product-entry-software">
                            <a href="">
                                <h3>Back Office</h3>
                                <img className="solution-image" src={backoffice} alt="Scale With Confidence"/>
                                <p>The AGKSoft Home Office allows data from multiple back office locations to be consolidated into one centralized location.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="">
                                <h3>Home Office</h3>
                                <img className="solution-image" src={home} alt="Scale With Confidence"/>
                                <p>The AGKSoft Home Office allows data from multiple back office locations to be consolidated into one centralized location.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="">
                                <h3>Conversion Tool</h3>
                                <img className="solution-image" src={conversion} alt="Scale With Confidence"/>
                                <p>Used to convert registers such as a Gilbarco G-Site, Ruby VeriFone, Sapphire, Topaz, the AGKSoft POS System and more.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="">
                                <h3>Data Entry</h3>
                                <img className="solution-image" src={data} alt="Scale With Confidence"/>
                                <p>Services for maintaining your price book or your complete Sales Download, Shift Balancing, Accounting and Inventory.</p>
                            </a>
                        </div>
                    </div>
                    <Row title="Point of Sales"/>
                    <div className="solutions">
                        <div className="product-entry-pos">
                            <a href="">
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

export default Products;

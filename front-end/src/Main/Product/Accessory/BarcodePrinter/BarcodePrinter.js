import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import barcode1 from "../../../../assets/BarcodePrinter/barcode1.gif";
import barcode2 from "../../../../assets/BarcodePrinter/barcode2.gif";
import barcode3 from "../../../../assets/BarcodePrinter/barcode3.gif";
import barcode4 from "../../../../assets/BarcodePrinter/barcode4.gif";

const baseUrl = "/images/";

class BarcodePrinter extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Barcode Printer</h1>
                    <div className="description-text">You can print on Tiny [2"X0.75"], Small [3.5"X1.1"] or Large [4"X2.31"] labels.</div>
                    <div className="description-text">You can order any of these labels by contacting AGKSoft.</div>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 1 - Tiny (2" X 0.75")</th>
                        <tr className="center-images"><img alt='Figure 4 (2" X 0.75")' className="product-images image-border" src={barcode4}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 2 - Small (3.5" X 1.1")</th>
                        <tr className="center-images"><img alt='Figure 3 (3.5" X 1.1")' className="product-images image-border" src={barcode3}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 3 - Large (4" X 2.31")</th>
                        <tr className="center-images"><img alt='Figure 1 (4" X 2.31")' className="product-images image-border" src={barcode1}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Dymo Software Driver</th>
                        <tr className="center-images"><a href={baseUrl + "DLS8Setup8.7.4.exe"}>Download Version 8.7.4</a></tr>
                        <tr className="center-images"><a href={baseUrl + "DCDSetup1.3.2.18.exe"}>Download Version 1.3.2.18</a></tr>
                    </table>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BarcodePrinter;

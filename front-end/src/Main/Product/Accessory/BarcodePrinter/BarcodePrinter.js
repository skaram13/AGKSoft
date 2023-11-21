import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import barcode1 from "../../../../assets/BarcodePrinter/barcode1.gif";
import barcode3 from "../../../../assets/BarcodePrinter/barcode3.gif";
import barcode4 from "../../../../assets/BarcodePrinter/barcode4.gif";

import barcode6 from "../../../../assets/BarcodePrinter/UPCCodeVS.gif";

import DymoTwin  from "../../../../assets/BarcodePrinter/DymoTwin.jpg";
import Seiko  from "../../../../assets/BarcodePrinter/Seiko.jpg";


const baseUrl = "/images/";

class BarcodePrinter extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Barcode Printer</h1>
                    <div className="description-text">You can print on Very Small [1"X1.5"], Tiny [2"X0.75"], Small [3.5"X1.1"] or Large [4"X2.31"] labels.</div>
                    <div className="description-text">You can order any of these labels by contacting AGKSoft.</div>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 1 - Very Small (Not Scannable) (1" X 1.5")</th>
                        <tr className="center-images"><img alt='Figure 1 (1" X 1.5")' className="product-images image-border" src={barcode6}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 2 - Tiny (2" X 0.75")</th>
                        <tr className="center-images"><img alt='Figure 2 (2" X 0.75")' className="product-images image-border" src={barcode4}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 3 - Small (3.5" X 1.1")</th>
                        <tr className="center-images"><img alt='Figure 3 (3.5" X 1.1")' className="product-images image-border" src={barcode3}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 4 - Large (4" X 2.31")</th>
                        <tr className="center-images"><img alt='Figure 4 (4" X 2.31")' className="product-images image-border" src={barcode1}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Dymo Software Driver</th>
                        <tr className="center-images"><a href={baseUrl + "DLS8Setup8.7.4.exe"}>Download Version 8.7.4</a></tr>
                        <tr className="center-images"><a href={baseUrl + "DCDSetup1.3.2.18.exe"}>Download Version 1.3.2.18</a></tr>

                        <tr className="center-images"><img alt='Dymo 450 Twin Turbo' className="product-images image-border" src={DymoTwin}/></tr>

                    </table>
                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Seiko Smart Label Software</th>
                        <tr className="center-images"><a href={baseUrl + "SmartLabelCreator_Ver1-2-3_EN.zip"}>Download Seiko Smart Label Software</a></tr>
                        <tr className="center-images"><a href={baseUrl + "SlpSdkRuntime64.msi"}>Download Seiko 64-bit Runtime ONLY</a></tr>
                        <tr className="center-images"><a href={baseUrl + "SlpSdkRuntime32.msi"}>Download Seiko 32-bit Runtime ONLY</a></tr>

                        <tr className="center-images"><img alt='Seiko Barcode Printer' className="product-images image-border" src={Seiko}/></tr>
                    </table>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BarcodePrinter;

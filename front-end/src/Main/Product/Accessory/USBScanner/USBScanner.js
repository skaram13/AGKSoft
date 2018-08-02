import React, { Component } from 'react';
import '../../Product.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import wireless from "../../../../assets/USBScanner/wirelessScanner.JPG";
import multiline from "../../../../assets/USBScanner/MultilineScanner.jpg";
import singleline from "../../../../assets/USBScanner/SinglelineScanner.jpg";

class USBScanner extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="product-container">
                    <h1 className="heading-text">USB Scanners</h1>
                    <div className="description-text">
                        All the scanner shown here can be used with the AGKSoft Point Of Sale or for the Back Office PC.
                        You simply plug these scanners to your USB port and start scanning.
                    </div>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="sub-heading-product center-header">Wireless USB Single Line Scanner</th>
                        <tr className="center-header">This is a single line trigger scanner which you must hold and press the trigger to scan.</tr>
                        <tr className="center-images"><img className="product-images image-border" src={wireless}></img></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="sub-heading-product center-header">Multi Line USB Scanner</th>
                        <tr className="center-header">This is a multi line 1-D omni-directional scanner that will scan multiple lines without having to hold it.</tr>
                        <tr className="center-images"><img className="product-images image-border" src={multiline}></img></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="sub-heading-product center-header">Single Line USB Scanner</th>
                        <tr className="center-header">This is a single line trigger scanner which you must hold and press the trigger to scan.</tr>
                        <tr className="center-images"><img className="product-images image-border" src={singleline}></img></tr>
                    </table>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default USBScanner;

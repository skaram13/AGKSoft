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
                    <div className="description-text">All the scanner shown here can be used with the AGKSoft Point Of Sale or for the Back Office PC.
                        You simply plug these scanners to your USB port and start scanning. </div>
                    <table className="product-entry-spacing">
                        <th className="sub-heading-product">Wireless USB Single Line Scanner</th>
                        <tr>This is a single line trigger scanner which you must hold and press the trigger to scan.</tr>
                        <tr><img className="table-img" src={wireless}></img></tr>
                    </table>
                    <table className="product-entry-spacing">
                        <th className="sub-heading-product">Multi Line USB Scanner</th>
                        <tr>This is a multi line 1-D omni-directional scanner that will scan multiple lines without having to hold it.</tr>
                        <tr><img className="table-img" src={multiline}></img></tr>
                    </table>
                    <table className="product-entry-spacing last-element">
                        <th className="sub-heading-product">Single Line USB Scanner</th>
                        <tr>This is a single line trigger scanner which you must hold and press the trigger to scan.</tr>
                        <tr><img className="table-img" src={singleline}></img></tr>
                    </table>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default USBScanner;

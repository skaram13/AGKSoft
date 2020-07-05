import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/MiniPC/AGKMinisPC.JPG";


class MiniPC extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Mini-PC (Windows 10)</h1>
                    <div className="description-text">Shown below is the mini-PC AGKSoft offers with SSD is about 5" x 5" in size.</div>
                    <table className="product-entry-spacing row-centered center-images">
                        <th className="center-header">Figure 1 (Front)</th>
                        <tr className="center-images"><img alt="figure1" className="product-images image-border" src={figure1}/></tr>
                    </table>

                    <div className="sub-heading-product">FEATURES</div>
                    <ul>
                        <li>1 LAN</li>
                        <li>1 WIFI</li>
                        <li>1 BlueTooth</li>
                        <li>1 VGA Port</li>
                        <li>1 HDMI</li>
                        <li>3 USB Ports (2 USB 2.0, 1 USB 3.0)</li>
                        <li>4-GB Ram</li>
                        <li>Intel Atom x5-Z8350 1.92Ghz</li>
                        <li>64GB SSD</li>
                        <li>10w Power Consumption</li>
                    </ul>
                    <div className="description-text last-element">This Mini-PC includes a 1 year warranty (Keyboard/Mouse/Monitor are not included).</div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MiniPC;

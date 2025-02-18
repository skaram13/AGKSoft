import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/MicroXCYPC/AGKMicroPC-XCY-front.gif";
import figure2 from "../../../../assets/MicroXCYPC/AGKMicroPC-XCY-back.gif";

class MicroXCYPC extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Shuttle XCY PC (Windows 10)</h1>
                    <div className="description-text">Shown below is the Shuttle XCY PC AGKSoft offers with SSD is about 6" x 5" in size and the unit boots in about 5 seconds.</div>
                    <table className="product-entry-spacing row-centered center-images">
                        <th className="center-header">Figure 1 (Front)</th>
                        <tr className="center-images"><img alt="figure1" className="product-images image-border" src={figure1}/></tr>
                    </table>
                    <table className="product-entry-spacing row-centered center-images">
                        <th className="center-header">Figure 2 (Back)</th>
                        <tr className="center-images"><img alt="figure2" className="product-images image-border" src={figure2}/>
                        </tr>
                    </table>                    
                    <div className="sub-heading-product">FEATURES</div>
                    <ul>
                        <li>Fanless Industrial - Intel Celeron 2955U</li>
                        <li>Dual Gigabit LAN + Wireless</li>
                        <li>2 Serial Ports</li>
                        <li>1 HDMI + 1 VGA</li>
                        <li>4 USB 3.0 Ports</li>
                        <li>8-GB Ram</li>
                        <li>256GB SSD</li>
                        <li>10w Power Consumption</li>
                    </ul>
                    <div className="description-text last-element">This Shuttle XCY PC includes a 3 years warranty (Keyboard/Mouse/Monitor are not included).</div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default MicroXCYPC;

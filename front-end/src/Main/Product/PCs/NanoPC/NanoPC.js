import React, { Component } from 'react';
import '../../Product.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure11 from "../../../../assets/NanoPC/figure1-1.jpg";
import figure21 from "../../../../assets/NanoPC/figure1-2.jpg";
import figure12 from "../../../../assets/NanoPC/figure2-1.jpg";
import figure22 from "../../../../assets/NanoPC/figure2-2.jpg";

class MiniHP extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="product-container">
                    <h1 className="heading-text">AGKSoft Nano PC (Windows 10)</h1>
                    <div className="description-text">Shown below are the Nano PCs AGKSoft offers with SSD, the measure 5" x 5" in size and the unit boots in less than 5 seconds. </div>
                    <div className="nano-pc-inline">
                        <img className="nano-pc-inline instruction-image" src={figure11}></img>
                        <img className="nano-pc-inline instruction-image" src={figure12}></img>
                    </div>
                    <div className="nano-pc-inline">

                        <img className="nano-pc-inline instruction-image" src={figure21}></img>
                        <img className="nano-pc-inline  instruction-image" src={figure22}></img>
                    </div>
                    <div className="sub-heading-product">FEATURES</div>
                    <div>NANO ONE</div>
                    <ul>
                        <li>Intel NM70 DualCore 1.50-GHz</li>
                        <li>240GB SSD</li>
                        <li>8-GB Ram</li>
                        <li>WIFI</li>
                        <li>1 LAN</li>
                        (RIGHT) Intel Celeron 2930 QuadCore  1.84 GHz, Drive: 120GB or 240GB SSD, Memory: 4GB, Network: 1-LAN+WIFI
                    </ul>
                    <div>NANO TWO</div>
                    <ul>
                        <li>Intel Celeron 2930 QuadCore  1.84 GHz</li>
                        <li>120GB SSD or 240GB SSD</li>
                        <li>4-GB Ram</li>
                        <li>WIFI</li>
                        <li>1 LAN</li>
                    </ul>
                    <div className="description-text last-element">These Windows 10 PCs includes a 1 year warranty (Keyboard/Mouse/Monitor are not included).</div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MiniHP;

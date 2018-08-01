import React, { Component } from 'react';
import '../../Product.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/MiniHP/figure1.jpg";
import figure2 from "../../../../assets/MiniHP/figure2.gif";
import figure3 from "../../../../assets/MiniHP/figure3.jpg";

class MiniHP extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="product-container">
                    <h1 className="heading-text">AGKSoft Mini-RAID-PC (Windows 10)</h1>
                    <div className="description-text">Shown below is the Mini-RAID-PC AGKSoft offers with 2-250GB SSD RAID 1 Drives (7" x 7" in size).</div>
                    <img className="instruction-image" src={figure1}></img>
                    <img className="instruction-image" src={figure2}></img>
                    <img className="instruction-image" src={figure3}></img>
                    <div className="sub-heading-product">FEATURES</div>
                    <ul>
                        <li>1 VGA + 1 HDMI Port</li>
                        <li>1 Ethernet Port</li>
                        <li>1 WIFI</li>
                        <li>6 USB Ports(4 USB 2.0 + 2 USB 3.0)</li>
                        <li>4-GB Ram</li>
                        <li>1TB SATA SSD SATA 6.0 Gb/s compatible</li>
                        <li>Memory Card: SD/SDHC/SDXC</li>
                    </ul>
                    <div className="description-text last-element">This PC includes a 1 year warranty (Monitor is not included).</div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MiniHP;

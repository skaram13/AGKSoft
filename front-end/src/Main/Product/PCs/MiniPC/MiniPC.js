import React, { Component } from 'react';
import '../../Product.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/MiniPC/figure1.jpg";
import figure2 from "../../../../assets/MiniPC/figure2.jpg";
import figure3 from "../../../../assets/MiniPC/figure3.jpg";

class MiniPC extends Component {
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
                        <li>1 HDMI + 1 Display Port (No VGA Ports, must use new style monitors)</li>
                        <li>2 Ethernet Ports</li>
                        <li>1 WIFI</li>
                        <li>1 BlueTooth</li>
                        <li>1 Serial Port</li>
                        <li>4 USB Ports 3.0 (1 in Front, 2 in Back, 1 on Side)</li>
                        <li>8-GB Ram</li>
                        <li>2-250GB Solid State Drives configured as RAID 1</li>
                        <li>Memory Card: SD/SDHC/SDXC</li>
                        <li>SanDisk USB Stick configured with Backup and Recovery</li>
                    </ul>
                    <div className="description-text last-element">This PC includes a 1 year warranty (Keyboard/Mouse/Monitor are not included).</div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MiniPC;

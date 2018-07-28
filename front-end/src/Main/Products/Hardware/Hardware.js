import React, { Component } from 'react';
import Row from "../../../Home/Row/Row";
import "./Hardware.css";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import MicroPC from "../../../assets/AGKMicroPC.jpg";
import MiniPC from "../../../assets/AGKMiniPC.jpg";
import NanoPC from "../../../assets/AGKNanoPC.jpg";
import MiniHP from "../../../assets/AGKMiniHP.jpg";
import BarcodePrinter from "../../../assets/BarCodePrinter.jpg";
import WirelessScanner from "../../../assets/AGKMiniHP.jpg";
import PortableScanner from "../../../assets/Scanner.jpg";
import OrbitScanner from "../../../assets/OrbitScan.jpg";
import USBScanner from "../../../assets/USBScanner.jpg";


class Hardware extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="hardware-container">
                    <Row title="PCs"/>
                        <div>
                            <div className="product-entry">
                                <img className="product-icon" src={MiniPC}></img>
                                <div className="product-text">AGKSoft Windows 10 Mini-RAID-PC</div>
                            </div>

                            <div className="product-entry">
                                <img className="product-icon" src={MicroPC}></img>
                                <div className="product-text">AGKSoft Windows 10 Micro-PC2</div>
                            </div>
                        </div>
                        <div className="product-entry">
                            <img className="product-icon" src={NanoPC}></img>
                            <div className="product-text">AGKSoft Windows 10 Nano-PC</div>
                        </div>

                        <div className="product-entry">
                            <img className="product-icon" src={MiniHP}></img>
                            <div className="product-text">AGKSoft Windows 10 MiniHP-PC</div>
                        </div>
                    <Row title="ACCESSORIES"/>
                        <div className="product-entry">
                            <img className="product-icon" src={BarcodePrinter}></img>
                            <div className="product-text">AGKSoft Barcode Printer</div>
                        </div>

                        <div className="product-entry">
                            <img className="product-icon" src={PortableScanner}></img>
                            <div className="product-text">AGKSoft Portable Wireless Scanners</div>
                        </div>
                        <div className="product-entry">
                            <img className="product-icon" src={OrbitScanner}></img>
                            <div className="product-text">Metrologic/Honeywell Register Scanners</div>
                        </div>

                        <div className="product-entry">
                            <img className="product-icon" src={USBScanner}></img>
                            <div className="product-text">USB/Keyboard Scanners</div>
                        </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Hardware;

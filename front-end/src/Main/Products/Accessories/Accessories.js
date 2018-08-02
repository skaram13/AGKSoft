import React, { Component } from 'react';
import Row from "../../../Home/Row/Row";
import "./Accessories.css";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import MicroPC from "../../../assets/AGKMicroPC.jpg";
import MiniPC from "../../../assets/AGKMiniPC.jpg";
import NanoPC from "../../../assets/AGKNanoPC.jpg";
import MiniHP from "../../../assets/AGKMiniHP.jpg";
import BarcodePrinter from "../../../assets/BarCodePrinter.jpg";
import PortableScanner from "../../../assets/Scanner.jpg";
import OrbitScanner from "../../../assets/OrbitScan.jpg";
import USBScanner from "../../../assets/USBScanner.jpg";


class Accessories extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="hardware-container">
                    <div className="product-page-heading row-centered">PCs</div>
                    <div>
                        <div className="product-entry">
                            <a href="/products/accessories/miniPC">
                                <img className="product-icon" src={MiniPC}></img>
                                <div className="product-text">AGKSoft Windows 10 Mini-RAID-PC</div>
                            </a>
                        </div>

                        <div className="product-entry">
                            <a href="/products/accessories/microPC">
                                <img className="product-icon" src={MicroPC}></img>
                                <div className="product-text">AGKSoft Windows 10 Micro-PC2</div>
                            </a>
                        </div>
                    </div>
                    <div className="product-entry">
                        <a href="/products/accessories/nanoPC">
                            <img className="product-icon" src={NanoPC}></img>
                            <div className="product-text">AGKSoft Windows 10 Nano-PC</div>
                        </a>
                    </div>

                    <div className="product-entry">
                        <a href="/products/accessories/miniHP">
                            <img className="product-icon" src={MiniHP}></img>
                            <div className="product-text">AGKSoft Windows 10 MiniHP-PC</div>
                        </a>
                    </div>

                    <div className="product-page-heading row-centered">Accessories</div>
                    <div className="product-entry">
                        <a href="\products\accessories\barcodePrinter">
                            <img className="product-icon" src={BarcodePrinter}></img>
                            <div className="product-text">AGKSoft Barcode Printer</div>
                        </a>
                    </div>

                    <div className="product-entry">
                        <a href="\products\accessories\portable">
                            <img className="product-icon" src={PortableScanner}></img>
                            <div className="product-text">AGKSoft Portable Wireless Scanners</div>
                        </a>
                    </div>
                    <div className="product-entry">
                        <a href="\products\accessories\registerScanner">
                            <img className="product-icon" src={OrbitScanner}></img>
                            <div className="product-text">Metrologic/Honeywell Register Scanners</div>
                        </a>
                    </div>

                    <div className="product-entry">
                        <a href="\products\accessories\usbScanner">
                            <img className="product-icon" src={USBScanner}></img>
                            <div className="product-text">USB/Keyboard Scanners</div>
                        </a>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Accessories;

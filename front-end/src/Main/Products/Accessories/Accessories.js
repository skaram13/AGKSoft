import React, { Component } from 'react';
import "./Accessories.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import MicroPC from "../../../assets/AGKMicroPC.jpg";
import MicroXCYPC from "../../../assets/AGKMicroPC-XCY-front.gif";
import MiniPC from "../../../assets/AGKMinisPCSmall.jpg";
import ShuttlePC from "../../../assets/AGKShuttlePC.jpg";
import BarcodePrinter from "../../../assets/BarCodePrinter.jpg";
import PortableScanner from "../../../assets/Scanner.jpg";
import OrbitScanner from "../../../assets/OrbitScan.jpg";
//import USBScanner from "../../../assets/USBScanner.jpg";
import USBScanner from "../../../assets/USBScanner/SymbolAgeScanner.jpg";

class Accessories extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">

                <div className="product-page-heading row-centered"></div>
                        <div className="product-entry">
                            <a href="\products\accessories\barcodePrinter">
                                <img alt="Barcode" className="product-icon" src={BarcodePrinter}/>
                                <div className="product-text">AGKSoft Barcode Printer</div>
                            </a>
                            <a href="\products\accessories\portable">
                                <img alt="Portable" className="product-icon" src={PortableScanner}/>
                                <div className="product-text">AGKSoft Portable Wireless Scanners</div>
                            </a>
                            <a href="\products\accessories\usbScanner">
                                <img alt="USBScanner" className="product-icon" src={USBScanner}/>
                                <div className="product-text">Age Scanners and USB Scanners</div>
                            </a>
                        </div>

                    <div className="product-page-heading row-centered">PCs</div>

                    <div className="product-entry">
                        <a href="/products/accessories/miniPC">
                            <img alt="MiniPC" className="product-icon" src={MiniPC}/>
                            <div className="product-text">AGKSoft Mini PC</div>
                        </a>                
                        
                        <a href="/products/accessories/microXCYPC">
                            <img alt="MicroXCYPC" className="product-icon" src={MicroXCYPC}/>
                            <div className="product-text">AGKSoft Shuttle XCY PC</div>
                        </a>

                        <a href="/products/accessories/microPC">
                            <img alt="MicroPC" className="product-icon" src={MicroPC}/>
                            <div className="product-text">AGKSoft Micro PC</div>
                        </a>
                        <a href="/products/accessories/ShuttlePC">
                            <img alt="ShuttlePC" className="product-icon" src={ShuttlePC}/>
                            <div className="product-text">AGKSoft Shuttle PC</div>
                        </a>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Accessories;

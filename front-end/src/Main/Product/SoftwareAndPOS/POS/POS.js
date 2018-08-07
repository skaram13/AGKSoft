import React, { Component } from 'react';
import '../../Product.css';
import './POS.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/POS/POS-Front.jpg";
import figure2 from "../../../../assets/POS/POS-Back.jpg";
import figure3 from "../../../../assets/POS/Customer-Moniter.jpg";
import figure4 from "../../../../assets/POS/POS-Screen.gif";

class POS extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="product-container">
                    <h1 className="heading-text">AGKSoft Point Of Sale Software (POS)</h1>
                    <div className="description-text">
                        AGKSoft Point Of Sale Software (POS) is for Gas Stations, Convenience Stores (C-Stores), Liquor Stores and most general retail stores.
                        Our POS is easy to use with an intuitive graphical user interface and can be installed on a network and access the system from multiple PCs.</div>
                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 1 (Front)</th>
                        <tr className="center-images"><img alt="Figure 1 (Front)" className="pos-images image-border" src={figure1}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 2 (Back)</th>
                        <tr className="center-images"><img alt="Figure 2 (Back)" className="pos-images image-border" src={figure2}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 3 (Customer Display Monitor)</th>
                        <tr className="center-images"><img alt="Figure 3 (Customer Display Monitor)" className="pos-images image-border" src={figure3}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Shown below is the POS Interface, you may click on the various buttons for more info.</th>
                        <tr className="center-images"><img alt="POS Interface" className="pos-images image-border" src={figure4}/></tr>
                    </table>

                    <div className="sub-heading-product">FEATURES</div>
                    <ul>
                        <li>Point of Sale (POS) with Scanning and Touch Screen Support</li>
                        <li>Integrated Credit/Debit/Gift Card Processing</li>
                        <li>Portable Scanner Support for Inventory Control</li>
                        <li>Electronic Invoice (EDI)</li>
                        <li>Accounts Payable/Receivable</li>
                        <li>Integrated Labeling and Bar-Code Printing</li>
                        <li>Timecard and Payroll</li>
                        <li>Unlimited Departments, PLUs and UPC-Codes.</li>
                        <li>Inventory Control and Electronic Data Invoice (EDI)</li>
                        <li>Balance Sheet, Net Income and General Ledger</li>
                        <li>Short/Over</li>
                        <li>Expense and Vendor Tracking</li>
                        <li>Garage, Gas and Lottery</li>
                        <li>Traffic, Voids and No-Sale Reports</li>
                        <li>Setup new clients, create new work orders or pay for pending work orders</li>
                    </ul>
                    <div className="sub-heading-product">HARDWARE INCLUDED</div>
                    <ul>
                        <li>Point of Sale Register (Touch Screen + PC)</li>
                        <li>Cash Drawer</li>
                        <li>2nd Monitor as Customer Display</li>
                        <li>USB Receipt Printer</li>
                        <li>USB Scanner + USB or Wireless Mouse + USB or Wireless Keyboard</li>
                        <li>POS Software and Back Office Software all integrated</li>
                    </ul>


                    <div className="description-text last-element">This Micro-PC includes a 1 year warranty (Keyboard/Mouse/Monitor are not included).</div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default POS;

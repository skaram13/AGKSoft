import React, { Component } from 'react';
import '../../Product.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";

class POS extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="product-container">
                    <h1 className="heading-text">AGKSoft Data Entry</h1>
                    <div className="description-text">
                        AGKSoft provides services for maintaining your price book or your complete Sales Download, Shift Balancing, Accounting and Inventory.
                        AGKSoft will provide a 24/7 email, a fax number and a phone number dedicated for Data Entry.
                    </div>
                    <div className="description-text"><b>Pre-requisite:</b>You must be on the AGKSoft Support and Update plans to qualify for this service.</div>
                    <div className="sub-heading-product">Price book Data Entry Service ($195/month)</div>
                    <div className="description-text">You can email, fax or call us with the price change you want and we will make sure the change takes place and the change is uploaded to your register.</div>
                    <ul>
                        <li>Fast 1-hour service</li>
                        <li>Live 24/7 Data Entry Support</li>
                        <li>One Year Term.</li>
                    </ul>

                    <div className="sub-heading-product">Full Data Entry Service ($395/month)</div>
                    <div className="description-text">Includes the Price book Data Entry Service plus the following:</div>
                    <ul>
                        <li>Gas Sale/ Gas Load data entry and reporting.</li>
                        <li>Salesroom and Inventory Control</li>
                        <li>Maintaining Client Accounts.</li>
                        <li>Expenses and Assets tracking.</li>
                        <li>Vendors Invoices with Electronic Data Invoicing (EDI) or Manually Entered Invoices received by Fax.</li>
                        <li>Portable Data Collectors to do inventory and load invoices (Someone at your location will need to physically scan the items)</li>
                        <li>Lottery Paid and Lottery Settlements</li>
                        <li>Electronic Credit Cards (Track pending batches and charges)</li>
                        <li>Multiple Checking Accounts, Electronic and Cash Accounts handling</li>
                        <li>Daily Short/Over or End of Shift</li>
                        <li>Balance Sheet, General Ledger and Net Income</li>
                        <li>Price book Import/Export for multiple locations</li>
                        <li>Consolidate multiple locations into the Home Office</li>
                    </ul>

                    <div className="description-text last-element">For more info please <a href="\contact">contact us</a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default POS;

import React, { Component } from 'react';
import '../../Product.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/portable/firgure1.jpg";
import figure2 from "../../../../assets/portable/figure2.jpg";
import figure3 from "../../../../assets/portable/figure3.gif";
import figure4 from "../../../../assets/portable/figure4.gif";
import figure5 from "../../../../assets/portable/figure5.gif";
import figure6 from "../../../../assets/portable/figure6.gif";
import figure7 from "../../../../assets/portable/figure7.gif";

class Portable extends Component {
    render() {
        return(
            <div>
                <Header/>
                    <div className="product-container">
                        <h1 className="heading-text">AGKSoft Portable Data Collector</h1>
                        <h4 className="sub-heading-product">To see a list of supported EDI Vendors, <a href="http://www.agksoft.com/vendorsreports.html">click here.</a></h4>
                        <div className="description-text">Shown below from left to right is the AGKSoft Inventory Software for the portable, followed by an image of the Portable without a trigger, then with a Trigger and finally an image with the Trigger and Docking Station.</div>
                        <div className="description-text">The portable can be used to create your price book, scan your Inventory or Invoices as well as take your orders if needed.</div>

                        <table className="portable-inline">
                            <th className="portable-table row-centered">AGKSoft Inventory Software</th>
                            <tr className="row-centered"><img className="table-img" src={figure1}></img></tr>
                        </table>
                        <table className="portable-inline">
                            <th className="portable-table row-centered">PPT8820 (No Trigger)</th>
                            <tr className="row-centered"><img className="table-img" src={figure2}></img></tr>
                        </table>
                        <table className="portable-inline">
                            <th className="portable-table row-centered">PPT8820 (with Trigger)</th>
                            <tr className="row-centered"><img className="table-img" src={figure3}></img></tr>
                        </table>
                        <table className="portable-inline">
                            <th className="portable-table row-centered">PPT8820 (with Trigger & Dock)</th>
                            <tr className="row-centered"><img className="table-img" src={figure4}></img></tr>
                        </table>

                        <h4 className="sub-heading-product">HOW TO USE</h4>
                        <div className="description-text">Using the Portable Data Collector Interface Window, you can download the current Inventory into your PC.</div>

                        <div className="description-text">There are 4 steps to perform...</div>
                        <ol>
                            <li>Select the Download Type, <b>Inventory</b> or <b>Invoice</b></li>
                            <li>Click <b>"Download"</b> to download the data from your portable.</li>
                            <li>Click <b>"Update"</b> to process the downloaded data.</li>
                            <li>Click <b>"Send To Register"</b> to send all the new items to your Cash Register.</li>
                        </ol>
                        <img className="instruction-image" src={figure5}></img>
                        <div className="description-text">If you are scanning a shipment that you received from you vendor, you would do the following:</div>
                        <ol>
                            <li>Select <b>"Invoice"</b> under "Download Type"</li>
                            <li>Click <b>"Download"</b> to download the data from your portable.</li>
                            <li>Click <b>"Update"</b> to see the following Vendor Invoice Window.</li>
                        </ol>
                        <img className="instruction-image" src={figure6}></img>
                        <div className="description-text">As you can see, the Vendor Invoice is automatically generated for you.  Make sure it's all OK and your total amount matches and hit "Save".</div>
                        <div className="description-text">Also note the <div className="red-text">"red"</div> lines indicate a price increase and the <div className="blue-text">"blue"</div> lines are price decrease.</div>
                        <div className="description-text">If your Vendor is not able to send you the proper EDI (Electronic Invoice), we can map any spreadsheet file.</div>
                        <div className="description-text">Shown below is the "Vendor Mappings Window" which can map the columns in your spreadsheet to what we need.</div>
                        <img className="instruction-image" src={figure7}></img>

                        <div className="sub-heading-product">SETUP VIDEOS</div>
                        <ul className="last-element">
                            <li className="description-text">Symbol MC5x</li>
                            <li className="description-text">Symbol PPT88xx No Trigger</li>
                            <li className="description-text">Symbol PPT88xx with Trigger</li>
                            <li className="description-text">How to Remove Trigger</li>
                        </ul>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Portable;
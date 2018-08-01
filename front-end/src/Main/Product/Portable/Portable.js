import React, { Component } from 'react';
import '../Product.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/portable/firgure1.jpg";
import figure2 from "../../../assets/portable/figure2.jpg";
import figure3 from "../../../assets/portable/figure3.gif";
import figure4 from "../../../assets/portable/figure4.gif";


class Portable extends Component {
    render() {
        return(
            <div>
                <Header/>
                    <div className="home-container">
                        <h1 className="heading-text">AGKSoft Portable Data Collector</h1>
                        <h4 className="sub-heading">To see a list of supported EDI Vendors, <a href="http://www.agksoft.com/vendorsreports.html">click here.</a></h4>
                        <div className="description-text">Shown below from left to right is the AGKSoft Inventory Software for the portable, followed by an image of the Portable without a trigger, then with a Trigger and finally an image with the Trigger and Docking Station.</div>
                        <div className="description-text">The portable can be used to create your price book, scan your Inventory or Invoices as well as take your orders if needed.</div>

                        <table className="portable-inline">
                            <th className="portable-table">AGKSoft Inventory Software</th>
                            <tr><img className="table-img" src={figure1}></img></tr>
                        </table>
                        <table className="portable-inline">
                            <th className="portable-table">PPT8820 (No Trigger)</th>
                            <tr><img className="table-img" src={figure2}></img></tr>
                        </table>
                        <table className="portable-inline">
                            <th className="portable-table">PPT8820 (with Trigger)</th>
                            <tr><img className="table-img" src={figure3}></img></tr>
                        </table>
                        <table className="portable-inline">
                            <th className="portable-table">PPT8820 (with Trigger & Dock)</th>
                            <tr><img className="table-img" src={figure4}></img></tr>
                        </table>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Portable;

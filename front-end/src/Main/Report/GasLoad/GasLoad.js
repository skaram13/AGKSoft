import React, { Component } from 'react';
import "../Report.css";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/GasLoad/GasLoad.gif";
import figure2 from "../../../assets/GasLoad/gassale.gif";
import figure3 from "../../../assets/GasLoad/GasSaleWaterReport.gif";
import figure4 from "../../../assets/GasLoad/GasSaleReport.gif";
import figure5 from "../../../assets/GasLoad/GasSaleWaterTotalReport.gif";
import figure6 from "../../../assets/GasLoad/FuelRecon.gif";

class Accessories extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="reports-container">
                    <h1 className="reports-heading">AGKSoft Gas Load & Gas Sale</h1>
                    <div className="description-text">
                        Generating a gas load report is quick and easy:
                    </div>
                    <ul>
                        <li>When you receive your Fuel Delivery, you click GAS LOAD.</li>
                        <li>You will now see the GAS LOAD screen shown below.</li>
                        <li>You enter the Volume and Price for each grade, we calculate the rest.</li>
                        <li>You click Save when you finish.</li>
                        <li>If your vendor provides XML invoices such as the one provided by Shell, you can click "Load Invoice" to load it.</li>
                    </ul>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Load Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-border" src={figure1}/></tr>
                    </table>

                    <div className="description-text">If you are connected to your Cash Register, the Gas Sale window shown below gets automatically populated with all the info.</div>
                    <ul>
                        <li>If you are not connected, you need to enter the Volume Sold for each grade, we calculate the rest.</li>
                        <li>You click Save when you finish.</li>
                    </ul>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Sale Window</th>
                        <tr className="center-images"><img alt="figure2" className="image-border" src={figure2}/></tr>
                    </table>

                    <div className="description-text">After saving your Gas Sale, you may want to look at some reports.</div>
                    <ul>
                        <li>Click the Report button to see some reports as shown below.</li>
                    </ul>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Sale Summary Report</th>
                        <tr className="center-images"><img alt="figure3" className="image-border" src={figure3}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Sale Report (by Grade)</th>
                        <tr className="center-images"><img alt="figure4" className="image-border" src={figure4}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Sale Report (by Grade) - Grand Total Page</th>
                        <tr className="center-images"><img alt="figure5" className="image-border" src={figure5}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Fuel Reconciliation</th>
                        <tr className="center-images"><img alt="figure6" className="image-border" src={figure6}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Accessories;

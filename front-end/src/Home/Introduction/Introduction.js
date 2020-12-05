import React, { Component } from 'react';
import './Introduction.css';
import logo from '../../assets/AGKlogo.png';
import edioffer from '../../assets/AGKEDISmall.png';

class Introduction extends Component {
    render() {
        return(
            <div className="home-container-background">
                <div className="home-container">
                    <table>
                        <td>
                            <tr rowspan="3"><img className="home-logo" src={logo} alt="logo"/></tr>
                        </td>
                        <td className="logo-spacing">
                            <tr><div className="home-heading-text">AGKSoft</div></tr>
                            <tr><div className="description-text">Back Office Software, Point Of Sale (POS) Software and Home Office Software.</div></tr>
                            <tr align="left"><a href="/contact"><button className="sales-button">CONTACT A SALES REP</button></a></tr>
                        </td>

                        <td className="logo-spacing">
                            <tr align="left"><a href="/ediOffer.html"><img className="edi-offer" src={edioffer} alt="AGKSoft Unlimited EDI Offer"/></a></tr>
                        </td>

                    </table>
                </div>
            </div>
        );
    }
}

export default Introduction;

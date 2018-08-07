import React, { Component } from 'react';
import "./Support.css";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import UPC from "../../assets/UPC.PNG";

class Support extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="home">
                    <div className="support-heading row-centered">Support</div>
                    <h3 className="row"><a>AGKSOFT DOWNLOAD</a></h3>
                    <h3 className="row">REMOTE DESKTOP SUPPORT</h3>
                    <h5><a>TeamViewer Quick Support</a></h5>
                    <h5><a>Download TeamViewer 11</a></h5>
                    <table className="support-table">
                        <th className="support-table" colspan="5">TeamViewer Web Support</th>
                        <tr className="support-table">
                            <td className="support-table"><a>1</a></td>
                            <td className="support-table"><a>2</a></td>
                            <td className="support-table"><a>3</a></td>
                            <td className="support-table"><a>4</a></td>
                            <td className="support-table"><a>5</a></td>
                        </tr>
                    </table>
                    <h3 className="row sub-heading">HELPFUL LINKS</h3>
                    <h5><a>Excel Viewer</a></h5>
                    <h5><a>What's my IP Address?</a></h5>
                    <h3 className="row">RUBY</h3>
                    <h5><a>Cybera Zone Router</a></h5>
                    <h5><a>Windows 7 HTTPS Patch</a></h5>
                    <h3 className="row">GILBARCO</h3>
                    <h5><a>DMZ Port</a></h5>
                    <h3 className="row">UPC Code Guide</h3>
                    <img className="upc-image" alt="UPC" src={UPC}/>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Support;

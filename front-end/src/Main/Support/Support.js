import React, { Component } from 'react';
import "./Support.css";
import '../Main.css';
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import UPC from "../../assets/UPC.PNG";
const base_url = "/images/";
class Support extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <div className="main-heading row-centered">Support</div>
                    <h3 className="row">REMOTE DESKTOP SUPPORT</h3>
                    <h5><a href={base_url + "AeroAdmin.exe"}>Aero Remote Support</a></h5>
                    <h5><a href={base_url + "TeamViewerQS_x64.exe"}>TeamViewer Quick Support</a></h5>
                    <h5><a href={base_url + "TeamViewer_Setup_x64.exe"}>Download TeamViewer</a></h5>
                    
                    <h3 className="row">AGKSoft PC Boot Order and Recovery</h3>
                    <h5><a href={base_url + "AGKBootChange.mp4"}>AGKSoft Change PC Boot Order</a></h5>
                    <h5><a href={base_url + "AGKRecoverBackup.mp4"}>AGKSoft PC Recover Backup</a></h5>
                    <h5><a href={base_url + "AGKRestorePC.mp4"}>AGKSoft PC Restore</a></h5>

                    <h3 className="row sub-heading">HELPFUL LINKS</h3>
                    <h5><a href={base_url + "ExcelViewer.exe"}>Excel Viewer</a></h5>
                    <h5><a href="https://www.whatsmyip.org/">What's my IP Address?</a></h5>

                    <h3 className="row">RUBY</h3>
                    <h5><a href={base_url + "RubyCyberaZoneRouter.JPG"}>Cybera Zone Router</a></h5>
                    <h5><a href={base_url + "MicrosoftEasyFix51044.msi"}>Windows 7 HTTPS Patch</a></h5>

                    <h3 className="row">GILBARCO</h3>
                    <h5><a href={base_url + "DMZ.JPG"}>DMZ Port</a></h5>
                    
                    <h3 className="row">UPC Code Guide</h3>
                    <img className="upc-image" alt="UPC" src={UPC}/>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Support;

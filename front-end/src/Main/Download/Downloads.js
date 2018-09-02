import React, { Component } from 'react';
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "../Main.css";
import {Panel, PanelGroup } from 'react-bootstrap';
class Downloads extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <div className="main-heading row-centered">AGKSoft Downloads</div>
                    <PanelGroup accordion id="accordion-example">
                        <Panel eventKey="1">
                            <Panel.Heading>
                                <Panel.Title toggle>Latest AGKSoft Updates</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>Installation</th>
                                        <th>Updated On</th>
                                        <th>Version</th>
                                    </tr>
                                    <tr>
                                        <td>Click here to install the latest version</td>
                                        <td>07/26/2018</td>
                                        <td>12.12.201</td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="2">
                            <Panel.Heading>
                                <Panel.Title toggle>Ruby Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id="downloads">
                                    <tr>
                                        <th>Ruby VeriFone Installation</th>
                                        <th>Video</th>
                                    </tr>
                                    <tr>
                                        <td>Click here for the complete Ruby installation</td>
                                        <td>Click here to See Video Installation.</td>
                                    </tr>
                                </table>
                                <table id="downloads">
                                    <tr>
                                        <th>Ruby VeriFone Sapphire Installation</th>
                                    </tr>
                                    <tr>
                                        <td>Click here to install the Sapphire Software.</td>
                                    </tr>
                                </table>
                                <table id="downloads">
                                    <tr>
                                        <th>Ruby Commander Configuration</th>
                                    </tr>
                                    <tr>
                                        <td>Shell Cybera Zone Router</td>
                                    </tr>
                                    <tr>
                                        <td>Cybera Zone Router (Single WAN)</td>
                                    </tr>
                                    <tr>
                                        <td>Cybera Zone Router  (Dual WAN)</td>
                                    </tr>
                                </table>
                                <table id="downloads">
                                    <tr>
                                        <th>Ruby VeriFone (Phillips 66 Connection)</th>
                                        <th/>
                                    </tr>
                                    <tr>
                                        <td>Java Runtime</td>
                                        <td>Download to C:\TEMP and run it if you do not have Java already.</td>
                                    </tr>
                                    <tr>
                                        <td>MSXML</td>
                                        <td>Download to C:\TEMP only</td>
                                    </tr>
                                    <tr>
                                        <td>Latest RubyLink</td>
                                        <td>Download to C:\TEMP and run it</td>
                                    </tr>
                                    <tr>
                                        <td>Sapphire Templates</td>
                                        <td>Download to C:\TEMP and run it if you have a Ruby with Sapphire</td>
                                    </tr>
                                    <tr>
                                        <td>Gemcom & Templates</td>
                                        <td>Download to C:\TEMP and run it if you have a Ruby only</td>
                                    </tr>
                                    <tr>
                                        <td>RubyLink Windows 7 Patch</td>
                                        <td>Download to C:\TEMP, open with WinZip and extract to: C:\GEMCOM\BIN</td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="3">
                            <Panel.Heading>
                                <Panel.Title toggle>Dresser Wayne Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>Dresser Wayne Nucleus Software Update</th>
                                        <th/>
                                    </tr>
                                    <tr>
                                        <td>Black Pipe Software 1.3.3/198 Installation</td>
                                        <td>Download to C:\TEMP and run it</td>
                                    </tr>
                                </table>

                                <table id='downloads'>
                                    <tr>
                                        <th>Dresser Wayne NAMOS/Beetle POS</th>
                                    </tr>
                                    <tr>
                                        <td>Secure FTP Installation</td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="4">
                            <Panel.Heading>
                                <Panel.Title toggle>Gilbarco Passport Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>Gilbarco Passport</th>
                                    </tr>
                                    <tr>
                                        <td>V8.03 Network Add. HPS-Dallas or ConocoPhillips</td>
                                    </tr>
                                    <tr>
                                        <td>V8.02+ Third-party Partner Device Access Rules</td>
                                    </tr>
                                    <tr>
                                        <td>ConocoPhillip Back Office Setup (Image1, Image2, Image3)</td>
                                    </tr>
                                    <tr>
                                        <td>Firewall Router Start up and Service Manual</td>
                                    </tr>
                                    <tr>
                                        <td>Click here to see the DMZ Port</td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="5">
                            <Panel.Heading>
                                <Panel.Title toggle>Portable Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>AGKSoft Symbol Portable Software</th>
                                        <th>Updated On</th>
                                        <th>Version</th>
                                    </tr>
                                    <tr>
                                        <td>Download PPT88xx//MC5x Software Update ONLY</td>
                                        <td>03/23/2018</td>
                                        <td>12.83</td>
                                    </tr>
                                    <tr>
                                        <td>Download MC70 (Windows Mobile 5.0 Visual Basic Runtime)</td>
                                        <td>03/14/2016</td>
                                        <td>N/A</td>
                                    </tr>
                                </table>

                                <table id='downloads'>
                                    <tr>
                                        <th>View AGKSoft Portable Demos</th>
                                        <th>Updated On</th>
                                    </tr>
                                    <tr>
                                        <td>Connect Portable to PC</td>
                                        <td>03/16/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Inventory Installation</td>
                                        <td>03/16/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Setup the Portable</td>
                                        <td>03/16/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Cold Start with Keys</td>
                                        <td>03/16/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Cold Start with No Keys</td>
                                        <td>03/16/2016</td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="6">
                            <Panel.Heading>
                                <Panel.Title toggle>POS Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>AGKSoft Point Of Sale Downloads (Mercury/Vantiv)</th>
                                    </tr>
                                    <tr>
                                        <td>Verifone VX805 driver</td>
                                    </tr>
                                    <tr>
                                        <td>DSI EMVx</td>
                                    </tr>
                                    <tr>
                                        <td>DSI PDCX</td>
                                    </tr>
                                    <tr>
                                        <td>NETePay</td>
                                    </tr>
                                </table>
                                <table id='downloads'>
                                    <tr>
                                        <th>AGKSoft Point Of Sale Downloads (Elavon/Converge)</th>
                                    </tr>
                                    <tr>
                                        <td>Ingenico driver	</td>
                                    </tr>
                                    <tr>
                                        <td>Commerce Web Services</td>
                                    </tr>
                                </table>
                                <table id='downloads'>
                                    <tr>
                                        <th>AGKSoft Point Of Sale Downloads (non-EMV)</th>
                                    </tr>
                                    <tr>
                                        <td>MS2320 Scale/Scanner OPOS</td>
                                    </tr>
                                    <tr>
                                        <td>Honeywell MetroSet 2</td>
                                    </tr>
                                    <tr>
                                        <td>OPOS Instructions</td>
                                    </tr>
                                    <tr>
                                        <td>Epson APD Printer Driver Ver. 4.56E</td>
                                    </tr>
                                    <tr>
                                        <td>R180 Printer Driver</td>
                                    </tr>
                                    <tr>
                                        <td>DSI Client Software Installation</td>
                                    </tr>
                                    <tr>
                                        <td>AGKSoft USB Scanner Sheet</td>
                                    </tr>
                                    <tr>
                                        <td>Fix OPOS</td>
                                    </tr>
                                    <tr>
                                        <td>SNBC BTP-R880 Win 7 Driver</td>
                                    </tr>
                                    <tr>
                                        <td>SNBC BTP-R880 Win 10 Driver</td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="7">
                            <Panel.Heading>
                                <Panel.Title toggle>External Tools</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>External Tools</th>
                                    </tr>
                                    <tr>
                                        <td>Download Google Drive</td>
                                    </tr>
                                    <tr>
                                        <td>Download One Drive</td>
                                    </tr>
                                    <tr>
                                        <td>Download PDF Writer</td>
                                    </tr>
                                    <tr>
                                        <td>Crystal Reports Service Pack 3</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            To download MCMICR font Install MCMICR and then Download MCMICR Font
                                        </td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Downloads;

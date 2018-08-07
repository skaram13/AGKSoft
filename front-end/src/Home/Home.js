import React, { Component } from 'react';
import Row from "./Row/Row";
import "./Home.css";
import Introduction from "./Introduction/Introduction";
import Footer from "../Main/Shared/Footer/Footer";
import Header from "../Main/Shared/Header/Header";
import home from "../assets/home.png";
import POS from "../assets/POS.png";
import conversion from "../assets/conversion.png";
import data from "../assets/data.png";
import gilbarco from "../assets/gilbarco.jpg";
import verifone from "../assets/verifone.png";
import comdata from "../assets/comdata.png";
import backoffice from "../assets/backoffice.png";
import wayne from "../assets/wayne.png";

class Home extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Introduction/>
                <div className="partners-background">
                    <div className="partners row-centered">
                        <img className="logos" src={gilbarco} alt="gilbarco"/>
                        <img className="logos" src={verifone} alt="verifone"/>
                        <img className="logos" src={comdata} alt="comdata"/>
                        <img className="logos" src={wayne} alt="wayne"/>
                    </div>
                </div>
                <div className="home">
                    <Row title="OUR PRODUCTS"/>
                    <div className="solutions">
                        <div className="solution-large row-centered">
                            <a href="">
                                <h3>Back Office</h3>
                                <img className="solution-image" src={backoffice} alt="backoffice"/>
                                <p>The AGKSoft Home Office allows data from multiple back office locations to be consolidated into one centralized location.</p>
                            </a>
                        </div>
                        <div className="solution">
                            <a href="">
                                <h3>Home Office</h3>
                                <img className="solution-image" src={home} alt="home"/>
                                <p>The AGKSoft Home Office allows data from multiple back office locations to be consolidated into one centralized location.</p>
                            </a>
                        </div>
                        <div className="solution">
                            <a href="">
                                <h3>Conversion Tool</h3>
                                <img className="solution-image" src={conversion} alt="conversion"/>
                                <p>Used to convert registers such as a Gilbarco G-Site, Ruby VeriFone, Sapphire, Topaz, the AGKSoft POS System and more.</p>
                            </a>
                        </div>
                        <div className="solution">
                            <a href="/products/software/pos">
                                <h3>POS</h3>
                                <img className="solution-image" src={POS} alt="POS"/>
                                <p>For C-Stores, Liquor Stores, Grocery Stores, General Stores, Hardware Stores, Flower shops or any store that requires scanning.</p>
                            </a>
                        </div>
                        <div className="solution">
                            <a href="">
                                <h3>Data Entry</h3>
                                <img className="solution-image" src={data} alt="data"/>
                                <p>Services for maintaining your price book or your complete Sales Download, Shift Balancing, Accounting and Inventory.</p>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;

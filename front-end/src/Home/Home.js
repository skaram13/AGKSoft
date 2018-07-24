import React, { Component } from 'react';
import Row from "./Row/Row";
import "./Home.css";
import SlideShow from "./SlideShow/SlideShow";
import Footer from "../Main/Shared/Footer/Footer";
import Header from "../Main/Shared/Header/Header";
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div>
                <Header/>
                <SlideShow/>
                <div className="home">
                    <Row title="OUR PRODUCTS"/>
                    <div className="solutions">
                        <div className="solution">
                            <a href="">
                                <h2>Home Office</h2>
                                <div className="solution-image"><img src="https://www.plumvoice.com/wp-content/uploads/2017/11/Website-Line-SVGs_Home-ScalabilitySecurity.svgz" alt="Scale With Confidence" width="150px" height="100px"/></div>
                                <p>meow emow eow ewoemowpqmrfoebfkjds</p>
                            </a>
                        </div>
                        <div className="solution">
                            <a href="">
                                <h2>Conversion Tool</h2>
                                <div className="solution-image"><img src="https://www.plumvoice.com/wp-content/uploads/2017/11/Website-Line-SVGs_Home-ScalabilitySecurity.svgz" alt="Scale With Confidence" width="150px" height="100px"/></div>
                                <p>meow emow eow ewoemowpqmrfoebfkjds</p>
                            </a>
                        </div>
                        <div className="solution">
                            <a href="">
                                <h2>POS</h2>
                                <div className="solution-image"><img src="https://www.plumvoice.com/wp-content/uploads/2017/11/Website-Line-SVGs_Home-ScalabilitySecurity.svgz" alt="Scale With Confidence" width="150px" height="100px"/></div>
                                <p>meow emow eow ewoemowpqmrfoebfkjds</p>
                            </a>
                        </div>
                        <div className="solution">
                            <a href="">
                                <h2>Data Entry</h2>
                                <div className="solution-image"><img src="https://www.plumvoice.com/wp-content/uploads/2017/11/Website-Line-SVGs_Home-ScalabilitySecurity.svgz" alt="Scale With Confidence" width="150px" height="100px"/></div>
                                <p>meow emow eow ewoemowpqmrfoebfkjds</p>
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

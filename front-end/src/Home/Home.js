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
                    <Link to="/portfolio"><Row title="PRODUCT 1"/></Link>
                    <Link to="/cv"><Row title="PRODUCT 2"/></Link>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;

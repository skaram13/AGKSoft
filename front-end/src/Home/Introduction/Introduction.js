import React, { Component } from 'react';
import './Introduction.css';

class Introduction extends Component {
    render() {
        return(
            <div className="home-container-background">
                <div className="home-container">
                    <h1 className="home-heading-text">AGKSoft</h1>
                    <div className="description-text">AGKSoft offers the C-Store industry a product that is able to cater to every stage of running a C-Store.</div>
                    <a href="/contact"><button className="sales-button">CONTACT A SALES REP</button></a>
                </div>
            </div>
        );
    }
}

export default Introduction;

import React, { Component } from 'react';
import './Introduction.css';

class Introduction extends Component {
    render() {
        return(
            <div className="home-container-background">
                <div className="home-container">
                    <h1 className="home-heading-text">AGKSoft</h1>
                    <div className="description-text">AGKSoft offers the C-Store industry a product that is able to cater to every stage of running a C-Store.</div>
                    <button className="sales-button">CHAT WITH A SALES REP</button>
                </div>
            </div>
        );
    }
}

export default Introduction;

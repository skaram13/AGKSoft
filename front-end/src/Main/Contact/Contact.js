import React, { Component } from 'react';
import "./Contact.css";
import '../Main.css';
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

class Contact extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <div className="main-heading row-centered">Contact</div>
                    <table className="table-two">
                        <h4 className="row">When you call, your call is never routed to another country, all provided numbers are in the United States.
                            Email support is monitored by all Support & Development Engineers.</h4>
                        <div>
                            <h4>Phone:</h4>
                            <div className="contact-text">
                                <div><a href="tel:15089954934">+1(508) 995-4934</a></div>
                                <div><a href="tel:14014664213">+1(401) 466-4213</a></div>
                                <div><a href="tel:18003209519">+1(800) 320-9519</a></div>
                            </div>
                        </div>
                        <div className="contact-text">
                            <h4>Text Message:</h4>
                            <div><a href="tel:14014001488">+1(401) 400-1488</a> Sales</div>                            
                        </div>
                        <div className="fax">
                            <h4>Fax:</h4>
                            <div className="contact-text">401-466-4212</div>
                        </div>
                        <div>
                            <h4>Email:</h4>
                            <div className="contact-text">
                                AGKSupport@AGKSoft.COM
                            </div>
                        </div>
                    </table>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Contact;

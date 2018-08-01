import React, { Component } from 'react';
import "./Contact.css";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

class Contact extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="heading">GET IN TOUCH</div>
                <div className="home">
                    <table className="table-one">
                        <div className="contact-form">
                            <h4 className="row">AGKSoft is here ready to serve you with all your software needs, so feel free to call us or email us any time.</h4>
                            <form method="POST" action="" accept-charset="UTF-8">
                                <div className="row"><input type="text" required="" placeholder="Name" name="name" className="input-boxes"/></div>
                                <div className="row"><input type="email" required="" placeholder="Email address" className="input-boxes" name="email"/></div>
                                <div className="row"><input type="tel" required="" placeholder="Phone number" className="input-boxes" name="tel"/></div>
                                <div className="row"><textarea required="" placeholder="Message" id="comments" className="message-box input-boxes" name="comments"/></div>
                                <div className="row"><input type="submit" value="SEND MAIL" className="submit-btn"/></div>
                            </form>
                        </div>
                    </table>
                    <table className="table-two">
                        <h4 className="row">When you call, your call is never routed to another country, all provided numbers are in the United States.
                            Email support is monitored by all Support & Development Engineers.</h4>
                        <div>
                            <h4>Phone:</h4>
                            <div className="contact-text">
                                <div>+1(508) 995-4934</div>
                                <div>+1(401) 466-4213</div>
                                <div>+1(508) 644-0192</div>
                                <div>+1(800) 320-9519</div>
                            </div>
                        </div>
                        <div className="fax">
                            <h4>Fax:</h4>
                            <div className="contact-text">401-466-4212</div>
                        </div>
                        <div>
                            <h4>Email:</h4>
                            <div className="contact-text">
                                A G K S U P P O R T @AGKSOFT.COM
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

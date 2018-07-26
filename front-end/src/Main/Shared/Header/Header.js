import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">AGKSoft</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Products
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Reports
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            Support
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            Downloads
                        </NavItem>
                        <NavItem eventKey={5} href="#">
                            Demos
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={6} href="#">
                            Contact
                        </NavItem>
                    </Nav>
                    <Navbar.Text className="hidden-xs" pullRight>|</Navbar.Text>
                    <Navbar.Text className="hidden-xs" pullRight>1-800-000-0000</Navbar.Text>
                </Navbar.Collapse>



            </Navbar>
        )
    }
}

export default Header;
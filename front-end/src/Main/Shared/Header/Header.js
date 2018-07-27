import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="\">AGKSoft</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="Products">
                            <MenuItem eventKey={1.1} href="\products\software">Software & POS</MenuItem>
                            <MenuItem eventKey={1.2} href="\products\accessories">PCs & Accessories</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2} href="\reports">
                            Reports
                        </NavItem>
                        <NavItem eventKey={3} href="\support">
                            Support
                        </NavItem>
                        <NavItem eventKey={4} href="\downloads">
                            Downloads
                        </NavItem>
                        <NavItem eventKey={5} href="\demos">
                            Demos
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={6} href="\contact">
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
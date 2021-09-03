import React from 'react';

import "./Header.css";

import {
    Button, Navbar, Nav,
    NavItem } from 'react-bootstrap';

const Header = (props) => {


    return (

        <Navbar className = "main-header justify-content-between" expand="lg">

            <Navbar.Brand href="#home">GTD App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className="mr-auto"></Nav>
                <Nav>

                    <NavItem className="d-flex align-items-center">
                    <Nav.Link className="font-weight-bold" href="/">Home</Nav.Link>
                    </NavItem>
                    
                    <NavItem className="d-flex align-items-center">
                    <Nav.Link className="font-weight-bold" href="/">Settings</Nav.Link>
                    </NavItem>

                    <NavItem>
                        <Button onClick={props.onLogout}>Logout</Button>
                    </NavItem>

                </Nav>
            </Navbar.Collapse>


        </Navbar>



    );

}

export default Header;
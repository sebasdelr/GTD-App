import React from 'react';

import "./Header.css";

import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, DropdownButton,
    DropdownToggle, Dropdown
} from 'react-bootstrap';

const Header = (props) => {


    return (

        <Navbar className = "main-header">
            <Container>
                <h1>GTD App</h1>
                <Nav>
                    <Row noGutters className="position-relative w-100 align-items-center">
                        
                        <Col className="d-none d-lg-flex justify-content-start">
                        <Nav className="mrx-auto" navbar>
                        

                            
                            <NavItem className="d-flex align-items-center">
                            <NavLink className="font-weight-bold" href="/">Home</NavLink>
                            </NavItem>
                            
                            <NavItem className="d-flex align-items-center">
                            <NavLink className="font-weight-bold" href="/">Settings</NavLink>
                            </NavItem>

                            <NavItem>
                                <Button onClick={props.onLogout}>Logout</Button>
                            </NavItem>

                            
                        </Nav>
                        </Col>
                        

                        
                    </Row>
                </Nav>
            </Container>

        </Navbar>



    );

}

export default Header;
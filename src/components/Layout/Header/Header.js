import React from 'react';

import "./Header.css";
import 'bootstrap/dist/css/bootstrap.css';

import {
    Button, Navbar, Nav,
    NavItem } from 'react-bootstrap';

const Header = (props) => {


    return (

        <Navbar className = "main-header" expand="lg">

            <Navbar.Brand  className="me-auto" href="#home">GTD App</Navbar.Brand>
          
            
                
                <Nav className="justify-content-end">

                    <NavItem >
                    <Nav.Link className="font-weight-bold" href="/">Home</Nav.Link>
                    </NavItem>
                    
                    <NavItem >
                    <Nav.Link className="font-weight-bold" href="/">Settings</Nav.Link>
                    </NavItem>

                    <NavItem>
                        <Button onClick={props.onLogout} className="navbtn">Logout</Button>
                    </NavItem>

                    

                </Nav>
            


        </Navbar>



    );

}

export default Header;
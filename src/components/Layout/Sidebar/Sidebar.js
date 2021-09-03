import  React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import Folder from '@material-ui/icons/Folder';
import MenuBook from '@material-ui/icons/MenuBook';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import Home from '@material-ui/icons/Home';

import { BiMenu, BiSearch } from "react-icons/bi";


import './Sidebar.css';



const Sidebar = (props) => {




    return (
        <Nav defaultActiveKey="/home" className="flex-column sidebar" >
            <Nav.Link href="#"  className="home"><Home className="house" id="dashboard"/>Home<BiMenu className="homebtn"/></Nav.Link>
            <Container className="sideitems">
                <Form.Group className="sidelink">
                    <BiSearch className="magnifying bxicon"/>
                    <Form.Control placeholder="Search..." className="search" />
                </Form.Group>
                <Nav.Link eventKey="link-1" className="sidelink" ><Create className="bxicon"/><span className="linkName">Capture</span></Nav.Link>
                <Nav.Link eventKey="link-2" className="sidelink"><List className="bxicon"/><span className="linkName">Clarify</span></Nav.Link>
                <Nav.Link eventKey="link-3" className="sidelink"><Folder className="bxicon"/><span className="linkName">Organize</span></Nav.Link>
                <Nav.Link eventKey="link-4" className="sidelink"><MenuBook className="bxicon"/><span className="linkName">Review</span></Nav.Link>
                <Nav.Link eventKey="link-5" className="sidelink"><DirectionsWalk className="bxicon"/><span className="linkName">Engage</span></Nav.Link>
            </Container>
            

        </Nav>
    );

};

export default Sidebar;
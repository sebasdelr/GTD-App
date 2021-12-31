import  React, { useContext, useRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import Folder from '@material-ui/icons/Folder';
import MenuBook from '@material-ui/icons/MenuBook';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import Home from '@material-ui/icons/Home';

import CaptureContext from '../../../capture/capture-context';

import { Link } from 'react-router-dom';

import { BiMenu, BiSearch } from "react-icons/bi";


import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.css';

import UnsavedContext from '../../../capture/unsaved-context';



const Sidebar = () => {

    const flagCtx = useContext(UnsavedContext);
    const notesCtx = useContext(CaptureContext);

    const searchRef = useRef();

    const showAlert = () =>{
        if(flagCtx.flag){
            
            flagCtx.setShow(true);
            
        } 
    }

    const filterItemHandler = () => {
        notesCtx.filterItem(searchRef.current.value);
    }


    return (
        <Nav defaultActiveKey="/home" className="flex-column sidebar" >
            <Nav.Link  className="home"><Home className="house" id="dashboard"/><Link to="/">Home<BiMenu className="homebtn"/></Link></Nav.Link>
            <Container className="sideitems">
                <Form.Group className="sidelink">
                    <BiSearch className="magnifying bxicon"/>
                    <Form.Control placeholder="Search..." className="search" ref={searchRef} onChange={filterItemHandler} />
                </Form.Group>
                <Nav.Link eventKey="link-1" className="sidelink"  onClick={showAlert}><Link to="/capture" class={flagCtx.flag && "disabled-link"}><Create className="bxicon"/><span className="linkName">Capture</span></Link></Nav.Link>
                {/* <Nav.Link eventKey="link-2" className="sidelink"  onClick={showAlert}><Link to="/clarify" class={flagCtx.flag && "disabled-link"}><List className="bxicon"/><span className="linkName">Clarify</span></Link></Nav.Link> */}
                <Nav.Link eventKey="link-3" className="sidelink"  onClick={showAlert} ><Link to="/projects" class={flagCtx.flag && "disabled-link"}><Folder className="bxicon"/><span className="linkName">Projects</span></Link></Nav.Link>
                {/* <Nav.Link eventKey="link-4" className="sidelink"  onClick={showAlert}><MenuBook className="bxicon"/><span className="linkName">Review</span></Nav.Link> */}
                <Nav.Link eventKey="link-5" className="sidelink"  onClick={showAlert} ><Link to="/actions" class={flagCtx.flag && "disabled-link"}><DirectionsWalk className="bxicon"/><span className="linkName">Engage</span></Link></Nav.Link>
            </Container>
            

        </Nav>
    );

};

export default Sidebar;
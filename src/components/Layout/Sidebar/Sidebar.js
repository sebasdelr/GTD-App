import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import Folder from '@material-ui/icons/Folder';
import MenuBook from '@material-ui/icons/MenuBook';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import Home from '@material-ui/icons/Home';

import { BiMenu, BiSearch } from "react-icons/bi";

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = () => {

    return (
        <Nav defaultActiveKey="/home" className="flex-column sidebar" >
            <Nav.Link href="/home"  className="home"><Home className="house"/>Home<BiMenu className="homebtn"/></Nav.Link>
            <Container className="sideitems">
                <Form.Group className="sidelink">
                    <BiSearch className="magnifying bxicon"/>
                    <Form.Control placeholder="Search..." className="search" />
                </Form.Group>
                <Nav.Link eventKey="link-1" className="sidelink" ><Create className="bxicon"/>Capture</Nav.Link>
                <Nav.Link eventKey="link-2" className="sidelink"><List className="bxicon"/>Clarify</Nav.Link>
                <Nav.Link eventKey="link-3" className="sidelink"><Folder className="bxicon"/>Organize</Nav.Link>
                <Nav.Link eventKey="link-4" className="sidelink"><MenuBook className="bxicon"/>Review</Nav.Link>
                <Nav.Link eventKey="link-5" className="sidelink"><DirectionsWalk className="bxicon"/>Engage</Nav.Link>
            </Container>
            

        </Nav>
    );

};

// const Sidebar = () => {
//     return (
//       <div
//         style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
//       >
//         <CDBSidebar textColor="#fff" backgroundColor="#333">
//           <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//             <a
//               href="/"
//               className="text-decoration-none"
//               style={{ color: 'inherit' }}
//             >
//               Home
//             </a>
//           </CDBSidebarHeader>
   
//           <CDBSidebarContent className="sidebar-content">
//             <CDBSidebarMenu>
//               <NavLink exact to="/notes" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon=""><Create/> Capture</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/lists" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon=""><List/> Clarify</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/groups" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon=""><Folder/> Organize</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/analytics" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="">
//                 <MenuBook/> Review
//                 </CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/todo" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="">
//                 <DirectionsWalk/> Engage
//                 </CDBSidebarMenuItem>
//               </NavLink>
   
//             </CDBSidebarMenu>
//           </CDBSidebarContent>
   
//           <CDBSidebarFooter style={{ textAlign: 'center' }}>
//             <div
//               style={{
//                 padding: '20px 5px',
//               }}
//             >
//               Sidebar Footer
//             </div>
//           </CDBSidebarFooter>
//         </CDBSidebar>
//       </div>
//     );
//   };


export default Sidebar;
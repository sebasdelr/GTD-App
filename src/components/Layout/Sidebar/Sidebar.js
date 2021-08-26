import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import Folder from '@material-ui/icons/Folder';
import MenuBook from '@material-ui/icons/MenuBook';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import Home from '@material-ui/icons/Home';

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
            <Nav.Link href="/home"><Home/>Home</Nav.Link>
            <Nav.Link eventKey="link-1" style={{ padding: '20px' }}><Create/>Capture</Nav.Link>
            <Nav.Link eventKey="link-2" style={{ padding: '20px' }}><List/>Clarify</Nav.Link>
            <Nav.Link eventKey="link-3" style={{ padding: '20px' }}><Folder/>Organize</Nav.Link>
            <Nav.Link eventKey="link-4" style={{ padding: '20px' }}><MenuBook/>Review</Nav.Link>
            <Nav.Link eventKey="link-5" style={{ padding: '20px' }}><DirectionsWalk/>Engage</Nav.Link>

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
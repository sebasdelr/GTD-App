

import React from 'react';

import {Card, Image, Row, Col, ListGroup} from 'react-bootstrap/';

import { Link } from 'react-router-dom';

import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import Folder from '@material-ui/icons/Folder';
import MenuBook from '@material-ui/icons/MenuBook';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';

import "./Dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';


import dashboardImage from '../../../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg';

import DashboardActionList from './DashboardActionList';

const Dashboard = () => {
	return (
		<div className="dashboard" >
			

			{/* <div className="panel-heading">
				
				<b>Dashboard</b>
			</div> */}
			<div className="dashboard-image">
				<Image className="top-image" src={dashboardImage} fluid />
			</div>
			<h1 style={{ padding: '15px 15px'  }}>Dashboard</h1>
			<div className="dashboard-container">
				<Row  className="dashboard-sections">
					
					<Link to="/capture">
						<div className="dashboard-section">
							<div  className="dashboard-section-icon" >								
									<Create />
							</div>
							<p className="dashboard-section-name">Capture</p>
							<p className="dashboard-section-description">
							Capture anything
							</p>
							{/* <Button variant="primary">Capture</Button> */}
						</div>
						
						
					</Link>
				
				
					{/* <Link to="/clarify">
						<div className="dashboard-section">
							<div  className="dashboard-section-icon" >								
								<List />
							</div>
							<p className="dashboard-section-name">Clarify</p>
							<p className="dashboard-section-description">
							Process what's captured.
							</p>
							
						</div>
						
						
					</Link> */}
				
				
					<Link to="/projects">
						<div className="dashboard-section">
							<div  className="dashboard-section-icon" >								
								<Folder />
							</div>
							<p className="dashboard-section-name">Projects</p>
							<p className="dashboard-section-description">
							Put everything in the right place.
							</p>
							{/* <Button variant="primary">Capture</Button> */}
						</div>
						
						
					</Link>
			
					{/* <Link to="/projects">
						<div className="dashboard-section">
							<div  className="dashboard-section-icon" >								
								<MenuBook />
							</div>
							<p className="dashboard-section-name">Review</p>
							<p className="dashboard-section-description">
							Go over your lists.
							</p>

						</div>
						
						
					</Link> */}
				
					<Link to="/actions">
						<div className="dashboard-section">
							<div  className="dashboard-section-icon" >								
								<DirectionsWalk />
							</div>
							<p className="dashboard-section-name">Engage</p>
							<p className="dashboard-section-description">
							Get to work on the important stuff.
							</p>
							{/* <Button variant="primary">Capture</Button> */}
						</div>
						
						
					</Link>

					
				
					
				</Row>
				
				<Row style={{ padding: '15px 15px'  }}>
					
					<Col>
						<DashboardActionList/>
					</Col>
					
					
				</Row>
				{/* <Row style={{ padding: '15px 15px'  }}>
					<h3>Waiting for</h3>
					<Card className="dashboard-card">
					
					<ListGroup variant="flush">
						<ListGroup.Item>Cras justo odio - Mark</ListGroup.Item>
						<ListGroup.Item>Dapibus ac facilisis in - Jessica</ListGroup.Item>
						<ListGroup.Item>Vestibulum at eros - Joe</ListGroup.Item>
					</ListGroup>
					</Card>
				</Row> */}
			</div>
			
			
		</div>
	);
};

export default Dashboard;

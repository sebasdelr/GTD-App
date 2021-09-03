import "./Dashboard.css";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardGroup, Image, Row, Col} from 'react-bootstrap/';

import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import Folder from '@material-ui/icons/Folder';
import MenuBook from '@material-ui/icons/MenuBook';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';

import dashboardImage from '../../../assets/xps-kLfkVa_4aXM-unsplash.jpg';



const Dashboard = () => {
	return (
		<div className="dashboard" >

			<div >
				{/* <div className="panel-heading">
					
					<b>Dashboard</b>
				</div> */}
				<div className="dashboard-image">
					<Image className="top-image" src={dashboardImage} fluid />
            	</div>
				<Row style={{ padding: '15px 15px'  }} >
					<Col>
						<Card  className="dashboard-card" >
							<Card.Body>
								
								<Create />
								<Card.Title>Capture</Card.Title>
								<Card.Text>
								Capture anything that crosses your mind
								</Card.Text>
								{/* <Button variant="primary">Capture</Button> */}
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="dashboard-card">
							<Card.Body>
								<List/>
								<Card.Title>Clarify</Card.Title>
								<Card.Text>
								Process what you've captured.
								</Card.Text>
								{/* <Button variant="primary">Clarify</Button> */}
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="dashboard-card">
							<Card.Body>
								<Folder/>
								<Card.Title>Organize</Card.Title>
								<Card.Text>
								Put everything in the right place.
								</Card.Text>
								{/* <Button variant="primary">Organize</Button> */}
							</Card.Body>
						</Card>
					</Col>

					<Col>
						<Card className="dashboard-card" >
							<Card.Body>
								<MenuBook/>
								<Card.Title>Review</Card.Title>
								<Card.Text>
								Go over your lists.
								</Card.Text>
								{/* <Button variant="primary">Review</Button> */}
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card  className="dashboard-card">
							<Card.Body>
								<DirectionsWalk/>
								<Card.Title>Engage</Card.Title>
								<Card.Text>
								Get to work on the important stuff.
								</Card.Text>
								{/* <Button variant="primary">Engage</Button> */}
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<CardGroup>



				
				</CardGroup>
			</div>
		</div>
	);
};

export default Dashboard;

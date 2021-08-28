// import "./Dashboard.css";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import Folder from '@material-ui/icons/Folder';
import MenuBook from '@material-ui/icons/MenuBook';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';



const Dashboard = () => {
	return (
		<div >

			<div >
				<div class="panel-heading">
					
					<b>Dashboard</b>
				</div>
				<CardGroup >
					
					<Card style={{ width: '18rem', padding: '5px' }} >
						<Card.Body>
							<Create style={{ justifyContent: 'center' }}/>
							<Card.Title>Capture</Card.Title>
							<Card.Text>
							Capture anything that crosses your mind
							</Card.Text>
							{/* <Button variant="primary">Capture</Button> */}
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem', padding: '5px'  }} >
						<Card.Body>
							<List/>
							<Card.Title>Clarify</Card.Title>
							<Card.Text>
							Process what you've captured.
							</Card.Text>
							{/* <Button variant="primary">Clarify</Button> */}
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }}>
						<Card.Body>
							<Folder/>
							<Card.Title>Organize</Card.Title>
							<Card.Text>
							Put everything in the right place.
							</Card.Text>
							{/* <Button variant="primary">Organize</Button> */}
						</Card.Body>
					</Card>
					<Card style={{ padding: '5px', width: '18rem' }}>
						<Card.Body>
							<MenuBook/>
							<Card.Title>Review</Card.Title>
							<Card.Text>
							Go over your lists.
							</Card.Text>
							{/* <Button variant="primary">Review</Button> */}
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }}>
						<Card.Body>
							<DirectionsWalk/>
							<Card.Title>Engage</Card.Title>
							<Card.Text>
							Get to work on the important stuff.
							</Card.Text>
							{/* <Button variant="primary">Engage</Button> */}
						</Card.Body>
					</Card>
				
				</CardGroup>
			</div>
		</div>
	);
};

export default Dashboard;

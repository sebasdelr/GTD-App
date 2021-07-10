// import "./Dashboard.css";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
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

				{/* <div class="panel-body"> */}

					<div class="row">
						
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Create style={{ justifyContent: 'center' }}/>
								<Card.Title>Capture</Card.Title>
								<Card.Text>
								Capture anything that crosses your mind
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<List/>
								<Card.Title>Clarify</Card.Title>
								<Card.Text>
								Process what you've captured.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Folder/>
								<Card.Title>Organize</Card.Title>
								<Card.Text>
								Put everything in the right place.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<MenuBook/>
								<Card.Title>Review</Card.Title>
								<Card.Text>
								Go over your lists.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<DirectionsWalk/>
								<Card.Title>Engage</Card.Title>
								<Card.Text>
								Get to work on the important stuff.
								</Card.Text>
							</Card.Body>
						</Card>
					
					</div>
				</div>
			{/* </div> */}
		</div>
	);
};

export default Dashboard;

import "./Dashboard.css";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';

const Dashboard = () => {
	return (
		<div style={{padding: '15px'}}>

			<div class="dashboard-primary">
				<div class="panel-heading">
					
					<b>Dashboard</b>
				</div>

				<div class="panel-body">

					<div class="row">
						
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Capture</Card.Title>
								<Card.Text>
								Capture anything that crosses your mind
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Clarify</Card.Title>
								<Card.Text>
								Process what you've captured.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Organize</Card.Title>
								<Card.Text>
								Put everything in the right place.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Review</Card.Title>
								<Card.Text>
								Go over your lists.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Engage</Card.Title>
								<Card.Text>
								Get to work on the important stuff.
								</Card.Text>
							</Card.Body>
						</Card>
					
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

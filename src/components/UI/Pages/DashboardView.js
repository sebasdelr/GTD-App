import { Row, Col } from 'react-bootstrap';

import Dashboard from '../Dashboard/Dashboard';


const DashboardView = () => {
    return (
        <Row className="justify-content-md-center">
            <Col style={{padding: '0px'}}>
            <Dashboard />
            </Col>
        </Row>
    );
}

export default DashboardView;
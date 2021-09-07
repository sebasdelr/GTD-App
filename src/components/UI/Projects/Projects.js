import {Card, CardGroup, Image, Row, Col} from 'react-bootstrap/';

const Projects = () => {

    return (
        <Card className="dashboard-card">
            <Card.Body>
                <Folder/>
                <Card.Title>Project</Card.Title>
                <Card.Text>
                Project Description to Go Here
                </Card.Text>
                {/* <Button variant="primary">Organize</Button> */}
            </Card.Body>
        </Card>
    );

};

export default Projects;
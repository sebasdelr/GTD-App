import React from 'react';

import {Card, Row, Col, Button} from 'react-bootstrap/';
import { BiEdit, BiFileBlank, BiSave,  BiTrash } from "react-icons/bi";

const Projects = (props) => {

    const {list} = props;

    
    const projectListHandler = list => {
        if(list.length > 0) {
            return (
                list.map((note) => {

                    return (
                        <Col>
                            <Card className="dashboard-card">
                                <Card.Body>
                                    
                                    <Card.Title>{note.title}</Card.Title>
                                    <Card.Text>
                                    {note.description}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>


                    );

                }
                
                )
            );
        } else {
            return (
                <p>No Items Found</p>
            );

        }
    };

    return (
        <React.Fragment>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Button variant="light" className=""><BiFileBlank/> New Project</Button>{' '}
                    <Button variant="light" className=""><BiEdit/> Edit Project</Button>{' '}
                    <Button variant="light" className=""><BiTrash/> Delete Project</Button>{' '}
                    <Button  type="submit" className=""><BiSave/> Save Project</Button>
                </Col>
            </Row>

            <Row style={{ padding: '15px 15px'  }} >
                {projectListHandler(list)}
            </Row>

        </React.Fragment>

    );

};

export default Projects;
import React, { useState } from 'react';

import ProjectForm from './ProjectForm';

import {Card, Row, Col, Button} from 'react-bootstrap/';
import { BiEdit, BiFileBlank, BiSave,  BiTrash } from "react-icons/bi";

const Projects = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const passProjectHandler = (enteredText) => {
        props.onAddProject(enteredText);
    }

    return (
        <React.Fragment>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Button variant="light" className="" onClick={handleShow}><BiFileBlank/> New Project</Button>{' '}
                    <Button variant="light" className=""><BiEdit/> Edit Project</Button>{' '}
                    <Button variant="light" className=""><BiTrash/> Delete Project</Button>{' '}
                    <Button  variant="light" className=""><BiSave/> Save Project</Button>
                </Col>
            </Row>

            <Row style={{ padding: '15px 15px'  }} >
                {projectListHandler(list)}
            </Row>
            <ProjectForm show={show} onHide={handleClose} passProjectHandler={passProjectHandler}/>


        </React.Fragment>

    );

};

export default Projects;
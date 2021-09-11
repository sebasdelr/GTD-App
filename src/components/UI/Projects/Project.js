import React, { useState } from 'react';

import {Card, Row, Col, Button} from 'react-bootstrap/';

import './Projects.css';

const Project = (props) => {

    

    const toggleSelect = () => {
        
        props.selectedProject(props.content.id);

    };

    return (
        <Card className={props.selectedClass} onClick={toggleSelect}>
            <Card.Body>
                
                <Card.Title>{props.content.title}</Card.Title>
                <Card.Text>
                {props.content.description}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Project;
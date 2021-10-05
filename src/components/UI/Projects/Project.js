import React from 'react';

import {Card} from 'react-bootstrap/';

import './Projects.css';

const Project = (props) => {

    

    const toggleSelect = () => {
        
        props.selectedProject(props.item.id);

    };

    return (
        <Card className={props.selectedClass} onClick={toggleSelect}>
            <Card.Body>
                
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text>
                    {props.item.content}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Project;
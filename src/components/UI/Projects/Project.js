import React from 'react';

import {Card} from 'react-bootstrap/';

import './Projects.css';

const nextActionHandler = (list, id) => {
    // childTasks = list.filter(item => (item.parentId === id));


    if(list.length > 0) {
        return(
            <ul>
                <li>{list[0].title}</li>
                {/* {list.map(item => {
                    return(
                        <li>{item.title}</li>
                    );
                    
                })} */}
            </ul>
            
        );

    }else {
        return (
            <p>No Next Actions Set</p>
        );
    }
};

const Project = (props) => {

    // childTasks = list.filter(item => (item.parentId === id));

    

    const toggleSelect = () => {
        
        props.selectedProject(props.item.id);

    };

    return (
        <Card className={props.selectedClass} onClick={toggleSelect}>
            <Card.Body>
                
                <Card.Title>{props.item.title}</Card.Title>
                <p>Next Actions</p>
                <Card.Text>
                    {nextActionHandler(props.nextTasks)}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Project;
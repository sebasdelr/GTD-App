import React, { useState } from 'react';

import ProjectForm from './ProjectForm';
import Project from './Project';

import {Card, Row, Col, Button} from 'react-bootstrap/';
import { BiEdit, BiFileBlank, BiSave,  BiTrash } from "react-icons/bi";



const Projects = (props) => {
    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isSelected, setIsSelected] = useState('');
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {list} = props;

    const selectedProjectHandler = (id) => {
        setIsSelected(id);
    };

    let pclass = "dashboard-card";
    let content = "";

    const handleNew = () => {
        setIsEdit(false);
        handleShow();

    }

    const handleDelete = () => {
        if(isSelected.trim !== '') {
            props.handleDeleteProject(isSelected);
        }
        
    }

    const handleEdit = () => {
        if(isSelected.trim().length !== 0) {
            setIsEdit(true);
            handleShow();
        }

    }



    
    const projectListHandler = list => {
        if(list.length > 0) {
            return (
                list.map((note) => {
                    if(isSelected === note.id) {

                        content = note;
                        
                        pclass = "dashboard-card active";
                    } else {
                        pclass = "dashboard-card";
                    }
                    console.log(pclass);

                    return (
                        <Col>
                            <Project content={note} selectedProject={selectedProjectHandler} selectedClass={pclass}/>

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
                    <Button variant="light" className="" onClick={handleNew}><BiFileBlank/> New Project</Button>{' '}
                    <Button variant="light" className="" onClick={handleEdit}><BiEdit/> Edit Project</Button>{' '}
                    <Button variant="light" className="" onClick={handleDelete}><BiTrash/> Delete Project</Button>{' '}
                    {/* <Button  variant="light" className=""><BiSave/> Save Project</Button> */}
                </Col>
            </Row>

            <Row style={{ padding: '15px 15px'  }} >
                {projectListHandler(list)}
            </Row>
            <ProjectForm show={show} onHide={handleClose} passProjectHandler={passProjectHandler} projectContent={content} canEdit={isEdit}/>


        </React.Fragment>

    );

};

export default Projects;
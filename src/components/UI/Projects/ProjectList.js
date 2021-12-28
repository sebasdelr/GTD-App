import React, { useState, useContext } from 'react';

import ProjectForm from './ProjectForm';
import Project from './Project';

import { Row, Col, Button, Image} from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { BiEdit, BiFileBlank, BiTrash } from "react-icons/bi";



import projectImage from '../../../assets/xps-dpbXgTh0Lac-unsplash.jpg';


import './Projects.css';
import './ProjectList.css';

import CaptureContext from '../../../capture/capture-context';

const ProjectList = () => {
    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isSelected, setIsSelected] = useState('');

    const notesCtx = useContext(CaptureContext);

    const projectOnlyList = notesCtx.items.filter(item => (item.type === "2"));
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const selectedProjectHandler = (id) => {
        setIsSelected(id);
    };

    let pclass = "dashboard-card";
    let content = "";

    const handleNew = () => {
        setIsSelected('');
        setIsEdit(false);
        handleShow();

    }

    const handleDelete = () => {
        if(isSelected.trim !== '') {
            notesCtx.deleteItem(isSelected);
        }
        
    }

    const handleEdit = () => {
        if(isSelected.trim().length !== 0) {
            setIsEdit(true);
            handleShow();
        }

    }


    
    const projectListHandler = list => {


        let childTasks = [];

        if(list.length > 0) {
            return (
                list.map((note) => {
                    childTasks = notesCtx.items.filter(item => (item.parentId === note.id));

                    if(isSelected === note.id) {

                        content = note;
                        
                        pclass = "dashboard-card active";
                    } else {
                        pclass = "dashboard-card";
                    }
                    console.log(pclass);

                    return (
                     
                            <Project item={note} selectedProject={selectedProjectHandler} selectedClass={pclass} nextTasks={childTasks}/>

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
        notesCtx.addItem(enteredText);
    }

    return (
        <div>
            <div className="project-image">
                <Image className="top-image" src={projectImage} fluid />
            </div>
            
            <div className="projectlist">
            <h1>Projects</h1>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Button variant="light" className="" onClick={handleNew}><BiFileBlank/> New Project</Button>{' '}
                        <Button variant="light" className="" onClick={handleEdit} disabled={(isSelected.trim().length === 0) && "disabled"}><BiEdit/> Edit Project</Button>{' '}
                        <Button variant="light" className="" onClick={handleDelete}><BiTrash/> Delete Project</Button>{' '}
                        {/* <Button  variant="light" className=""><BiSave/> Save Project</Button> */}
                    </Col>
                </Row>

                <Row style={{ padding: '15px'  }}  xs={2} md={4} lg={6} className="parent" >
                    {projectListHandler(projectOnlyList)}
                </Row>
                <Row>
                    <Col ><Button variant="primary"><Link to="/project-viewer">Project Viewer</Link></Button></Col>
                </Row>
                <ProjectForm show={show} onHide={handleClose} passProjectHandler={passProjectHandler} projectContent={content} canEdit={isEdit}/>


            </div>

        </div>
        

    );

};

export default ProjectList;
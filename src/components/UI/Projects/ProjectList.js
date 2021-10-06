import React, { useState, useContext } from 'react';

import ProjectForm from './ProjectForm';
import Project from './Project';

import { Row, Col, Button} from 'react-bootstrap/';
import { BiEdit, BiFileBlank, BiTrash } from "react-icons/bi";

import CaptureContext from '../../../capture/capture-context';



const ProjectList = (props) => {
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
        if(list.length > 0) {
            return (
                list.map((note) => {
                    if(isSelected === note.id) {

                        // content = note;
                        
                        pclass = "dashboard-card active";
                    } else {
                        pclass = "dashboard-card";
                    }
                    console.log(pclass);

                    return (
                        <Col>
                            <Project item={note} selectedProject={selectedProjectHandler} selectedClass={pclass}/>

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
        notesCtx.addItem(enteredText);
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
                {projectListHandler(projectOnlyList)}
            </Row>
            <ProjectForm show={show} onHide={handleClose} passProjectHandler={passProjectHandler} projectContent={content} canEdit={isEdit}/>


        </React.Fragment>

    );

};

export default ProjectList;
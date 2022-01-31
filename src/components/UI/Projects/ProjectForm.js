import React, { useRef, useState, useEffect, useContext } from "react";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

import {Form, Alert, Modal, Button, Col, Row} from 'react-bootstrap/';

import UnsavedContext from '../../../capture/unsaved-context';
import CaptureContext from '../../../capture/capture-context';

const checkDateDifference = (day1, day2) => {
    if(day2 > day1) {
        return true;
    } else {
        return false;
    }


};

const ProjectForm = (props) => {

    const flagCtx = useContext(UnsavedContext);
    const notesCtx = useContext(CaptureContext);

    const [newProjectFlag, setNewProjectFlag] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
    const [getStartDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [alertMessage, setAlertMessage] = useState();
    const [projectId, setProjectId] = useState();

    const dirtyFlagHandler = () => {
        
        flagCtx.setFlag(true);
    }

    const setDateHandler = (date, type) => {
        
        if(type === "start") {
            setStartDate(date);
        } else {
            setDueDate(date);
            
        }
    }


	const projectInputRef = useRef();

 

    const newProject = () => { 

        if(props.show) {
            setNewProjectFlag(true);
            document.getElementById("project-form").reset();
            setProjectId(Math.random().toString());
            setStartDate(new Date());

            setDueDate(new Date());

        }

    }

    useEffect(() => {
        if(typeof props.projectContent != 'object' || !props.canEdit) {
            newProject();

        } else {
            if(props.show) {
                
                document.getElementById("project-title").value = props.projectContent.title;
                // document.getElementById("note-content").value = props.selectedItem.content;
                setProjectId(props.projectContent.id);


                setStartDate(props.projectContent.startDate);

                setDueDate(props.projectContent.dateDue);

            }
            
        }

    }, [props]);

	const checkIfEmpty = title => {
        if(title.trim().length === 0) { 
            return false;
            
        }
        else {
            
            return true;
        }
    }

    const handleClose = () => {
        setShowAlert(false);
        flagCtx.setFlag(false);
        setNewProjectFlag(false);
        props.onHide();
    };

    const projectSaveHandler = (event) => {
		event.preventDefault();	
		
		const projectName = projectInputRef.current.value;
        const projectDescription = "";
        // const projectId = Math.random().toString();
        // props.projectContent.id
		
        if((checkIfEmpty(projectName)) && checkDateDifference(getStartDate, dueDate)) {
            setShowAlert(false);
            const enteredText = {
                id: projectId,
                parentId: '', 
                title: projectName, 
                content: projectDescription, 
                dateCreated: new Date(), 
                startDate: getStartDate, 
                dateDue: dueDate,  
                type: '2',
                status: '',
            };

            const apiEnteredText = {
                id: projectId,
                parentId: '', 
                title: projectName, 
                content: projectDescription, 
                dateCreated: new Date().toISOString().split('T')[0],
                startDate: getStartDate.toISOString().split('T')[0], 
                dateDue: dueDate.toISOString().split('T')[0], 
                type: '2',
                status: null,
                reviewed: false,
                color: '#cf945d'

            }

            if(newProjectFlag){
                notesCtx.addApiItem(apiEnteredText);

            } else {
                notesCtx.editApiItem(apiEnteredText);
            }
            

            // props.passProjectHandler(enteredText);

            handleClose();
            

        }  else {
            setShowAlert(true);
            if(!checkIfEmpty(projectName)) {   
                setAlertMessage("Please enter a title.");
            } else {
                setAlertMessage("Due date cannot be set before the start date.")
            }
            

        }


	};





    return (
        <Modal show={props.show} onHide={handleClose}>
            <Form onSubmit={projectSaveHandler} id="project-form">
                
                    <Modal.Header closeButton>
                    <Modal.Title>New project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group className="mb-3" controlId="project-title">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="input" placeholder="Enter Project Name" ref={projectInputRef} onChange={dirtyFlagHandler} />
                    </Form.Group>

                    <Form.Group controlId="date-Start">
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker className="date-dropdown" selected={getStartDate} onChange={((date) => setDateHandler(date, "start"))} />
                    </Form.Group>
                
             
                    <Form.Group controlId="due-date">
                        <Form.Label>Date Due</Form.Label>
                        <DatePicker className="date-dropdown" selected={dueDate} onChange={((date) => setDateHandler(date, "due"))} />
                    </Form.Group>
         
                    {showAlert && <Alert variant="danger" >{alertMessage}</Alert>}

                    

                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                    <Button  type="submit"  disabled={!flagCtx.flag && "disabled"} >
                        Save Changes
                    </Button>
                    </Modal.Footer>
                
            </Form>
        </Modal>


        

	);

};

export default ProjectForm;


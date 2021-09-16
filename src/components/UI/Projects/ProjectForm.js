import React, { useRef, useState, useEffect } from "react";



import {Form, Alert, Modal, Button} from 'react-bootstrap/';

const ProjectForm = (props) => {

	const [showAlert, setShowAlert] = useState(false);

	const projectInputRef = useRef();

    let projectId = '';

    const newProject = () => { 

        if(props.show) {
            document.getElementById("project-form").reset();
            projectId = Math.random().toString();

        }

    }

    useEffect(() => {
        if(typeof props.projectContent != 'object' || !props.canEdit) {
            newProject();

        } else {
            if(props.show) {
                
                document.getElementById("project-title").value = props.projectContent.title;
                // document.getElementById("note-content").value = props.selectedItem.content;
                projectId = props.projectContent.id;

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
        props.onHide();
    };

    const projectSaveHandler = (event) => {
		event.preventDefault();	
		
		const projectName = projectInputRef.current.value;
        const projectDescription = "Placeholder";
        // const projectId = Math.random().toString();
        // props.projectContent.id
		
        if(checkIfEmpty(projectName)) {
            setShowAlert(false);
            const enteredText = {id: projectId, title: projectName, description: projectDescription};

            props.passProjectHandler(enteredText);

            handleClose();
            

        } else {
            setShowAlert(true);
            

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
                        <Form.Control type="input" placeholder="Enter Project Name" ref={projectInputRef} />
                    </Form.Group>
                    {showAlert && <Alert variant="danger" >Please enter a title.</Alert>}

                    

                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                    <Button  type="submit" >
                        Save Changes
                    </Button>
                    </Modal.Footer>
                
            </Form>
        </Modal>


        

	);

};

export default ProjectForm;


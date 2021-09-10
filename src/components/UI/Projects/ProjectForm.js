import React, { useRef, useState } from "react";



import {Form, Alert, Modal, Button} from 'react-bootstrap/';

const ProjectForm = (props) => {

	const [showAlert, setShowAlert] = useState(false);

	const projectInputRef = useRef();

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

        console.log('clicked');
		
		
		const projectName = projectInputRef.current.value;
        const projectDescription = "Placeholder";
        const projectId = Math.random().toString();
		
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
                    <Form.Group className="mb-3" >
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


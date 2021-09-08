import React, { useRef } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProjectForm = (props) => {

    const modalCloseHandler = (event) => {
		event.preventDefault();
		
		const projectName = projectInputRef.current.value;


		props.onLogin(userName, passWord);



	};

	const projectInputRef = useRef();



    return (
		<Form onSubmit={modalCloseHandler}>

			<div className="backdrop"></div>
			<div className="project-form">
				<Form.Group className="mb-3" >
					<Form.Label>Project Name</Form.Label>
					<input
						id="projectname"
						type="text"
						placeholder="Enter Project Name"
						ref={projectInputRef}
					></input>
				</Form.Group>
				<Button type="submit">Login</Button>
			</div>

		</Form>
	);

};

export default ProjectForm;


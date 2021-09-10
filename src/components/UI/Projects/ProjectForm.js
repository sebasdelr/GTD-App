import React, { useRef } from "react";

import Form from 'react-bootstrap/Form';

const ProjectForm = (props) => {

    const modalCloseHandler = (event) => {
		event.preventDefault();
		
		const projectName = projectInputRef.current.value;

	};

	const projectInputRef = useRef();



    return (
		<Form onSubmit={modalCloseHandler}>


				<Form.Group className="mb-3" >
					<Form.Label>Project Name</Form.Label>
					<input
						id="projectname"
						type="text"
						placeholder="Enter Project Name"
						ref={projectInputRef}
					></input>
				</Form.Group>

		</Form>
	);

};

export default ProjectForm;


import React, { useRef } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./LoginForm.css";

const LoginForm = (props) => {

	const modalCloseHandler = (event) => {
		event.preventDefault();
		
		const userName = userInputRef.current.value;
		const passWord = passInputRef.current.value;

		props.onLogin(userName, passWord);



	};

	const userInputRef = useRef();
	const passInputRef = useRef();


	return (
		<Form onSubmit={modalCloseHandler}>

			<div className="backdrop"></div>
			<div className="login-form">
				<Form.Group className="mb-3" >
					<Form.Label>Username</Form.Label>
					<input
						id="username"
						type="text"
						placeholder="Enter Username"
						ref={userInputRef}
					></input>
				</Form.Group>
				<Form.Group className="mb-3" >
					<Form.Label>Password</Form.Label>
					<input
						id="password"
						type="password"
						placeholder="Enter Password"
						ref={passInputRef}
					></input>
					<Form.Text className="text-muted">{props.resultMessage}</Form.Text>
				</Form.Group>
				<Button type="submit">Login</Button>
			</div>

		</Form>
	);
};

export default LoginForm;

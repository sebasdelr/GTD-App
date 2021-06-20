import React, { useRef } from "react";

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
	<div>
		<div className="backdrop"></div>
		<div className="login-form">
			<form onSubmit={modalCloseHandler}>
				<label>Username</label>
				<input
					id="username"
					type="text"
					placeholder="Enter Username"
					ref={userInputRef}
				></input>
				<label>Password</label>
				<input
					id="password"
					type="password"
					placeholder="Enter Password"
					ref={passInputRef}
				></input>
				<p>{props.resultMessage}</p>
				<button type="submit">Login</button>
			</form>
		</div>
	</div>);
};

export default LoginForm;

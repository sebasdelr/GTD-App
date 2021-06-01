import React, { useState, useRef, useEffect } from "react";

import "./LoginForm.css";

const LoginForm = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')

		if(storedUserLoggedInInformation === '1') {
		setIsLoggedIn(true);
		}
	}, []);

	const modalCloseHandler = (event) => {
		event.preventDefault();
		const userName = userInputRef.current.value;
		const passWord = passInputRef.current.value;

		if(userName === "user" && passWord ==="pass") {
			localStorage.setItem('isLoggedIn', '1');
			setIsLoggedIn(true);
		}
		else{
		console.log("invalid credentials");
		}


	};

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

	const userInputRef = useRef();
	const passInputRef = useRef();




	const showForm = (
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
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);

	return <div>{!isLoggedIn ? showForm : ""}</div>;
};

export default LoginForm;

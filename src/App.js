import React, { useState, useEffect } from 'react';

// libraries;
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//layout components
import Header from './components/Layout/Header/Header';
import Sidebar from './components/Layout/Sidebar/Sidebar';

//views
import NotesView from './components/UI/Pages/NotesView';
import ProjectsView from './components/UI/Pages/ProjectsView';
import DashboardView from './components/UI/Pages/DashboardView';

import LoginForm from './components/UI/Login/LoginForm';

//styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isValidLogin, setIsValidLogin] = useState();

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')

		if(storedUserLoggedInInformation === '1') {
		setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (userName, passWord) => {

		if(userName === "user" && passWord ==="pass") {
			localStorage.setItem('isLoggedIn', '1');
			setIsLoggedIn(true);
      setIsValidLogin();
		}
		else{
    setIsValidLogin("Invalid Credentials");
		}
	};

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

  

  return (

    <React.Fragment>

      {!isLoggedIn &&
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <LoginForm onLogin={loginHandler} resultMessage={isValidLogin} />
            </Col>
          </Row>
        </Container>
      
      }

      {isLoggedIn &&

        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }} >
          <Header onLogout={logoutHandler}/>
          <Row >
            <Col md="auto" className="sidebar">
              <Sidebar/>
            </Col>
            <Col>
              <Switch>
                <Route path="/" component={DashboardView} exact />
                <Route path="/capture" component={NotesView} />
                <Route path="/projects" component={ProjectsView} />
               
              </Switch>

            </Col>
          </Row>
          
        </Container>
      }
    </React.Fragment>

  );
}
export default App;

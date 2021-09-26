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
import ActionView from './components/UI/Pages/ActionView';

import LoginForm from './components/UI/Login/LoginForm';

import CaptureProvider from './capture/CaptureProvider';


//styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const notes = [
  {
    id: 'a1',
    title: 'Meeting',
    content: 'Have a meeting with shareholders about what is next',
    date: new Date(2020, 7, 14),
    type: ''
  },
  {
    id: 'a2',
    title: 'Phone Call',
    content: 'Call Mark about new designs for living room',
    date: new Date(2021, 2, 28),
    type: '4'
  },
  {
    id: 'a3',
    title: 'Groceries',
    content: 'Remember to buy milk',
    date: new Date(2021, 5, 12),
    type: ''
  },
];


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
        <CaptureProvider>
          <BrowserRouter>
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }} >
              <Header onLogout={logoutHandler}/>
              <Row >
                <Col md="auto" className="sidebar">
                  <Sidebar/>
                </Col>
                <Col>
                  <Switch>
                    <Route path="/" component={DashboardView} exact />
                    <Route path="/capture">
                      <NotesView />
                    </Route>
                    <Route path="/projects" component={ProjectsView} />
                    <Route path="/actions">
                      <ActionView />
                    </Route>
                  
                  </Switch>

                </Col>
              </Row>
              
            </Container>

          </BrowserRouter>
           
        </CaptureProvider>
       
      }
    </React.Fragment>

  );
}
export default App;

import './App.css';
import React, { useState, useEffect, Fragment } from 'react';

// import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import Items from './components/Items';
import NoteContent from './components/NoteContent';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ListGroup from 'react-bootstrap/ListGroup';
import Sidebar from './components/Sidebar';

import 'bootstrap/dist/css/bootstrap.css';
// import Card from 'react-bootstrap/Card';

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
		console.log("invalid credentials");
    setIsValidLogin("Invalid Credentials");
		}


	};

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};
   
  const notes = [
    {
      id: 'a1',
      title: 'Meeting',
      content: '<p>Have a meeting with shareholders about what is next</p>',
      date: new Date(2020, 7, 14),
    },
    {
      id: 'a2',
      title: 'Phone Call',
      content: 'Call Mark about new designs for living room',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'a3',
      title: 'Groceries',
      content: 'Remember to buy milk',
      date: new Date(2021, 5, 12),
    },
  ];

  const [useTitle, setTitle] = useState(notes[0].title);
  const [useContent, setContent] = useState(notes[0].content);

  const sendTitle = (title) => {
    setTitle(title);
  }

  const sendContent = (content) => {
    console.log(content);
    setContent(content);
  }

//need to make so that either or show up not hide header

  return (

    <Fragment>

      {!isLoggedIn && <LoginForm onLogin={loginHandler} resultMessage={isValidLogin} />}
 
      {isLoggedIn &&

      
        <div>

          <Header onLogout={logoutHandler}/>

          <main className="my-5 py-5">
            <Container fluid >
              <Row>
                <Col xs={3} md={2}>
                  <Sidebar></Sidebar>
                </Col>
                <Col>
                  <Row >
                

                    <Col xs={3} md={2}>
                      <Items list={notes} getTitle={sendTitle} getContent={sendContent}/>
                    </Col>
                    
                    
                    <Col>
                      <NoteContent title={useTitle} content={useContent}/>

                      {/* <Dashboard /> */}
                    </Col>
                    
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col>
                      {/* <NoteContent title={useTitle} content={useContent}/> */}

                      <Dashboard />
                    </Col>
                  </Row>
                </Col>
              </Row>
              
            </Container>
          </main>


        </div>

        
      }
      
     
    
    </Fragment>

    // <div className="App">
      


      
      
      
    // </div>
  );
}
export default App;

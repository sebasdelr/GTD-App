import './App.css';
import React, { useState, useEffect, Fragment } from 'react';

// import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import Items from './components//Items/Items';
import NoteContent from './components/UI/Notes/NoteContent';
import LoginForm from './components/UI/Login/LoginForm';
import Header from './components//Layout/Header/Header';
import Dashboard from './components/UI/Dashboard/Dashboard';
import ListGroup from 'react-bootstrap/ListGroup';
import Sidebar from './components/Layout/Sidebar/Sidebar';

import CaptureProvider from './capture/CaptureProvider';

import { BrowserRouter as Router } from 'react-router-dom';



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
      content: 'Have a meeting with shareholders about what is next',
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

  const [noteCapture, setNoteCapture] = useState(notes);

  const [useTitle, setTitle] = useState(notes[0].title);
  const [useContent, setContent] = useState(notes[0].content);

  const sendTitle = (title) => {
    setTitle(title);
  }

  const sendContent = (content) => {
    console.log(content);
    setContent(content);
  }

  const addNoteHandler = enteredText => {
    setNoteCapture(prevNotes => {
      const updatedNotes = [...prevNotes];
      updatedNotes.unshift({ id: Math.random().toString(), title: enteredText.title, content: enteredText.content, date: new Date(2021, 5, 12) });
      console.log('updated note');
      return updatedNotes;
    });
  };

  const deleteNoteHandler = noteId => {
    setNoteCapture(prevNotes => {
      const updatedNotes = prevNotes.filter(note => note.id !== noteId);
      return updatedNotes;
    });
  };


//need to make so that either or show up not hide header

  return (

    <Router>
      <CaptureProvider>
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
              <Col xs={3} md={2}>
                <Sidebar></Sidebar>
              </Col>
              <Col>
                <Row >
              

                  <Col xs={3} md={2}>
                    {/* <Items list={noteCapture} getTitle={sendTitle} getContent={sendContent}  onDeleteItem={deleteNoteHandler}/> */}
                    <Items list={noteCapture} onDeleteItem={deleteNoteHandler}/>
                  </Col>
                  
                  
                  <Col>
                    {/* <NoteContent title={useTitle} content={useContent} onAddNote={addNoteHandler}/> */}
                    <NoteContent content={useContent} onAddNote={addNoteHandler}/>


                  </Col>
                  
                </Row>
                {/* <Row className="justify-content-md-center">
                  <Col>
                    <Dashboard />
                  </Col>
                </Row> */}
              </Col>
            </Row>
            
          </Container>
        }
      </CaptureProvider>

    </Router>

    // <div className="App">
      


      
      
      
    // </div>
  );
}
export default App;

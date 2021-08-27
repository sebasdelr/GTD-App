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

  const [useContent, setContent] = useState(noteCapture[0]);
  const [useIndex, setIndex] = useState(0);



  const selectedItem = (content) => {
    setContent(content);
    setIndex(noteCapture.findIndex(element => element.id == content.id ));
  }

  const addNoteHandler = enteredText => {
    setNoteCapture(prevNotes => {
      const updatedNotes = [...prevNotes];
      if(noteCapture.findIndex(element => element.id == enteredText.id ) >= 0) {
        updatedNotes[useIndex] = { id: enteredText.id, title: enteredText.title, content: enteredText.content, date: new Date(2021, 5, 12) }
        setContent(updatedNotes[useIndex])
        return updatedNotes;
        
        
      } else {
        
        updatedNotes.unshift({ id: enteredText.id, title: enteredText.title, content: enteredText.content, date: new Date(2021, 5, 12) });
        setContent(updatedNotes[0])
        return updatedNotes;
        
        
      }
      
    });
  };

  const deleteNoteHandler = noteId => {
    setNoteCapture(prevNotes => {
      const updatedNotes = prevNotes.filter(note => note.id !== noteId);
      //also need validation when its the last note that is deleted and selected, need validation when its the first note that is selected
      if(useIndex == (updatedNotes.length)) {
        setContent(updatedNotes[0])
        console.log("out of bounds");

      }
      else {
        setContent(useIndex);
        console.log(updatedNotes.length);
        console.log(useIndex);

      }

      
      
      return updatedNotes;
    });
  };


//need to make so that either or show up not hide header

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
              <Row >
            

                <Col xs={3} md={2}>
                  {/* <Items list={noteCapture} getTitle={sendTitle} getContent={sendContent}  onDeleteItem={deleteNoteHandler}/> */}
                  <Items list={noteCapture} onDeleteItem={deleteNoteHandler} selectedItem={selectedItem}/>
                </Col>
                
                
                <Col>
                  {/* <NoteContent title={useTitle} content={useContent} onAddNote={addNoteHandler}/> */}
                  <NoteContent indexOfNote={useIndex} content={useContent} onAddNote={addNoteHandler}/>


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


    </React.Fragment>

    // <div className="App">
      


      
      
      
    // </div>
  );
}
export default App;

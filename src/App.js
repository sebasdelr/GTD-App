import './App.css';
import React, { useState, useEffect } from 'react';

// import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import Items from './components/Items/Items';
import NoteContent from './components/UI/Notes/NoteContent';
import LoginForm from './components/UI/Login/LoginForm';
import Header from './components//Layout/Header/Header';
import Dashboard from './components/UI/Dashboard/Dashboard';
import Projects from './components/UI/Projects/Projects';
import Sidebar from './components/Layout/Sidebar/Sidebar';

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
    setIsValidLogin("Invalid Credentials");
		}
	};

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

  const projects = [
    {
      id: 'p1',
      title: 'Buy new car',
      description: 'Need to find a new car',
    },
    {
      id: 'p2',
      title: 'Vacation',
      description: 'Christmas vacation',

    },
  ];
   
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
  const [projectCapture, setProjectCapture] = useState(projects);

  const [useContent, setContent] = useState(noteCapture[0]);

  const [useIndex, setIndex] = useState(0);

  const [displaySection, setDisplaySection] = useState('notes');

  //for notes
  const selectedItem = (content) => {
    setContent(content);
    setIndex(getIndex(noteCapture, content)); 
  }

  const getIndex = (list, item) => {
    return list.findIndex(element => element.id === item.id)
  }

  const addItem = (list, item) => {
    const updatedList = [...list];
    const itemIndex = getIndex(updatedList, item);
    const itemSet = { 
      id: item.id, 
      title: item.title, 
      description: item.description ? item.description : null,
      content: item.content ? item.content: null,
      date: item.date ? item.date: null
    };

    if(itemIndex >= 0) {
      updatedList[itemIndex] = itemSet;
    } else {
      updatedList.unshift(itemSet);
    }

    return updatedList;
    
  }

  const deleteItem = (list, id) => {     
    const updatedProjects = list.filter(project => project.id !== id);         
    return updatedProjects;
  }

  const addProjectHandler = enteredContent => {
    setProjectCapture(prevProjects => {
      const updatedProjects = addItem(prevProjects, enteredContent);

        return updatedProjects;
      }
      
    );

  }

  const deleteProjectHandler = projectId => {

    setProjectCapture(prevProjects => {
      return deleteItem(prevProjects, projectId);
    });

  }

  const addNoteHandler = enteredText => {
    setNoteCapture(prevNotes => {
      const updatedNotes = addItem(prevNotes, enteredText);
      const noteIndex = getIndex(noteCapture, enteredText);

      if (noteIndex >= 0) {
        setContent(updatedNotes[noteIndex]);

      } else {
        setContent(updatedNotes[0]);
      }
        return updatedNotes;
        
      }     
    );
  };

  const deleteNoteHandler = noteId => {
    setNoteCapture(prevNotes => {
      //only place using useIndex, need to refactor
      if(useIndex === (prevNotes.length)) {
        setContent(prevNotes[0]);

      }else {
        setContent(useIndex);
      }
      return deleteItem(prevNotes, noteId);
    });
  };

  const sectionHandler = () => {
    setDisplaySection('projects');
  }

  const renderSwitch = section => {
    switch(section) {
      case 'dashboard':
        return (
          <Row className="justify-content-md-center">
            <Col style={{padding: '0px'}}>
              <Dashboard />
            </Col>
          </Row>
        );
      case 'notes':
        return(
          <Row >
            
            <Col xs={3} md={2}>
              <Items list={noteCapture} onDeleteItem={deleteNoteHandler} content={useContent} selectedItem={selectedItem}/>
            </Col>
            <Col>
            
              <NoteContent content={useContent} onAddNote={addNoteHandler} onDeleteItem={deleteNoteHandler}/>
            </Col>
          
        </Row>
        );
        case 'projects':
          return (
            <Row className="justify-content-md-center">
              <Col style={{padding: '0px'}}>
                <Projects list={projectCapture} onAddProject={addProjectHandler} handleDeleteProject={deleteProjectHandler}/>
              </Col>
            </Row>
          );

      default:
        return '';
    }
  }
  


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
              <Sidebar selectedSection={sectionHandler}/>
            </Col>
            <Col>
              {renderSwitch(displaySection)}

            </Col>
          </Row>
          
        </Container>
      }
    </React.Fragment>

  );
}
export default App;

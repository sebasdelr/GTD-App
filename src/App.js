import './App.css';
import React, { useState, useEffect } from 'react';
import Items from './components/Items';
import NoteContent from './components/NoteContent';
import LoginForm from './components/LoginForm';
import Header from './components/Header';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

	

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
		}
		else{
		console.log("invalid credentials");
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

  let noteTitle = notes[0].title;

  const sendTitle = (title) => {
    setTitle(title);
  }

  const sendContent = (content) => {
    console.log(content);
    setContent(content);
  }

//need to make so that either or show up not hide header

  return (
    <div className="App">
      
      {!isLoggedIn && <LoginForm onLogin={loginHandler} />}
      {isLoggedIn && 
        <div>
        <Header onLogout={logoutHandler}/>
        
        <Items list={notes} getTitle={sendTitle} getContent={sendContent}/>
        
        <NoteContent title={useTitle} content={useContent}/>

        </div>
      }
      
      
      
    </div>
  );
}
export default App;

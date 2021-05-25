import './App.css';
import React, { useState } from 'react';
import Items from './components/Items';
import NoteContent from './components/NoteContent';
import LoginForm from './components/LoginForm';


const App = () => {
   
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



  return (
    <div className="App">
      <LoginForm/>
      
      <Items list={notes} getTitle={sendTitle} getContent={sendContent}/>
      
      <NoteContent title={useTitle} content={useContent}/>
      
    </div>
  );
}
export default App;

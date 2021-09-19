import React, { useState } from 'react';


import { Row, Col } from 'react-bootstrap';

import Items from '../../Items/Items';
import NoteContent from '../Notes/NoteContent';

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
    type: ''
  },
  {
    id: 'a3',
    title: 'Groceries',
    content: 'Remember to buy milk',
    date: new Date(2021, 5, 12),
    type: ''
  },
];

const NotesView = (props) => {

  const [noteCapture, setNoteCapture] = useState(notes);

  const [useContent, setContent] = useState(noteCapture[0]);

  const [useIndex, setIndex] = useState(0);

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
      date: item.date ? item.date: null,
      type: item.type ? item.type: null,
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

  

  return (
      <Row >
          
      <Col xs={3} md={2}>
        <Items list={noteCapture} onDeleteItem={deleteNoteHandler} content={useContent} selectedItem={selectedItem}/>
      </Col>
      <Col>
      
        <NoteContent content={useContent} onAddNote={addNoteHandler} onDeleteItem={deleteNoteHandler}/>
      </Col>
    
  </Row>
  );
}

export default NotesView;
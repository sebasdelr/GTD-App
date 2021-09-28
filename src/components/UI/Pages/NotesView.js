import React from 'react';


import { Row, Col } from 'react-bootstrap';

import Items from '../../Items/Items';
import NoteContent from '../Notes/NoteContent';




const NotesView = () => {





  // const addItem = (list, item) => {
  //   const updatedList = [...list];
  //   const itemIndex = getIndex(updatedList, item);
  //   const itemSet = { 
  //     id: item.id, 
  //     title: item.title, 
  //     description: item.description ? item.description : null,
  //     content: item.content ? item.content: null,
  //     date: item.date ? item.date: null,
  //     type: item.type ? item.type: null,
  //   };

  //   if(itemIndex >= 0) {
  //     updatedList[itemIndex] = itemSet;
  //   } else {
  //     updatedList.unshift(itemSet);
  //   }

  //   return updatedList;
    
  // }

  // const deleteItem = (list, id) => {     
  //   const updatedProjects = list.filter(project => project.id !== id);         
  //   return updatedProjects;
  // }



  

  return (
      <Row >
        
        <Col xs={3} md={2}>
          <Items />
        </Col>
        <Col>
        
          <NoteContent />
        </Col>
      
      </Row>


  );
}

export default NotesView;
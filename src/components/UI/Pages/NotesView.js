import React, { useContext } from 'react';

import CaptureContext from '../../../capture/capture-context';

import Loader from '../../Layout/Loader/Loader';

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


  const divStyle = {
    padding: '1 px'
  };
  
  const notesCtx = useContext(CaptureContext);
    return (
        <div>
            
            {notesCtx.loading && <Loader/>}
            <Row >
        
              <Col xs={3} md={2} style={divStyle}>
                <Items />
              </Col>
              <Col>
              
                <NoteContent />
              </Col>
            
            </Row>
        </div>

            

      
  );

}

export default NotesView;
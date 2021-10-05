import React, { useState, useContext } from 'react';

import ProjectList from '../Projects/ProjectList';
import { Row, Col } from 'react-bootstrap';

import CaptureContext from '../../../capture/capture-context'


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

const ProjectsView = () => {

  const notesCtx = useContext(CaptureContext);

  const deleteID = id => {
    notesCtx.deleteItem(id);
}

    
  const [projectCapture, setProjectCapture] = useState(projects);

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
  

  return (
      <Row className="justify-content-md-center">
            <Col style={{padding: '0px'}}>
              <ProjectList list={projectCapture} onAddProject={addProjectHandler} handleDeleteProject={deleteProjectHandler}/>
            </Col>
          </Row>

  );
};

export default ProjectsView;
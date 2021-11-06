import React from 'react';

import ProjectList from '../Projects/ProjectList';
import { Row, Col, Button } from 'react-bootstrap';


import { Link } from 'react-router-dom';


const ProjectsView = () => {
  

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col style={{padding: '0px'}}>
          <ProjectList/>
        </Col>
      </Row>
      
    </React.Fragment>


  );
};

export default ProjectsView;
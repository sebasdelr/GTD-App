import React from 'react';

import ProjectList from '../Projects/ProjectList';
import { Row, Col } from 'react-bootstrap';


const ProjectsView = () => {
  

  return (
      <Row className="justify-content-md-center">
            <Col style={{padding: '0px'}}>
              <ProjectList/>
            </Col>
          </Row>

  );
};

export default ProjectsView;
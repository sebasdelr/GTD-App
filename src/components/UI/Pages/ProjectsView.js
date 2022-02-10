import React, { useContext } from 'react';

import CaptureContext from '../../../capture/capture-context';

import Loader from '../../Layout/Loader/Loader';

import ProjectList from '../Projects/ProjectList';
import { Row, Col, Button } from 'react-bootstrap';


import { Link } from 'react-router-dom';


const ProjectsView = () => {
  
  const notesCtx = useContext(CaptureContext);
  return (
    <React.Fragment>
      {notesCtx.loading && <Loader/>}
      <Row className="justify-content-md-center">
      
          <ProjectList/>
      
      </Row>
      
    </React.Fragment>


  );
};

export default ProjectsView;
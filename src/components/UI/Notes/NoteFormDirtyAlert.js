import { useState, useRef, useEffect, useContext } from 'react';


import { Form, Button, Alert, Row, Col, Modal} from 'react-bootstrap/';

function NoteFormDirtyAlert() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Unsaved Changes</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have unsaved changes. Click on Ok to proceed. Click on Cancel to resume editing.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NoteFormDirtyAlert;
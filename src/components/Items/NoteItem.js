import "./Items.css";

import React, { useState, useContext } from "react";


import Clear from '@material-ui/icons/Clear';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';

import CaptureContext from '../../capture/capture-context';
import UnsavedContext from '../../capture/unsaved-context';

import { Form, Button, Alert, Row, Col, Modal} from 'react-bootstrap/';


// import NoteFormDirtyAlert from '../UI/Notes/NoteFormDirtyAlert';

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



const NoteItem = (props) => {

    //note alert

    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const notesCtx = useContext(CaptureContext);
    const flagCtx = useContext(UnsavedContext);

    const [style, setStyle] = useState({display: 'none'});
    const [loadAlert, setLoadAlert] = useState(false);

    // note alert

    const resetAlert = () => {
        setLoadAlert(false);
    }

    const toggleSelect = () => {
        if(flagCtx.flag){
            handleShow();
            
        } else {
            notesCtx.selectedItem(props.listItem);

        }
        // setTimeout(setLoadAlert(false), 3000);
        
        
    };

    const deleteItem = () => {
        props.deleteItem(props.listItem.id);
    }

    return(
        <ListGroup  variant="flush" onMouseEnter={e => {
            setStyle({position: 'relative' , display: 'inline'});
        }}
        onMouseLeave={e => {
            setStyle({display: 'none'})
        }}>
            <ListGroup.Item className={props.selectStyle}>
            
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
            
            <span  onClick={toggleSelect}>{props.listItem.title}</span><Clear style={style}  onClick={deleteItem}/></ListGroup.Item>
        </ListGroup>



    );


} 

export default NoteItem;
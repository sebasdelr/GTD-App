import { useState, useRef, useEffect, useContext } from 'react';


import { Form, Button, Alert, Row, Col} from 'react-bootstrap/';
import { BiFileBlank, BiSave,  BiTrash } from "react-icons/bi";

import './NoteForm.css';

import CaptureContext from '../../../capture/capture-context'

const NoteForm = () => {

    const notesCtx = useContext(CaptureContext);

    const [showAlert, setShowAlert] = useState(false);
   

    const titleRef = useRef();
    //usestate instead? useeffect does not rerender!
    
    const contentRef = useRef();
    const idRef = useRef();
    const typeRef = useRef();

    
    const newNote = () => { 
        //can use ref as well
        document.getElementById("note-form").reset();
        document.getElementById("note-id").value = Math.random().toString();
        
    };


    useEffect(() => {
        if(notesCtx.itemIndex === null) {
            newNote();
            
     
        } else {
            console.log('itemfound')

            let selectedItem = notesCtx.items[notesCtx.itemIndex];

            document.getElementById("note-title").value = selectedItem.title;
            document.getElementById("note-content").value = selectedItem.content;
            document.getElementById("note-id").value = selectedItem.id;

            

            if(selectedItem.type === "") {
                document.getElementById("inlineFormCustomSelect").value = "1";
            } else {
                document.getElementById("inlineFormCustomSelect").value = selectedItem.type;
            }
            
        }

    }, [notesCtx.itemIndex]);


 

    const checkIfEmpty = title => {
        if(title.trim().length === 0) {
            
            return false;
            
        }
        else {
            
            return true;
        }
    }

    const deleteNoteHandler = () => {
        const generatedId = idRef.current.value;

        notesCtx.deleteItem(generatedId);
    };

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredTitle = titleRef.current.value;
        const enteredContent = contentRef.current.value;
        const generatedId = idRef.current.value;
        const selectedType = typeRef.current.value;


        if(checkIfEmpty(enteredTitle)) {


            setShowAlert(false);
            const enteredText = {id: generatedId, title: enteredTitle, content: enteredContent, date: 'today', type: selectedType};

            notesCtx.addItem(enteredText);

        } else {
            setShowAlert(true);

        }


    }

    return (
        <Form  onSubmit={submitHandler} id="note-form">

            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Button variant="light" onClick={newNote} className="notebutton"><BiFileBlank/> New Note</Button>{' '}
                    {/* <Button variant="light" onClick={editNoteHandler} className="notebutton"><BiEdit/> Edit Note</Button>{' '} */}
                    <Button variant="light" onClick={deleteNoteHandler} className="notebutton"><BiTrash/> Delete Note</Button>{' '}
                    <Button  type="submit" variant="light"  className="notebutton"><BiSave/> Save Note</Button>
                </Col>
            </Row>
            <Row className="mb-3">
                <Form.Group  controlId="note-id">
                    <Form.Control type="hidden" ref={idRef} readOnly/>
                </Form.Group>
                <Form.Group  controlId="note-title">
                    <Form.Label>Note Title</Form.Label>
                    <Form.Control type="input" ref={titleRef} />
                </Form.Group>
            </Row>
            <Row>
                
            <Form.Control as="select" className="me-sm-2" id="inlineFormCustomSelect" ref={typeRef}>
                <option value="0">Choose Type...</option>
                <option value="1">note-reference</option>
                <option value="2">project</option>
                <option value="3">idea</option>
                <option value="4">action</option>
            </Form.Control >


            </Row>
           
            <Form.Group className="mb-3" controlId="note-content">
                <Form.Label>Note Content</Form.Label>
                <Form.Control as="textarea" ref={contentRef} rows={3} />
            </Form.Group>
            {showAlert && <Alert variant="danger" >Please enter a title.</Alert>}
            
            
            
        </Form>
    );

};

export default NoteForm;
import { useState, useRef, useEffect, useContext } from 'react';


import { Form, Button, Alert, Row, Col} from 'react-bootstrap/';
import { BiFileBlank, BiSave,  BiTrash } from "react-icons/bi";

import './NoteForm.css';

import CaptureContext from '../../../capture/capture-context';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const NoteForm = () => {

    const notesCtx = useContext(CaptureContext);

    const [showAlert, setShowAlert] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
   

    const titleRef = useRef();
    //usestate instead? useeffect does not rerender!
    
    const contentRef = useRef();
    const idRef = useRef();
    const typeRef = useRef();

    
    const newNote = () => { 
        //can use ref as well
        document.getElementById("note-form").reset();
        setStartDate(new Date());
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

            setStartDate(selectedItem.dateDue);

            console.log(selectedItem.dateCreated);

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
        // const dueDate = dueRef.current.value;


        if(checkIfEmpty(enteredTitle)) {

            setShowAlert(false);
            const enteredText = {id: generatedId, title: enteredTitle, content: enteredContent, dateCreated: new Date(), dateDue: startDate, type: selectedType};

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

                <Form.Group  controlId="note-title">
                    <Form.Label>Note Title</Form.Label>
                    <Form.Control type="input" ref={titleRef} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="item-type">
                        <Form.Label>Item Type</Form.Label>
                        <Form.Control as="select" className="me-sm-2" id="inlineFormCustomSelect" ref={typeRef}>
                            <option value="0">Choose Type...</option>
                            <option value="1">note-reference</option>
                            <option value="2">project</option>
                            <option value="3">idea</option>
                            <option value="4">action</option>
                        </Form.Control >
                        <Form.Group  controlId="note-id">
                            <Form.Control type="hidden" ref={idRef} readOnly/>
                        </Form.Group>

                    </Form.Group>
                
                </Col>
                <Col>
                    <Form.Group controlId="due-date">
                        <Form.Label>Date Due</Form.Label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    

                    </Form.Group>
                
                </Col>


            </Row>
            <Row>
                           
                <Form.Group className="mb-3" controlId="note-content">
                    <Form.Label>Note Content</Form.Label>
                    <Form.Control as="textarea" ref={contentRef} rows={3} />
                </Form.Group>

            </Row>

            {showAlert && <Alert variant="danger" >Please enter a title.</Alert>}
            
            
            
        </Form>
    );

};

export default NoteForm;
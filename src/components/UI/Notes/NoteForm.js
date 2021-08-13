import { useState, useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const NoteForm = (props) => {

    const [showAlert, setShowAlert] = useState(false);

    const titleRef = useRef();
    const contentRef = useRef();

    const newNote = () => { 
        //can use ref as well
        document.getElementById("note-form").reset();
    }

    const checkIfEmpty = title => {
        if(title.trim().length === 0) {
            
            return false;
            
        }
        else {
            
            return true;
        }
    }

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredTitle = titleRef.current.value;
        const enteredContent = contentRef.current.value;

        if(checkIfEmpty(enteredTitle)) {
            setShowAlert(false);
            const enteredText = {title: enteredTitle, content: enteredContent};

            props.passNoteHandler(enteredText);

        } else {
            setShowAlert(true);
            console.log("title is empty");
        }

        newNote();



    }

    return (
        <Form  onSubmit={submitHandler} id="note-form">
            
            <Button variant="light" onClick={newNote}>New Note</Button>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Note Title</Form.Label>
                <Form.Control type="input" ref={titleRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Note Content</Form.Label>
                <Form.Control as="textarea" ref={contentRef} rows={3} />
            </Form.Group>
            {showAlert && <Alert variant="danger" >Please enter a title.</Alert>}
            <Button  type="submit" variant="light" >Save Note</Button>
            
            
        </Form>
    );

};

export default NoteForm;
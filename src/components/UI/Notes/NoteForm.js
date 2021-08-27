import { useState, useRef, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import './NoteForm.css';

const NoteForm = (props) => {

    const [showAlert, setShowAlert] = useState(false);
    const [useCanEdit, setCanEdit] = useState(true);

    const titleRef = useRef();
    //usestate instead? useeffect does not rerender!
    
    const contentRef = useRef();
    const idRef = useRef();

    useEffect(() => {
        document.getElementById("note-title").value = props.selectedItem.title;
        document.getElementById("note-content").value = props.selectedItem.content;
        document.getElementById("note-id").value = props.selectedItem.id;
    }, [props]);

    const newNote = () => { 
        //can use ref as well
        document.getElementById("note-form").reset();
        document.getElementById("note-id").value = Math.random().toString();
        setCanEdit(false);
    }

    const editNoteHandler = () => {
        setCanEdit(true);
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
        const generatedId = idRef.current.value;


        if(checkIfEmpty(enteredTitle)) {
            setShowAlert(false);
            const enteredText = {id: generatedId, title: enteredTitle, content: enteredContent, editable: useCanEdit};

            props.passNoteHandler(enteredText);

        } else {
            setShowAlert(true);
            console.log("title is empty");
        }

        // newNote();



    }

    return (
        <Form  onSubmit={submitHandler} id="note-form">
            
            <Button variant="light" onClick={newNote}>New Note</Button>
            <Button variant="light" onClick={editNoteHandler}>Edit Note</Button>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Note Id</Form.Label>
                <Form.Control id="note-id" type="input" ref={idRef} readOnly/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Note Title</Form.Label>
                <Form.Control id="note-title" type="input" ref={titleRef} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Note Content</Form.Label>
                <Form.Control id="note-content" as="textarea" ref={contentRef} rows={3} />
            </Form.Group>
            {showAlert && <Alert variant="danger" >Please enter a title.</Alert>}
            <Button  type="submit" variant="light" >Save Note</Button>
            
            
        </Form>
    );

};

export default NoteForm;
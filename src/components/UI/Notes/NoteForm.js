import { useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NoteForm = (props) => {

    const titleRef = useRef();
    const contentRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredTitle = titleRef.current.value;
        const enteredContent = contentRef.current.value;

        const enteredText = {title: enteredTitle, content: enteredContent};

        props.passNoteHandler(enteredText);

    }

    return (
        <Form  onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Note Title</Form.Label>
                <Form.Control type="input" ref={titleRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Note Content</Form.Label>
                <Form.Control as="textarea" ref={contentRef} rows={3} />
            </Form.Group>
            <Button  type="submit">Save Note</Button>
        </Form>
    );

};

export default NoteForm;
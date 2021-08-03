import { useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NoteForm = () => {

    const titleRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredTitle = titleRef.current.value;

    }

    return (
        <Form  onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Note Title</Form.Label>
                <Form.Control type="input" ref={titleRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Note Content</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button  type="submit">Save Note</Button>
        </Form>
    );

};

export default NoteForm;
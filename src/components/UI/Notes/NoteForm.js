import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NoteForm = () => {

    const submitHandler = event => {
        event.preventDefault();        

    }

    return (
        <Form  onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Note Title</Form.Label>
                <Form.Control type="input"  />
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
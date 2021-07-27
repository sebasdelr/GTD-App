import Form from 'react-bootstrap/Form';

const NoteForm = () => {

    return (
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Note Title</Form.Label>
            <Form.Control type="email"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Note Content</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
    );

};

export default NoteForm;
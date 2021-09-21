import { InputGroup, Form } from 'react-bootstrap/';

const ActionItem = (props) => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input"/>
            <Form.Control aria-label="Text input with checkbox"  placeholder={props.actionItem.title} readOnly />
        </InputGroup>
    );
}

export default ActionItem;
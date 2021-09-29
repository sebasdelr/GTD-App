import { InputGroup, Form } from 'react-bootstrap/';

import { Row, Container, Col } from 'react-bootstrap';

const ActionItem = (props) => {
    return (
        <Row>
            <Col md="auto"><InputGroup.Checkbox aria-label="Checkbox for following text input"/></Col>
            <Col><p>{props.actionItem.title} </p></Col>
        </Row>

    );
}

export default ActionItem;
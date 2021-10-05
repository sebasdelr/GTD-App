import { Form } from 'react-bootstrap/';

import { Row } from 'react-bootstrap';

const ActionItem = (props) => {
    return (
        <Row>
           <Form.Check type='checkbox'
       
            label={props.actionItem.title} />
        
        </Row>

    );
}

export default ActionItem;
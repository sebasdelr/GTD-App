import { Form } from 'react-bootstrap/';

import { Row } from 'react-bootstrap';

const checkHandler = (item) => {
    if(item === 'done') {
        return 'checked';
    }
}

const ActionItem = (props) => {


    return (
        <Row>
           <Form.Check type='checkbox'
       
            label={props.actionItem.title} 
            
            checked={checkHandler(props.actionItem.status)}
            />
            
        </Row>

    );
}

export default ActionItem;
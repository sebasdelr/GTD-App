import { useState } from 'react';

import { Form, Row } from 'react-bootstrap/';


import './Action.css';

const checkHandler = (item) => {
    if(item === 'done') {
        document.getElementById("myCheck").checked = true;
    }
}

const markDone = (item) => {
    if(item === 'done') {
        return 'task-done';
    }
}

const ActionItem = (props) => {

    

    let status = props.actionItem.status;

    


    return (
        <Row>
            <div >
                <Form.Check type='checkbox'>
                    <Form.Check.Input  type='checkbox'  id="myCheck"/>
                    <Form.Check.Label className={markDone(status)}>
                        {props.actionItem.title}
                    </Form.Check.Label>
                </Form.Check>

            </div>
           
            
        </Row>

    );
}

export default ActionItem;
import { useState } from 'react';

import { Form } from 'react-bootstrap/';


import './Action.css';



const markDone = (item) => {
    if(item === 'done') {
        return 'task-done';
    }
}

const ActionItem = (props) => {

    const[useCheck, setUseCheck] = useState(props.actionItem.status);

    const isWorking = () => {
        if(useCheck === ''){
            setUseCheck('done');
            
        } else {
            setUseCheck('');
        }
        props.setStatus(props.actionItem.id);
    }

      


    return (

        <div >
            <Form.Check type='checkbox'>
                <Form.Check.Input  type='checkbox'  id="myCheck" onChange={isWorking} checked={useCheck}/>
                <Form.Check.Label className={markDone(useCheck)}>
                    {props.actionItem.title}
                </Form.Check.Label>
            </Form.Check>

        </div>


    );
}

export default ActionItem;
import { useState } from 'react';

import { Form } from 'react-bootstrap/';

import Assignment from '@material-ui/icons/Assignment';


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

        <div className="action-item" >
            <Form.Check type='checkbox'>
                <Form.Check.Input  type='checkbox'  id="myCheck" onChange={isWorking} checked={useCheck}/>
                <Form.Check.Label className={markDone(useCheck)}>
                    <div className="action-item-title">{props.actionItem.title}</div>
                    
                </Form.Check.Label>
                <div className="action-item-description">{props.actionItem.content}</div>
                <div className="action-item-project"><Assignment />{props.parentTitle}</div>
            </Form.Check>

        </div>


    );
}

export default ActionItem;
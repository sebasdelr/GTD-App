import ActionList from "../Actions/ActionList";

import { Container } from 'react-bootstrap';


const ActionView = (props) => {
    return (
       <div>
            <h1>Next Actions</h1>

            <ActionList notes={props.notes}/>


       </div>
            

      

        
        
    );
}

export default ActionView;
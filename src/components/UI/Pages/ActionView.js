import ActionList from "../Actions/ActionList";

import { Container } from 'react-bootstrap';


const ActionView = (props) => {
    return (
       <Container>
            <h1>Next Actions</h1>

            <ActionList notes={props.notes}/>


       </Container>
            

      

        
        
    );
}

export default ActionView;
import ActionList from "../Actions/ActionList";

import CaptureProvider from '../../../capture/CaptureProvider';

const ActionView = (props) => {
    return (
        <ActionList notes={props.notes}/>
        
    );
}

export default ActionView;
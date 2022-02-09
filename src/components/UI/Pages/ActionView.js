import React, { useContext } from 'react';

import ActionList from "../Actions/ActionList";

import Loader from '../../Layout/Loader/Loader';

import CaptureContext from '../../../capture/capture-context';


const ActionView = (props) => {
    const notesCtx = useContext(CaptureContext);

    return (
       <div>
            
            {notesCtx.loading && <Loader/>}
            <ActionList notes={props.notes}/>


       </div>
            

      

        
        
    );
}

export default ActionView;
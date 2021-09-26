import React, { useContext } from 'react';


import ActionItem from './ActionItem';

import CaptureContext from '../../../capture/capture-context'

const ActionList = (props) => {

    const notesCtx = useContext(CaptureContext);
    
    const {notes} = props;

    const listHandler = notes => {
        const actionOnlyList = notesCtx.items.filter(item => item.type === "4");

        if(actionOnlyList.length > 0) {
            return (
                actionOnlyList.map((action) => {
                   

                    return (
                        <ActionItem key={action.id}
                            
                        actionItem={action}

                        
                    />);


                    

                })
            );
        } else {
            return (
                <p>No Items Found</p>
            );

        }
    }

    return (
        <React.Fragment>
            {listHandler(notes)}
        </React.Fragment>


    );
};

export default ActionList;
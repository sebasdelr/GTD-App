import React from 'react';

import ActionItem from './ActionItem';

const ActionList = (props) => {
    
    const {notes} = props;

    const listHandler = notes => {
        const actionOnlyList = notes.filter(item => item.type === "4");

        if(actionOnlyList.length > 0) {
            return (
                actionOnlyList.map((action) => {
                   
                    // if(notes.type === "4"){
                        return (
                            <ActionItem key={action.id}
                                
                            actionItem={action}

                            
                        />);

                    // }
                    
                    

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
import React, { useState } from 'react';

import UnsavedContext from './unsaved-context';



const UnsavedProvider = props => {

    const [flag, setFlag]= useState(false);
    const [show, setShow]= useState(false);

    return(
        <UnsavedContext.Provider value={{flag, setFlag, show, setShow}}>
            {props.children}
        </UnsavedContext.Provider>
    );

}

export default UnsavedProvider;
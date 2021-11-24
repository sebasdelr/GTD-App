import React, { useState } from 'react';

import UnsavedContext from './unsaved-context';



const UnsavedProvider = props => {

    const [flag, setFlag]= useState(false);

    return(
        <UnsavedContext.Provider value={{flag, setFlag}}>
            {props.children}
        </UnsavedContext.Provider>
    );

}

export default UnsavedProvider;
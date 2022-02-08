import React from 'react';

const UnsavedContext = React.createContext({
    flag: false,
    show: false,
    revert: false,
    
});

export default UnsavedContext;
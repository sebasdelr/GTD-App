import React from 'react';

const CaptureContext = React.createContext({
    items: [],
    addItem: (item) => {},
    deleteItem: (id) => {}
});

export default CaptureContext;
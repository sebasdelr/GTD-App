import React from 'react';

const CaptureContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CaptureContext;
import React from 'react';

const CaptureContext = React.createContext({
    items: [],
    itemIndex: 0,
    addItem: (item) => {},
    selectedItem: (item) => {},
    deleteItem: (id) => {}
});

export default CaptureContext;
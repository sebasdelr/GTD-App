import { useReducer } from 'react';

import CaptureContext from './capture-context';

const DUMMY_NOTES = [
    {
      id: 'a1',
      title: 'Meeting',
      content: 'Have a meeting with shareholders about what is next',
      date: new Date(2020, 7, 14),
      type: ''
    },
    {
      id: 'a2',
      title: 'Phone Callersas',
      content: 'Call Mark about new designs for living room',
      date: new Date(2021, 2, 28),
      type: '4'
    },
    {
      id: 'a3',
      title: 'Groceries',
      content: 'Remember to buy milk',
      date: new Date(2021, 5, 12),
      type: ''
    },
  ];

const defaultCaptureState = {
    items: DUMMY_NOTES,
    itemIndex: 0,
};

const captureReducer = (state, action) => {
    //need to have following: adding, removing and selecting
    //item list should be able to grab from here item list and know which item is being selected
    //note content view should also grab what is being selected from here and display it
    //both item list and note content view should be able to delete items
    //note content view should be able to save changes and add items

    if(action.type === 'ADD') {
        const existingNoteIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingNoteItem = state.items[existingNoteIndex];

        const itemSet = {
            id: action.item.id, 
            title: action.item.title, 
            content: action.item.content ? action.item.content : null,
            date: action.item.date,
            type: action.item.type,

            
        }

        let updatedItems;

        if(existingNoteItem) {
            updatedItems = [...state.items];
            updatedItems[existingNoteIndex] = itemSet;
            
        } else {
            updatedItems = Array.prototype.slice.call(state.items)
            updatedItems.unshift(itemSet);
            existingNoteIndex = 0;
        }

        return {
            items: updatedItems,
            itemIndex: existingNoteIndex
        };
       
    } 
    if(action.type === 'SELECT') {
        const existingNoteIndex = state.items.findIndex(item => item.id === action.item.id);

        // const existingNoteItem = state.items[existingNoteIndex];

        let updatedItems = [...state.items];
       
        return  {
            // itemIndex: existingNoteIndex
            items: updatedItems,
            itemIndex: existingNoteIndex

        };
    }
    if(action.type === 'DELETE') {
        // const existingNoteIndex = state.items.findIndex((item) => item.id === action.id);

        // const existingNoteItem = state.items[existingNoteIndex];

        let updatedItems;

        updatedItems = state.items.filter(item => item.id !== action.id);

        return {
            items: updatedItems,
            itemIndex: 0
        };


        
    }
    return defaultCaptureState;

};

const CaptureProvider = props => {

    const [captureState, dispatchCaptureAction] = useReducer(captureReducer, defaultCaptureState);



    const addNoteHandler = item => {
        dispatchCaptureAction({type: 'ADD', item: item});
    };

    const selectedItemHandler = item => {
        dispatchCaptureAction({type: 'SELECT', item: item});
    }

    const deleteNoteHandler = id => {
        dispatchCaptureAction({type: 'DELETE', id: id});
    };

    const captureContext = {
        items: captureState.items,
        itemIndex: captureState.itemIndex,
        addItem: addNoteHandler,
        selectedItem: selectedItemHandler,
        deleteItem: deleteNoteHandler
    };

    return(
        <CaptureContext.Provider value={captureContext}>
            {props.children}
        </CaptureContext.Provider>
    );

}

export default CaptureProvider;
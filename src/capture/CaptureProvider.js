import { useReducer } from 'react';

import CaptureContext from './capture-context';

const DUMMY_NOTES = [
    {
        id: 'a1',
        parentId: '',
        title: 'Meeting',
        content: 'Have a meeting with shareholders about what is next',
        dateCreated: new Date(2020, 7, 14),
        dateDue: new Date(2020, 7, 14),
        type: '2',
        status: '',
    },
    {
        id: 'a2',
        parentId: 'a1',
        title: 'Phone Call - Call Mark',
        content: 'Call Mark about new designs for living room',
        dateCreated: new Date(2021, 2, 28),
        dateDue: new Date(),
        type: '4',
        status: '',
    },
    {
        id: 'a3',
        parentId: '',
        title: 'Groceries',
        content: 'Need to buy groceries',
        dateCreated: new Date(2021, 5, 12),
        dateDue: new Date(2021, 5, 12),
        type: '2',
        status: '',
    },
    {
        id: 'a4',
        parentId: '',
        title: 'Buy milk',
        content: '',
        dateCreated: new Date(2021, 5, 12),
        dateDue: new Date(),
        type: '4',
        status: 'done',
    },
    {
        id: 'a5',
        parentId: '',
        title: 'Buy car',
        content: 'Need to find a new car',
        dateCreated: new Date(2021, 5, 12),
        dateDue: new Date(),
        type: '2',
        status: '',
    },
    {
        id: 'a6',
        parentId: '',
        title: 'Vacation',
        content: 'Christmas Vacation',
        dateCreated: new Date(2021, 5, 12),
        dateDue: new Date(),
        type: '2',
        status: '',
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
        

        let existingNoteIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingNoteItem = state.items[existingNoteIndex];

        const itemSet = {
            id: action.item.id, 
            parentId: action.item.parentId,
            title: action.item.title, 
            content: action.item.content ? action.item.content : null,
            dateCreated: action.item.dateCreated,
            dateDue: action.item.dateDue,
            type: action.item.type,
            status: action.item.status,

            
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

        //can probably set with only using id and not whole item
        const existingNoteIndex = state.items.findIndex(item => item.id === action.item.id);

        // const existingNoteItem = state.items[existingNoteIndex];

        let updatedItems = [...state.items];
       
        return  {
            // itemIndex: existingNoteIndex
            items: updatedItems,
            itemIndex: existingNoteIndex

        };
    }
    if(action.type === 'SET_DONE') {
        const existingNoteIndex = state.items.findIndex(item => item.id === action.id);

        // const existingNoteItem = state.items[existingNoteIndex];

        let updatedItems = [...state.items];

        if(updatedItems[existingNoteIndex].status === 'done') {
            updatedItems[existingNoteIndex].status = '';
        }else {
            updatedItems[existingNoteIndex].status = 'done';
        }
        
       
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
    };

    const setDoneItemHandler = id => {
        dispatchCaptureAction({type: 'SET_DONE', id: id});
    };

    const deleteNoteHandler = id => {
        dispatchCaptureAction({type: 'DELETE', id: id});
    };

    const captureContext = {
        items: captureState.items,
        itemIndex: captureState.itemIndex,
        addItem: addNoteHandler,
        selectedItem: selectedItemHandler,
        setDoneItem: setDoneItemHandler,
        deleteItem: deleteNoteHandler
    };

    return(
        <CaptureContext.Provider value={captureContext}>
            {props.children}
        </CaptureContext.Provider>
    );

}

export default CaptureProvider;
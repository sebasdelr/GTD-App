import { useReducer } from 'react';

import CaptureContext from './capture-context';

const DUMMY_NOTES = [
    {
        id: 'a1',
        parentId: '',
        mileStoneId: '',
        title: 'Meeting',
        content: 'Have a meeting with shareholders about what is next',
        dateCreated: new Date(2020, 7, 14),
        startDate: new Date(2021, 7, 4),
        dateDue: new Date(2021, 7, 30),
        type: '2',
        status: '',
        reviewed: false,
        color: '#5dcf91'
    },
    {
        id: 'a2',
        parentId: 'a1',
        mileStoneId: '',
        title: 'Phone Call - Call Mark',
        content: 'Call Mark about new designs for living room',
        dateCreated: new Date(2021, 2, 28),
        startDate: new Date(2021, 7, 14),
        dateDue: new Date(),
        type: '4',
        status: '',
        reviewed: false,
        color: '#cf945d'
    },
    {
        id: 'a3',
        parentId: '',
        mileStoneId: '',
        title: 'Groceries',
        content: 'Need to buy groceries',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 1, 24),
        dateDue: new Date(2021, 5, 12),
        type: '2',
        status: '',
        reviewed: false,
        color: '#5dcf5e'
    },
    {
        id: 'a4',
        parentId: '',
        mileStoneId: '',
        title: 'Buy milk',
        content: '',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 7, 11),
        dateDue: new Date(),
        type: '4',
        status: 'done',
        reviewed: false,
        color: '#5d76cf'
    },
    {
        id: 'a5',
        parentId: '',
        mileStoneId: '',
        title: 'Marketing Campaign for Q2',
        content: 'Q1 went well so we need to make Q2 even better.',
        dateCreated: new Date(2021, 3, 12),
        startDate: new Date(2021, 4, 10),
        dateDue: new Date(2021, 6, 14),
        type: '2',
        status: '',
        reviewed: false,
        color: '#b55dcf'
    },
    {
        id: 'a6',
        parentId: '',
        mileStoneId: '',
        title: 'Vacation',
        content: 'Christmas Vacation',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 7, 14),
        dateDue: new Date(2021, 10, 14),
        type: '2',
        status: '',
        reviewed: false,
        color: '#cfa15d'
    },
    {
        id: 'a7',
        parentId: 'a5',
        mileStoneId: '',
        title: 'Brainstorming',
        content: 'Plan how to handle Q2s marketing',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 4, 10),
        dateDue: new Date(2021, 4, 12),
        type: '4',
        status: '',
        reviewed: false,
        color: '#66cf5d'
    },
    {
        id: 'a8',
        parentId: 'a5',
        mileStoneId: '',
        title: 'Mock ups',
        content: 'Mock up for q2',
        dateCreated: new Date(2021, 4, 12),
        startDate: new Date(2021, 4, 12),
        dateDue: new Date(2021, 4, 14),
        type: '4',
        status: '',
        reviewed: false,
        color: '#cf945d'
    },
    {
        id: 'a9',
        parentId: 'a5',
        mileStoneId: '',
        title: 'Meeting with marketing team',
        content: 'Start marketing team meeting to discuss possible q2 issues',
        dateCreated: new Date(2021, 4, 11),
        startDate: new Date(2021, 4, 11),
        dateDue: new Date(2021, 4, 12),
        type: '4',
        status: '',
        reviewed: false,
        color: '#b55dcf'
    },
    {
        id: 'a10',
        parentId: 'a5',
        mileStoneId: '',
        title: 'Contact media outlets',
        content: 'Get estimates for publishing our new campaigns',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 5, 12),
        dateDue: new Date(2021, 5, 16),
        type: '4',
        status: '',
        reviewed: false,
        color: '#5dcfbe'
    },
    {
        id: 'a11',
        parentId: 'a5',
        mileStoneId: '',
        title: 'Produce video ad',
        content: 'Record new video ad and produce it',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 5, 1),
        dateDue: new Date(2021, 6, 1),
        type: '4',
        status: '',
        reviewed: false,
        color: '#565f5d'
    },
    {
        id: 'a12',
        parentId: 'a5',
        mileStoneId: '',
        title: 'Hire social media manager',
        content: 'We need to start using social media for our campaigns',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 4, 14),
        dateDue: new Date(2021, 5, 14),
        type: '4',
        status: '',
        reviewed: false,
        color: '#5a5f5c'
    },
    {
        id: 'a13',
        parentId: '',
        mileStoneId: '',
        title: 'Call Jessica for server stats',
        content: 'Call for server stats',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 4, 14),
        dateDue: new Date(),
        type: '4',
        status: '',
        reviewed: false,
        color: '#5c565f'
    },
    {
        id: 'a14',
        parentId: '',
        mileStoneId: '',
        title: 'Write company memo',
        content: '',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 4, 14),
        dateDue: new Date(),
        type: '4',
        status: '',
        reviewed: false,
        color: '#5e5f56'
    },
    {
        id: 'a15',
        parentId: '',
        mileStoneId: '',
        title: 'Upload bbq images',
        content: 'I need to upload bbq images from latest company get together',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 4, 14),
        dateDue: new Date(),
        type: '4',
        status: '',
        reviewed: false,
        color: '#63b35c'
    },
    {
        id: 'a16',
        parentId: '',
        mileStoneId: '',
        title: 'Cancel q1 summary meeting',
        content: 'Memo has been sent, it no longer is necessary to meet',
        dateCreated: new Date(2021, 5, 12),
        startDate: new Date(2021, 4, 14),
        dateDue: new Date(),
        type: '4',
        status: '',
        reviewed: false,
        color: '#b55dcf'
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
            startDate: action.item.startDate,
            dateDue: action.item.dateDue,
            type: action.item.type,
            status: action.item.status,
            reviewed: false,
            color: action.item.color

            
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
    
    if(action.type === 'FILTER') {
        // const existingNoteIndex = state.items.findIndex((item) => item.id === action.id);

        // const existingNoteItem = state.items[existingNoteIndex];

        let updatedItems;

        updatedItems = state.items.filter(item => item.title === action.title);

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

    const filterNoteHandler = title => {
        dispatchCaptureAction({type: 'FILTER', title: title});
    };

    const captureContext = {
        items: captureState.items,
        itemIndex: captureState.itemIndex,
        addItem: addNoteHandler,
        selectedItem: selectedItemHandler,
        setDoneItem: setDoneItemHandler,
        deleteItem: deleteNoteHandler,
        filterItem: filterNoteHandler
    };

    return(
        <CaptureContext.Provider value={captureContext}>
            {props.children}
        </CaptureContext.Provider>
    );

}

export default CaptureProvider;
import { useReducer } from 'react';

import CaptureContext from './capture-context';

const defaultCaptureState = {
    items: [],
    selectedIndex: 0
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
            // id: item.id, 
            // title: item.title, 
            // description: item.description ? item.description : null,
            // content: item.content ? item.content: null,
            // date: item.date ? item.date: null,
            // type: item.type ? item.type: null,
        }

        let updatedItems;

       
    } 
    if(action.type === 'SELECT') {
       
    }
    if(action.type === 'DELETE') {
        
    }

}

const CaptureProvider = props => {

    return(
        <CaptureContext.Provider>
            {props.children}
        </CaptureContext.Provider>
    );

}

export default CaptureProvider;
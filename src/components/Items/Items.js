import React, { useContext } from 'react';

import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from './NoteItem';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';

import CaptureContext from '../../capture/capture-context';
import UnsavedContext from '../../capture/unsaved-context';

import NoteFormDirtyAlert from '../UI/Notes/NoteFormDirtyAlert';

function Items(){

    const notesCtx = useContext(CaptureContext);
    const flagCtx = useContext(UnsavedContext);

    
    const deleteID = id => {
        notesCtx.deleteItem(id);
    }


    const listHandler = list => {
        if(list.length > 0) {
            return (
                list.map((note, index) => {
                    let isStyle = '';
                    if(notesCtx.itemIndex === index) {
                        isStyle = 'selected';

                    }
                    
                    return (

                        <NoteItem key={note.id}
                        listItem={note}
                        deleteItem={deleteID}
                        selectStyle={isStyle}   
                        />
                        
                    );

                })
            );
        } else {
            return (
                <p>No Items Found</p>
            );

        }
    }


    
    return(
        <ListGroup >
            {listHandler(notesCtx.items)}

        </ListGroup>


    );
}

export default Items;
import React, { useContext } from 'react';

import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from './NoteItem';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';

import CaptureContext from '../../capture/capture-context'




function Items(props){

    const notesCtx = useContext(CaptureContext);
    const {list} = props;

    const deleteID = id => {
        notesCtx.deleteItem(id);
    }

    const notesList = notesCtx.items.map(note => <NoteItem
      listItem={note}
      deleteItem={deleteID}  
    />);

    // we add notes to context list, context list is then accessed by others and other methods

    const selectedItem = (item) => {
        props.selectedItem(item);
    };

    const selectedId = (id) => {
        props.onDeleteItem(id);
    };

    const listHandler = list => {
        if(list.length > 0) {
            return (
                list.map((note) => {
                    let isStyle = '';
                    if(props.content.id === note.id) {
                        isStyle = 'selected';
                        console.log(props.content.id);


                    }
                    
                    return (
                        
                        <NoteItem key={note.id}
                        selectStyle={isStyle}       
                        listItem={note}

                        selectedItem={selectedItem}   
                        deleteItem={selectedId}
                        
                    />);

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
            {/* {listHandler(list)} */}
            {notesList}

        </ListGroup>


    );
}

export default Items;
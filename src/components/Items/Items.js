import React from 'react';

import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from '../UI/Notes/NoteItem';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';


function Items(props){

    const {list} = props;


    const listHandler = list => {
        if(list.length > 0) {
            return (
                list.map((note, index) => {
                    let isStyle = '';
                    if(props.indexOfNote === index) {
                        isStyle = 'selected';
                        console.log(isStyle);
                    }
                    console.log(index);
                    return (
                        
                        <NoteItem key={note.id}

                        selectStyle={isStyle}
        
                        listItem={note}
    
                        selectedItem={selectedItem}
    
                        deleteItem={selectedId}
        
                        />
                    );

                }
                
                )
            );
        } else {
            return (
                <p>No Items Found</p>
            );

        }
    }

    const selectedItem = (item) => {
        props.selectedItem(item);
    };

    const selectedId = (id) => {
        props.onDeleteItem(id);
    };
    
    return(
        <ListGroup >
            {listHandler(list)}

        </ListGroup>


    );
}

export default Items;
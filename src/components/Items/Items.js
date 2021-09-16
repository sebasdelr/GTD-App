import React from 'react';

import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from './NoteItem';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';


function Items(props){


    const {list} = props;

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
            {listHandler(list)}

        </ListGroup>


    );
}

export default Items;
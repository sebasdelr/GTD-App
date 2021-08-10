import "../../Items/Items.css";

import React, { useState } from "react";

// import "./fontawesome-all.min.css";

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';



const NoteItem = (props) => {

    const[isSelected, setSelected] = useState('false');

    //let noteContent = props.content;

    const toggleSelect = () => {
        !isSelected ? setSelected(true) : setSelected(false);
        props.selectedItem(props.listItem.title);
        props.selectedItemContent(props.listItem.content);
    };

    const deleteItem = () => {
        props.deleteItem(props.listItem.id);
    }

    return(
        <ListGroup variant="flush">
            <ListGroup.Item onClick={deleteItem}>{props.listItem.title}</ListGroup.Item>
        </ListGroup>



    );


} 

export default NoteItem;
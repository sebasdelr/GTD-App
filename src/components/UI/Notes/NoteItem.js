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
        props.selectedItem(props.title);
        props.selectedItemContent(props.content);
    };

    return(
        <ListGroup variant="flush">
            <ListGroup.Item onClick={toggleSelect}>{props.title}</ListGroup.Item>
        </ListGroup>



    );


} 

export default NoteItem;
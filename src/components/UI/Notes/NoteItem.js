import "../../Items/Items.css";

import React, { useState } from "react";

// import "./fontawesome-all.min.css";

import Clear from '@material-ui/icons/Clear';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';



const NoteItem = (props) => {

    const[isSelected, setSelected] = useState('false');
    const [style, setStyle] = useState({display: 'none'});

    //let noteContent = props.content;

    const toggleSelect = () => {

        props.selectedItem(props.listItem);

    };

    const deleteItem = () => {
        props.deleteItem(props.listItem.id);
    }

    return(
        <ListGroup variant="flush" onMouseEnter={e => {
            setStyle({position: 'relative' , display: 'inline'});
        }}
        onMouseLeave={e => {
            setStyle({display: 'none'})
        }}>
            <ListGroup.Item onClick={toggleSelect}>{props.listItem.title}<Clear style={style}  onClick={deleteItem}/></ListGroup.Item>
        </ListGroup>



    );


} 

export default NoteItem;
import "./Items.css";

import React, { useState } from "react";


import Clear from '@material-ui/icons/Clear';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';



const NoteItem = (props) => {

    const [style, setStyle] = useState({display: 'none'});

    const toggleSelect = () => {
        props.selectedItem(props.listItem);

    };

    const deleteItem = () => {
        props.deleteItem(props.listItem.id);
    }

    return(
        <ListGroup  variant="flush" onMouseEnter={e => {
            setStyle({position: 'relative' , display: 'inline'});
        }}
        onMouseLeave={e => {
            setStyle({display: 'none'})
        }}>
            <ListGroup.Item className={props.selectStyle}>
            <span  onClick={toggleSelect}>{props.listItem.title}</span><Clear style={style}  onClick={deleteItem}/></ListGroup.Item>
        </ListGroup>



    );


} 

export default NoteItem;
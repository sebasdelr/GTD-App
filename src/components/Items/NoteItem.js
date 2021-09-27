import "./Items.css";

import React, { useState, useContext } from "react";


import Clear from '@material-ui/icons/Clear';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';

import CaptureContext from '../../capture/capture-context'



const NoteItem = (props) => {

    const notesCtx = useContext(CaptureContext);

    const [style, setStyle] = useState({display: 'none'});

    const toggleSelect = () => {
        notesCtx.selectedItem(props.listItem);

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